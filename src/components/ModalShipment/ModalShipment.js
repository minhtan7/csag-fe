import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const ModalShipment = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Foods</h4>
          <Row>
            <Col>
              <p>Rice</p>
              <p>Eggs</p>
            </Col>
            <Col>
              <p>10kgs</p>
              <p>20 eggs</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalShipment;
