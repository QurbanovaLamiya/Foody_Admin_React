const Form = {
  PRODUCTS: {
    title: "Add Product",
    formTitle: "Add your Product information",
    button: "ADD PRODUCT",
    labels: {
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
  RESTAURANT: {
    title: "Add Restaurant",
    formTitle: "Add your Restaurants information",
    button: "ADD RESTAURANTS",
    labels: {
      name: "",
      cuisine: "",
      delivery_price: "",
      delivery_minute: "",
      address: "",
      category: "",
      slug: "",
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
        label: "Cuisine",
        name: "cuisine",
        type: "text",
      },
      {
        id: 3,
        label: "Delivery Price",
        name: "delivery_price",
        type: "number",
      },
      {
        id: 4,
        label: "Delivery Min",
        name: "delivery_minute",
        type: "number",
      },
      {
        id: 5,
        label: "Address",
        name: "address",
        type: "text",
      },
      {
        id: 6,
        label: "Category",
        name: "category",
        type: "select",
      },
    ],
  },
  CATEGORY: {
    title: "Add Category",
    formTitle: "Add your Category information",
    button: "ADD CATEGORY",
    labels: {
      name: "",
      slug: "",
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
        label: "Slug",
        name: "slug",
        type: "text",
      },
    ],
  },
  OFFER: {
    title: "Add Offer",
    formTitle: "Add your Offer information",
    button: "ADD OFFER",
    labels: {
      title: "",
      description: "",
    },
    inputs: [
      {
        id: 1,
        label: "title",
        name: "title",
        type: "text",
      },
      {
        id: 2,
        label: "description",
        name: "description",
        type: "textarea",
      },
    ],
  },
};

export default Form;
