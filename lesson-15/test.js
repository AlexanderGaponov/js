describe("Тип данных", function() {
    it("Функция sum(2,2) возвращает тип данных true!", function() {
        assert.isFalse(sum(2, 2));
    });
});

describe("Соответствие", function() {
    it("Num равное 5! ", function() {
        assert.equal(num, 5);
    });
});

describe("Each", function() {
    it("Функция each возвращает тип данных объект! ", function() {
        assert.equal(typeof(each(arr, myFunc)), 'object');
    });
    it("Соответствует ожидаемому результату! ", function() {
        assert.equal(each(arr, myFunc).join(), '8,7,6,5,4');
    });
    it("Длина строки соответсвует ожидаемому результату", function() {
        assert.lengthOf(each(arr, myFunc), 5);
    });
});