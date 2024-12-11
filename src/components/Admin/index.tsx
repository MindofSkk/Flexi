// import React, { useEffect, useState } from "react";
// import TableComponent from "./Tablecomponents"; // Adjust the import based on your file structure
// import { getData, deleteData, putData } from "../../utils/api"; // Import deleteData
// import moment from "moment";

// const AdminPasswordModal: React.FC<{ onClose: () => void; onSubmit: (password: string) => void }> = ({ onClose, onSubmit }) => {
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (password === "admin8086,") { // Replace with the actual admin password logic
//       onSubmit(password);
//     } else {
//       setError("Incorrect password. Please try again.");
//     }
//   };

//   return (
//     <div className="modal-backdrop fade show" id="backdrop">
//       <div
//         className="modal fade show"
//         style={{ display: "block" }}
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="adminPasswordModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="adminPasswordModalLabel">Enter Admin Password</h5>
//               <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="form-control mb-2"
//                 />
//                 {error && <div className="text-danger">{error}</div>}
//                 <button className="btn btn-primary" onClick={handleSubmit}>
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Test = () => {
//   const [alluserdata, setAlluserdata] = useState<any>([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const columns = React.useMemo(
//     () => [
//       { accessorKey: "name", header: "Name" },
//       { accessorKey: "email", header: "Email" },
//       { accessorKey: "phoneNo", header: "Phone" },
//       { accessorKey: "productCode", header: "Product Details" },
//       { accessorKey: "upiReferenceNo", header: "Reference No" },
//       {
//         accessorKey: "currentTime",
//         header: "Date/Time",
//         cell: ({ row }: any) => {
//           const formattedDate = moment.utc(row.original.currentTime).format("DD-MM-YY hh:mm A");
//           return <span>{formattedDate}</span>;
//         },
//       },
//       { accessorKey: "status", header: "Status" },
//       {
//         accessorKey: "action",
//         header: "Action",
//         cell: ({ row }: any) => (
//           <div>
//             <button onClick={() => handleSend(row.original)}>Send</button>
//             <button onClick={() => handleEdit(row.original)}>Edit</button>
//             <button onClick={() => handleDelete(row.original)}>Delete</button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       const getUsers = async () => {
//         try {
//           const usersData = await getData(""); // Replace with your API endpoint
//           setAlluserdata(usersData);
//         } catch (err) {
//           console.log(err);
//         }
//       };
//       getUsers();
//     }
//   }, [isAuthenticated]);

//   const handleSend = async (row: any) => {
//     console.log("hit")
//     try {
//       // Prepare the updated data with the new status
//       const updatedRow = {
//         ...row,
//         status: "Done", // Update the status to "Complete"
//       };
  
//       // Use the `putData` utility to send the updated data to the server
//       await putData(`/${row._id}`, updatedRow); // Assuming the endpoint follows this pattern
  
//       // Update the local state to reflect the change
//       setAlluserdata((prev: any) =>
//         prev.map((user: any) => (user._id === row._id ? updatedRow : user))
//       );
  
//       console.log("Row updated successfully:", updatedRow);
//     } catch (error) {
//       console.error("Error updating row:", error);
//     }
//   };
  

//   const handleEdit = (row: any) => {
//     console.log("Edit:", row);
//   };

//   const handleDelete = async (row: any) => {
//     try {
//       const id = row._id; // Assuming the row contains an `_id` field for the unique identifier
//       await deleteData(id); // Call the delete API
//       setAlluserdata((prev: any) => prev.filter((user: any) => user._id !== id)); // Update state to remove the deleted user
//       console.log(`User with ID ${id} deleted successfully.`);
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   const handlePasswordSubmit = (password: string) => {
//     setIsAuthenticated(true);
//     setIsModalOpen(false);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {isModalOpen && <AdminPasswordModal onClose={handleModalClose} onSubmit={handlePasswordSubmit} />}
//       {isAuthenticated && alluserdata && alluserdata.length ? (
//         <div style={{ margin: "20px", borderRadius: "5px" }}>
//           <TableComponent
//             columns={columns}
//             data={alluserdata}
//             onSend={handleSend}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         </div>
//       ) : (
//         "Please enter admin password to access this page"
//       )}
//     </>
//   );
// };

// export default Test;
import React, { useEffect, useState } from "react";
import TableComponent from "./Tablecomponents"; // Adjust the import based on your file structure
import { getData, deleteData, putData } from "../../utils/api";
import moment from "moment";

const AdminPasswordModal: React.FC<{ onClose: () => void; onSubmit: (password: string) => void }> = ({ onClose, onSubmit }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password === "admin8086,") { // Replace with the actual admin password logic
      onSubmit(password);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="modal-backdrop fade show" id="backdrop">
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="adminPasswordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="adminPasswordModalLabel">Enter Admin Password</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mb-2"
                />
                {error && <div className="text-danger">{error}</div>}
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  const [alluserdata, setAlluserdata] = useState<any>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const columns = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phoneNo", header: "Phone" },
      { accessorKey: "productCode", header: "Product Details" },
      { accessorKey: "upiReferenceNo", header: "Reference No" },
      {
        accessorKey: "currentTime",
        header: "Date/Time",
        cell: ({ row }: any) => {
          const formattedDate = moment.utc(row.original.currentTime).format("DD-MM-YY hh:mm A");
          return <span>{formattedDate}</span>;
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getData(""); // Replace with your API endpoint
        setAlluserdata(usersData);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUsers(); // Fetch data on component mount
  }, []);

  const handleSend = async (row: any) => {
    try {
      const updatedRow = {
        ...row,
        status: "Done",
      };

      await putData(`/${row._id}`, updatedRow);

      setAlluserdata((prev: any) =>
        prev.map((user: any) => (user._id === row._id ? updatedRow : user))
      );

      console.log("Row updated successfully:", updatedRow);
    } catch (error) {
      console.error("Error updating row:", error);
    }
  };

  const handleEdit = (row: any) => {
    console.log("Edit:", row);
  };

  const handleDelete = async (row: any) => {
    try {
      const id = row._id;
      await deleteData(id);
      setAlluserdata((prev: any) => prev.filter((user: any) => user._id !== id));
      console.log(`User with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handlePasswordSubmit = (password: string) => {
    setIsAuthenticated(true);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <AdminPasswordModal onClose={handleModalClose} onSubmit={handlePasswordSubmit} />}
      {isAuthenticated ? (
        alluserdata && alluserdata.length ? (
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
          "No data available"
        )
      ) : (
        "Please enter admin password to access this page"
      )}
    </>
  );
};

export default Test;
