import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../redux/actions/form.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faTshirt,
  faHandHoldingMedical,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";

function IndexForm() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.form);
  const selectedItems = useSelector((state) => state.form.items);
  const options = Object.keys(menu);
  console.log({ options });
  return (
    <>
      {options.map((item) => {
        if (item != "matching") {
          return (
            <div
              className={`form-image-button form-${item}`}
              onClick={() => dispatch(formActions.changePage(item))}
            >
              <div className="form-button-text">{menu[item].text}</div>
              <div className="form-hover"></div>
              <Image type={item} />
            </div>
          );
        } else {
          return (
            <div
              className={`form-image-button form-${item}`}
              onClick={() => {
                console.log({ selectedItems });
                dispatch(formActions.submitItems(selectedItems));
                dispatch(formActions.changePage(item));
              }}
            >
              <div className="form-button-text">{menu[item].text}</div>
              <div className="form-hover"></div>
              <Image type={item} />
            </div>
          );
        }
      })}
    </>
  );
}

export default IndexForm;

const Image = ({ type }) => {
  switch (type) {
    case "food":
      return (
        <FontAwesomeIcon
          className="form-main-image"
          icon={faCarrot}
          color="#f59d22"
          size="2x"
        />
      );
    case "household":
      return (
        <FontAwesomeIcon
          className="form-main-image"
          icon={faTshirt}
          color="#27c260"
          size="2x"
        />
      );
    case "medical":
      return (
        <FontAwesomeIcon
          className="form-main-image"
          icon={faHeartbeat}
          color="#2781c2"
          size="2x"
        />
      );
    case "donate":
      return (
        <FontAwesomeIcon
          className="form-main-image"
          icon={faHandHoldingMedical}
          color="#eb3477"
          size="2x"
        />
      );
    case "matching":
      return "";
    default:
      return null;
  }
};
