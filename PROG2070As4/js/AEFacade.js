// trim & first to upper function
function MyFirstUpper() {
    var name = $("#name").val();

    name = name.toLowerCase().trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $("#name").val(name);


}
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
    var options = [];
    function callback(tx, results) {
        var htmlCode = "";

        htmlCode +=
            "<tr>" +
            "<th>" + 'Seller Name' + "</th>" +
            "<th>" + 'city' + "</th>" +
            "<th>" + 'Email' + "</th>" +
            "<th>" + 'phone' + "</th>" +
            "<th>" + 'Car Make' + "</th>" +
            "<th>" + 'Car Model' + "</th>" +
            "<th>" + 'Year' + "</th>" +
            "<th>" + 'Link' + "</th>" +
            "</tr>";
        // results.rows.length gets the length
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            // Appending all the "saved data" inside the html code
            htmlCode += "<tr>" +
                "<td>" + row['name'] + "</td>" +
                "<td>" + row['city'] + "</td>" +
                "<td>" + row['email'] + "</td>" +
                "<td>" + row['phone'] + "</td>" +
                "<td>" + row['make'] + "</td>" +
                "<td>" + row['model'] + "</td>" +
                "<td>" + row['year'] + "</td>" +
                "<td>" + row['link'] + "</td>" +
                "</tr>";
        }
        var lv = $("#AESearchList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        if (results.rows.length<0){
            htmlCode +="<p>"+"You do not have saved search"+"</p>";
            lv = lv.html(htmlCode);
            lv.listview("refresh");
        }
    }

    Seller.AEselectAll(options, callback);

}
