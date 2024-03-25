import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../store/slice/bank/bankSlice";
import customerReducer from "../store/slice/customer/customerSlice";
import admissionReducer from "../store/slice/admission/admissionSlice";
import officeReducer from "../store/slice/office/officeSlice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    customer: customerReducer,
    admission: admissionReducer,
    officeFile: officeReducer,
  },
});
