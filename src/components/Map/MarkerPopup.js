import React, { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { mapActions } from '../../redux/actions/map.actions';

const MarkerPopup = ({ handleClose }) => {
	const dispatch = useDispatch();
	const { name, phone, _id, role } = useSelector((state) => state.map.selectedMarker);
	const form = useSelector((state) => state.map.form);
	useEffect(() => {
		dispatch(mapActions.getSingleForm(_id));
	}, [_id]);
	return (
		<div className="m-3 d-flex flex-column main-form w-100 marker-popup">
			<FontAwesomeIcon className="form-close-icon" icon={faTimes} size="2x" onClick={handleClose} />
			<div className="form-title">Đang có người muốn {role === 'giver' ? 'cho/hỗ trợ' : 'nhận'}</div>

			<div className="marker-popup-name">{name}</div>

			{form ? (
				<>
					<div className="marker-popup-items">
						{form.items?.map((item) => (
							<div>
								{item.name} - {item.quantity} {item.unit}
							</div>
						))}
					</div>
					<div className="marker-popup-note">
						<div className="marker-popup-note-title">Ghi chú</div>
						<div className="marker-popup-note-text">{form.note}</div>
					</div>
					<div className="marker-popup-status">Tình trạng: {form.status}</div>
				</>
			) : (
				<div>Chưa có thông tin.</div>
			)}
		</div>
	);
};

export default MarkerPopup;
