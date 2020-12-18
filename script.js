
document.addEventListener("DOMContentLoaded", () => {
    const miesto = document.getElementById("DDD");
    let d1 = document.createElement("div")
                d1.setAttribute("class", "row")

                let d2 = document.createElement("div")
                d2.setAttribute("class", "col-md-6")
                d2.setAttribute("style", "display: block;")
                miesto.appendChild(d1)
                d1.appendChild(d2)

                let ul1 = document.createElement("ul")
                ul1.setAttribute("class", "Menu -horizontal")
                d2.appendChild(ul1)
                
                let home = document.createElement("li")
                let Ahome = document.createElement("a")
                Ahome.setAttribute("href", "index.html")
                Ahome.setAttribute("class", "bg-info")
                var linkTextHome = document.createTextNode("Home");
                

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

                
        fetch("menu.json")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            json.menu.forEach((item) => {

                let lii = document.createElement("li")
                lii.setAttribute("class", "-hasSubmenu")
                
                ul2.appendChild(lii)

                let aa = document.createElement("a")
                Agalery.setAttribute("href", "#")
                var linkText = document.createTextNode(""+item.lvl2);

                lii.appendChild(aa)
                aa.appendChild(linkText)

                let ul3 = document.createElement("ul")
                lii.appendChild(ul3)

                let li1 = document.createElement("li")
                let aa1 = document.createElement("a")
                aa1.setAttribute("href", "#")
                var linkTextLi1 = document.createTextNode(""+item.lvl3a);
                ul3.appendChild(li1)
                li1.appendChild(aa1)
                aa1.appendChild(linkTextLi1)

                let li2 = document.createElement("li")
                let aa2 = document.createElement("a")
                aa2.setAttribute("href", "#")
                var linkTextLi2 = document.createTextNode(""+item.lvl3b);
                ul3.appendChild(li2)
                li2.appendChild(aa2)
                aa2.appendChild(linkTextLi2)

                let li3 = document.createElement("li") 
                let aa3 = document.createElement("a")
                aa3.setAttribute("href", "#")
                var linkTextLi3 = document.createTextNode(""+item.lvl3c);
                ul3.appendChild(li3)
                li3.appendChild(aa3)
                aa3.appendChild(linkTextLi3)
        });
    });
    let contact = document.createElement("li")
    let Acontact = document.createElement("a")
    Acontact.setAttribute("href", "contact.html")
    linkTextContact = document.createTextNode("Contact");

    ul1.appendChild(contact)
    contact.appendChild(Acontact)
    Acontact.appendChild(linkTextContact)

})
