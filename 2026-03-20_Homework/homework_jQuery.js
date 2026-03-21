$().ready(function () {
  var itemCount = $(".item-lists").children("li").length;

  $(".add-item").click(function () {
    if (itemCount < 10) {
      var item = $("<li>");
      itemCount++;
      item.text("아이템 목록" + itemCount);
      $(".item-lists").append(item);

      $(".item-status").text("총 " + itemCount + "개의 아이템이 등록되었습니다.");
    } else {
      alert("더 이상 추가할 수 없습니다.");
    }
  });

  $(".all-item-remove").click(function () {
    if (itemCount !== 0) {
      itemCount = 0;
      $(".item-lists").children("li").remove();

      $(".item-status").text("총 " + itemCount + "개의 아이템이 등록되었습니다.");
    } else {
      alert("이미 모든 아이템이 제거되었습니다.");
    }
  });
});
