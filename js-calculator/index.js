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
        default:
            result = "Ошибка: неверная операция.";
    }
    response.status(200).json(result);
});

app.post("/power", function(request, response) {
    const { arg, power, oper } = request.body;
    let result;
    switch (oper) {
        case 'pow':
            result = arg ** power;
            break;
        case 'root':
            result = arg ** (1/power);
            break;
        default:
            result = "Ошибка: неверная операция.";
    }
    response.status(200).json(result);
});

app.post("/trigonom", function(request, response) {
    const { arg, oper } = request.body;
    let result;
    switch (oper) {
        case 'cos':
            result = Math.cos(arg);
            break;
        case 'sin':
            result = Math.sin(arg);
            break;
        case 'tg':
            result = Math.tan(arg);
            break;
        case 'ctg':
            result = 1 / Math.tan(arg);
            break;
        default:
            result = "Ошибка: неверная операция.";
    }
    response.status(200).json(result);
});

app.post("/percent", function(request, response) {
    const { arg, percent } = request.body;
    response.status(200).json(arg * percent / 100);
});

app.listen(2121);