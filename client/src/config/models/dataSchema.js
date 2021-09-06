var dataSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 10,
      maxLength: 140,
    },
    content: {
      title: "Content",
      type: "string",
    },
    published: {
      type: "string",
      format: "date-time",
      default: new Date().toISOString(),
    },
    creation: {
      type: "string",
      format: "date-time",
      default: new Date().toISOString(),
    },
    lastModified: { type: "string" },
  },
  required: ["title", "content", "published", "creation"],
};

exports.dataSchema = dataSchema;
exports.dataFields = Object.keys(dataSchema.properties);
