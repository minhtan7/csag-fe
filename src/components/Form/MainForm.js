import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SecondForm from './SecondForm';
import IndexForm from './IndexForm';
import SubCategory from './SubCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { formActions } from '../../redux/actions/form.action';
import Donate from '../Donate';

const MainForm = () => {
	const page = useSelector((state) => state.form.page);
	const subPage = useSelector((state) => state.form.subPage);
	const dispatch = useDispatch();
	const goBack = () => {
		if (page !== 'index') {
			if (!subPage) {
				dispatch(formActions.changePage('index'));
			} else dispatch(formActions.changePage(page));
		}
	};
	const CurrentForm = () => {
		if (subPage) {
			return <SubCategory />;
		} else
			switch (page) {
				case 'index':
					return <IndexForm />;
				case 'donate':
					return <Donate />;
				default:
					return <SecondForm page={page} />;
			}
	};

	return (
		<div className="m-3 d-flex flex-column main-form w-100">
			<FontAwesomeIcon className={`form-back-icon ${page === 'index' ? 'disabled' : ''}`} onClick={goBack} icon={faChevronLeft} size="2x" />
			<FontAwesomeIcon className="form-close-icon" icon={faTimes} size="2x" />
			<div className="form-title">Bạn có thể trao gì?</div>
			<SwitchTransition>
				<CSSTransition key={[page, subPage]} timeout={{ enter: 300, exit: 300 }} classNames="form">
					<div>
						<CurrentForm />
					</div>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default MainForm;
