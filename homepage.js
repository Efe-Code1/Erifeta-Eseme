// alert("You're about to enter Efe's Landing page");

const pfts = document.querySelectorAll(".portfolio-item-wrapper")

pfts.forEach(pft => {
    pft.addEventListener("mouseover", () => {
        // console.log(pft.childNodes[1].classList);
        pft.childNodes[1].classList.add("img-fade");
    })
})

pfts.forEach(pft => {
    pft.addEventListener("mouseout", () => {
        // console.log(pft.childNodes[1].classList);
        pft.childNodes[1].classList.remove("img-fade");
    })
})