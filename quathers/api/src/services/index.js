const users = require('./users/users.service.js');
const groups = require('./groups/groups.service.js');
const organizations = require('./organizations/organizations.service.js');
const forms = require('./forms/forms.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(groups);
  app.configure(organizations);
  app.configure(forms);
};
