import { Link } from "react-router-dom";

export const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Father Name",
    selector: (row) => row.fatherName,
  },
  {
    name: "Qualification",
    selector: (row) => row.qualification,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Phone Number",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "Action",
    button: true,
    cell: (row) => <Link to={`/office/edit/${row.id}`}>edit</Link>,
  },
];
