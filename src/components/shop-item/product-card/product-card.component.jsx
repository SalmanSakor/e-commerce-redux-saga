import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../store/cart/cart.action";
import { selectCartItems } from "../../../store/cart/cart.selector";
import Button from "../../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <Fragment>
      <div className="product-card-container">
        <span className="price">{price} $</span>
        <img src={imageUrl} alt={`${name}`} />

        <div className="footer">
          <span>{name}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
    </Fragment>
  );
};

export default ProductCard;
