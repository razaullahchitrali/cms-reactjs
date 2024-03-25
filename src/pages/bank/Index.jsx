import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../common/header";
import DataTable from "react-data-table-component";
import { columns } from "./columns";

const AllBanks = () => {
  const [loading, setLoading] = useState(false);
  const banks = useSelector((state) => state.bank.banks);

  const [data, setdata] = useState(banks);

  const deleteRow = (id) => {
    const newData = data.filter((bank) => bank.id !== id);
    setdata(newData);
  };

  return (
    <div>
      <Header title="Bank List" action="Back" href="/bank/create" />
      <DataTable columns={columns(deleteRow)} data={data} pagination />
    </div>
  );
};

export default AllBanks;
