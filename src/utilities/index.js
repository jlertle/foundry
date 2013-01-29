var sqs = require('sqs');

exports.documentToSQS = function (path, document) {
    
    // init sqs client
    var queue = sqs({
        
        access: '...',
        secret: '...',
        region: 'us-west-1'
        
    });
    
    // push document to queue
    queue.push('df-queue-1', {
        
        path: path,
        document: document
        
    });
    
};
