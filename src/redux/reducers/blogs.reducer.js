import * as types from "../constants/constants"

const initialState = {
    blogs: [],
    loading: false,
    selectedBlog: []
}

const blogReducer = (state = initialState, action) =>{
    const {type, payload} = action

    switch (type) {
        // GET ALL PRODUCT
        case types.GET_ALL_BlOGS_REQUEST:
            return {
                ...state, loading: true
            }
        case types.GET_ALL_BLOGS_SUCCESS:
            return {
                ...state, blogs: payload, loading: false
            }
        case types.GET_ALL_BLOGS_FAILURE:
            return {
                ...state, loading: false
            }
        case types.GET_SINGLE_BlOG_REQUEST:
            return {
                ...state, loading: true
            }
        case types.GET_SINGLE_BLOG_SUCCESS:
            return {
                ...state, selectedBlog: payload, loading: false
            }
        case types.GET_SINGLE_BLOG_FAILURE:
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}

export default blogReducer