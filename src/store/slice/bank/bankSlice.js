import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("banks");
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
    localStorage.setItem("banks", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
  banks: [],
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    addBank(state, { payload }) {
      state.banks.push(payload);
      saveState(state);
    },
    updateBank(state, { payload }) {
      const { id, updatedFields } = payload;
      const fileToUpdate = state.banks.find((bank) => bank.id === id);
      if (fileToUpdate) {
        Object.keys(updatedFields).forEach((key) => {
          // "object.key give us keys into an array form"
          fileToUpdate[key] = updatedFields[key];
        });
        saveState(state);
      }
    },
  },
});

export const { addBank, updateBank } = bankSlice.actions;
export default bankSlice.reducer;
