$().ready(function () {
  var listItems = $("#destinations").children("li"); // ==> #destinations > li
  console.log(listItems);

  //  listItems[i].addEventListener("click", function (event) {});
  listItems.on("click", function () {
    //  console.log("클릭한 태그의 내용 : ", event.target.innerText);
    console.log("클릭한 태그의 내용", this);

    //  console.log(
    //  "클릭한 태그 이전 태그의 내용 : ",
    //  event.target.previousElementSibling.innerText,
    //  );
    console.log("클릭한 태그 이전 태그의 내용 : ", $(this).prev().text());

    //       console.log(
    //         "클릭한 태그 이후의 태그와 내용",
    //         event.target.nextElementSibling.innerText,
    //       );
    console.log("클릭한 태그 이후 태그의 내용 : ", $(this).next().text());

    console.log("클릭한 태그 부모 태그의 내용 : ", $(this).parent().text());
  });
});

// window.onload = function () {
//   var listItems = document.querySelectorAll("#destinations > li");

//   for (var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function (event) {
//       console.dir(event.target);

//       console.log("클릭한 태그의 내용 : ", event.target.innerText);
//       console.log(
//         "클릭한 태그 이전 태그의 내용 : ",
//         event.target.previousElementSibling.innerText,
//       );
//       console.log(
//         "클릭한 태그 이후의 태그와 내용",
//         event.target.nextElementSibling.innerText,
//       );
//     });
//   }
// };
