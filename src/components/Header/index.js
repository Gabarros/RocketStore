import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header(props) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{props.cartSize}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>

    </Container>
  )

};

const mapStateToProps = state => ({
  cart: state.cart,
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
