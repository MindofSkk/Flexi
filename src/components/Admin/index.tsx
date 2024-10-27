/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import TableComponent from "./Tablecomponents"; // Adjust the import based on your file structure
import { getData } from "../../utils/api";
import moment from "moment";
import productList from "../../utils/ProductList";

const Test = () => {
  const columns = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phoneNo", header: "Phone" },
      { accessorKey: "productDetails", header: "Product Details" },
      { accessorKey: "upiReferenceNo", header: "Reference No" },
      // {accessorKey:"currentTime",header:"Date/Time"},
      {
        accessorKey: "currentTime",
        header: "Date/Time",
        cell: ({ row }: any) => {
          const formattedDate = moment(row.original.currentTime).format(
            "DD-MM-YYYY hh:mm A"
          );
          return <span>{formattedDate}</span>; // Display formatted date
        },
      },
      { accessorKey: "status", header: "Status" },

      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }: any) => (
          <div>
            <button onClick={() => handleSend(row.original)}>Send</button>
            <button onClick={() => handleEdit(row.original)}>Edit</button>
            <button onClick={() => handleDelete(row.original)}>Delete</button>
          
          </div>
        ),
      },
    ],
    []
  );

  const [alluserdata, setAlluserdata] = useState<any>([]);
  const [data, setData] = React.useState<any>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await getData("");
        setAlluserdata(usersData);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, []);

  // const data = React.useMemo(
  //   () => [
  //     {
  //       name: "User All",
  //       email: "user@example.com",
  //       phone: "123-456-7890",
  //       productDetails: "Product A",
  //       referenceNo: "REF001",
  //       status:"pending"
  //     },
  //     {
  //       name: "John Doe",
  //       email: "john@example.com",
  //       phone: "987-654-3210",
  //       productDetails: "Product B",
  //       referenceNo: "REF002",
  //       status:"pending"

  //     },
  //     {
  //       name: "Jane Smith",
  //       email: "jane@example.com",
  //       phone: "555-555-5555",
  //       productDetails: "Product C",
  //       referenceNo: "REF003",
  //       status:"pending"

  //     },
  //   ],
  //   []
  // );

  const handleSend = (row: any) => {
    console.log("Send:", row);
  };

  const handleEdit = (row: any) => {
    console.log("Edit:", row);
  };

  const handleDelete = (row: any) => {
    console.log("Delete:", row);
  };
console.log(productList)
  return (
    <>
      {alluserdata && alluserdata.length ? (
        <div style={{ margin: "20px", borderRadius: "5px" }}>
          <TableComponent
            columns={columns}
            data={alluserdata}
            onSend={handleSend}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      ) : (
        "No Record Found"
      )}
    </>
  );
};

export default Test;
