const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('Two args operations', () => {
    it('Sum request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 6,
                    "arg2": 7,
                    "oper": "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(13);
            });
    });

    it('Sub request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 6,
                    "arg2": 7,
                    "oper": "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    });

    it('Mltp request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 6,
                    "arg2": 12,
                    "oper": "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(72);
            });
    });

    it('Div request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 6,
                    "arg2": 12,
                    "oper": "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.5);
            });
    });

    it('Pow request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 2,
                    "arg2": 3,
                    "oper": "pow"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(8);
            });
    });

    it('Root request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 16,
                    "arg2": 4,
                    "oper": "rt"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2);
            });
    });

    it('Percent request', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 50,
                    "arg2": 10,
                    "oper": "percent"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(5);
            });
    });
});

describe('Two args exceptions', () => {
    it('Wrong operation', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 33,
                    "arg2": 4,
                    "oper": "operation"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Ошибка: неверная операция.");
            });
    });
    
    it('Checking for number', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": "number",
                    "arg2": 22,
                    "oper": "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Один или оба аргумента не являЮтся числом!");
            });
    });

    it('Div request exception', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 11,
                    "arg2": 0,
                    "oper": "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Делитель не может быть равен нулю!");
            });
    });

    it('Div request exception', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 11,
                    "arg2": 0,
                    "oper": "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Делитель не может быть равен нулю!");
            });
    });

    it('Root request exception 1', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 11,
                    "arg2": 0,
                    "oper": "rt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Степенью корня не может быть ноль!");
            });
    });

    it('Root request exception 2', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": -9,
                    "arg2": 2,
                    "oper": "rt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Невозможно взять корень четной степени из отрицательного числа!");
            });
    });

    it('Percent request exception', () => {
        return request
            .post('/')
            .send(
                {
                    "arg1": 75,
                    "arg2": -5,
                    "oper": "percent"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Процент не может быть отрицательным!");
            });
    });
});

describe('One arg operations', () => {
    it('Cos request', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 0,
                    "oper": "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
            });
    });

    it('Sin request', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 0,
                    "oper": "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
            });
    });

    it('Tg request', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 0,
                    "oper": "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
            });
    });

    it('Ctg request', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 1,
                    "oper": "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.6420926159343306);
            });
    });
});

describe('One arg exceptions', () => {
    it('Wrong operation', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 1,
                    "oper": "operation"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Ошибка: неверная операция.");
            });
    });

    it('Checking for number', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": "number",
                    "oper": "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Введенный аргумент не является числом!");
            });
    });

    it('Ctg request exception', () => {
        return request
            .post('/trigonom')
            .send(
                {
                    "arg": 0,
                    "oper": "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Для заданного угла котангенс не существует!");
            });
    });
});