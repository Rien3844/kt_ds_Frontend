window.onload = function () {
  var array = [];

  var push = this.document.querySelector(".push");
  var pop = this.document.querySelector(".pop");
  var unshift = this.document.querySelector(".unshift");
  var shift = this.document.querySelector(".shift");

  push.addEventListener("click", function () {
    array.push(array.length + 1);

    console.log(array);
  });

  pop.addEventListener("click", function () {
    var value = array.pop();

    console.log("value = ", value, "array = ", array);
  });

  unshift.addEventListener("click", function () {
    array.unshift();

    console.log(array);
  });

  shift.addEventListener("click", function () {
    var value = array.shift(array.length + 1);

    console.log("value = ", value, "array = ", array);
  });
};
