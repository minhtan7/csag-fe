
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MainForm from '../../components/Form/MainForm';
import Map from '../../components/Map/Map';
import { useSelector, useDispatch } from "react-redux";
import { formActions } from '../../redux/actions/form.action';
import { userActions } from "../../redux/actions/user.actions";
import './style.css';

const Hompage = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		dispatch(formActions.changePage('index'));
	};
	const handleShow = () => setShow(true);
  const loading = useSelector((state) => state.user.loading);
  const users = useSelector((state) => state.user.users);
  let pageNum;
  let limit = 100;
  useEffect(() => {
    dispatch(userActions.getAllUsers({ pageNum, limit }));
  }, []);

	return (
		<div id="map-container">
      <Map users={users} />
			<Modal show={show} onHide={handleClose} fullscreen="sm-down" contentClassName="form-modal-content" scrollable>
				{/* <Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
					<MainForm handleClose={handleClose} />
				</Modal.Body>
				{/* <Modal.Footer></Modal.Footer> */}
			</Modal>
			<div className="join-button">
				<Button variant="dark" size="lg" onClick={handleShow}>
					Tôi muốn tham gia
				</Button>
			</div>
		</div>
	);

};

export default Hompage;
