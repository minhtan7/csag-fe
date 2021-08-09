import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import freeShip from "../../image/free.jpeg";
const SearchForm = ({
  searchInput,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <Container>
      <img src={freeShip} alt="" className="freeShipImg" />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={8}>
            <Form.Control
              id="search-input"
              type="text"
              placeholder="Search.."
              value={searchInput}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            {loading ? (
              <Button variant="outline-success" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Searching...
              </Button>
            ) : (
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchForm;
