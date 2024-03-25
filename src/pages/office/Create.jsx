import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Header from "../common/header";
import { faker } from "@faker-js/faker";
import { addFile, updateFile } from "../../store/slice/office/officeSlice";
import { useLoaderData, useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().typeError("Required").required("This field is required"),
  fatherName: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  qualification: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  address: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  phoneNumber: Yup.string()
    .typeError("Required")
    .required("This field is required"),
  city: Yup.string().typeError("Required").required("This field is required"),
});

const OfficeCreate = () => {
  const { id } = useParams(); // to get the id from url which were set on route file in main tsx id like /:someId

  const officeFiles = useSelector((state) => state.officeFile.officeFiles);

  const officeFile = officeFiles.find((item) => item.id === id); // if not find output undefind

  console.log("🚀 ~ OfficeCreate ~ officeFile:", officeFile);

  const dispatch = useDispatch(); // form submiting

  useEffect(() => {
    if (officeFile) {
      setInitialValues(officeFile);
    }
  }, [officeFile]);

  const setInitialValues = (officeFile) => {
    const initialValues = {
      name: officeFile?.name || "",
      fatherName: officeFile?.fatherName || "",
      qualification: officeFile?.qualification || "",
      address: officeFile?.address || "",
      phoneNumber: officeFile?.phoneNumber || "",
      city: officeFile?.city || "",
    };
    return initialValues;
  };

  return (
    <div>
      <Header title="Office Create" action="Show files" href="/office" />
      <div className="mt-8">
        <Formik
          initialValues={setInitialValues(officeFile)}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // {name:"Test 2", fname:"clay"} Object.keys(values) => ["name","fname"].forEach((name)=>{})
            if (id) {
              const updatedFields = {}; //{name: "Test 2"}
              Object.keys(values).forEach((key) => {
                if (values[key] !== officeFile[key]) {
                  updatedFields[key] = values[key];
                }
              });
              if (Object.keys(updatedFields).length > 0) {
                dispatch(updateFile({ id, updatedFields }));
                resetForm();
              }
            } else {
              const _id = faker.string.uuid();
              values.id = _id;
              dispatch(addFile(values));
              resetForm();
            }
          }}
        >
          {({ isSubmitting, error }) => (
            <Form className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Father name
                </label>
                <Field
                  type="text"
                  name="fatherName"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="fatherName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Qualification
                </label>
                <Field
                  type="text"
                  name="qualification"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="qualification"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <Field
                  type="text"
                  name="address"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
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
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="phoneNumber"
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
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full "
                  placeholder=""
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <button
                type="submit"
                className="w-24 count-btn"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OfficeCreate;
