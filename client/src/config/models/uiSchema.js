export const uiSchema = {
  title: {
    "ui:title": "Record Title",
    "ui:placeholder": "Title (should be longer than 10 characters)",
  },
  content: {
    "ui:title": "Record text content",
    "ui:placeholder": "Enter text here",
  },
  published: {
    "ui:title": "Publishing Date",
  },
  creation: {
    "ui:title": "Creation Date",
    "ui:readonly": true,
  },
  lastModified: {
    "ui:title": "Last Modified on",
    "ui:widget": "lastModified",
  },
};
