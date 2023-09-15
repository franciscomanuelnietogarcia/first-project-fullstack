import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const Cart = ({ cartItems }) => {
    console.log('Cart Items:', cartItems);
  // Вычисляем общую стоимость корзины
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <MDBContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <MDBRow>
          {cartItems.map((item) => (
            <MDBCol key={item.id} md="4" className="mb-3">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>Price: {item.price}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}

      {cartItems.length > 0 && (
        <>
          <h4>Total Cost: {totalCost}</h4>
          <MDBListGroup>
            {cartItems.map((item) => (
              <MDBListGroupItem key={item.id}>
                {item.title} - {item.price}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </>
      )}
    </MDBContainer>
  );
};

export default Cart;
