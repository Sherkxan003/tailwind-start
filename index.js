let list = document.querySelector(".carusel__item")
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")


let list1 = document.querySelector(".carusel__item1")
let next1 = document.querySelector("#next1")
let prev1 = document.querySelector("#prev1")


function slider() {
    list.style.transform = `translateX(${-index*1230}px)`
}
index = 0
next.addEventListener("click", () => {
   
    index++;
    if (index > 2) {
        index = 0
    }
    slider()

})
prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 2
    }

    slider()
})
function slider1() {
    list1.style.transform = `translateX(${-index*1230}px)`
}

index = 0
next1.addEventListener("click", () => {
   
    index++;
    if (index > 2) {
        index = 0
    }
    slider1()

})
prev1.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 2
    }

    slider1()
})




let list2 = document.querySelector(".carusel__item2")
let next2 = document.querySelector("#next2")
let prev2 = document.querySelector("#prev2")





function slider2() {
    list2.style.transform = `translateX(${-index*1230}px)`
}

index = 0
next2.addEventListener("click", () => {
   
    index++;
    if (index > 2) {
        index = 0
    }
    slider2()

})
prev2.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 2
    }

    slider2()
})