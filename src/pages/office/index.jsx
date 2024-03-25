import React from "react";
import { useSelector } from "react-redux";
import Header from "../common/header";
import DataTable from "react-data-table-component";
import { columns } from "./columns";

const AllOffice = () => {
  const officeFiles = useSelector((state) => state.officeFile.officeFiles);

  return (
    <div>
      <Header title="File List" action="Back" href="/office/create" />
      <DataTable columns={columns} data={officeFiles} />
    </div>
  );
};

export default AllOffice;
