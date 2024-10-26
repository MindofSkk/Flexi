import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';

type TableComponentProps<T> = {
  columns: ColumnDef<T, any>[];
  data: T[];
  onSend: (rowData: T) => void;
  onEdit: (rowData: T) => void;
  onDelete: (rowData: T) => void;
};

const TableComponent = <T,>({ columns, data, onSend, onEdit, onDelete }: TableComponentProps<T>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="table table-striped table-hover mt-4">
      <thead className="table-dark">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {cell.column.id === 'action' ? (
                  <div className="d-flex gap-2">
                    <button onClick={() => onSend(row.original)} className="btn btn-primary btn-sm">Send</button>
                    <button onClick={() => onEdit(row.original)} className="btn btn-warning btn-sm">Edit</button>
                    <button onClick={() => onDelete(row.original)} className="btn btn-danger btn-sm">Delete</button>
                  </div>
                ) : (
                  flexRender(cell.column.columnDef.cell, cell.getContext())
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
