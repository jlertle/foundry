
// local modules
var models = require('../../models');

// export route event handlers
module.exports = function attachDocumentRoutes (router) {
    
    // get requests
    router.get('/document', listDocuments);
    
    // post requests
    router.post('/document', createDocument);
    
};

function listDocuments (req, res) {
    
    models.documents.find({ }, function (err, documents) {
        
        return res.json(documents);
        
    });
    
};

function createDocument (req, res) {
    
    // store individual document in database
    models.documents.insert(req.files.document, function (err, document) {
        
        return res.json(document);
        
    });
    
};
