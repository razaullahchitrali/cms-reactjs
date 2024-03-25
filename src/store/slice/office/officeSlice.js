import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("officeFiles");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("officeFiles", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
  officeFiles: [],
};

export const officeSlice = createSlice({
  name: "office",
  initialState,
  reducers: {
    addFile(state, { payload }) {
      state.officeFiles.push(payload);
      saveState(state);
    },
    updateFile(state, { payload }) {
      const { id, updatedFields } = payload;
      const fileToUpdate = state.officeFiles.find((file) => file.id === id);
      if (fileToUpdate) {
        Object.keys(updatedFields).forEach((key) => {  // "object.key give us keys into an array form"
          fileToUpdate[key] = updatedFields[key];
        });
        saveState(state);
      }
    },
  },
});

export const { addFile, updateFile } = officeSlice.actions;
export default officeSlice.reducer;
