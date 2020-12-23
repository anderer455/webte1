
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
                aa.setAttribute("href", "#")
                aa.classList.add("menuCarBrand")
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
                aa1.classList.add("menuCarBrand")
                var linkTextLi1 = document.createTextNode("A8L");
                ul3A.appendChild(li1)
                li1.appendChild(aa1)                
                aa1.appendChild(linkTextLi1)

                let thumbnailA8l = document.createElement("img");
                thumbnailA8l.setAttribute("src", "./assets/cars-thumbnails/a8l-thumbnail.png")
                thumbnailA8l.style.width = "12vh"
                aa1.appendChild(thumbnailA8l)


                let li2 = document.createElement("li")
                let aa2 = document.createElement("a")
                aa2.setAttribute("href", "#")
                aa2.classList.add("menuCarBrand")
                var linkTextLi2 = document.createTextNode("RS 7 Sportback");
                ul3A.appendChild(li2)
                li2.appendChild(aa2)
                aa2.appendChild(linkTextLi2)

                let thumbnailRs7 = document.createElement("img");
                thumbnailRs7.setAttribute("src", "./assets/cars-thumbnails/rs7sb-thumbnail.png")
                thumbnailRs7.style.width = "12vh"
                aa2.appendChild(thumbnailRs7)

                let li3 = document.createElement("li") 
                let aa3 = document.createElement("a")
                aa3.setAttribute("href", "#")
                aa3.classList.add("menuCarBrand")
                var linkTextLi3 = document.createTextNode("RS Q8");
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
                aa1B.setAttribute("href", "http://www.facebook.com")
                aa1B.classList.add("menuCarBrand")
                var linkTextLi1B = document.createTextNode("850i Cabrio");
                ul3B.appendChild(li1B)
                li1B.appendChild(aa1B)
                aa1B.appendChild(linkTextLi1B)

                let thumbnail850i = document.createElement("img");
                thumbnail850i.setAttribute("src", "./assets/cars-thumbnails/bmw8-thumbnail.png")
                thumbnail850i.style.width = "12vh"
                aa1B.appendChild(thumbnail850i)


                let li2B = document.createElement("li")
                let aa2B = document.createElement("a")
                aa2B.setAttribute("href", "#")
                aa2B.classList.add("menuCarBrand")
                var linkTextLi2B = document.createTextNode("M5 Competition");
                ul3B.appendChild(li2B)
                li2B.appendChild(aa2B)
                aa2B.appendChild(linkTextLi2B)

                let thumbnailM5 = document.createElement("img");
                thumbnailM5.setAttribute("src", "./assets/cars-thumbnails/bmwm5-thumbnail.png")
                thumbnailM5.style.width = "12vh"
                aa2B.appendChild(thumbnailM5)

                let li3B = document.createElement("li") 
                let aa3B = document.createElement("a")
                aa3B.setAttribute("href", "#")
                aa3B.classList.add("menuCarBrand")
                var linkTextLi3B = document.createTextNode("X6 M");
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
                aa1M.setAttribute("href", "http://www.facebook.com")
                aa1M.classList.add("menuCarBrand")
                var linkTextLi1M = document.createTextNode("GLS 63 4MATIC+");
                ul3M.appendChild(li1M)
                li1M.appendChild(aa1M)
                aa1M.appendChild(linkTextLi1M)

                let thumbnailGLS = document.createElement("img");
                thumbnailGLS.setAttribute("src", "./assets/cars-thumbnails/gls-thumbnail.png")
                thumbnailGLS.style.width = "10.5vh"
                aa1M.appendChild(thumbnailGLS)

                let li2M = document.createElement("li")
                let aa2M = document.createElement("a")
                aa2M.setAttribute("href", "#")
                aa2M.classList.add("menuCarBrand")
                var linkTextLi2M = document.createTextNode("GT 63 S");
                ul3M.appendChild(li2M)
                li2M.appendChild(aa2M)
                aa2M.appendChild(linkTextLi2M)

                let thumbnailGT = document.createElement("img");
                thumbnailGT.setAttribute("src", "./assets/cars-thumbnails/gt63s-thumbnail.png")
                thumbnailGT.style.width = "10.5vh"
                aa2M.appendChild(thumbnailGT)

                let li3M = document.createElement("li") 
                let aa3M = document.createElement("a")
                aa3M.setAttribute("href", "#")
                aa3M.classList.add("menuCarBrand")
                var linkTextLi3M = document.createTextNode("S 500 4MATIC");
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
                var linkTextP = document.createTextNode("Porsche");

                let carLogoPorsche = document.createElement("img");
                carLogoPorsche.setAttribute("src", "./assets/cars-logo/PORSCHE-logo.png")
                carLogoPorsche.style.width = "3.4vh"

                liiP.appendChild(aaP)
                aaP.appendChild(linkTextP)
                aaP.appendChild(carLogoPorsche)

                let ul3P = document.createElement("ul")
                
                liiP.appendChild(ul3P)

                let li1P = document.createElement("li")
                let aa1P = document.createElement("a")
                aa1P.setAttribute("href", "http://www.facebook.com")
                aa1P.classList.add("menuCarBrand")
                var linkTextLi1P = document.createTextNode("911 Turbo S");
                ul3P.appendChild(li1P)
                li1P.appendChild(aa1P)
                aa1P.appendChild(linkTextLi1P)

                let thumbnail911S = document.createElement("img");
                thumbnail911S.setAttribute("src", "./assets/cars-thumbnails/911ts-thumbnail.png")
                thumbnail911S.style.width = "10.5vh"
                aa1P.appendChild(thumbnail911S)

                let li2P = document.createElement("li")
                let aa2P = document.createElement("a")
                aa2P.setAttribute("href", "#")
                aa2P.classList.add("menuCarBrand")
                var linkTextLi2P = document.createTextNode("Cayenne Turbo Coupé");
                ul3P.appendChild(li2P)
                li2P.appendChild(aa2P)
                aa2P.appendChild(linkTextLi2P)

                let thumbnailCayS = document.createElement("img");
                thumbnailCayS.setAttribute("src", "./assets/cars-thumbnails/cayenneS-thumbnail.png")
                thumbnailCayS.style.width = "10.5vh"
                aa2P.appendChild(thumbnailCayS)

    //Contact
    let contact = document.createElement("li")
    let Acontact = document.createElement("a")
    Acontact.setAttribute("href", "contact.html")
    linkTextContact = document.createTextNode("Contact");

    ul1.appendChild(contact)
    contact.appendChild(Acontact)
    Acontact.appendChild(linkTextContact)

    // Search

    let d2S = document.createElement("div")
    d2S.setAttribute("class", "col-md-6")
    d2S.setAttribute("style", "float: right;")
    d1.appendChild(d2S)

    let form = document.createElement("form")
    form.setAttribute("class", "form-inline my-2 my-lg-0")
    form.setAttribute("style", "float: right; margin-right: 20px;")
    d2S.appendChild(form)

    let input = document.createElement("input")
    input.setAttribute("class", "form-control mr-sm-2")
    input.setAttribute("type", "search")
    input.setAttribute("placeholder", "Search")
    input.setAttribute("aria-label", "Search")

    let btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-outline-success my-2 my-sm-0")
    btn.setAttribute("type", "submit")
    var TextBtn = document.createTextNode("Search");

    form.appendChild(input)
    form.appendChild(btn)
    btn.appendChild(TextBtn)

    // Date/Time

    let topDiv = document.getElementById("dateTimeName")
    let date = document.createElement("p");
    date.setAttribute("id","datetime");
    topDiv.appendChild(date);
    function date_time() {
        var dt = new Date();
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
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        let xmlDoc = loadXMLDoc("meniny.xml");
        let x = xmlDoc.getElementsByTagName("den");
        let size = x.length;
        for(let i=0;i<size;i++){
            if (x[i].innerHTML == month + "" + day){
                let name_day= document.getElementById("name_day")
                if(xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0]){
                    let linkTextContact = document.createTextNode("Dnes má meniny: "+xmlDoc.getElementsByTagName("zaznam")[i].getElementsByTagName("SK")[0].innerHTML+".");
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
    ol.setAttribute("class", "breadcrumb")
    nav.appendChild(ol)

    let liNavHome = document.createElement("li")
    liNavHome.setAttribute("class", "breadcrumb-item")
    let aNavHome = document.createElement("a")
    aNavHome.setAttribute("href", "#")
    var TextNavHome = document.createTextNode("Home");
    ol.appendChild(liNavHome)
    liNavHome.appendChild(aNavHome)
    aNavHome.appendChild(TextNavHome)

    let liNavLib = document.createElement("li")
    liNavLib.setAttribute("class", "breadcrumb-item")
    let aNavLib = document.createElement("a")
    aNavLib.setAttribute("href", "#")
    var TextNavLib = document.createTextNode("Library");
    ol.appendChild(liNavLib)
    liNavLib.appendChild(aNavLib)
    aNavLib.appendChild(TextNavLib)

    let liNavData = document.createElement("li")
    liNavData.setAttribute("class", "breadcrumb-item active")
    liNavData.setAttribute("aria-current", "page")
    let aNavData = document.createElement("a")
    aNavData.setAttribute("href", "#")
    var TextNavData = document.createTextNode("Data");
    ol.appendChild(liNavData)
    liNavData.appendChild(aNavData)
    aNavData.appendChild(TextNavData)


})
