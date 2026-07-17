/*
=================================================
 Vietnam Payment Solution JS
 Features:
 1. Mobile Navigation
 2. Scroll Animation
 3. Number Counter
 4. Smooth UX
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



    // 点击菜单后自动关闭


    document.querySelectorAll("#nav a")
        .forEach(link => {


            link.addEventListener("click", () => {


                nav.classList.remove("active");


            });


        });


}






// ================================================
// Scroll Fade Animation
// ================================================



const observer = new IntersectionObserver(
    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },
    {

        threshold: 0.15

    }

);





const animationItems = document.querySelectorAll(

    ".section, .payment-card, .ability-grid div, .market-grid div, .security-grid div, .faq-box"

);



animationItems.forEach(item => {


    item.classList.add("hidden");


    observer.observe(item);


});









// ================================================
// Number Counter Animation
// ================================================



function counterAnimation(element) {



    const targetText =
        element.innerText;



    let target = 0;


    let suffix = "";



    if (targetText.includes("%")) {


        target =
            parseFloat(
                targetText
            );


        suffix = "%";


    }


    else if (targetText.includes("M")) {


        target =
            parseFloat(
                targetText
            );


        suffix = "M+";


    }


    else if (targetText.includes("+")) {


        target =
            parseFloat(
                targetText
            );


        suffix = "+";


    }


    else {


        return;


    }





    let current = 0;


    let speed =
        target / 80;



    let timer = setInterval(() => {


        current += speed;



        if (current >= target) {


            current = target;


            clearInterval(timer);


        }



        element.innerHTML =
            Math.floor(current)
            +
            suffix;



    }, 20);



}







const counters =
    document.querySelectorAll(
        ".stats strong, .market-grid h3"
    );





let counterStarted = false;



const counterObserver =
    new IntersectionObserver(
        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting && !counterStarted) {



                    counterStarted = true;



                    counters.forEach(counter => {


                        counterAnimation(counter);



                    });



                }



            });



        },
        {


            threshold: .5


        });






if (counters.length) {


    counterObserver.observe(
        counters[0]
    );


}








// ================================================
// Header Scroll Effect
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



    });








// ================================================
// Smooth Anchor Scroll
// ================================================



document.querySelectorAll(
    'a[href^="#"]'
)
    .forEach(anchor => {


        anchor.addEventListener(
            "click",
            function (e) {


                const target =
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
