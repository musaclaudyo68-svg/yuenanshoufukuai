/*
=================================================
 GlobalPay About Page JS

 Functions:
 1. Mobile Menu
 2. Scroll Reveal Animation
 3. Number Counter
 4. Header Effect
 5. Smooth Scroll

=================================================
*/



// ================================================
// Mobile Navigation
// ================================================


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("#nav");



if (menuBtn && nav) {


    menuBtn.addEventListener("click", () => {


        nav.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });





    // 点击导航关闭菜单


    document
        .querySelectorAll("#nav a")
        .forEach(item => {


            item.addEventListener("click", () => {


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


        if (window.scrollY > 60) {


            header.style.boxShadow =

                "0 15px 40px rgba(0,50,120,.15)";


        }

        else {


            header.style.boxShadow =

                "none";


        }



    });









// ================================================
// Scroll Reveal Animation
// ================================================



const revealElements = document.querySelectorAll(

    ".section, " +

    ".values div, " +

    ".team div, " +

    ".service-grid div, " +

    ".numbers div, " +

    ".flow div, " +

    ".hero-box"

);





revealElements.forEach(el => {


    el.classList.add("reveal");


});





const revealObserver =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.classList.add("active");


                }


            });


        },

        {


            threshold: 0.15


        }

    );





revealElements.forEach(el => {


    revealObserver.observe(el);


});









// ================================================
// Number Counter
// ================================================


function startCounter(element) {



    let value =
        element.innerText;



    let number =
        parseFloat(value);



    let suffix =
        value.replace(/[0-9.]/g, "");



    let current = 0;



    let speed =
        number / 80;



    let timer = setInterval(() => {


        current += speed;



        if (current >= number) {


            current = number;


            clearInterval(timer);


        }




        if (value.includes("%")) {


            element.innerHTML =

                current.toFixed(0)

                +

                "%";


        }

        else {


            element.innerHTML =

                Math.floor(current)

                +

                suffix;


        }



    }, 20);



}











const numberElements = document.querySelectorAll(
    ".normal-number"
);


let counterRun = false;





const numberObserver =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting && !counterRun) {



                    counterRun = true;



                    numberElements.forEach(num => {


                        startCounter(num);



                    });



                }



            });



        },

        {


            threshold: .5


        }

    );





if (numberElements.length) {


    numberObserver.observe(

        numberElements[0]

    );


}









// ================================================
// Smooth Anchor Scroll
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
// Button Hover Enhancement
// ================================================


const buttons =

    document.querySelectorAll(".btn");



buttons.forEach(btn => {


    btn.addEventListener(

        "mouseenter",

        () => {


            btn.style.transform =
                "translateY(-5px)";


        }

    );



    btn.addEventListener(

        "mouseleave",

        () => {


            btn.style.transform =
                "translateY(0)";


        }

    );



});
