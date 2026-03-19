window.onload = function () {
  printCalcResult(10, 20, "+");
  printCalcResult(10, 20, "-");
  printCalcResult(10, 20, "/");
  printCalcResult(10, 20, "*");

  getPlusResult(100, 200); //Uncaught ReferenceError: getPlusResult is not defined
  //이 함수는 onload 내부에 정의된 함수가 아니라, printCalcResult내부의 함수라 찾지못한다.

  function printCalcResult(number1, number2, operator) {
    if (operator === "+") {
      var result = getPlusResult(number1, number2);
      console.log(result);
    } else if (operator === "-") {
      var result = getSubtractResult(number1, number2);
      console.log(result);
    } else if (operator === "/") {
      var result = getDivideResult(number1, number2);
      console.log(result);
    } else if (operator === "*") {
      var result = getMultiplicateResult(number1, number2);
      console.log(result);
    }

    function getPlusResult(number1, number2) {
      return number1 + number2;
    }
    function getSubtractResult(number1, number2) {
      return number1 - number2;
    }
    function getDivideResult(number1, number2) {
      return number1 / number2;
    }
    function getMultiplicateResult(number1, number2) {
      return number1 * number2;
    }
  }

  function calc(num1, num2) {
    console.log(arguments);

    return num1 + num2;
  }

  function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  var addresult = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(addresult); //55

  var result = calc(10, 30);
  console.log(result); // 40

  var result = calc(10, 30, 100);
  console.log(result); // 40

  var result = calc(10);
  console.log(result); // NaN

  var result = calc();
  console.log(result); // NaN
};
