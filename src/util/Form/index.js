const FormData = {
  PRODUCTS: {
    title: "Add product",
    formTitle: "Add your Product information",
    inputCaption: {
      name: "",
      description: "",
      price: "",
      restaurants: "",
    },
    inputs: [
      {
        id: 1,
        label: "Name",
        name: "name",
        type: "text",
      },
      {
        id: 2,
        label: "Description",
        name: "description",
        type: "textarea",
      },
      {
        id: 3,
        label: "Price",
        name: "price",
        type: "number",
      },
      {
        id: 4,
        label: "Restaurants",
        name: "restaurants",
        type: "select",
      },
    ],
  },
  RESTAURANT: {},
  CATEGORY: {},
  OFFER: {},
};

export default FormData;
