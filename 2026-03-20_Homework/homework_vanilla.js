window.onload = function () {
  var itemCount = document.querySelectorAll(".item-lists > li").length;
  var addButton = this.document.querySelector(".add-item");

  var itemList = document.querySelector(".item-lists");

  addButton.addEventListener("click", function () {
    if (itemCount < 10) {
      var item = document.createElement("li");
      itemCount++;
      item.textContent = "아이템 목록" + itemCount;

      itemList.appendChild(item);

      itemList.textContent = "총 " + itemCount + "개의 아이템이 등록되었습니다.";
    } else {
      alert("더 이상 추가할 수 없습니다.");
    }
  });

  var removeButton = document.querySelector(".all-item-remove");

  removeButton.addEventListener("click", function () {
    if (itemCount !== 0) {
      itemCount = 0;

      itemList.innerHTML = "";

      document.querySelector(".item-status").textContent = "총 " + itemCount + "개의 아이템이 등록되었습니다.";
    } else {
      alert("이미 모든 아이템이 제거되었습니다.");
    }
  });
};
