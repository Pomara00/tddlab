/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter") {
      this.cashTendered += 25;
    } else if (typeOfCoin === "dime") {
      this.cashTendered += 10;
    } else if (typeOfCoin === "nickel") {
      this.cashTendered += 5;
    } else if (typeOfCoin === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if (this.cashTendered > this.amountDue) {
      return true;
    } else if (this.cashTendered < this.amountDue) {
      return false;
    } else if (this.cashTendered === this.cashTendered) {
      return true;
    }
  }

  giveChange(typeOfCoin) {
    // TODO return the correct change in the following format...
    if (this.cashTendered > this.amountDue) {
      this.changeDue = this.cashTendered - this.amountDue
      while (this.changeDue > 0) {
        while (this.changeDue >= 25) {
          this.changeDue -= 25;
          quarters += 1;
        }
        while (this.changeDue >= 10) {
          this.changeDue -= 10;
          dimes += 1;
        }
        while (this.changeDue >= 5) {
          this.changeDue -= 5;
          nickels += 1;
        }
        while (this.changeDue >= 1) {
          this.changeDue -= 1;
          pennies += 1;
        }
      }
    }
  }
}

return {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

module.exports = {
  ChangeHandler
};