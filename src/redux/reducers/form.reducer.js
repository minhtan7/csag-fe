import * as types from '../constants/form.constants';

const initialState = {
	page: 'index', // 'index', 'food', 'household', 'medical', 'donate'
	subPage: null, // 'ramen', 'rice', 'milk', 'egg', 'vegetable',  'clothing', 'stove', 'mask', 'disinfectant', 'other'
	items: [],
	form: {
		name: '',
		address: '',
		phone: '',
		note: '',
		items: [],
	},
	menu: {
		food: {
			items: [
				{ type: 'ramen', text: 'Mì gói', unit: 'thùng', max: 3 },
				{ type: 'rice', text: 'Gạo', unit: 'kg', max: 10 },
				{ type: 'milk', text: 'Sữa', unit: 'hộp/lon', notePlaceholder: 'Ví dụ: sữa tươi, sữa đặc, sữa bột...' },
				{ type: 'egg', text: 'Trứng', unit: 'quả', max: 30 },
				{ type: 'vegetable', text: 'Rau củ', unit: 'kg', max: 5 },
				{ type: 'spice', text: 'Gia vị', unit: 'phần', notePlaceholder: 'Ví dụ: muối, đường, bột ngọt,...' },
				{ type: 'other', text: 'Khác', unit: '' },
			],
			text: 'Lương thực, thực phẩm',
		},
		household: {
			items: [
				{ type: 'clothing', text: 'Quần áo', unit: 'bộ', notePlaceholder: 'Ví dụ: quần áo trẻ em 2 tuổi.' },
				{ type: 'stove', text: 'Bếp', unit: 'chiếc', notePlaceholder: 'Ví dụ: Bếp điện, bếp gas mini.' },
				{ type: 'other', text: 'Khác', unit: '' },
			],

			text: 'Đồ dùng gia đình',
		},
		medical: {
			items: [
				{ type: 'mask', text: 'Khẩu trang', unit: 'chiếc' },
				{ type: 'disinfectant', text: 'Cồn khử trùng', unit: 'chai' },
				{ type: 'other', text: 'Khác', unit: '' },
			],

			text: 'Đồ dùng y tế',
		},
		donate: { items: [], text: 'Quyên góp chương trình' },
	},
};

// [
//     { type: 'ramen', text: 'Mì gói', unit: 'thùng' },
//     { type: 'rice', text: 'Gạo', unit: 'kg' },
//     { type: 'milk', text: 'Sữa', unit: 'hộp/lon',  },
//     { type: 'egg', text: 'Trứng', unit: 'quả' },
//     { type: 'vegetable', text: 'Rau củ', unit: 'kg' },
//     { type: 'spice', text: 'Gia vị', unit: 'phần', notePlaceholder: 'Ví dụ: muối, đường, bột ngọt,...' },
//     { type: 'clothing', text: 'Quần áo', unit: 'bộ', notePlaceholder: 'Ví dụ: quần áo trẻ em 2 tuổi.' },
//     { type: 'stove', text: '', unit: 'chiếc', notePlaceholder: 'Ví dụ: Bếp điện, bếp gas mini.' },
//     { type: 'mask', text: 'Khẩu trang', unit: 'chiếc' },
//     { type: 'disinfectant', text: 'Cồn khử trùng', unit: 'chai' },
//     // { type: 'other', text: 'Khác',  unit: 'chai', description: 'trà sữa', quantity: 5 },
// ],

/*


*/

const formReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.CHANGE_PAGE:
			return { ...state, page: payload, subPage: null };
		case types.CHANGE_SUBPAGE:
			return { ...state, subPage: payload };
		default:
			return state;
	}
};
export default formReducer;
