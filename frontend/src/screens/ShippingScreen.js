import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    address: shippingAddress.address || "",
    city: shippingAddress.city || "",
    postalCode: shippingAddress.postalCode || "",
    country: shippingAddress.country || "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(formValues));
    history.push("/payment");
  };

  return (
    <React.Fragment>
      <CheckoutSteps step1 step2 />
      <FormContainer>
        <h1>Shipping </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="address"
              placeholder="Enter Address"
              value={formValues.address}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="city"
              placeholder="Enter city"
              value={formValues.city}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postal-code">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="postalCode"
              placeholder="Enter Postal Code"
              value={formValues.postalCode}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="country"
              placeholder="Enter country"
              value={formValues.country}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" vairant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default ShippingScreen;
