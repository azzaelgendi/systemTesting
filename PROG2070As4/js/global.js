function show_form() {
    $("#formDiv").show();
    console.info("form");
}

function init() {
    console.info("Dom is ready");

    $("#btnshow").on("click", show_link);
    $("#name").on("change", MyFirstUpper);
    $("#showSA").on("click",show_history);
    $("#newSearch").on("click",show_form);
    $("#preSearch").on("click",show_history);
    $("#btnSubmit").on("click",save_database);
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
        console.error("Error: (Fatal) Error in initDB(). Cannot proceed"+e);
    }
}

//ready function
$(document).ready(function () {

    init();
    AEinitDB();

});

