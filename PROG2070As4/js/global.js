function show_form() {
    $("#formDiv").show();
    console.info("form");
}

function clear_click() {
    localStorage.clear();
    console.info("Local storage cleared");
}

function init() {
    console.info("Dom is ready");

    $("#btnshow").on("click", show_link);
    $("#name").on("change", MyFirstUpper);
    $("#showSA").on("click",callHistoryList);
    $("#newSearch").on("click",show_form);
    $("#preSearch").on("click",callHistoryList);
    $("#btnSubmit").on("click",saveToLocalStorage);
    $("#clear").on("click",clear_click);
}


//ready function
$(document).ready(function () {

    init();
});

