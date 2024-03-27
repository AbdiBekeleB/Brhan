import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getItems } from "../services/ItemService";
import "../App.css";

const Items = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    getItems().then((data) => {
      if (mounted) {
        setItems(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Of Measure</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_of_measure}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Items;
