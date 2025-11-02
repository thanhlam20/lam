const linkList = document.querySelectorAll(".menu > li > a");
linkList.forEach((linkEl) => {
    const liEl = linkEl.parentElement;
    const subMenuEl = linkEl.nextElementSibling;
    if (subMenuEl) {
        liEl.classList.add("has-children");
        linkEl.addEventListener("click", (e) => {
            e.preventDefault;
            const liActive = document.querySelector(".menu > li.active");
            liEl.classList.toggle("active");
            if (liActive) {
                liActive.classList.remove("active");
            }
            
        });
    };
});