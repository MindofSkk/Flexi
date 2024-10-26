import React from "react";
import TableComponent from "./Tablecomponents"; // Adjust the import based on your file structure

const Test = () => {
  const columns = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Phone" },
      { accessorKey: "productDetails", header: "Product Details" },
      { accessorKey: "referenceNo", header: "Reference No" },
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

  const data = React.useMemo(
    () => [
      {
        name: "User All",
        email: "user@example.com",
        phone: "123-456-7890",
        productDetails: "Product A",
        referenceNo: "REF001",
        status:"pending"
      },
      {
        name: "John Doe",
        email: "john@example.com",
        phone: "987-654-3210",
        productDetails: "Product B",
        referenceNo: "REF002",
        status:"pending"

      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-555-5555",
        productDetails: "Product C",
        referenceNo: "REF003",
        status:"pending"

      },
    ],
    []
  );

  const handleSend = (row: any) => {
    console.log("Send:", row);
  };

  const handleEdit = (row: any) => {
    console.log("Edit:", row);
  };

  const handleDelete = (row: any) => {
    console.log("Delete:", row);
  };

  return (
    <div style={{margin:"20px", borderRadius:"5px"}}>
      <TableComponent
        columns={columns}
        data={data}
        onSend={handleSend}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Test;
