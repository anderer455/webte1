
var plz_work = [];

document.addEventListener("DOMContentLoaded", () => {

    const miesto = document.getElementById("DDD");
    let d1 = document.createElement("div")
    d1.setAttribute("class", "row")
    miesto.appendChild(d1)

    let d2 = document.createElement("div")
    d2.setAttribute("class", "col-md-6")
    d2.setAttribute("style", "display: block;")
    d1.appendChild(d2)

    let ul1 = document.createElement("ul")
    ul1.setAttribute("id", "sitemaps")
    ul1.setAttribute("class", "Menu -horizontal")
    d2.appendChild(ul1)

    //Home

    let home = document.createElement("li")
    let Ahome = document.createElement("a")
    Ahome.setAttribute("href", "index.html")
    // Ahome.setAttribute("class", "bg-info")

    var linkTextHome = document.createTextNode("Home");

    //About
    let about = document.createElement("li")
    let Aabout = document.createElement("a")
    Aabout.setAttribute("href", "about.html")
    var linkTextAbout = document.createTextNode("About");


    ul1.appendChild(home)
    home.appendChild(Ahome)
    Ahome.appendChild(linkTextHome)

    ul1.appendChild(about)
    about.appendChild(Aabout)
    Aabout.appendChild(linkTextAbout)

    //Gallery

    let galery = document.createElement("li")
    galery.setAttribute("class", "-hasSubmenu")
    let Agalery = document.createElement("a")
    Agalery.setAttribute("href", "#")
    var linkTextGalery = document.createTextNode("Gallery");

    ul1.appendChild(galery)
    galery.appendChild(Agalery)
    Agalery.appendChild(linkTextGalery)

    let ul2 = document.createElement("ul")
    galery.appendChild(ul2)


    // Tu zacinaju znacky a typy aut (2-3 vrstva menu)

    // Audi

    let lii = document.createElement("li")
    lii.setAttribute("class", "-hasSubmenu")

    ul2.appendChild(lii)

    let aa = document.createElement("a")
    aa.setAttribute("href", "audi.html")
    aa.classList.add("carBrand")
    var linkText = document.createTextNode("Audi");

    let carLogoAudi = document.createElement("img");
    carLogoAudi.setAttribute("src", "./assets/cars-logo/AUDI-logo.png")
    carLogoAudi.style.width = "5vh"


    lii.appendChild(aa)
    aa.appendChild(linkText)
    aa.appendChild(carLogoAudi)


    let ul3A = document.createElement("ul")

    lii.appendChild(ul3A)

    let li1 = document.createElement("li")
    let aa1 = document.createElement("a")
    aa1.setAttribute("href", "A8L.html")
    var linkTextLi1 = document.createTextNode("A8L");
    ul3A.appendChild(li1)
    li1.appendChild(aa1)
    aa1.appendChild(linkTextLi1)

    let li2 = document.createElement("li")
    let aa2 = document.createElement("a")
    aa2.setAttribute("href", "RS7.html")
    var linkTextLi2 = document.createTextNode("RS 7 Sportback");
    ul3A.appendChild(li2)
    li2.appendChild(aa2)
    aa2.appendChild(linkTextLi2)

    let li3 = document.createElement("li")
    let aa3 = document.createElement("a")
    aa3.setAttribute("href", "RSQ8.html")
    var linkTextLi3 = document.createTextNode("RS Q8");
    ul3A.appendChild(li3)
    li3.appendChild(aa3)
    aa3.appendChild(linkTextLi3)


    // BMW

    let liiB = document.createElement("li")
    liiB.setAttribute("class", "-hasSubmenu")

    ul2.appendChild(liiB)

    let aaB = document.createElement("a")
    aaB.setAttribute("href", "#")
    aaB.classList.add("carBrand")
    var linkTextB = document.createTextNode("BMW");

    let carLogoBmw = document.createElement("img");
    carLogoBmw.setAttribute("src", "./assets/cars-logo/BMW-logo.png")
    carLogoBmw.style.width = "4vh"


    liiB.appendChild(aaB)
    aaB.appendChild(linkTextB)
    aaB.appendChild(carLogoBmw)

    let ul3B = document.createElement("ul")

    liiB.appendChild(ul3B)

    let li1B = document.createElement("li")
    let aa1B = document.createElement("a")
    aa1B.setAttribute("href", "850i.html")
    var linkTextLi1B = document.createTextNode("850i Cabrio");
    ul3B.appendChild(li1B)
    li1B.appendChild(aa1B)
    aa1B.appendChild(linkTextLi1B)

    let li2B = document.createElement("li")
    let aa2B = document.createElement("a")
    aa2B.setAttribute("href", "M5.html")
    var linkTextLi2B = document.createTextNode("M5 Competition");
    ul3B.appendChild(li2B)
    li2B.appendChild(aa2B)
    aa2B.appendChild(linkTextLi2B)

    let li3B = document.createElement("li")
    let aa3B = document.createElement("a")
    aa3B.setAttribute("href", "X6M.html")
    var linkTextLi3B = document.createTextNode("X6 M");
    ul3B.appendChild(li3B)
    li3B.appendChild(aa3B)
    aa3B.appendChild(linkTextLi3B)


    // Mercedes Benz

    let liiM = document.createElement("li")
    liiM.setAttribute("class", "-hasSubmenu")

    ul2.appendChild(liiM)

    let aaM = document.createElement("a")
    aaM.setAttribute("href", "#")
    aaM.classList.add("carBrand")
    var linkTextM = document.createTextNode("Mercedes Benz");

    let carLogoMb = document.createElement("img");
    carLogoMb.setAttribute("src", "./assets/cars-logo/MB-logo.png")
    carLogoMb.style.width = "4vh"

    liiM.appendChild(aaM)
    aaM.appendChild(linkTextM)
    aaM.appendChild(carLogoMb)

    let ul3M = document.createElement("ul")

    liiM.appendChild(ul3M)

    let li1M = document.createElement("li")
    let aa1M = document.createElement("a")
    aa1M.setAttribute("href", "GLS63.html")
    var linkTextLi1M = document.createTextNode("GLS 63 4MATIC+");
    ul3M.appendChild(li1M)
    li1M.appendChild(aa1M)
    aa1M.appendChild(linkTextLi1M)

    let li2M = document.createElement("li")
    let aa2M = document.createElement("a")
    aa2M.setAttribute("href", "GT63S.html")
    var linkTextLi2M = document.createTextNode("GT 63 S");
    ul3M.appendChild(li2M)
    li2M.appendChild(aa2M)
    aa2M.appendChild(linkTextLi2M)

    let li3M = document.createElement("li")
    let aa3M = document.createElement("a")
    aa3M.setAttribute("href", "S500.html")
    var linkTextLi3M = document.createTextNode("S 500 4MATIC");
    ul3M.appendChild(li3M)
    li3M.appendChild(aa3M)
    aa3M.appendChild(linkTextLi3M)


    // Porsche

    let liiP = document.createElement("li")
    liiP.setAttribute("class", "-hasSubmenu")

    ul2.appendChild(liiP)

    let aaP = document.createElement("a")
    aaP.setAttribute("href", "#")
    aaP.classList.add("carBrand")
    var linkTextP = document.createTextNode("Porsche");

    let carLogoPorsche = document.createElement("img");
    carLogoPorsche.setAttribute("src", "./assets/cars-logo/PORSCHE-logo.png")
    carLogoPorsche.style.width = "3.8vh"

    liiP.appendChild(aaP)
    aaP.appendChild(linkTextP)
    aaP.appendChild(carLogoPorsche)

    let ul3P = document.createElement("ul")

    liiP.appendChild(ul3P)

    let li1P = document.createElement("li")
    let aa1P = document.createElement("a")
    aa1P.setAttribute("href", "911TurboS.html")
    var linkTextLi1P = document.createTextNode("911 Turbo S");
    ul3P.appendChild(li1P)
    li1P.appendChild(aa1P)
    aa1P.appendChild(linkTextLi1P)

    let li2P = document.createElement("li")
    let aa2P = document.createElement("a")
    aa2P.setAttribute("href", "CayenneTurbo.html")
    var linkTextLi2P = document.createTextNode("Cayenne Turbo Coupé");
    ul3P.appendChild(li2P)
    li2P.appendChild(aa2P)
    aa2P.appendChild(linkTextLi2P)

    //Contact
    let contact = document.createElement("li")
    let Acontact = document.createElement("a")
    Acontact.setAttribute("href", "contact.html")
    linkTextContact = document.createTextNode("Contact");

    ul1.appendChild(contact)
    contact.appendChild(Acontact)
    Acontact.appendChild(linkTextContact)

    // Search

    let d2S = document.createElement("div");
    d2S.setAttribute("class", "col-md-6");
    d2S.setAttribute("style", "float: right;");
    d1.appendChild(d2S);

    let form = document.createElement("form");
    form.setAttribute("class", "form-inline my-2 my-lg-0");
    form.setAttribute("style", "float: right; margin-right: 20px;");
    d2S.appendChild(form);

    let input = document.createElement("input");
    input.setAttribute("class", "form-control mr-sm-2");
    input.setAttribute("id", "search");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Search");
    input.setAttribute("aria-label", "Search");

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-secondary my-2 my-sm-0");
    btn.setAttribute("type", "submit");
    btn.setAttribute("data-toggle", "modal");
    btn.setAttribute("data-target", "#modal");
    var TextBtn = document.createTextNode("Search");

    form.appendChild(input);
    form.appendChild(btn);
    btn.appendChild(TextBtn);

    // Date/Time

    let tmp = document.createElement("p");
    tmp.setAttribute("id", "datetime");
    form.appendChild(tmp);
    function date_time() {
        var dt = new Date();
        document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
    }
    const interval = setInterval(date_time(), 1000);

    //Name Day

    let name_day = document.createElement("p");
    name_day.setAttribute("id", "name_day");
    form.appendChild(name_day);

    function loadXMLDoc(dname) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET", dname, false);
        xhttp.send();
        return xhttp.responseXML;
    }

    function get_name() {
        let tmp = new Date();
        let day = tmp.getDate();
        let month = tmp.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        let xmlDoc = loadXMLDoc("meniny.xml");
        let x = xmlDoc.getElementsByTagName("den");
        let size = x.length;
        for (let i = 0; i < size; i++) {
            if (x[i].innerHTML == month + "" + day) {
                let name_day = document.getElementById("name_day")
                if (xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0]) {
                    let linkTextContact = document.createTextNode("Dnes má meniny: " + xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0].innerHTML + ".");
                    name_day.appendChild(linkTextContact);
                }
                else
                    name_day.innerHTML = "V tento deň nemá nikto meniny.";
                break;
            }
        }
    }

    const test = setInterval(get_name(), 1000);

    // Nav - Breadcrumb

    const header = document.getElementById("header");
    let nav = document.createElement("nav")
    nav.setAttribute("aria-label", "breadcrumb")

    header.appendChild(nav)

    let ol = document.createElement("ol")
    ol.setAttribute("id", "breadcrumbs")
    nav.appendChild(ol)


    // Search names/dates

    function search(event) {
        event.preventDefault();
        var search = document.getElementById("search").value;
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (numbers.includes(search[0])) {
            console.log(true)
            var date;
            if (search[2] == "." && search[5] == ".") {
                var tmp = [];
                tmp.push(search[3]);
                tmp.push(search[4]);
                tmp.push(search[0]);
                tmp.push(search[1]);
                date = tmp.join("");
                console.log(date);

            }
            else if (search[1] == "." && search[3] == ".") {
                var tmp = [];
                tmp.push("0");
                tmp.push(search[2]);
                tmp.push("0");
                tmp.push(search[0]);
                date = tmp.join("");
                console.log(date);

            }
            else if (search[2] == "." && search[4] == ".") {
                var tmp = [];
                tmp.push("0");
                tmp.push(search[3]);
                tmp.push(search[0]);
                tmp.push(search[1]);
                date = tmp.join("");
                console.log(date);
            }
            else {
                var tmp = [];
                tmp.push(search[2]);
                tmp.push(search[3]);
                tmp.push("0");
                tmp.push(search[0]);
                date = tmp.join("");
                console.log(date);
            }
            let xmlDoc = loadXMLDoc("meniny.xml");
            let x = xmlDoc.getElementsByTagName("den");
            let size = x.length;
            for (let i = 0; i < size; i++) {
                if (x[i].innerHTML == date) {
                    let name = "";
                    if (xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0]) {
                        name = "V tento deň má/majú meniny: " + xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0].innerHTML + ".";
                        document.getElementById("modal_text").innerHTML = name;
                    }
                    else {
                        name = "V tento deň nemá nikto meniny.";
                        document.getElementById("modal_text").innerHTML = name;
                    }
                    break;
                }
            }

        }
        else if (search.normalize("NFD").replace(/[\u0300-\u036f]/g, "") && search.normalize("NFD").replace(/[\u0300-\u036f]/g, "") != "") {
            const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            search = search.toLowerCase();
            search = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            let chyba = 0;
            for (let i = 0; i < search.length; i++) {
                if (!letters.includes(search[i])) {
                    chyba++;
                    break;
                }
            }
            if (chyba == 0) {

                let xmlDoc = loadXMLDoc("meniny.xml");
                let x = xmlDoc.getElementsByTagName("zaznam");
                let size = x.length;
                for (let j = 0; j < size; j++) {
                    if (x[j].getElementsByTagName("SK")[0]) {
                        let tmp3 = x[j].getElementsByTagName("SK")[0].innerHTML;
                        if (tmp3.toLowerCase().replace(/[\u0300-\u036f]/g, "") == search) { // Only one name in the day
                            let message = "";
                            if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0]) {
                                let tmp2 = xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].innerHTML
                                let den = tmp2[2] + tmp2[3] + "." + tmp2[0] + tmp2[1] + ".";
                                message = "Meniny s menom " + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0].innerHTML + " sú " + den;
                                document.getElementById("modal_text").innerHTML = message;
                            }
                            else {
                                message = "Toto meno sa v slovenskom kalendáry nenachádza.";
                                document.getElementById("modal_text").innerHTML = message;
                            }
                            break;
                        }
                        else if (tmp3.toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(search)) {  // More names in one day
                            let message = "";
                            if (xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0]) {
                                let tmp2 = xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("den")[0].innerHTML
                                let den = tmp2[2] + tmp2[3] + "." + tmp2[0] + tmp2[1] + ".";
                                message = "Meniny s menom " + xmlDoc.getElementsByTagName("zaznam")[j].getElementsByTagName("SK")[0].innerHTML + " sú " + den;
                                document.getElementById("modal_text").innerHTML = message;
                            }
                            else {
                                message = "Toto meno sa v slovenskom kalendáry nenachádza.";
                                document.getElementById("modal_text").innerHTML = message;
                            }
                            break;
                        }
                    }
                }
            }
            else
                document.getElementById("modal_text").innerHTML = "Zadali ste zlá formát! Povolené formáty sú DD.MM. alebo meno."
        }
        else {
            document.getElementById("modal_text").innerHTML = "Musíte zatať dátum v tvare DD.MM. alebo meno ktoré chcete vyhľadať."
        }
    }

    form.addEventListener('submit', search);
    Ahome.addEventListener('click', store_breadcrumbs());

    breadcrumbs();
})

