const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post("/", function(request, response) {
    const { arg1, arg2, oper } = request.body;
    let result;
    switch (oper) {
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        case '/':
            result = arg1 / arg2;
            break;
    }
    response.status(200).json(result);
});

app.listen(2121);