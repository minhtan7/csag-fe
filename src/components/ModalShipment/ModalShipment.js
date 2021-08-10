import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const ModalShipment = ({ showModal, setShowModal, order }) => {
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
          {order?.items ? (
            <>
              {order.items.map((item) => (
                <>
                  <h4>{item.category}</h4>
                  <Row>
                    <Col>
                      <p>{item.name}</p>
                    </Col>
                    <Col>
                      <p>{`${item.quantity} ${item.unit}`}</p>
                    </Col>
                  </Row>
                </>
              ))}
            </>
          ) : (
            <p>There are no shipments</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalShipment;
