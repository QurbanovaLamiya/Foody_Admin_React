const FormData = {
  PRODUCTS: {
    title: "Add Product",
    button: "ADD PRODUCT",
    formInfo: {
      formTitle: "Add your Product information",
      initialValues: {
        image: "",
        name: "",
        description: "",
        price: "",
        restaurants: "",
      },
      inputs: [
        {
          id: "001",
          label: "Name",
          name: "name",
          type: "text",
        },
        {
          id: "002",
          label: "Description",
          name: "description",
          type: "textarea",
        },
        {
          id: "003",
          label: "Price",
          name: "price",
          type: "number",
        },
        {
          id: "004",
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
      initialValues: {
        image: "",
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
          id: "001",
          label: "Name",
          name: "name",
          type: "text",
        },
        {
          id: "002",
          label: "Cuisine",
          name: "cuisine",
          type: "textarea",
        },
        {
          id: "003",
          label: "Delivery Price",
          name: "delivery_price",
          type: "number",
        },
        {
          id: "004",
          label: "Delivery Min",
          name: "delivery_minute",
          type: "number",
        },
        {
          id: "005",
          label: "Address",
          name: "address",
          type: "text",
        },
        {
          id: "006",
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
      initialValues: {
        image: "",
        name: "",
        slug: "",
      },
      inputs: [
        {
          id: "001",
          label: "Name",
          name: "name",
          type: "text",
        },
        {
          id: "002",
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
      initialValues: {
        image: "",
        title: "",
        description: "",
      },
      inputs: [
        {
          id: "001",
          label: "Title",
          name: "title",
          type: "text",
        },
        {
          id: "002",
          label: "Description",
          name: "description",
          type: "textarea",
        },
      ],
    },
  },
};

export default FormData;
