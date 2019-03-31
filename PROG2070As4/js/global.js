

function init() {
    console.info("Dom is ready");

    $("#btnshow").on("click", show_link);
    $("#AEUpdate").on("click", save_database);
    $("#name").on("change", MyFirstUpper);
    $("#btnSubmit").on("click", btnSubmit_click);
    $("#showSA").on("click",show_history);
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
    AEinitDB();
    init();


});

