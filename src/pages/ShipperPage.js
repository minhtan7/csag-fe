import React, { useEffect, useState } from "react";
import PublicNavbar from "../components/PublicNavbar/PublicNavbar";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import ShipmentCard from "../components/ShipmentCard/ShipmentCard";
import ShipmentSlider from "../components/ShipmentSlider";
import { useHistory } from "react-router-dom";
import { ordersActions } from "../redux/actions/order.actions";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const ShipperPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.order.loading);
  const orders = useSelector((state) => state.order.orders);
  console.log("ordersorders", orders);
  const totalPageNum = useSelector((state) => state.order.totalPageNum);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(ordersActions.orderRequest(pageNum));
  }, [dispatch, pageNum]);

  const handleClickOnOrders = (id) => {
    history.push(`/orders/${id}`);
  };
  return (
    <>
      <PublicNavbar />
      <ShipmentSlider />
      <SearchForm />
      <Container>
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : (
          <div>
            <Container className="blog-box">
              {orders?.length ? (
                <>
                  {orders.map((order) => (
                    <ShipmentCard
                      order={order}
                      handleClick={handleClickOnOrders}
                      key={order._id}
                    />
                  ))}
                </>
              ) : (
                <p>There are no shipments</p>
              )}
            </Container>
          </div>
        )}
      </Container>
    </>
  );
};

export default ShipperPage;
