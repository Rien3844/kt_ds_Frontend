window.onload = function () {
  var randomNum = parseInt(Math.random() * 10);

  //   if ((randomNum = 0)) {
  //     console.log("연산할 수 없는 숫자입니다.", randomNum);
  //   } else if (randomNum > 0) {
  //     console.log("0보다 큰 값입니다.", randomNum);
  //   }

  if (randomNum) {
    console.log("0보다 큰 값입니다.", randomNum);
  } else {
    console.log("연산할 수 없는 숫자입니다.", randomNum);
  }

  var name = "";
  if (name) {
    console.log("name의 값이 있습니다.");
  } else {
    console.log("name의 값이 없습니다.");
  }

  var age; //undefined
  if (age) {
    console.log("age의 값이 있습니다.");
  } else {
    console.log("age의 값이 없습니다.");
  }

  var address = null;
  if (address) {
    console.log("address 값이 있습니다.", address);
  } else {
    console.log("address 값이 있습니다", address);
  }

  var arr = [];
  if (arr) {
    console.log("arr의 값이 있습니다.", arr);
  } else {
    console.log("age의 값이 있습니다", arr);
  }

  // JS 같다 비교.
  // Javascript의 값 동등 비교 ==, ===
  console.log("==", "값을 비교");
  console.log(1 == 1); // true
  console.log(1 == 1.0); // true
  console.log("1" == 1); // true
  console.log("a" == "a"); // true

  console.log("===", "값 + 타입을 비교");
  console.log(1 === 1, typeof 1); // true
  console.log(1 === 1.0, typeof 1, typeof 1.0); // true
  console.log("1" === 1, typeof "1", typeof 1); // false
  console.log("a" === "a", typeof "a"); // true

  var input = this.document.querySelector(".input");
  input.addEventListener("keyup", function () {
    var value = parseInt(this.value);
    if (!value) {
      console.log("숫자를 입력하세요!");
    } else {
      console.log(value * value);
    }
  });
};
