import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../redux/actions/form.action';

const SecondForm = ({ page }) => {
	console.log(page);
	const choices = useSelector((state) => state.form.menu[page].items);
	const dispatch = useDispatch();
	return (
		<div>
			{choices.map((item) => (
				<div className="form-image-button form-secondary" onClick={() => dispatch(formActions.changeSubpage(item.type))}>
					<div>{item.text}</div>
					<div className="form-image-wrapper">
						<img className="form-second-image" src={`../../images/${item.type}.jpg`} alt={item.type} />{' '}
					</div>
					<div className="form-hover"></div>
				</div>
			))}
		</div>
	);
};

export default SecondForm;
