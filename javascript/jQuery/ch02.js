$().ready(function () {
  $("li").text("서울");
  //   $("li").ep(1).text("서울"); // 두 번째 li를 서울로 바꾼다.

  // 클래스가 promo인 것의 텍스트를 "부산"으로 변경한다.
  $(".promo").text("부산");

  // id가 "destinations"인 태그의 자식 요소 중 두번째 li의 텍스트를 "경주"로 변경한다.
  // id는 .이 아니라 #을 사용함.
  $("#destinations > li:nth-child(2)").text("경주");
});

// window.onload = function () {
//   // 모든 li 태그를 가져와서 내용을 "서울"로 변경한다.
//   var listItems = document.querySelectorAll("li");
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].innerText = "서울"
//     }

//   listItems.innerText = "서울";
// };
