/*
=================================================

 GlobalPay Article JS

 Features:

 1. Mobile Navigation
 2. Header Scroll Effect
 3. Reading Progress Bar
 4. Back To Top
 5. Scroll Reveal Animation
 6. Lazy Loading Images
 7. Smooth Anchor Scroll
 8. Related Article Interaction

=================================================

*/





// ================================================
// Mobile Navigation
// ================================================


const header = document.querySelector(".header");

const nav = document.querySelector("nav");



let menuButton = document.querySelector(".menu-btn");



if (menuButton && nav) {


    menuButton.addEventListener(
        "click",
        () => {


            nav.classList.toggle("active");


            menuButton.classList.toggle("open");


        });


}




// 点击菜单后关闭

document
    .querySelectorAll("nav a")
    .forEach(link => {


        link.addEventListener(
            "click",
            () => {


                if (nav) {

                    nav.classList.remove("active");

                }


            });


    });








// ================================================
// Header Shadow
// ================================================


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



    });









// ================================================
// Reading Progress Bar
// ================================================


const progress = document.createElement("div");


progress.className = "reading-progress";



document.body.prepend(progress);





const progressStyle = document.createElement("style");


progressStyle.innerHTML = `

.reading-progress{

position:fixed;

top:0;

left:0;

height:4px;

width:0%;

background:#1677ff;

z-index:9999;

transition:.1s;

}

`;



document.head.appendChild(progressStyle);






window.addEventListener(
    "scroll",
    () => {


        let article =

            document.querySelector("article");



        if (!article) return;



        let articleTop =

            article.offsetTop;



        let articleHeight =

            article.offsetHeight;



        let scrollTop =

            window.scrollY;



        let percent =


            (
                (scrollTop - articleTop)

                /

                articleHeight

            )

            *

            100;




        if (percent < 0) {

            percent = 0;

        }


        if (percent > 100) {

            percent = 100;

        }



        progress.style.width =

            percent + "%";



    });









// ================================================
// Back To Top Button
// ================================================


const topBtn = document.createElement("button");


topBtn.className = "back-top";


topBtn.innerHTML = "↑";



document.body.appendChild(topBtn);






const topStyle = document.createElement("style");


topStyle.innerHTML = `

.back-top{


position:fixed;

right:30px;

bottom:40px;

width:45px;

height:45px;

border:none;

border-radius:50%;

background:#1677ff;

color:white;

font-size:22px;

cursor:pointer;

opacity:0;

visibility:hidden;

transition:.3s;

box-shadow:

0 10px 30px rgba(0,80,200,.3);

z-index:999;


}


.back-top.show{


opacity:1;

visibility:visible;


}


.back-top:hover{


transform:

translateY(-5px);


}



`;



document.head.appendChild(topStyle);







window.addEventListener(
    "scroll",
    () => {


        if (window.scrollY > 500) {


            topBtn.classList.add("show");


        }

        else {


            topBtn.classList.remove("show");


        }



    });






topBtn.addEventListener(
    "click",
    () => {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });









// ================================================
// Scroll Reveal
// ================================================



const revealElements =

    document.querySelectorAll(

        "article h2," +

        "article h3," +

        "article p," +

        ".notice," +

        ".related," +

        ".contact"

    );





revealElements.forEach(item => {


    item.style.opacity = "0";


    item.style.transform =

        "translateY(30px)";


    item.style.transition =

        "all .7s ease";


});







const revealObserver =

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






revealElements.forEach(item => {


    revealObserver.observe(item);


});









// ================================================
// Image Lazy Loading
// ================================================


const images =

    document.querySelectorAll(
        "img"
    );





images.forEach(img => {


    img.loading = "lazy";



    img.addEventListener(
        "load",
        () => {


            img.style.opacity = "1";


        });



    img.style.transition =

        "opacity .5s";



    img.style.opacity = "0";



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
// Related Article Hover
// ================================================



const relatedLinks =

    document.querySelectorAll(

        ".related a"

    );





relatedLinks.forEach(link => {


    link.addEventListener(

        "mouseenter",

        () => {


            link.style.paddingLeft = "35px";


        });





    link.addEventListener(

        "mouseleave",

        () => {


            link.style.paddingLeft = "20px";


        });


});









// ================================================
// Reading Time Estimate
// ================================================



const articleContent =

    document.querySelector("article");



if (articleContent) {



    let words =

        articleContent.innerText.length;



    let minutes =

        Math.ceil(words / 500);




    let timeBox =

        document.createElement("div");



    timeBox.className = "reading-time";



    timeBox.innerHTML =

        "预计阅读时间：" + minutes + "分钟";





    articleContent.before(timeBox);





    const timeStyle =

        document.createElement("style");



    timeStyle.innerHTML = `

.reading-time{


margin-bottom:30px;

color:#64748b;

font-size:14px;

background:#f5f9ff;

display:inline-block;

padding:8px 18px;

border-radius:20px;


}

`;



    document.head.appendChild(timeStyle);



}
