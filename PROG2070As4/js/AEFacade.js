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

function callHistoryList() {
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
    var data = localStorage.getItem("carsList");
    var carHistory = JSON.parse(data);
    for (var i = 0; i < carHistory.length; i++) {
        // Appending all the "saved data" inside the html code
        htmlCode += "<tr>" +
            "<td>" + carHistory[i].name + "</td>" +
            "<td>" + carHistory[i].email + "</td>" +
            "<td>" + carHistory[i].city + "</td>" +
            "<td>" + carHistory[i].phone + "</td>" +
            "<td>" + carHistory[i].make + "</td>" +
            "<td>" + carHistory[i].model + "</td>" +
            "<td>" + carHistory[i].year + "</td>" +
            "<td>" + "<a href=\"http://www.jdpower.com/cars/" + carHistory[i].make + "/" + carHistory[i].model + "/" + carHistory[i].year + "\">JD Power Site</a>" + "</td>" +
            "</tr>";

    }
    var lv = $("#AESearchList");
    lv = lv.html(htmlCode);
}
