import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { addBank, updateBank } from "../../store/slice/bank/bankSlice";
import { Link, useParams } from "react-router-dom";
import Header from "../common/header";

const validationSchema = Yup.object().shape({
  email: Yup.string()

    .typeError("Required")
    .required("This field is required"),
  password: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  firstName: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  lastName: Yup.string()
    .typeError("Required")
    .required("This field is required"),
});

const CreateBank = () => {
  const { id } = useParams();
 

  const banks = useSelector((state) => state.bank.banks);

  const bank = banks.find((item) => item.id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (bank) {
      setInitialValues(bank);
    }
  }, [bank]);

  const setInitialValues = (bank) => {
    const initialValues = {
      firstName: bank?.firstName || "",
      lastName: bank?.lastName || "",
      email: bank?.email || "",
      password: bank?.password || "",
      address: bank?.address || "",
      city: bank?.address || "",
    };
    return initialValues;
  };

  return (
    <div>
      <Header title="Bank Create" action="Show Bank" href="/bank" />
      <div className="mt-8">
        <Formik
          initialValues={setInitialValues(bank)}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            if (id) {
              const updatedFields = {}; //{name: "Test 2"}
              Object.keys(values).forEach((key) => {
                if (values[key] !== bank[key]) {
                  updatedFields[key] = values[key];
                }
              });
              if (Object.keys(updatedFields).length > 0) {
                dispatch(updateBank({ id, updatedFields }));
                resetForm();
              }
            } else {
              const _id = faker.string.uuid();
              values.id = _id;
              dispatch(addBank(values));
              resetForm();
            }
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adddress
                </label>
                <Field
                  type="text"
                  name="address"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <Field
                  type="text"
                  name="city"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                />
                <ErrorMessage name="city" component="div" />
              </div>

              <button type="submit" className="w-24" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateBank;
