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
function MyToLowerCaseAll(text) {
    text.value = text.value.toLowerCase().trim();
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
    $(location).prop('href', "../index.html");


}
