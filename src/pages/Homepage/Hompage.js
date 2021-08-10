import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

import MainForm from '../../components/Form/MainForm';
import Map from '../../components/Map/Map';
import { useSelector, useDispatch } from 'react-redux';
import { formActions } from '../../redux/actions/form.action';
import { userActions } from '../../redux/actions/user.actions';
import './style.css';
import Login from '../../components/Login/Login';
import MarkerPopup from '../../components/Map/MarkerPopup';
import { mapActions } from '../../redux/actions/map.actions';

const Hompage = () => {
<<<<<<< HEAD
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		dispatch(formActions.changePage('index'));
	};
=======
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    dispatch(formActions.changePage("index"));
  };
  const handleShow = () => setShow(true);

  const users = useSelector((state) => state.user.users);
  let pageNum;
  let limit = 2000;
  useEffect(() => {
    dispatch(userActions.getAllUsers({ pageNum, limit }));
  }, []);
>>>>>>> e3ce03a4f014512e9d6aaf23bd7db94c3c1b66b9

	const handleShow = () => setShow(true);
	const loading = useSelector((state) => state.user.loading);
	const users = useSelector((state) => state.user.users);
	const marker = useSelector((state) => state.map.selectedMarker);
	let pageNum;
	let limit = 2000;
	useEffect(() => {
		dispatch(userActions.getAllUsers({ pageNum, limit }));
	}, []);

	return (
		<div id="map-container">
			<Map users={users} setShow={setShow} />
			<Modal show={show} onHide={handleClose} onExited={() => dispatch(mapActions.unselectMarker())} fullscreen="sm-down" contentClassName="form-modal-content" scrollable>
				{/* <Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className="d-flex justify-content-center p-0 main-form-modal">
					{marker.name ? <MarkerPopup handleClose={handleClose} /> : user?.name ? <MainForm handleClose={handleClose} /> : <Login handleClose={handleClose} />}
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
