import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("customers");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("customers", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState = loadState() || {
  customers: [],
};

// const initialState = {
//   customers: [],
// };

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, { payload }) {
      state.customers.push(payload);
      saveState(state);
    },

    updateCustomer(state, { payload }) {
      const { id, updatedFields } = payload;
      const fileToUpdate = state.customers.find(
        (customer) => customer.id === id
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

// Action creators are generated for each case reducer function
export const { addCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
