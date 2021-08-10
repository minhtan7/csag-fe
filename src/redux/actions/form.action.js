import * as types from "../constants/form.constants";
import api from "../api";
import { toast } from "react-toastify";

const addItem = (item) => async (dispatch) => {
  dispatch({ type: types.ADD_ITEM, payload: null });
  try {
    toast.success("New item added!");
  } catch (err) {
    // dispatch({ type: types.CREATE_form_FAILURE, payload: err });
  }
};

const changePage = (toPage) => async (dispatch) => {
  dispatch({ type: types.CHANGE_PAGE, payload: toPage });
};
const changeSubpage = (toPage) => async (dispatch) => {
  dispatch({ type: types.CHANGE_SUBPAGE, payload: toPage });
};

const matchingForm = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/form/matching/${id}`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTEyM2I3MWNkOWJkYjVkNTAwZGMxMWYiLCJpYXQiOjE2Mjg2MTczMzgsImV4cCI6MTYyODcwMzczOH0.e7uas1nnm-HdNtI2lTKYszDOjj123qiVBs30Xz_LoBQ",
      },
    });
    const data = res.data.data.sortingReceiver;
    dispatch({ type: types.MATCHING_FORM, payload: data });
  } catch (err) {
    toast.error(err.message);
  }
};

const getSingleForm = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/form/${id}`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTEyM2I3MWNkOWJkYjVkNTAwZGMxMWYiLCJpYXQiOjE2Mjg2MTczMzgsImV4cCI6MTYyODcwMzczOH0.e7uas1nnm-HdNtI2lTKYszDOjj123qiVBs30Xz_LoBQ",
      },
    });
    const data = res.data.data.form;
    dispatch({ type: types.GET_RECEIVER, payload: data });
  } catch (err) {
    toast.error(err.message);
  }
};

const createForm = ({ deliveryMethod, items, toUserId }) => async (
  dispatch
) => {
  try {
    const res = await api.post(`/orders`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTEyM2I3MWNkOWJkYjVkNTAwZGMxMWYiLCJpYXQiOjE2Mjg2MTczMzgsImV4cCI6MTYyODcwMzczOH0.e7uas1nnm-HdNtI2lTKYszDOjj123qiVBs30Xz_LoBQ",
      },
      body: {
        deliveryMethod,
        items,
        toUserId,
      },
    });
    const data = res.data.data.form;
    dispatch({ type: types.GET_RECEIVER, payload: data });
  } catch (err) {
    toast.error(err.message);
  }
};

export const formActions = {
  addItem,
  changePage,
  changeSubpage,
  matchingForm,
  getSingleForm,
};
