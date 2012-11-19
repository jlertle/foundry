
// node modules
var knox = require('knox');

// export document constructor
var Document = module.exports = function Document (db) {
    
    this.documents = db.get('documents');
    
};

Document.prototype.insert = function (document, callback) {
    
    // explicitly define document properties
    var properties = {
        
        size: document.size,
        name: document.name,
        type: document.type
        
    };
    
    // store individual document in database
    this.documents.insert(properties, function (err, document) {
        
        // fail on error
        if (err || !document)
            return callback(new Error('failed to save document'));
        
        // callback on success
        return callback(null, document);
        
    });
    
};

Document.prototype.find = function (query, callback) {
    
    this.documents.find(query, function (err, documents) {
        
        return callback(null, documents);
        
    });
    
};
