// String의 prototype에서 contains 라는 기능을 추가한다.
String.prototype.contains = function (findText) {
  console.log(findText);
  console.log(this);

  return this.indexOf(findText) >= 0;
};

//Object의 prototype에서 print라는 기능을 추가한다.
Object.prototype.print = function () {
  console.log("객체의 내용", this);
};

// JS에 contains와 print라는 기능이 없다.
// => onload밖에서 선언해서 onload안에서 사용할 수 있게 한다. = 상속
// 없던 기능을 가져와서 사용가능.(있던 기능도 필요에 따라 바꿔쓸 수 있음)

var tempObject = {};
tempObject.print();
console.dir(tempObject);

window.onload = function () {
  var text = "abcdefg ahijklmnop";
  // string의 기능이 뭐가 있나??
  console.dir(String);
  var contain = text.contains("a");
  console.log(contain);

  // 객체 구조(상속)

  // console.dir(String);

  var list = this.document.querySelector(".list");

  var listItems = [
    { tagName: "li", text: "first", class: "list-item" },
    { tagName: "li", text: "second", class: "list-item" },
    { tagName: "li", text: "third", class: "list-item" },
    { tagName: "li", text: "fourth", class: "list-item" },
  ];

  for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];

    var eachItem = document.createElement(item.tagName);
    eachItem.className = item.className;
    eachItem.innerText = item.text;

    // list.appendChild(eachItem);
  }

  function calc(n1, n2, n3) {
    return n1 + n2 + n3;
  }
  var res = calc(1, 3);
  // ==> 내가 n2를 건너뛰고 n3에 넣고싶어도 넣을 수 없음.(파라미터를 순서대로 채우기 때문.)

  function calc(param) {
    return (param.n1 || 0) + (param.n2 || 0) + (param.n3 || 0);
  }

  var result = calc({ n1: 10, n3: 50 });
  console.log(result);
  //  ==> 그럴 때 사용하는 것이 param. param을 통해 객체로 만들어서 원하는 곳에 값을 보냄.

  function getObject() {
    return {
      price: 123233,
      name: "asfda2",
      model: "f2ijsd1",
      fan: 8,
      chain: ["GS", "CJ", "HANJIN", "etc"],
      address: {
        city: "seoul",
        state: "guro",
      },
    };
  }

  var headphone = {
    "serial-number": "SN1293012",
    modelName: "XM-5",
    manufacture: "Sony",
    type: "over-ear",
    power: false,
    powerOn: function () {
      console.log(this.modelName, "이 켜집니다.");
      this.power = true;
    },
    powerOff: function () {
      console.log(this.modelName, "이 꺼집니다.");
      this.power = false;
    },
  };

  console.log(headphone, typeof headphone);

  console.log(headphone.modelName);
  console.log(headphone["modelName"]);

  console.log(headphone["serial-number"]);
  // 보통 카멜케이스를 사용하긴하지만, 카멜케이스외에도 중간중간 특수문자(- 등)이 껴있으면
  // 해당 문자를 객체.으로 표현할 수 없음. ==> 중간에 -가있으면 -를 붙이는게 아니라 산술(-)을 하려하기때문.
  //그럴 때 객체명.속성명 대신 객체명["속성명"]으로 사용가능.

  headphone.powerOn();
  console.log(headphone.power);

  headphone.powerOff();
  console.log(headphone.power);
};
