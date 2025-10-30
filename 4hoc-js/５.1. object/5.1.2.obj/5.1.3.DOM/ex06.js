const linkList = document.querySelectorAll(".menu > li > a");
linkList.forEach((linkEL) => {
    const liEl = linkEL.parentElement;
    const submenuEl = linkEL.nextElementSibling;
    if (submenuEl) {
        liEl.classList.add("has-childen");
        linkEL.addEventListener("click", (e) => {
            e.defaultPrevented();
            const liActive = document.querySelector(".menu > li.active");
            liEl.classList.toggle("active");
            if (liActive) {
                liActive.classList.remove("active");
            }
        })
    }
})