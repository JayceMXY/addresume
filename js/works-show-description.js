let works = document.querySelectorAll(".img-works")

for (let i = 0; i < works.length; i++) {
    //鼠标悬浮在项目图片上时，展示项目介绍
    works[i].addEventListener("mouseover", function (e) {
        let clickImg = e.currentTarget
        let allDescription = click.parentNode.parentNode.querySelectorAll(".description")
        for (let i = 0; i < allDescription.length; i++) {
            allDescription[i].classList.remove("active")
        }
        let description = clickImg.parentNode.querySelector(".description")
        description.classList.add("active")
    })

    //当点击项目时，跳转到相应的github仓库中
    works[i].addEventListener("click", function (e) {
        let clickImg = e.currentTarget
        let url = clickImg.getAttribute("data-url")
        window.open(url)
    })
    works[i].addEventListener("mouseleave", function (e) {
        let clickImg = e.currentTarget
        let allDescription = clickImg.parentNode.parentNode.querySelectorAll(".description")
        for (let i = 0; i < allDescription.length; i++) {
            allDescription[i].classList.remove("active")
        }
    })
}