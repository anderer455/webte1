
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
                Ahome.setAttribute("class", "bg-info")
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
                var linkText = document.createTextNode("Audi");

                lii.appendChild(aa)
                aa.appendChild(linkText)

                let ul3A = document.createElement("ul")
                
                lii.appendChild(ul3A)

                let li1 = document.createElement("li")
                let aa1 = document.createElement("a")
                aa1.setAttribute("href", "A6.html")
                var linkTextLi1 = document.createTextNode("A6");
                ul3A.appendChild(li1)
                li1.appendChild(aa1)
                aa1.appendChild(linkTextLi1)

                let li2 = document.createElement("li")
                let aa2 = document.createElement("a")
                aa2.setAttribute("href", "#")
                var linkTextLi2 = document.createTextNode("A7");
                ul3A.appendChild(li2)
                li2.appendChild(aa2)
                aa2.appendChild(linkTextLi2)

                let li3 = document.createElement("li") 
                let aa3 = document.createElement("a")
                aa3.setAttribute("href", "#")
                var linkTextLi3 = document.createTextNode("A8");
                ul3A.appendChild(li3)
                li3.appendChild(aa3)
                aa3.appendChild(linkTextLi3)

                // Porshe
                
                let liiP = document.createElement("li")
                liiP.setAttribute("class", "-hasSubmenu")
                
                ul2.appendChild(liiP)

                let aaP = document.createElement("a")
                aaP.setAttribute("href", "#")
                var linkTextP = document.createTextNode("Porshe");

                liiP.appendChild(aaP)
                aaP.appendChild(linkTextP)

                let ul3P = document.createElement("ul")
                
                liiP.appendChild(ul3P)

                let li1P = document.createElement("li")
                let aa1P = document.createElement("a")
                aa1P.setAttribute("href", "http://www.facebook.com")
                var linkTextLi1P = document.createTextNode("911");
                ul3P.appendChild(li1P)
                li1P.appendChild(aa1P)
                aa1P.appendChild(linkTextLi1P)

                let li2P = document.createElement("li")
                let aa2P = document.createElement("a")
                aa2P.setAttribute("href", "#")
                var linkTextLi2P = document.createTextNode("Cayenne");
                ul3P.appendChild(li2P)
                li2P.appendChild(aa2P)
                aa2P.appendChild(linkTextLi2P)

                let li3P = document.createElement("li") 
                let aa3P = document.createElement("a")
                aa3P.setAttribute("href", "#")
                var linkTextLi3P = document.createTextNode("Panamera 970");
                ul3P.appendChild(li3P)
                li3P.appendChild(aa3P)
                aa3P.appendChild(linkTextLi3P)

                // Mercedes Benz
                
                let liiM = document.createElement("li")
                liiM.setAttribute("class", "-hasSubmenu")
                
                ul2.appendChild(liiM)

                let aaM = document.createElement("a")
                aaM.setAttribute("href", "#")
                var linkTextM = document.createTextNode("Mercedes Benz");

                liiM.appendChild(aaM)
                aaM.appendChild(linkTextM)

                let ul3M = document.createElement("ul")
                
                liiM.appendChild(ul3M)

                let li1M = document.createElement("li")
                let aa1M = document.createElement("a")
                aa1M.setAttribute("href", "http://www.facebook.com")
                var linkTextLi1M = document.createTextNode("Class S");
                ul3M.appendChild(li1M)
                li1M.appendChild(aa1M)
                aa1M.appendChild(linkTextLi1M)

                let li2M = document.createElement("li")
                let aa2M = document.createElement("a")
                aa2M.setAttribute("href", "#")
                var linkTextLi2M = document.createTextNode("SLS AMG");
                ul3M.appendChild(li2M)
                li2M.appendChild(aa2M)
                aa2M.appendChild(linkTextLi2M)

                let li3M = document.createElement("li") 
                let aa3M = document.createElement("a")
                aa3M.setAttribute("href", "#")
                var linkTextLi3M = document.createTextNode("SLR McLaren");
                ul3M.appendChild(li3M)
                li3M.appendChild(aa3M)
                aa3M.appendChild(linkTextLi3M)

                // Ferrari
                
                let liiF = document.createElement("li")
                liiF.setAttribute("class", "-hasSubmenu")
                
                ul2.appendChild(liiF)

                let aaF = document.createElement("a")
                aaF.setAttribute("href", "#")
                var linkTextF = document.createTextNode("Ferrari");

                liiF.appendChild(aaF)
                aaF.appendChild(linkTextF)

                let ul3F = document.createElement("ul")
                
                liiF.appendChild(ul3F)

                let li1F = document.createElement("li")
                let aa1F = document.createElement("a")
                aa1F.setAttribute("href", "http://www.facebook.com")
                var linkTextLi1F = document.createTextNode("Ferrari 488 GTB");
                ul3F.appendChild(li1F)
                li1F.appendChild(aa1F)
                aa1F.appendChild(linkTextLi1F)

                let li2F = document.createElement("li")
                let aa2F = document.createElement("a")
                aa2F.setAttribute("href", "#")
                var linkTextLi2F = document.createTextNode("Ferrari 488 Spider");
                ul3F.appendChild(li2F)
                li2F.appendChild(aa2F)
                aa2F.appendChild(linkTextLi2F)

                let li3F = document.createElement("li") 
                let aa3F = document.createElement("a")
                aa3F.setAttribute("href", "#")
                var linkTextLi3F = document.createTextNode("Ferrari 812 Superfast");
                ul3F.appendChild(li3F)
                li3F.appendChild(aa3F)
                aa3F.appendChild(linkTextLi3F)

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
