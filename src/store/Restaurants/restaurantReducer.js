export const initialState = {
  restaurant: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "RESTAURANT_DATA":
      return { ...state, restaurant: action.payload };

    default:
      return state;
  }
};
