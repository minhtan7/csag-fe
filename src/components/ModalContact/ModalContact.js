import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const ModalContact = ({ showModalContact, setShowModalContact, order }) => {
  const handleClose = () => setShowModalContact(false);
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModalContact}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <>
              <Row>
                <Col>
                  <p>{order?.from?.name}</p>
                  <p>{order?.from?.phone}</p>
                </Col>
                <Col>
                  <p>{order?.from?.role}</p>
                </Col>
              </Row>
            </>
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalContact;
