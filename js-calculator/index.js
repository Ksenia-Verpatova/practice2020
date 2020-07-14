const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post("/", function(request, response) {
    let { arg1, arg2, oper } = request.body;
    try {
        arg1 = Number(arg1);
        arg2 = Number(arg2);
        if (Number.isNaN(arg1) || Number.isNaN(arg2)) {
            throw new Error("Один или оба аргумента не являЮтся числом!");
        }
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
                if (arg2 != 0) {
                    result = arg1 / arg2;
                } else {
                    throw new Error('Делитель не может быть равен нулю!');
                }
                break;
            case 'pow':
                result = Math.pow(arg1, arg2);
                break;
            case 'rt':
                if (arg2 == 0) {
                    throw new Error("Степенью корня не может быть ноль!");
                }
                if (arg1 < 0 && (arg2 % 2 == 0)) {
                    throw new Error("Невозможно взять корень четной степени из отрицательного числа!");
                } else {
                    result = Math.pow(arg1, (1 / arg2));
                }
                break;
            case 'percent':
                if (arg2 >= 0) {
                    result = arg1 * arg2 / 100;
                } else {
                    throw new Error("Процент не может быть отрицательным!");
                }
                break;
            default:
                throw new Error("Ошибка: неверная операция.");
        }
        response.status(200).json(result);
    } catch (e) {
        response.status(400).json(e.message);
    }
});

app.post("/trigonom", function(request, response) {
    let { arg, oper } = request.body;
    arg = Number(arg);
    try {
        if (Number.isNaN(arg)) {
            throw new Error("Введенный аргумент не является числом!");
        }
        let result;
        switch (oper) {
            case 'cos':
                result = Math.cos(arg);
                break;
            case 'sin':
                result = Math.sin(arg);
                break;
            case 'tg':
                if (arg == (Math.PI / 2) || arg == (3 * Math.PI / 2)) {
                    throw new Error("Для заданного угла тангенс не существует!");
                } else {
                    result = Math.tan(arg);
                }
                break;
            case 'ctg':
                if (arg == 0 || arg == (Math.PI) || arg == (2 * Math.PI)) {
                    throw new Error("Для заданного угла котангенс не существует!");
                } else {
                    result = 1 / Math.tan(arg);
                }
                break;
            default:
                throw new Error("Ошибка: неверная операция.");
        }
        response.status(200).json(result);
    } catch (e) {
        response.status(400).json(e.message);
    }
});

module.exports = app;