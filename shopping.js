// $("button").on("click", function(){
//     $(this).closest("li")
//         .find("img")
//         .clone()
//         .addClass("zoom")
//         .appendTo("body");
//     setTimeout (function(){
//         $(".zoom").remove();
//     }, 1000);
// })

let iconCart = document.querySelector(".cart-icon");
let showCart = document.querySelector("showCart");

iconCart.addEventListener('click', () => {
    showCart.classList.toggle('showCart')
})