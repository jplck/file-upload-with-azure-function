var multipart = require("parse-multipart");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var bodyBuffer = Buffer.from(req.body);
    var boundary = multipart.getBoundary(req.headers['content-type']);
    
    var parts = multipart.Parse(req.body, boundary);
    console.log(parts[0].data)

    context.bindings.outputblob = parts[0].data.toString()

    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: "OK",
        status: 200
    };
}