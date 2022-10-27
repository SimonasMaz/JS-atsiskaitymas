/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.sum = function () {
  console.log(this.a + this.b);
};

Calculator.prototype.subtraction = function () {
  console.log(this.a - this.b);
};

Calculator.prototype.multiplication = function () {
  console.log(this.a * this.b);
};

Calculator.prototype.division = function () {
  console.log(this.a / this.b);
};

const num1 = new Calculator(8, 5);

num1.sum();
num1.subtraction();
num1.multiplication();
num1.division();
