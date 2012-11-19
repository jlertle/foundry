
// npm modules
var monk = require('monk')('localhost/foundry');

// export models
exports.documents = new (require('./document'))(monk);