//Breadcrumbs functions

function store_breadcrumbs() {
    let url = document.referrer;
    let local = localStorage.getItem("kys");
    if (!local) {
        local = "";
    }
    local = local.split(',');
    local.push(url);
    localStorage.setItem("kys", local);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function breadcrumbs() {
    let local = localStorage.getItem("kys");
    if (!local) {
        local = " ";
    }
    local = local.split(',');
    if (local[0] == "" || local[0] == " ")
        local.shift();
    if (local.length > 5)
        local.shift();
    local = local.filter(onlyUnique);
    local = local.filter(function (el) {
        return el != null;
    });
    let placeholder = document.getElementById("breadcrumbs");
    for (let i = 0; i < local.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", local[i])
        if (local[i].includes("index"))
            a.innerHTML = "Home";
        else if (local[i].includes("about"))
            a.innerHTML = "About";
        else if (local[i].includes("contact"))
            a.innerHTML = "Contact";
        else if (local[i].includes("A8L"))
            a.innerHTML = "A8L";
        else if (local[i].includes("RS7"))
            a.innerHTML = "RS 7 Sportback";
        else if (local[i].includes("RSQ8"))
            a.innerHTML = "RS Q8";
        else if (local[i].includes("850i"))
            a.innerHTML = "850i Cabrio";
        else if (local[i].includes("M5"))
            a.innerHTML = "M5 Competition";
        else if (local[i].includes("X6M"))
            a.innerHTML = "X6 M";
        else if (local[i].includes("GLS63"))
            a.innerHTML = "GLS 63 4MATIC+";
        else if (local[i].includes("GT63S"))
            a.innerHTML = "GT 63 S";
        else if (local[i].includes("S500"))
            a.innerHTML = "S 500 4MATIC";
        else if (local[i].includes("911TurboS"))
            a.innerHTML = "911 Turbo S";
            else if (local[i].includes("CayenneTurbo"))
            a.innerHTML = "Cayenne Turbo Coupé";
        else
            a.innerHTML = "Home";
        if (i != 0) {
            li.setAttribute("class", "notFirst");
        }
        else {
            li.setAttribute("class", "");
        }
        li.appendChild(a);
        placeholder.appendChild(li);
    }
    localStorage.setItem("kys", local);
}
