import React, { useState } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { updateItem } from "../services/ItemService";

const UpdateItemModal = (props) => {
  const [name, setName] = useState(props.item.name || "");
  const [description, setDescription] = useState(props.item.description || "");
  const [quantity, setQuantity] = useState(props.item.quantity || "");
  const [unitOfMeasure, setUnitOfMeasure] = useState(
    props.item.unit_of_measure || ""
  );
  const [price, setPrice] = useState(props.item.price || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      name: name,
      description: description,
      quantity: quantity,
      unit_of_measure: unitOfMeasure,
      price: price,
    };

    updateItem(props.item.id, updatedItem)
      .then(() => {
        alert("Successfully Updated.");
        props.setUpdated(true);
      })
      .catch((error) => {
        console.error("Failed to update item:", error);
        alert("Failed To Update.");
      });
  };

  return (
    <div className="container">
      <Modal {...props} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Update Item Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={9} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-pill"
                  />
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="rounded"
                  />
                </Form.Group>
                <Form.Group controlId="quantity">
                  <Form.Label className="fw-bold">Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="rounded-pill"
                  />
                </Form.Group>
                <Form.Group controlId="unit_of_measure">
                  <Form.Label className="fw-bold">Unit Of Measure</Form.Label>
                  <Form.Control
                    as="select"
                    name="unit_of_measure"
                    value={unitOfMeasure}
                    onChange={(e) => setUnitOfMeasure(e.target.value)}
                    className="form-select rounded-pill"
                  >
                    <option value="">Select Unit</option>
                    <option value="kg">kg</option>
                    <option value="ltr">ltr</option>
                    <option value="pcs">pcs</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label className="fw-bold">Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="rounded-pill"
                  />
                </Form.Group>
                <Form.Group className="d-flex justify-content-center mt-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="rounded-pill btn-md"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateItemModal;
