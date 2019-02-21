module.exports = {
    properties: [{
      name: "name",
      type: "string",
      required: true,
    }, {
      name: "email",
      type: "string",
      required: true,
    }, {
      name: "address",
      type: "object",
      required: false,
    }, {
      name: "phoneNumber",
      type: "string",
      required: false,
    }, {
      name: "role",
      type: "string",
      required: true,
    }]
};