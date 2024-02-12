// function sendEmail(){
//     Email.send({
//     // secureToken: "294f33dd-2675-48c7-bd74-88e930c78732",
//     Host : "smtp.gmail.com",
//     Username : "efezzy321@gmail.com",
//     Password : '712203639',
//     To : 'efezzy321@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "Message Alert from my portfolio",
//     Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Message: " + document.getElementById("subject").value
//     }).then(
//       message => alert("Message Sent Successfully!")
//     );
// }

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

let par = document.querySelector('.parent')
let pos = 0

setInterval(() => {
    par.style.transform = `rotateY(${pos}deg)`
    pos += 1
}, 16.67)

let h4 = document.getElementsByTagName('h4')[0]
let str = 'A Certified Geophysicist'
let len = str.length
let index = 0

let h4b = document.getElementsByTagName('h4')[1]
let str2 = 'Tech Savvy &'
let len2 = str2.length
let index2 = 0

let h4c = document.getElementsByTagName('h4')[2]
let str3 = 'A Proficient Web Developer'
let len3 = str3.length
let index3 = 0

let PERIODA = 90 //MILLISECONDS

setTimeout(() => {
    let handle = setInterval(() => {
        if (index >= len) {
            clearInterval(handle)
            startB()
            let strB = h4.innerHTML.replace('<span>|</span>', '')
            h4.innerHTML = strB
        } else {
            let strB = h4.innerHTML.replace('<span>|</span>', '')
            h4.innerHTML = strB
            h4.innerHTML += str[index] + '<span>|</span>'
            index += 1
        }
    }, PERIODA)
}, 1900)

function startB() {
    let handleB = setInterval(() => {
        if (index2 >= len2) {
            clearInterval(handleB)
            startC()
            let strB = h4b.innerHTML.replace(/<span>\|<\/span>/g, '')
            h4b.innerHTML = strB
        } else {
            let strB = h4b.innerHTML.replace('<span>|</span>', '')
            h4b.innerHTML = strB
            h4b.innerHTML += str2[index2] + '<span>|</span>'
            index2 += 1
        }
    }, PERIODA)
}

function startC() {
    let handleC = setInterval(() => {
        if (index3 >= len3) {
            clearInterval(handleC)
            startD()
        } else {
            let strB = h4c.innerHTML.replace('<span>|</span>', '')
            h4c.innerHTML = strB
            h4c.innerHTML += str3[index3] + '<span>|</span>'
            index3 += 1
        }
    }, PERIODA)
}
function startD() {
    setInterval(() => {
        let span3 = document.getElementsByTagName('span')[5];
        switch (parseInt(window.getComputedStyle(span3).getPropertyValue('opacity'))) {
            case 0:
                // span3.style.opacity = 1
                // break
            case 1:
                span3.style.opacity = 0
                break
        }
    }, 400)
}