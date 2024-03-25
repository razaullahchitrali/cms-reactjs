import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("admissions");
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
    localStorage.setItem("admissions", serializedState);
  } catch {}
};

const initialState = loadState() || {
  admissions: [],
};

// const initialState = {
//   admissions: [],
// };

export const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    addAdmission(state, { payload }) {
      state.admissions.push(payload);
      saveState(state);
    },

    updateAdmission(state, { payload }) {
      const { id, updatedFields } = payload;
      const fileToUpdate = state.admissions.find(
        (admission) => admission.id === id
      );
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

export const { addAdmission, updateAdmission } = admissionSlice.actions;

export default admissionSlice.reducer;
