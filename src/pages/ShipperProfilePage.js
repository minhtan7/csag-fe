import React from 'react'
import { Button } from 'react-bootstrap';

const ShipperProfilePage = () => {
    return (
        <div>
            <div className="blog-tag">
                <div className="blog-left-side">
                    <img alt="blog-img" className="blog-img"/>

                </div>

                <div className="blog-right-side">
                    <div className="blog-text">
                        <h2>A</h2>
                    </div>
                    <div className="blog-text">
                        B
                    </div>
                    <div className="blog-text">
                        <h2>C</h2>
                    </div>
                    <Button variant="success" onClick={(e) => {
                        
                        }}>Lấy hàng</Button>


                </div>
            </div>
        </div>
        
    )
}

export default ShipperProfilePage
