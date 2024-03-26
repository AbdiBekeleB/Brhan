import React from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { updateItem } from "../services/ItemService";
import { useForm } from "react-hook-form";

const UpdateItemModal = (props) => {
  const { register, handleSubmit, setValue } = useForm(); // Initialize useForm hook

  const onSubmit = (data) => {
    const updatedItem = {
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      unit_of_measure: data.unit_of_measure,
      price: data.price,
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

  React.useEffect(() => {
    // Set initial values when the component mounts or when props.item changes
    setValue("name", props.item.name || "");
    setValue("description", props.item.description || "");
    setValue("quantity", props.item.quantity || "");
    setValue("unit_of_measure", props.item.unit_of_measure || "");
    setValue("price", props.item.price || "");
  }, [props.item, setValue]);

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
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    className="rounded-pill"
                    {...register("name")}
                  />
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    required
                    className="rounded"
                    {...register("description")}
                  />
                </Form.Group>

                <Form.Group controlId="quantity">
                  <Form.Label className="fw-bold">Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    className="rounded-pill"
                    {...register("quantity")}
                  />
                </Form.Group>

                <Form.Group controlId="unit_of_measure">
                  <Form.Label className="fw-bold">Unit Of Measure</Form.Label>
                  <Form.Control
                    as="select"
                    name="unit_of_measure"
                    className="form-select rounded-pill"
                    {...register("unit_of_measure")}
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
                    className="rounded-pill"
                    {...register("price")}
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
