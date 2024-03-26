import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddItemModal from "./AddItemModal";
import UpdateItemModal from "./UpdateItemModal";
import { getItems, deleteItem } from "../services/ItemService";

const Manage = () => {
  const [items, setItems] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editItem, setEditItem] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (items.length && !isUpdated) {
      return;
    }
    getItems().then((data) => {
      if (mounted) {
        setItems(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, items]);

  const handleUpdate = (e, item) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditItem(item);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, id) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      deleteItem(id)
        .then((result) => {
          alert(result);
          setIsUpdated(true);
        })
        .catch((error) => {
          alert("Failed to Delete Item");
        });
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Of Measure</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_of_measure}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={(event) => handleDelete(event, item.id)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <span className="mr-2">&nbsp;&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2"
                    onClick={(event) => handleUpdate(event, item)}
                  >
                    <FaEdit />
                  </Button>
                  <UpdateItemModal
                    show={editModalShow}
                    item={editItem}
                    setUpdated={setIsUpdated}
                    onHide={EditModelClose}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar className="mt-3">
          <Button variant="primary" onClick={handleAdd}>
            Add Item
          </Button>
          <AddItemModal
            show={addModalShow}
            setUpdated={setIsUpdated}
            onHide={AddModelClose}
          />
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Manage;