function newItem() {
    // 1. The user can add a new item to a list of items
    let inputValue = $("#input").val();
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        $("#list").append("<li>" + inputValue + "</li>");
    }

    // 2. The user can cross out an item from the list of items.
    $("li").dblclick(function () {
        $(this).toggleClass("strike");
    });

    // 3. The user can delete an item from the list of items.
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    $("li").append(crossOutButton);

    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    $(crossOutButton).click(function () {
        $(this).parent().addClass("delete");
    });

    // 4. The user can change the order of items in the list of items.
    $("#list").sortable();
}
