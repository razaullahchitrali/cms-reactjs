import React from "react";
import { useSelector } from "react-redux";
import Header from "../common/header";
import DataTable from "react-data-table-component";
import { columns } from "./columns";

const Index = () => {
  const admissions = useSelector((state) => state.admission.admissions);
  return (
    <div>
      <Header title="Admission List" action="Back" href="/admission/create" />
      <DataTable columns={columns} data={admissions} />
    </div>
  );
};

export default Index;
