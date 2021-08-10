import React, { useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import ModalShipment from "../ModalShipment/ModalShipment";
import "./Style.css";

const ShipmentCard = ({ order, handleClick }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container className="shipments_Container">
        <div className="shipment_Contents">
          <div>
            <img
              src={order?.images ? order.images[0] : "holder.js/300px160"}
              alt="img-delivery"
              className="itemShipment_Img"
            />
          </div>
          <div className="shipment_Descrip">
            <div className="shipment_body">
              <div className="formgiver">
                <h5>
                  <Badge style={{ "text-indent": "0.5em" }} bg="success">
                    From
                  </Badge>
                  {` ${order.from?.address}`}
                </h5>
              </div>
              <div className="toReceipt">
                <h5>
                  {" "}
                  <Badge style={{ "text-indent": "0.5em" }} bg="danger">
                    To
                  </Badge>
                  {` ${order.to?.address}`}
                </h5>
              </div>

              <div className="itemName">
                <Button variant="warning" onClick={() => setShowModal(true)}>
                  Products
                </Button>
                <ModalShipment
                  order={order}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
            <div className="shipment_bottom"></div>
          </div>
          <div className="shipment_Contact">
            <Button
              variant="outline-success"
              onClick={() => handleClick(order._id)}
            >
              Contact
            </Button>
            <div className="shipment_Location">{`Location: HCM`}</div>
            <Button variant="warning" onClick={() => setShowModal(true)}>
              Nhận Đơn
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShipmentCard;
