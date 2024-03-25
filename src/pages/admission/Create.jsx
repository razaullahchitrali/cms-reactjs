import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import Header from "../common/header";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdmission,
  updateAdmission,
} from "../../store/slice/admission/admissionSlice";
import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().typeError("Required").required("This field is required"),
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

const Create = () => {
  const { id } = useParams();
  console.log("🚀 ~ Create ~ id:", id);

  const admissions = useSelector((state) => state.admission.admissions);

  const admission = admissions.find((item) => item.id === id);
  console.log("🚀 ~ Create ~ admission:", admission);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ useEffect:", useEffect);
    if (admission) {
      setInitialValues(admission);
    }
  }, [admission]);

  const setInitialValues = (admission) => {
    const initialValues = {
      firstName: admission?.firstName || "",
      lastName: admission?.lastName || "",
      email: admission?.email || "",
      password: admission?.password || "",
      address: admission?.address || "",
      city: admission?.address || "",
    };
    return initialValues;
  };
  return (
    <div>
      <Header title="Admission Create" action="Show data" href="/admission" />
      <Formik
        initialValues={setInitialValues(admission)}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (id) {
            const updatedFields = {};
            Object.keys(values).forEach((key) => {
              if (values[key] !== admission[key]) {
                updatedFields[key] = values[key];
              }
            });
            if (Object.keys(updatedFields).length > 0) {
              dispatch(updateAdmission({ id, updatedFields }));
              resetForm();
            }
          } else {
            const _id = faker.string.uuid();
            values.id = _id;
            dispatch(addAdmission(values));
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

            <button type="submit" className="w-24 " disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
