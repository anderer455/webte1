
let plz_work = [];

document.addEventListener("DOMContentLoaded", () => {

    const miesto = document.getElementById("DDD");

    // HEADER(LOGO + NAMEDAY)
    let dateTimeName = document.createElement("div")
    dateTimeName.id = "dateTimeName"
    miesto.appendChild(dateTimeName)

    let title = document.createElement("div")
    title.id = "title"
    miesto.append(title)

    let logo = document.createElement("img")
    logo.setAttribute("src","assets/carlogo.png")
    logo.style.width = "132px"
    
    let pageName = document.createElement("h1")
    pageName.innerHTML = "SupremeCars"

    title.appendChild(logo)
    title.appendChild(pageName)    

    miesto.appendChild(document.createElement("hr"))

    // MENU
    let d1 = document.createElement("div")
    d1.setAttribute("class", "row")
    miesto.appendChild(d1)

    let d2 = document.createElement("div")
    d2.setAttribute("class", "col-md-6")
    d2.setAttribute("style", "display: block;")
    d1.appendChild(d2)

    let ul1 = document.createElement("ul")
    ul1.setAttribute("class", "Menu -horizontal")
    d2.appendChild(ul1)
    
    //Home

    let home = document.createElement("li")
    let Ahome = document.createElement("a")
    Ahome.setAttribute("href", "index.html")
    let homeIcon = document.createElement("i")
    homeIcon.classList.add("fa-home")
    homeIcon.classList.add("fas")
    homeIcon.style.marginRight = "5px"
    let linkTextHome = document.createTextNode("Domov");

    ul1.appendChild(home)
    Ahome.appendChild(homeIcon)
    home.appendChild(Ahome)
    Ahome.appendChild(linkTextHome)
    
    //About
    let about = document.createElement("li")
    let Aabout = document.createElement("a")
    Aabout.setAttribute("href", "about.html")
    let linkTextAbout = document.createTextNode("O nás");                

    ul1.appendChild(about)
    about.appendChild(Aabout)
    Aabout.appendChild(linkTextAbout)

    //Ponuka

    let galery = document.createElement("li")
    galery.setAttribute("class", "-hasSubmenu")
    let Agalery = document.createElement("a")
    Agalery.setAttribute("href", "#")
    let linkTextGalery = document.createTextNode("Ponuka");

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
    aa.setAttribute("href", "#")
    aa.classList.add("menuCarBrand")
    let linkText = document.createTextNode("Audi");

    let carLogoAudi = document.createElement("img");
    carLogoAudi.setAttribute("src", "./assets/cars-logo/AUDI-logo.png")
    carLogoAudi.style.width = "5vh"


    lii.appendChild(aa)                  
    aa.appendChild(linkText)
    aa.appendChild(carLogoAudi)


    let ul3A = document.createElement("ul")
    
    lii.appendChild(ul3A)
    

    let li1 = document.createElement("li")
    li1.classList.add("noSubmenu")
    let aa1 = document.createElement("a")
    aa1.setAttribute("href", "A8L.html")
    aa1.classList.add("menuCarBrand")
    let linkTextLi1 = document.createTextNode("A8L");
    ul3A.appendChild(li1)
    li1.appendChild(aa1)                
    aa1.appendChild(linkTextLi1)

    let thumbnailA8l = document.createElement("img");
    thumbnailA8l.setAttribute("src", "./assets/cars-thumbnails/a8l-thumbnail.png")
    thumbnailA8l.style.width = "12vh"
    aa1.appendChild(thumbnailA8l)


    let li2 = document.createElement("li")
    li2.classList.add("noSubmenu")
    let aa2 = document.createElement("a")
    aa2.setAttribute("href", "RS7.html")
    aa2.classList.add("menuCarBrand")
    let linkTextLi2 = document.createTextNode("RS 7 Sportback");
    ul3A.appendChild(li2)
    li2.appendChild(aa2)
    aa2.appendChild(linkTextLi2)

    let thumbnailRs7 = document.createElement("img");
    thumbnailRs7.setAttribute("src", "./assets/cars-thumbnails/rs7sb-thumbnail.png")
    thumbnailRs7.style.width = "12vh"
    aa2.appendChild(thumbnailRs7)

    let li3 = document.createElement("li")
    li3.classList.add("noSubmenu") 
    let aa3 = document.createElement("a")
    aa3.setAttribute("href", "RSQ8.html")
    aa3.classList.add("menuCarBrand")
    let linkTextLi3 = document.createTextNode("RS Q8");
    ul3A.appendChild(li3)
    li3.appendChild(aa3)
    aa3.appendChild(linkTextLi3)

    let thumbnailRsq8 = document.createElement("img");
    thumbnailRsq8.setAttribute("src", "./assets/cars-thumbnails/rsq8-thumbnail.png")
    thumbnailRsq8.style.width = "12vh"
    aa3.appendChild(thumbnailRsq8)


    // BMW

    let liiB = document.createElement("li")
    liiB.setAttribute("class", "-hasSubmenu")
    
    ul2.appendChild(liiB)

    let aaB = document.createElement("a")
    aaB.setAttribute("href", "#")
    aaB.classList.add("menuCarBrand")
    let linkTextB = document.createTextNode("BMW");

    let carLogoBmw = document.createElement("img");
    carLogoBmw.setAttribute("src", "./assets/cars-logo/BMW-logo.png")
    carLogoBmw.style.width = "4vh"


    liiB.appendChild(aaB)
    aaB.appendChild(linkTextB)
    aaB.appendChild(carLogoBmw)

    let ul3B = document.createElement("ul")
    
    liiB.appendChild(ul3B)

    let li1B = document.createElement("li")
    li1B.classList.add("noSubmenu")
    let aa1B = document.createElement("a")
    aa1B.setAttribute("href", "850i.html")
    aa1B.classList.add("menuCarBrand")
    let linkTextLi1B = document.createTextNode("850i Cabrio");
    ul3B.appendChild(li1B)
    li1B.appendChild(aa1B)
    aa1B.appendChild(linkTextLi1B)

    let thumbnail850i = document.createElement("img");
    thumbnail850i.setAttribute("src", "./assets/cars-thumbnails/bmw8-thumbnail.png")
    thumbnail850i.style.width = "12vh"
    aa1B.appendChild(thumbnail850i)


    let li2B = document.createElement("li")
    li2B.classList.add("noSubmenu")
    let aa2B = document.createElement("a")
    aa2B.setAttribute("href", "M5.html")
    aa2B.classList.add("menuCarBrand")
    let linkTextLi2B = document.createTextNode("M5 Competition");
    ul3B.appendChild(li2B)
    li2B.appendChild(aa2B)
    aa2B.appendChild(linkTextLi2B)

    let thumbnailM5 = document.createElement("img");
    thumbnailM5.setAttribute("src", "./assets/cars-thumbnails/bmwm5-thumbnail.png")
    thumbnailM5.style.width = "12vh"
    aa2B.appendChild(thumbnailM5)

    let li3B = document.createElement("li") 
    li3B.classList.add("noSubmenu")
    let aa3B = document.createElement("a")
    aa3B.setAttribute("href", "X6M.html")
    aa3B.classList.add("menuCarBrand")
    let linkTextLi3B = document.createTextNode("X6 M");
    ul3B.appendChild(li3B)
    li3B.appendChild(aa3B)
    aa3B.appendChild(linkTextLi3B)

    let thumbnailX6 = document.createElement("img");
    thumbnailX6.setAttribute("src", "./assets/cars-thumbnails/bmwx6m-thumbnail.png")
    thumbnailX6.style.width = "10.5vh"
    aa3B.appendChild(thumbnailX6)
    

    // Mercedes Benz
    
    let liiM = document.createElement("li")
    liiM.setAttribute("class", "-hasSubmenu")
    
    ul2.appendChild(liiM)

    let aaM = document.createElement("a")
    aaM.setAttribute("href", "#")
    aaM.classList.add("menuCarBrand")
    let linkTextM = document.createTextNode("Mercedes Benz");

    let carLogoMb = document.createElement("img");
    carLogoMb.setAttribute("src", "./assets/cars-logo/MB-logo.png")
    carLogoMb.style.width = "4vh"

    liiM.appendChild(aaM)
    aaM.appendChild(linkTextM)
    aaM.appendChild(carLogoMb)

    let ul3M = document.createElement("ul")
    
    liiM.appendChild(ul3M)

    let li1M = document.createElement("li")
    li1M.classList.add("noSubmenu")
    let aa1M = document.createElement("a")
    aa1M.setAttribute("href", "GLS63.html")
    aa1M.classList.add("menuCarBrand")
    let linkTextLi1M = document.createTextNode("GLS 63 4MATIC+");
    ul3M.appendChild(li1M)
    li1M.appendChild(aa1M)
    aa1M.appendChild(linkTextLi1M)

    let thumbnailGLS = document.createElement("img");
    thumbnailGLS.setAttribute("src", "./assets/cars-thumbnails/gls-thumbnail.png")
    thumbnailGLS.style.width = "10.5vh"
    aa1M.appendChild(thumbnailGLS)

    let li2M = document.createElement("li")
    li2M.classList.add("noSubmenu")
    let aa2M = document.createElement("a")
    aa2M.setAttribute("href", "GT63S.html")
    aa2M.classList.add("menuCarBrand")
    let linkTextLi2M = document.createTextNode("GT 63 S 4MATIC+");
    ul3M.appendChild(li2M)
    li2M.appendChild(aa2M)
    aa2M.appendChild(linkTextLi2M)

    let thumbnailGT = document.createElement("img");
    thumbnailGT.setAttribute("src", "./assets/cars-thumbnails/gt63s-thumbnail.png")
    thumbnailGT.style.width = "10.5vh"
    aa2M.appendChild(thumbnailGT)

    let li3M = document.createElement("li")
    li3M.classList.add("noSubmenu") 
    let aa3M = document.createElement("a")
    aa3M.setAttribute("href", "S500.html")
    aa3M.classList.add("menuCarBrand")
    let linkTextLi3M = document.createTextNode("S 500 4MATIC");
    ul3M.appendChild(li3M)
    li3M.appendChild(aa3M)
    aa3M.appendChild(linkTextLi3M)

    let thumbnailS = document.createElement("img");
    thumbnailS.setAttribute("src", "./assets/cars-thumbnails/s-thumbnail.png")
    thumbnailS.style.width = "10.5vh"
    aa3M.appendChild(thumbnailS)
    

    // Porsche
    
    let liiP = document.createElement("li")
    liiP.setAttribute("class", "-hasSubmenu")
    
    ul2.appendChild(liiP)

    let aaP = document.createElement("a")
    aaP.setAttribute("href", "#")
    aaP.classList.add("menuCarBrand")
    let linkTextP = document.createTextNode("Porsche");

    let carLogoPorsche = document.createElement("img");
    carLogoPorsche.setAttribute("src", "./assets/cars-logo/PORSCHE-logo.png")
    carLogoPorsche.style.width = "3.4vh"

    liiP.appendChild(aaP)
    aaP.appendChild(linkTextP)
    aaP.appendChild(carLogoPorsche)

    let ul3P = document.createElement("ul")
    
    liiP.appendChild(ul3P)

    let li1P = document.createElement("li")
    li1P.classList.add("noSubmenu")
    let aa1P = document.createElement("a")
    aa1P.setAttribute("href", "911TurboS.html")
    aa1P.classList.add("menuCarBrand")
    let linkTextLi1P = document.createTextNode("911 Turbo S");
    ul3P.appendChild(li1P)
    li1P.appendChild(aa1P)
    aa1P.appendChild(linkTextLi1P)

    let thumbnail911S = document.createElement("img");
    thumbnail911S.setAttribute("src", "./assets/cars-thumbnails/911ts-thumbnail.png")
    thumbnail911S.style.width = "10.5vh"
    aa1P.appendChild(thumbnail911S)

    let li2P = document.createElement("li")
    li2P.classList.add("noSubmenu")
    let aa2P = document.createElement("a")
    aa2P.setAttribute("href", "CayenneTurbo.html")
    aa2P.classList.add("menuCarBrand")
    let linkTextLi2P = document.createTextNode("Cayenne Turbo Coupé");
    ul3P.appendChild(li2P)
    li2P.appendChild(aa2P)
    aa2P.appendChild(linkTextLi2P)

    let thumbnailCayS = document.createElement("img");
    thumbnailCayS.setAttribute("src", "./assets/cars-thumbnails/cayenneS-thumbnail.png")
    thumbnailCayS.style.width = "10.5vh"
    aa2P.appendChild(thumbnailCayS)

    // Game
    let game = document.createElement("li")
    game.setAttribute("class", "-hasSubmenu")
    let aGame = document.createElement("a")
    aGame.setAttribute("href", "#")
    let linkTextGame = document.createTextNode("Hry")             
    
    ul1.appendChild(game)
    game.appendChild(aGame)
    aGame.appendChild(linkTextGame)

    let ulGames = document.createElement("ul")
    game.appendChild(ulGames)

    // adam
    let liAdamGame = document.createElement("li")    
    ulGames.appendChild(liAdamGame)
    
    let aAdamGame = document.createElement("a")
    aAdamGame.setAttribute("href", "game.html")
    liAdamGame.appendChild(aAdamGame)

    let textAdamGame = document.createTextNode("Adam Trebichalský")
    aAdamGame.appendChild(textAdamGame)

    // filip m
    let liFlipmGame = document.createElement("li")    
    ulGames.appendChild(liFlipmGame)
    
    let aFilipmGame = document.createElement("a")
    aFilipmGame.setAttribute("href", "#")
    liFlipmGame.appendChild(aFilipmGame)

    let textFilipmGame = document.createTextNode("Filip Michal Gajdoš")
    aFilipmGame.appendChild(textFilipmGame)

    // filip
    let liFilipGame = document.createElement("li")    
    ulGames.appendChild(liFilipGame)
    
    let aFilipGame = document.createElement("a")
    aFilipGame.setAttribute("href", "#")
    liFilipGame.appendChild(aFilipGame)

    let textFilipGame = document.createTextNode("Filip Ferko")
    aFilipGame.appendChild(textFilipGame)

    // andrej
    let liAndrejGame = document.createElement("li")    
    ulGames.appendChild(liAndrejGame)
    
    let aAndrejGame = document.createElement("a")
    aAndrejGame.setAttribute("href", "#")
    liAndrejGame.appendChild(aAndrejGame)

    let textAndrejGame = document.createTextNode("Andrej Urbanek")
    aAndrejGame.appendChild(textAndrejGame)

    //Contact
    let contact = document.createElement("li")
    let Acontact = document.createElement("a")
    Acontact.setAttribute("href", "contact.html")
    linkTextContact = document.createTextNode("Kontakt");

    ul1.appendChild(contact)
    contact.appendChild(Acontact)
    Acontact.appendChild(linkTextContact)
    
    // Search

    let d2S = document.createElement("div");
    d2S.setAttribute("class", "col-md-6");
    d2S.setAttribute("style", "float: right;");
    d2S.id = "searchBarContainer";
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
    let TextBtn = document.createTextNode("Search");

    form.appendChild(input);
    form.appendChild(btn);
    btn.appendChild(TextBtn);

    // Date/Time

    let topDiv = document.getElementById("dateTimeName")
    let date = document.createElement("p");
    date.setAttribute("id","datetime");
    topDiv.appendChild(date);
    function date_time() {
        let dt = new Date();
        document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
    }
    const interval = setInterval(date_time(), 1000);
    

    //Name Day

    let name_day = document.createElement("p");
    name_day.setAttribute("id","name_day");    
    topDiv.appendChild(name_day);

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
    nav.id = "breadcrumbs"
    header.appendChild(nav)

    // let ol = document.createElement("ol")
    // ol.setAttribute("id", "breadcrumbs")
    // nav.appendChild(ol)


    // Search names/dates

    function search(event) {
        event.preventDefault();
        let search = document.getElementById("search").value;
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (numbers.includes(search[0])) {
            console.log(true)
            let date;
            if (search[2] == "." && search[5] == ".") {
                let tmp = [];
                tmp.push(search[3]);
                tmp.push(search[4]);
                tmp.push(search[0]);
                tmp.push(search[1]);
                date = tmp.join("");
                console.log(date);

            }
            else if (search[1] == "." && search[3] == ".") {
                let tmp = [];
                tmp.push("0");
                tmp.push(search[2]);
                tmp.push("0");
                tmp.push(search[0]);
                date = tmp.join("");
                console.log(date);

            }
            else if (search[2] == "." && search[4] == ".") {
                let tmp = [];
                tmp.push("0");
                tmp.push(search[3]);
                tmp.push(search[0]);
                tmp.push(search[1]);
                date = tmp.join("");
                console.log(date);
            }
            else {
                let tmp = [];
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
                document.getElementById("modal_text").innerHTML = "Zadali ste zlý formát! Povolené formáty sú DD.MM. alebo meno."
        }
        else {
            document.getElementById("modal_text").innerHTML = "Musíte zatať dátum v tvare DD.MM. alebo meno ktoré chcete vyhľadať."
        }
    }

    form.addEventListener('submit', search);
    Ahome.addEventListener('click', store_breadcrumbs());

    breadcrumbs();

    // Modal
    let modal1 = document.createElement("div")
    modal1.classList.add("modal","fade")
    modal1.id = "modal"
    modal1.setAttribute("tabinder","-1")
    modal1.setAttribute("role","dialog")

    let modal2 = document.createElement("div")
    modal2.classList.add("modal-dialog")
    modal2.setAttribute("role","document")
    modal1.appendChild(modal2)

    let modal3 = document.createElement("div")
    modal3.classList.add("modal-content")
    modal2.appendChild(modal3)    
    
    let modal4 = document.createElement("div")
    modal4.classList.add("modal-body")
    modal3.appendChild(modal4)

    let p = document.createElement("p")
    p.id = "modal_text"
    modal4.appendChild(p)

    let modal5 = document.createElement("div")
    modal5.classList.add("modal-footer")
    modal3.appendChild(modal5)
    
    document.body.append(modal1)    
    
    // Page views counter
    let divViews = document.createElement('div')
    divViews.id = "cntr"
    document.body.append(divViews)    
    
    let myStorage = window.localStorage, pageCount;
    window.addEventListener('load', function(){
    if(!myStorage.getItem("pageCount")){
        myStorage.setItem("pageCount", 1);
    } else {
        pageCount = parseInt(myStorage.getItem("pageCount"));
        let newCount = pageCount + 1;
        myStorage.setItem("pageCount", newCount);
    }
    document.getElementById("cntr").innerHTML = "Page views: " + myStorage.getItem("pageCount");
    });     
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
            a.innerHTML = "Domov";
        else if (local[i].includes("about"))
            a.innerHTML = "O nás";
        else if (local[i].includes("contact"))
            a.innerHTML = "Kontakt";
        else if (local[i].includes("game"))
            a.innerHTML = "Hra";
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


