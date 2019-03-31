/**
 * File Name: AEdfeedback.js
 *
 * Revision History:
 *       Azza Elgendy, March 2nd : Created
 *       March 25th :Edited
 */
// Review table CRUD
var Review = {
    AEinsert: function (options, callback) {

        function txFunction(tx) {
            var sql = "INSERT INTO seller(name, email, city, phone" +
                ",model,make,year,link) VALUES(?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    AEupdate: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE seller SET name=?, email=?, city=?, phone=?" +
                ",model=?,make=?,year=?,link=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    AEdelete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM seller WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    AEselect: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM seller WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    AEselectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM seller;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("SelectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
};



