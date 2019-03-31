

function init() {
    console.info("Dom is ready");

    $("#model").on("change",MyToLowerCaseAll);
    $("#btnshow").on("click", show_link);
    $("#AEUpdate").on("click", save_database);
    $("#name").on("change", MyFirstUpper);
    $("#email").on("change",MyToLowerCaseAll);
    $("#make").on("change",MyToLowerCaseAll);
    $("#city").on("change", MyFirstUpper);
    $("#btnSubmit").on("click", btnSubmit_click);
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

});

