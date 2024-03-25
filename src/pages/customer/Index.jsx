import { useState } from "react";

import Header from "../common/header";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { columns } from "./columns";

const CustomerIndex = () => {
  const customers = useSelector((state) => state.customer.customers);
  const [data, setData] = useState(customers);

  const deleteRow = (id) => {
    const newData = data.filter((customer) => customer.id !== id);
    setData(newData);
  };

  return (
    <div>
      <Header title="customer List" action="Back" href="/customer/create" />
      <DataTable columns={columns(deleteRow)} data={data} pagination />
    </div>
  );
};

export default CustomerIndex;
