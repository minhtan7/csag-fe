import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions } from '../../redux/actions/blogs.actions';
import { ClipLoader } from 'react-spinners';
import './BlogPage.css';
import { Button, Modal } from 'react-bootstrap';

const BlogPage = () => {
	const page = 1;
	const limit = 10;

	const [isClicked, setIsClicked] = useState(true);
	// console.log(isClicked);
	const blogs = useSelector((state) => state.blogReducer.blogs);

	const loading = useSelector((state) => state.blogReducer.loading);
	const singleBlog = useSelector((state) => state.blogReducer.selectedBlog);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(blogActions.getBlogs({ page, limit }));
	}, [dispatch, page, limit]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '.' : str;
	}

	const MyVerticallyCenteredModal = (props) => {
		return (
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">{singleBlog?.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{singleBlog?.content}</p>
					<p>{singleBlog?.author}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	// BOOTSTRAP
	const [modalShow, setModalShow] = React.useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsClicked(false);
			// console.log('3');
		}, 3000);
		clearTimeout(
			setTimeout(() => {
				setIsClicked(false);
				// console.log('3');
			}, 3000)
		);
	}, []);

	return (
		<div className="blog-page">
			<div
				onClick={() => {
					setIsClicked(!isClicked);
				}}
				className="top-header"
			>
				<ul className={isClicked ? 'active' : 'button'}>
					<li className="button-dot"></li>
					<li className="button-dot"></li>
					<li className="button-dot"></li>
				</ul>

				<ul className="menu">
					<li className={isClicked ? 'menu-li active' : 'menu-li'}>
						<ul className="menu-content">
							<h2>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</h2>
						</ul>
					</li>
				</ul>
			</div>

			<div className="home">
				<img className="home_image" src="https://www.caribbeanclimate.bz/wp-content/uploads/revslider/homeslider_boxed/citybg.jpg" alt="banner imgage"></img>

				<div className="blog-slogun">
					<h1>We have been helping alot. And there will be so much more that we can do!</h1>
				</div>
			</div>

			{loading ? (
				<div className="text-center">
					<ClipLoader color="#f86c6b" size={150} loading={true} />
				</div>
			) : (
				<div>
					{blogs?.map((blog) => (
						<div className="blog-tag">
							<div className="blog-left-side">
								<img atl="blog-img" src={blog.imgURL} className="blog-img" />
							</div>

							<div className="blog-right-side">
								<div className="blog-text">
									<h2 style={{ fontSize: '2vw', fontWeight: '600' }}>{blog.title}</h2>
								</div>
								<div className="blog-text" style={{ fontSize: '1.5vw' }}>
									{truncate(blog?.content, 100)}
								</div>
								<div className="blog-text">
									<h2 style={{ fontSize: '2vw', fontWeight: '600' }}>{blog.author}</h2>
								</div>
								<Button
									style={{ width: '10vw', height: '4vh', fontSize: '1vw' }}
									variant="success"
									onClick={(e) => {
										setModalShow(true);
										dispatch(blogActions.getSingleBlog({ selectedId: blog._id }));
										e.preventDefault();
									}}
								>
									Explore
								</Button>
							</div>
						</div>
					))}

					<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
				</div>
			)}
		</div>
	);
};

export default BlogPage;
