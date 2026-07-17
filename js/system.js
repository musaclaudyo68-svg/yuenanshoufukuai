/*
=================================================

 GlobalPay Payment System JS

 Functions:

 1. Mobile Navigation
 2. Header Scroll Effect
 3. Scroll Reveal Animation
 4. Number Counter
 5. Smooth Scroll
 6. Card Interaction

=================================================
*/



// ================================================
// Mobile Menu
// ================================================


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("#nav");



if (menuBtn && nav) {


    menuBtn.addEventListener("click", () => {


        nav.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });




    document
        .querySelectorAll("#nav a")
        .forEach(link => {


            link.addEventListener("click", () => {


                nav.classList.remove("active");


            });


        });



}








// ================================================
// Header Scroll Shadow
// ================================================


const header =

    document.querySelector(".header");



window.addEventListener(

    "scroll",

    () => {


        if (window.scrollY > 80) {


            header.style.boxShadow =

                "0 15px 40px rgba(0,50,120,.15)";


        }

        else {


            header.style.boxShadow =

                "none";


        }



    }

);









// ================================================
// Scroll Reveal
// ================================================



const revealItems =

    document.querySelectorAll(

        ".section, " +

        ".feature-grid div, " +

        ".business-grid div, " +

        ".transaction div, " +

        ".security-grid div, " +

        ".api-grid div, " +

        ".hero-dashboard"

    );






revealItems.forEach(item => {


    item.classList.add("hidden");


});







const revealObserver =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add(
                        "show"
                    );


                }



            });


        },

        {


            threshold: 0.15


        }

    );






revealItems.forEach(item => {


    revealObserver.observe(item);


});









// ================================================
// Counter Animation
// ================================================



function numberCounter(element) {

    let text = element.innerText;

    // 包含 "/" 的文本不做动画
    if (text.includes("/")) {
        element.innerHTML = text;
        return;
    }

    let number = parseFloat(text);

    let suffix = text.replace(/[0-9.]/g, "");

    let current = 0;

    let speed = number / 100;

    let timer = setInterval(() => {

        current += speed;

        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        if (text.includes("%")) {
            element.innerHTML = current.toFixed(2) + "%";
        } else {
            element.innerHTML = Math.floor(current) + suffix;
        }

    }, 20);
}








const counterElements =

    document.querySelectorAll(

        ".dashboard-card strong, .analytics strong"

    );






let counterStarted = false;






const counterObserver =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting && !counterStarted) {


                    counterStarted = true;



                    counterElements.forEach(item => {


                        numberCounter(item);



                    });



                }


            });


        },


        {


            threshold: .5


        }

    );







if (counterElements.length) {


    counterObserver.observe(

        counterElements[0]

    );


}









// ================================================
// Smooth Scroll
// ================================================



document
    .querySelectorAll(

        'a[href^="#"]'

    )

    .forEach(anchor => {


        anchor.addEventListener(

            "click",

            function (e) {



                let target =

                    document.querySelector(

                        this.getAttribute("href")

                    );



                if (target) {



                    e.preventDefault();



                    target.scrollIntoView({


                        behavior: "smooth",


                        block: "start"


                    });



                }



            });


    });









// ================================================
// Feature Card Hover Effect
// ================================================


const cards =

    document.querySelectorAll(

        ".feature-grid div, " +

        ".business-grid div, " +

        ".transaction div, " +

        ".api-grid div"

    );




cards.forEach(card => {


    card.addEventListener(

        "mouseenter",

        () => {


            card.style.transform =
                "translateY(-10px)";


        }

    );



    card.addEventListener(

        "mouseleave",

        () => {


            card.style.transform =
                "translateY(0)";


        }

    );



});








// ================================================
// Dashboard Pulse Animation
// ================================================


const dashboard =

    document.querySelector(

        ".hero-dashboard"

    );



if (dashboard) {



    setInterval(() => {


        dashboard.style.boxShadow =

            "0 35px 90px rgba(22,119,255,.45)";



        setTimeout(() => {


            dashboard.style.boxShadow =

                "0 35px 80px rgba(0,50,150,.3)";



        }, 700);



    }, 2500);



}
