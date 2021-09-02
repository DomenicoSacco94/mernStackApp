var dataSchema = {
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
      minLength: 10,
      maxLength: 140,
    },
    content: {
      title: "Content",
      type: "string",
    },
    published: {
      title: "Creation Date",
      type: "string",
      format: "date-time",
    },
    modified: {
      title: "Modification date",
      type: "string",
      format: "date-time",
    },
  },
  required: ["title", "content", "published", "modified"],
};

exports.dataSchema = dataSchema;
exports.dataFields = Object.keys(dataSchema.properties);
