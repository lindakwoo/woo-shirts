import axios from "axios";
import { setError, setLoading, setShippingCosts, cartItemAdd, cartItemRemoval, clearCart } from "../slices/cart";

export const addCartItem = (id, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
console.log(data)
    const itemToAdd = {
      id: data._id,
      name: data.name,
      subtitle: data.subtitle,
      image: data.images[0],
      price: data.price,
      stock: data.stock,
      brand: data.brand,
      qty,
      stripeId: data.stripeId,
    };
    dispatch(cartItemAdd(itemToAdd));

  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
            ? error.message
            : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const removeCartItem = (id)=> async (dispatch)=>{
    dispatch(setLoading(true));
    dispatch(cartItemRemoval(id));
};

export const setShipping = (value)=> async (dispatch)=>{
    dispatch(setShippingCosts(value));
}

export const resetCart = ()=> (dispatch)=>{
    dispatch(clearCart());
}
