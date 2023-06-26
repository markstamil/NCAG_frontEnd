import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'
const Datatable = ({ columns, rowdata, width }) => {
  const components = {
    loading: (params) => {
      if (params.value !== undefined) {
        return params.value
      } else {
        return "<img src='https://www.ag-grid.com/example-assets/loading.gif'/>"
      }
    }
  }
  return (
    <div className="mt-3 container-fluid ag-theme-alpine text-start"
      style={{ height: 480, width: width ? width : "100%%" }}>
      <AgGridReact
        columnDefs={columns}
        pagination={true}
        paginationPageSize={8}
        rowData={rowdata}
        components={components}
        defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
        rowSelection="multiple"
      />
    </div>
  )
}

export default Datatable