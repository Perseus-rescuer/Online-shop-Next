export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
    },
    {
      name: "irrPrice",
      title: "IRRPrice",
      type: "number",
    },
    {
      name: "irrDiscount",
      title: "IRRDiscount",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        { name: "processor", title: "CPU", type: "string" },
        { name: "screen", title: "screen", type: "string" },
        { name: "operating_system", title: "OS", type: "string" },
        { name: "ram", title: "RAM", type: "string" },
        { name: "ssd", title: "SSD", type: "string" },
        { name: "ports", title: "Ports", type: "string" },
        { name: "graphic", title: "Graphic", type: "string" },
        { name: "warranty", title: "Warranty", type: "string" },
        { name: "back_camera", title: "BCamera", type: "string" },
        { name: "front_camera", title: "FCamera", type: "string" },
        { name: "battery", title: "Battery", type: "string" },
      ],
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "isOffer",
      title: "IsOffer",
      type: "boolean",
    },
    {
      name: "registerDate",
      title: "RegisterDate",
      type: "datetime",
    },
    {
      name: "starRating",
      title: "Star Rating",
      type: "number",
    },
  ],
};
