import * as types from "../constants/constants";
import api from "../api";

const getBlogs = ({ page, limit }) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_BlOGS_REQUEST, payload: null });
  try {
    // URL have  page and limit
    let url =
      process.env.REACT_APP_URL + `/api/blogs?page=${page}&limit=${limit}`;

    let resp = await api.get(url);

    const data = resp.data.data.blogs;

    console.log(data);

    dispatch({ type: types.GET_ALL_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_ALL_BLOGS_FAILURE, payload: null });
  }
};

const getSingleBlog = ({ selectedId }) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BlOG_REQUEST, payload: null });
  try {
    // URL have  page and limit
    let url = process.env.REACT_APP_URL + `/api/blogs/${selectedId}`;
    console.log(url);
    let resp = await api.get(url);

    const data = resp.data.data.blog;
    console.log(resp);

    console.log(data);

    dispatch({ type: types.GET_SINGLE_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_BLOG_FAILURE, payload: null });
  }
};

export const blogActions = {
  getBlogs,
  getSingleBlog,
};
