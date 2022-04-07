import axios from "axios";
import { AppDispatch } from "../store";
import { productSlice } from "./ProductSlice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await axios.get("https://artisant.io/api/products");
    dispatch(
      productSlice.actions.productsFetchingSuccess(
        response.data?.data?.products
      )
    );
  } catch (error) {
    dispatch(productSlice.actions.productsFetchingError("Error while loading"));
  }
};
