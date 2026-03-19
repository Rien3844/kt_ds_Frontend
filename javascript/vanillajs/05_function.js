window.onload = function () {
  // 즉시 실행 함수? ==> 함수를 생성하자마자 스스로를 실행시키는 함수.
  (function (number) {
    console.log("즉시실행함수 입니다.", number);
  })(100);

  var list = document.querySelector(".list");
  console.log(list); // 값 출력
  console.dir(list); // 값의 구조 출력

  console.log(list.dataset.count);
  var dataCount = parseInt(list.dataset.count);
  // .list에 dataCount의 수만큼 li 태그를 생성한다.
  for (var i = 0; i < dataCount; i++) {
    (function (number) {
      // li 태그를 생성하고 내부 텍스트는 i + 1한값으로 세팅.
      var eachItem = document.createElement("li");
      eachItem.innerText = number;

      // 무엇을 클릭해도 11이 나오는 원인?
      // ==> 반복문 내부에서 이벤트 진행 -> 이미 클릭을 하는 단계에서는 반복이 끝남
      // 반복이 끝난 단계에서의 i값? === 10.
      // 따라서 무엇을 클릭하든 11만 나옴.(이벤트가 i + 1 이므로.)

      // 1. event parameter 받아와서 출력하기.

      // 2. 즉시실행함수를 이용해서 출력하기.

      eachItem.addEventListener("click", function () {
        alert(number);
      });

      // 생성된 li 태그를 .list에 추가한다.
      list.appendChild(eachItem);
    })(i + 1);
  }

  // callback
  // 주로 비동기 또는 이벤트 핸들링에서 사용되는 함수의 표현식.
  // 비동기의 특징 :
  // 1. 어떤 함수가 시작하는 시간 또는 지점, 어떤 함수가 종료되는 시간 또는 지점이 명확하지 않은 코드의 형태.
  // 2. 정상적인 코드 흐름(위에서 아래로 실행, 하나의 명령이 종료되어야 다음 명령이 실행된다.)에서 분리된 상태.
  // ==> 하나의 명령이 종료되지 않은 상태에서 다음 코드가 실행.

  // setTimeout(함수, 지연시간) ==> 함수를 지연시간 뒤에 실행.

  // 함수를 변수에 할당.
  var printMessage = function printMessage(message) {
    console.log(message);
  };
  console.log(printMessage, typeof printMessage);

  // 변수에 할당된 함수를 호출.
  printMessage("asdffsafd");

  function printSumResult(from, to) {
    setTimeout(function () {
      var sum = 0;
      for (var i = from; i <= to; i++) {
        sum += i;
      }
      console.log(sum);
      endFunction(sum);
    }, 3000);
  }

  printSumResult(1, 1000000000, function (sum) {
    alert("결과는" + sum + "입니다.");
  });

  printSumResult(1000, 1000000000, function (sum) {
    if (confirm("결과를 보시겠나요?")) {
      alert(sum);
    }
  });

  printCalcResult(10, 20, "+");
  printCalcResult(10, 20, "-");
  printCalcResult(10, 20, "/");
  printCalcResult(10, 20, "*");

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
