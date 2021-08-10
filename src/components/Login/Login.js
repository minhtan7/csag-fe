import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/actions/auth.actions';
const Login = ({ handleClose }) => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authActions.loginRequest({ phone, password }));
		handleClose();
	};
	return (
		<div className="m-3 d-flex flex-column main-form w-100">
			<FontAwesomeIcon className="form-close-icon" icon={faTimes} size="2x" onClick={handleClose} />
			<form className="p-3" onSubmit={handleSubmit}>
				<div className="form-title">Đăng nhập</div>

				<div className="form-group mt-3">
					<label>Số điện thoại</label>
					<input type="tel" className="form-control" onChange={(e) => setPhone(e.target.value)} />
				</div>

				<div className="form-group mt-3" onChange={(e) => setPassword(e.target.value)}>
					<label>Mật khẩu</label>
					<input type="password" className="form-control" />
				</div>

				<div className="text-center mt-3">
					<Button variant="success" type="submit">
						Đăng nhập
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
