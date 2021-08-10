import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogActions } from '../../redux/actions/blogs.actions'
import { ClipLoader } from "react-spinners";
import "./BlogPage.css"
import { Button, Modal } from 'react-bootstrap';


const BlogPage = () => {
    const page = 1
    const limit = 10

    const blogs = useSelector(state => state.blogReducer.blogs)
    const loading = useSelector(state => state.blogReducer.loading)
    const singleBlog = useSelector(state => state.blogReducer.selectedBlog)

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(blogActions.getBlogs({page, limit}))
    }, [dispatch, page, limit])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "." : str;
    }

    const MyVerticallyCenteredModal = (props) => {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {singleBlog?.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {singleBlog?.content}
              </p>
              <p>
                  {singleBlog?.author}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }

    // BOOTSTRAP
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="">
            <div className="home">
                <img
                    className="home_image"
                    src="https://wallpaperaccess.com/full/3204645.jpg"
                    alt="banner-img"
                />

                <div className="blog-slogun">
                    <h1>We have been helping alot. And there will be so much more that we can do to </h1>
                </div>
            </div>

            {
                loading ? (
                    <div className="text-center">
                        <ClipLoader color="#f86c6b" size={150} loading={true} />
                    </div>
                ) : (
                    <div>
                        {blogs?.map((blog) =>(

                            <div className="blog-tag">
                                <div className="blog-left-side">
                                    <img atl="blog-img" src={blog.imgURL} className="blog-img"/>
                                    
                                </div>
                                

                                <div className="blog-right-side">
                                    <div className="blog-text">
                                        <h2>{truncate(blog?.content, 70)}</h2>
                                    </div>
                                    <div className="blog-text">
                                        {truncate(blog?.content, 100)}
                                    </div>
                                    <div className="blog-text">
                                        <h2>{blog.author}</h2>
                                    </div>
                                    <Button variant="success" onClick={() => {
                                        setModalShow(true);
                                        dispatch(blogActions.getSingleBlog({selectedId: blog._id}))
                                        }}>Explore</Button>

                                    
                                </div>
                               
                                
                            </div>


            
                        ))}
                         
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div> 
                )
            }
        </div>
    )

}

export default BlogPage
