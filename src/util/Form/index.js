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
        label: "name",
        name: "name",
        type: "text",
      },
      {
        id: 2,
        label: "description",
        name: "desc",
        type: "textarea",
      },
      {
        id: 3,
        label: "price",
        name: "price",
        type: "number",
      },
      {
        id: 4,
        label: "restaurants",
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
