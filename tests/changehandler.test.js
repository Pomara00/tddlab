let {
    ChangeHandler
} = require("../src/changehandler");

describe("Tests for ChangeHandler", function () {

    test("cashTendered is set to zero", function () {
        let test = new ChangeHandler(999);
        expect(test.cashTendered).toBe(0);
    });

    test("inserting a quarter adds 25", function () {
        let test = new ChangeHandler(999);
        test.insertCoin("quarter");
        expect(test.cashTendered).toBe(25);
    });
    test("inserting a dime adds 10", function () {
        let test = new ChangeHandler(999);
        test.insertCoin("dime");
        expect(test.cashTendered).toBe(10);
    });

    test("inserting a nickel adds 5", function () {
        let test = new ChangeHandler(999);
        test.insertCoin("nickel");
        expect(test.cashTendered).toBe(5);
    });

    test("inserting a penny adds 1", function () {
        let test = new ChangeHandler(999);
        test.insertCoin("penny");
        expect(test.cashTendered).toBe(1);
    });
    test("multiple times adds amount", function () {
        let test = new ChangeHandler(999);
        test.insertCoin("penny");
        test.insertCoin("quarter");
        expect(test.cashTendered).toBe(26);
    });
    test("is payment sufficient", function () {
        let test = new ChangeHandler(5);
        test.insertCoin("dime");
        expect(test.isPaymentSufficient()).toBe(true);
    });
    test("is payment is insufficient", function () {
        let test = new ChangeHandler(20);
        test.insertCoin("dime");
        expect(test.isPaymentSufficient()).toBe(false);
    });
    test("is payment even", function () {
        let test = new ChangeHandler(5);
        test.insertCoin("nickel");
        expect(test.isPaymentSufficient()).toBe(true);
    });
    test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", function () {
        let test = new ChangeHandler(0);
        test.insertCoin("quarter");
        test.insertCoin("nickel");
        test.insertCoin("penny");
        test.insertCoin("penny");
        expect(test.giveChange()).toEqual({
            quarters: 1,
            dimes: 0,
            nickels: 1,
            pennies: 2
        });
    });
    test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function () {
        let test = new ChangeHandler(0);
        test.insertCoin("dime");
        expect(test.giveChange()).toEqual({
            quarters: 0,
            dimes: 1,
            nickels: 0,
            pennies: 0
        });
    });
    test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function () {
        let test = new ChangeHandler(0);
        test.insertCoin("quarter");
        test.insertCoin("penny");
        test.insertCoin("penny");
        expect(test.giveChange()).toEqual({
            quarters: 1,
            dimes: 0,
            nickels: 0,
            pennies: 2
        });
    });
    test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function () {
        let test = new ChangeHandler(0);
        test.insertCoin("quarter");
        test.insertCoin("quarter");
        test.insertCoin("nickel");
        test.insertCoin("dime");
        test.insertCoin("penny");
        test.insertCoin("penny");
        test.insertCoin("penny");
        expect(test.giveChange()).toEqual({
            quarters: 2,
            dimes: 1,
            nickels: 1,
            pennies: 3
        });
    });
});