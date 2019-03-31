// trim & first to upper function
function MyFirstUpper() {
    var name = $("#name").val();
    console.info(name);
    name = name.toLowerCase().trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $("#name").val(name);
    console.info(name);

}

//all capital letters for postal code
function MyCapitalAll(text) {
    text.value = text.value.toUpperCase().trim();
}

function show_link() {
    $("#formDivR").show();
    var link = "http://www.jdpower.com/cars/" + localStorage.getItem("make") +
        "/" + localStorage.getItem("model")+ "/" + localStorage.getItem("year");
    $("#nameR").val(localStorage.getItem("sellerName"));
    $("#phoneR").val(localStorage.getItem("phone"));
    $("#emailR").val(localStorage.getItem("email"));
    $("#cityR").val(localStorage.getItem("city"));
    $("#makeR").val(localStorage.getItem("make"));
    $("#modelR").val(localStorage.getItem("model"));
    $("#yearR").val(localStorage.getItem("year"));
    console.info(link);
    $("#formDivR a").attr('href',link)
}

function init() {
    console.info("Dom is ready");
    $("#name").on("change", MyFirstUpper);
    $("#btnshow").on("click", show_link);
}

function AEinitDB() {
    try {
        DB.AECreateDatabase();
        if (db) {
            DB.AECreateTables();
        } else {
            console.error("Error: Cannot create tables: Database does not exist");
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). Cannot proceed");
    }
}

//ready function
$(document).ready(function () {
    init();
    AEinitDB();
    $("#btnSubmit").on("click", btnSubmit_click);
});

