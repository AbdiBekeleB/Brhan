import React from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { addItem } from "../services/ItemService";

const AddItemModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const item = Object.fromEntries(formData.entries());

    addItem(item)
      .then((result) => {
        alert("Successfully Added");
        props.setUpdated(true);
        props.onHide(); // Close the modal after successful submission if needed
      })
      .catch((error) => {
        alert("Failed to Add Item");
      });
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="custom-modal"
        style={{ backgroundColor: "#3D405B" }}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#143636", color: "#8996a3"}}>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            Fill In Item Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" rounded-bottom" style={{ backgroundColor: "#143636", color: "#8996a3"}}>
          <Row>
            <Col sm={12} md={8} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="Enter name"
                    className="rounded-3 mb-2"
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    required
                    placeholder="Enter description"
                    className="rounded mb-2"
                  />
                </Form.Group>
                <Form.Group controlId="quantity">
                  <Form.Label className="fw-bold">Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    required
                    placeholder="Enter quantity"
                    className="rounded-3 mb-2"
                  />
                </Form.Group>
                <Form.Group controlId="unit_of_measure">
                  <Form.Label className="fw-bold">Unit Of Measure</Form.Label>
                  <Form.Control
                    as="select"
                    name="unit_of_measure"
                    required
                    className="form-select rounded-3 mb-2"
                  >
                    <option value="">Select Unit</option>
                    <option value="ltr">kg</option>
                    <option value="kg">ltr</option>
                    <option value="pcs">pcs</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label className="fw-bold">Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    required
                    placeholder="Enter price"
                    className="rounded-3 mb-2"
                  />
                </Form.Group>
                <Form.Group className="text-center mt-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="rounded-3 btn-md"
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

export default AddItemModal;