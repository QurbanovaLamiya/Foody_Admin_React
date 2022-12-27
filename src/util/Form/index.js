const FormData = {
  PRODUCTS: {
    title: "Add Product",
    button: "ADD PRODUCT",
    formInfo: {
      formTitle: "Add your Product information",
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
  },
  RESTAURANT: {
    title: "Add Restaurant",
    button: "ADD RESTAURANTS",
    formInfo: {
      formTitle: "Add your Restaurants information",
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
          type: "textarea",
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
  },
  CATEGORY: {
    title: "Add Category",
    button: "ADD CATEGORY",
    formInfo: {
      formTitle: "Add your Category information",
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
  },
  OFFER: {
    title: "Add Offer",
    button: "ADD OFFER",
    formInfo: {
      formTitle: "Add your Offer information",
      labels: {
        title: "",
        description: "",
      },
      inputs: [
        {
          id: 1,
          label: "Title",
          name: "title",
          type: "text",
        },
        {
          id: 2,
          label: "Description",
          name: "description",
          type: "textarea",
        },
      ],
    },
  },
};

export default FormData;
