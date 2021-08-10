import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../redux/actions/form.action';

const SubCategory = () => {
	const { page, subPage, menu } = useSelector((state) => state.form);
	const choice = menu[page]?.items?.find((item) => item.type === subPage);
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
	if (!choice) return <div></div>;
	return (
		<div className="border text-center user-select-none" style={{ borderRadius: 20 }}>
			<div
				style={{
					width: 100,
					height: 100,
					borderRadius: '50%',
					margin: '10px auto',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundImage: `url(../../images/${choice.type}.jpg)`,
				}}
			>
				{/* <img style={{ width: 100 }} src={`../../images/${choice.type}.jpg`} alt={choice.text} /> */}
			</div>
			<div>{choice.text}</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="d-flex justify-content-center align-items-center border rounded">
					<FontAwesomeIcon icon={faMinusSquare} onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)} size="2x" color="green" className="quantity-button" />
					<input value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} style={{ textAlign: 'center', border: 'none', width: 40, height: 28, margin: '0 0px' }} />

					<FontAwesomeIcon onClick={() => setQuantity(quantity + 1)} icon={faPlusSquare} size="2x" color="green" className="quantity-button" />
				</div>
			</div>
			<div> Đơn vị: {choice.type !== 'other' ? choice.unit : ''}</div>
			{choice.notePlaceholder ? (
				<div>
					<label>Ghi chú</label>
					<div>
						<textarea placeholder={choice.notePlaceholder} />
					</div>
				</div>
			) : (
				''
			)}
			<div className="d-flex justify-content-center my-3">
				<Button variant="danger" className="me-3" onClick={() => dispatch(formActions.changePage('index'))}>
					Hủy
				</Button>
				<Button variant="success">Hoàn tất</Button>
			</div>
		</div>
	);
};

export default SubCategory;
