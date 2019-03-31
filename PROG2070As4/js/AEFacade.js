// trim & first to upper function
function MyFirstUpper() {
    var name = $("#name").val();

    name = name.toLowerCase().trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $("#name").val(name);


}

//all capital letters for postal code
// function MyToLowerCaseAll( ) {
//     $("#carForm :input").val().toLowerCase().trim();
// }

function show_link() {
    $("#formDivR").show();
    var link = "http://www.jdpower.com/cars/" + localStorage.getItem("make") +
        "/" + localStorage.getItem("model") + "/" + localStorage.getItem("year");
    $("#nameR").val(localStorage.getItem("sellerName"));
    $("#phoneR").val(localStorage.getItem("phone"));
    $("#emailR").val(localStorage.getItem("email"));
    $("#cityR").val(localStorage.getItem("city"));
    $("#makeR").val(localStorage.getItem("make"));
    $("#modelR").val(localStorage.getItem("model"));
    $("#yearR").val(localStorage.getItem("year"));
    console.info(link);
    $("#formDivR a").attr('href', link)
}

function save_database() {

    console.info("Saving to database");
    var link = "http://www.jdpower.com/cars/" + localStorage.getItem("make") +
        "/" + localStorage.getItem("model") + "/" + localStorage.getItem("year");
    var name = (localStorage.getItem("sellerName"));
    var phone = (localStorage.getItem("phone"));
    var email = (localStorage.getItem("email"));
    var city = (localStorage.getItem("city"));
    var make = (localStorage.getItem("make"));
    var model = (localStorage.getItem("model"));
    var year = (localStorage.getItem("year"));


    var opt = [name, email, city, phone, make, model, year, link];

    //3. insert into table (by calling insert DAL function and supplying input values
    function callback() {
        console.info("seller inserted successfully");
    }

    Seller.AEinsert(opt, callback);
    alert("New search added");
    // $(location).prop('href', "../index.html");


}

function show_history() {

    alert("want to show history");
    var options = [];

    function callback(tx, results) {
        var htmlCode = "";

        htmlCode +=
            "<tr>" +
            "<th>" + 'Seller Name' + "</th>" +
            "<th>" + 'city' + "</th>" +
            "<th>" + 'Email' + "</th>" +
            "<th style='text-align: right;'>" + 'phone' + "</th>" +
            "<th style='text-align: center;'>" + 'Car Make' + "</th>" +
            "<th>" + 'Car Model' + "</th>" +
            "<th>" + 'Year' + "</th>" +
            "<th>" + 'Link' + "</th>" +
            "</tr>";
        // results.rows.length gets the length
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            // Appending all the "li" inside the html code
            htmlCode += "<tr>" +
                "<td>" + row['name'] + "</td>" +
                "<td>" + row['city'] + "</td>" +
                "<td>" + row['email'] + "</td>" +
                "<td style='text-align: right;'>" + row['phone'] + "</td>" +
                "<td style='text-align: center;'>" + row['make'] + "</td>" +
                "<td>" + row['model'] + "</td>" +
                "<td>" + row['year'] + "</td>" +
                "<td>" + row['link'] + "</td>" +
                "</tr>";
        }
        var lv = $("#AESearchList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");


    }

    Seller.AEselectAll(options, callback);

}
