$().ready(function () {
  // 새로운 p 태그를 만든다. 내용은 after라고 한다.
  // 새로운 p 태그는 wrapper 바깥 아래쪽에 위치한다.
  var newP1 = $("<p>");
  newP1.text("after");

  $(".wrapper").after(newP1);
  console.log(newP1);

  // 새로운 p 태그를 만든다. 내용은 before라고 한다.
  // 새로운 p 태그는 wrapper 바깥 위쪽에 위치한다.
  var newP2 = $("<p>");
  newP2.text("before");

  $(".wrapper").before(newP2);
  console.log(newP2);

  // 새로운 p 태그를 만든다. 내용은 prepend라고 한다.
  // 새로운 p 태그는 wrapper 안쪽 위에 위치한다.
  var newP3 = $("<p>");
  newP3.text("prepend");

  $(".wrapper").prepend(newP3);
  console.log(newP3);

  // 새로운 p 태그를 만든다. 내용은 append라고 한다.
  // 새로운 p 태그는 wrapper 안쪽 아래에 위치한다.
  var newP4 = $("<p>");
  newP4.text("append");

  $(".wrapper").append(newP4);
  console.log(newP4);

  //  새로운 div 태그를 만든다. 내용은 "newDiv"로 한다.
  //  새로운 div 태그는 ".a" 바깥 아래쪽에 위치한다.
  var newD = $("<div>");
  newD.text("newDiv");

  $(".a").after(newD);

  //  새로운 div 태그를 만든다. 내용은 "newDiv2"로 한다.
  //  새로운 div 태그는 ".c" 바깥 위쪽에 위치한다.
  var newD2 = $("<div>");
  newD2.text("newDiv2");

  $(".c").before(newD2);

  //  새로운 span 태그를 만든다. 내용은 "newSpan"로 한다.
  //  새로운 span 태그는 ".b" 안쪽 아래쪽에 위치한다.
  var newSpan = $("<span>");
  newSpan.text("newSpan");

  $(".b").append("newSpan");
});
