const btn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");


btn.onclick = function () {

    nav.classList.toggle("active");

};



// 平滑滚动

document.querySelectorAll("a[href^='#']")
    .forEach(link => {


        link.onclick = function (e) {

            e.preventDefault();


            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({

                    behavior: "smooth"

                });


        }


    });
