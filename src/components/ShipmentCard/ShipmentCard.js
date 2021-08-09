import React, { useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import ModalShipment from "../ModalShipment/ModalShipment";
import "./Style.css";
import motobike from "../../image/shipper12.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShipmentCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container className="shipments_Container">
        <div className="shipment_Contents">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/charity-helping-children-vector-illustration-153939332.jpg"
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
                  Chung Cu Green Valley, Dist 7, HCM
                </h5>
              </div>
              <div className="toReceipt">
                <h5>
                  {" "}
                  <Badge style={{ "text-indent": "0.5em" }} bg="danger">
                    To
                  </Badge>
                  Sunrise City,Dist 7, HCM
                </h5>
              </div>

              <div className="itemName">
                <Button variant="warning" onClick={() => setShowModal(true)}>
                  Products
                </Button>
                <ModalShipment
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
            <div className="shipment_bottom"></div>
          </div>
          <div className="shipment_Contact">
            <Button variant="outline-success">Contact</Button>
            <div className="shipment_Location">Location:Dist 7, HCM</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShipmentCard;
