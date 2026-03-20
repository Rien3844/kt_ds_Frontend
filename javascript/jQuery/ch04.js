// $().ready(function () {
//   $(".contact").on("click", function () {
//     console.log(
//       $(".package")
//         .children(".package-deal")
//         .children(".package-deal-comment")
//         .text(),
//     );
//   });
// });
$().ready(function () {
  $(".contact").on("click", function () {
    console.log(
      $(this)
        .prev()
        .find(".package-deal-comment")
        .each(function () {
          console.log($(this).text());
        }),
    );
  });

  $(".package-green-button").on("click", function () {
    var price = $(this).closest(".package").data("price");

    var newP = $("<p>");
    newP.text("From $" + price);

    // 새롭게 만든 p 태그에 inline style을 부여한다.
    // newP.css({ color: "#a5e1fb" });

    // 새롭게 만든 p 태그에 pink-color을 부여한다.
    newP.addClass("pink-color");

    // $(".package-green-button").after(newP);
    // $(".package-green-button").remove();
    // 여러 개의 class를 한곳에서 쓰면, 이렇게 했을 때 같은 class를 가진 모든 요소가 삭제된다.
    // this를 사용해 해결.
    $(this).after(newP);
    $(this).remove();
  });
});
