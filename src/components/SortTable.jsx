import React, { useState } from "react";
import MockData from "../MOCK_DATA.json";
import "./sorttable.css";

export default function SortTable() {
  const [data, setdata] = useState(MockData);
  const [order, setorder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };
  return (
    <div className="table table-responsive">
      <table border="1" width="100%" className="table table-hover">
        <thead>
          <th onClick={() => sorting("first_name")}>First name</th>
          <th onClick={() => sorting("last_name")}>Last name</th>
          <th onClick={() => sorting("email")}>Email</th>
          <th onClick={() => sorting("gender")}>Gender</th>
          <th onClick={() => sorting("ip_address")}>Ip address</th>
          <th onClick={() => sorting("airport_code")}>Airport_code</th>
          <th onClick={() => sorting("time")}>Time</th>
          <th onClick={() => sorting("status")}>Status</th>
          <th onClick={() => sorting("mobile")}>Mobile</th>
          <th onClick={() => sorting("area")}>Area</th>
          <th onClick={() => sorting("show")}>Show</th>
          <th onClick={() => sorting("edit")}>Edit</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.gender}</td>
              <td>{d.ip_address}</td>
              <td>{d.airport_code}</td>
              <td>{d.time}</td>
              <td>{d.status}</td>
              <td>{d.mobile}</td>
              <td>{d.area}</td>
              <td>{d.show}</td>
              <td>{d.edit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
