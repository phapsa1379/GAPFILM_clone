// // let film = document.querySelectorAll(".film-show");
// // film.addEventListener("mouseover", function() {
// //     covver(film);
// // });

// // function covver(film) {
// //     for (let i = 0; i < film.length; i++) {
// //         film[i].style =
// //             "background-image: linear-gradient(to left,rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342))";
// //     }
// //     // film.style =
// //     //     film.style +
// //     //     "background-image: linear-gradient(to left,rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342))," +
// //     //     film.style.backgroundImage;
// //     // film.style =
// //     //     "background-image: linear-gradient(to left,rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342))";
// // }

// let film = document.getElementById("show1");
// film.addEventListener("click", function() {
//     covver(this);
// });

// function covver(film) {
//     alert("pasha");
//     console.log(film.getAttribute());
//     // film.style =
//     //     "background-image: linear-gradient(to left,rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342))" +
//     //     film.style.backgroundImage;
//     // for (let i = 0; i < film.length; i++) {
//     //     film[i].style =
//     //         "background-image: linear-gradient(to left,rgba(0, 0, 0, 0.342),rgba(0, 0, 0, 0.342))";
//     // }
// }

document.getElementsByClassName("nav-home")[0].style =
    " border-bottom: 0.3rem solid #9f0f1e;";

function select(element) {
    let borderBottom = document.getElementsByClassName("nav-item");
    for (let i = 0; i < borderBottom.length; i++) {
        if (borderBottom[i].firstElementChild === element) {
            borderBottom[i].style = "border-bottom:0.3rem solid #9f0f1e;";
        } else {
            borderBottom[i].style = "border-bottom:0.3rem solid trasparent;";
        }
    }
    // console.log(element);
    // alert("pasha");
}