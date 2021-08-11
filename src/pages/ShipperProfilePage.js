import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { ordersActions } from '../redux/actions/order.actions';
import "./ShipperProfilePage.css"

const ShipperProfilePage = () => {
    const loading = useSelector(state => state.order.loading)
    const orders = useSelector(state => state.order.selectedOrder)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ordersActions.orderShipper())
    }, [dispatch])

    return (
        <Container> 
            {loading ? (
                <div className="text-center">
                    <ClipLoader color="#f86c6b" size={150} loading={loading} />
                </div>
            ): (
                <Container>
                    {orders?.map((order) => (
                            <div className="shipper-card">
                                <div className="shipper-upper-content">
                                    <div>
                                        <div style={{}}>
                                            From: {order.from.name}
                                        </div>
                                        <div>
                                            Phone: {order.from.phone}
                                        </div>

                                    </div>

                                    <div>
                                        <div>
                                            From: {order.to.name}
                                        </div>
                                        <div>
                                            Phone: {order.to.phone}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button>{order.status}</Button>
                                </div>

                            </div>
                        ))}
                </Container>
            )}
        </Container>
        
    )
}

export default ShipperProfilePage
