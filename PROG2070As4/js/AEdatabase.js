/**
 * File Name: AEdatabase.js
 *
 * Revision History:
 *       Azza Elgendy, March 31st: Created
 *       edited April 1st
 */

var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + "): " + error.message);


}

// This var is an object
var DB = {

    // Whenever we create a function onside an object we follow this approach: "functionName: functionBody() {}"
    AECreateDatabase: function () {


        //


        //
        var shortName = "CarDB";
        var version = "1.0";
        var displayName = "DB for cars sellers app";
        var dbSize = 2 * 1024 * 1024; // this is a 2 MB estimated size

        function dbCreate() {
            console.info("Success: Database created successfully");
        }

        // openDatabase() creates a DB if it doesn't exist, or open it if it exists
        db = openDatabase(shortName, version, displayName, dbSize, dbCreate);
    },
    AECreateTables: function () {
        function txFunction(tx) {
            var options = [];


           var sql = "CREATE TABLE IF NOT EXISTS seller( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(30) NOT NULL," +
                "email VARCHAR(30)," +
                "city TEXT," +
                "phone TEXT," +
                "model VARCHAR(1)," +
                "make VARCHAR(1)," +
                "year VARCHAR(1)," +
                "link VARCHAR(1))";
            tx.executeSql(sql, options, successCreate, errorHandler);

            function successCreate() {
                console.info("Table created successfully");
            }


        }

        function successTransaction() {
            console.info("Create table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    AEdropTables: function () {
        function txFunction(tx) {
            var options = [];

            var sql = "DROP TABLE IF EXISTS seller;";
            tx.executeSql(sql, options, AEsuccessDropSeller, errorHandler);

            function AEsuccessDropSeller() {
                console.info("Table seller dropped successfully");
            }


        }

        function successTransaction() {
            console.info("Drop table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
