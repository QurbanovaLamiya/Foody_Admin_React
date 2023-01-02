export const initialState = {
  product: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_DATA":
      return { ...state, product: action.payload };

    default:
      return state;
  }
};
