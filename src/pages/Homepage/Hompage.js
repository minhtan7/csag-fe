import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Map from "../../components/Map/Map";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";

const Hompage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const users = useSelector((state) => state.user.users);
  let pageNum;
  let limit = 100;
  useEffect(() => {
    dispatch(userActions.getAllUsers({ pageNum, limit }));
  }, []);
  console.log(users);
  const handleOnClick = (e) => {};
  return (
    <div id="map-container">
      <Map users={users} />

      <div className="join-button">
        <Button variant="dark" size="lg" onClick={handleOnClick}>
          Tôi muốn tham gia
        </Button>
      </div>
    </div>
  );
};

export default Hompage;
