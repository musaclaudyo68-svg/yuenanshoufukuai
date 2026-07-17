/*
=================================================

 GlobalPay News JS

 Functions:

 1. Mobile Navigation
 2. Header Scroll Effect
 3. News Pagination
 4. Category Filter
 5. Scroll Animation
 6. Smooth Scroll

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
// Header Scroll Effect
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


            header.style.boxShadow = "none";


        }



    }

);









// ================================================
// News Pagination
// 每页5篇
// ================================================



const newsCards =

    document.querySelectorAll(".news-card");



const pageButtons =

    document.querySelectorAll(".page");



const pageSize = 5;



let currentPage = 1;






function showNewsPage(page) {



    currentPage = page;



    let start =

        (page - 1)

        *

        pageSize;



    let end =

        start +

        pageSize;





    newsCards.forEach((card, index) => {


        if (index >= start && index < end) {


            card.style.display = "block";



            setTimeout(() => {


                card.style.opacity = "1";


                card.style.transform =

                    "translateY(0)";



            }, 50);



        }

        else {


            card.style.display = "none";


        }



    });





    pageButtons.forEach(btn => {


        btn.classList.remove("active");


    });




    if (pageButtons[page - 1]) {


        pageButtons[page - 1]

            .classList.add("active");


    }




    window.scrollTo({


        top:

            document.querySelector(".news-section").offsetTop - 100,


        behavior: "smooth"


    });



}







pageButtons.forEach((btn, index) => {


    btn.addEventListener("click", () => {


        showNewsPage(index + 1);



    });


});






// 默认第一页


if (newsCards.length) {


    showNewsPage(1);


}









// ================================================
// Category Filter
// ================================================



const categories =

    document.querySelectorAll(

        ".category-list span"

    );





categories.forEach(category => {


    category.addEventListener("click", () => {



        categories.forEach(item => {


            item.classList.remove("active");


        });



        category.classList.add("active");




        /*
        
        后期可根据文章分类字段扩展
        
        */


        showNewsPage(1);



    });



});









// ================================================
// Scroll Reveal Animation
// ================================================



const observer =

    new IntersectionObserver(

        (entries) => {


            entries.forEach(entry => {


                if (entry.isIntersecting) {


                    entry.target.style.opacity = "1";


                    entry.target.style.transform =

                        "translateY(0)";



                }


            });


        },

        {


            threshold: .15


        }

    );







newsCards.forEach(card => {


    card.style.opacity = "0";


    card.style.transform =

        "translateY(40px)";



    observer.observe(card);



});









// ================================================
// Smooth Anchor
// ================================================



document
    .querySelectorAll(
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


                        behavior: "smooth"


                    });


                }



            });



    });









// ================================================
// News Card Hover
// ================================================



newsCards.forEach(card => {


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


            if (card.style.display != "none") {


                card.style.transform =

                    "translateY(0)";


            }



        }

    );



});
