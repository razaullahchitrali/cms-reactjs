import { Link } from "react-router-dom";

export const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "Action",
    button: true,
    cell: (row) => <Link to={`/admission/edit/${row.id}`}>update</Link>,
  },
];
