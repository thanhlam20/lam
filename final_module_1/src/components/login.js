export const login = () => {
    return `
    <div class="flex items-center gap-3">
        <i class="fa-solid fa-tv text-3xl text-white cursor-pointer"></i>

        <button class="js-open-login p-1 px-3 bg-white text-black rounded-full cursor-pointer mr-20">
            Đăng nhập
        </button>

        <div class="js-overlay bg-[#000000cf] fixed inset-0 hidden justify-center items-center">
            <form>
                <div class=" relative bg-white w-96 p-6 rounded-xl shadow-xl flex flex-col gap-4">
                    <button class="js-close-btn absolute top-1 right-2 px-1 rounded "><i class="fa-solid fa-xmark cursor-pointer"></i></button>
                    <h2 class="text-2xl font-bold text-center">Đăng nhập</h2>
                <div>
                    <label class="pl-1 text-2xl">Email</label>
                <input type="text" placeholder="Nhập email..."
                    class="email border p-2 rounded w-full" />
                </div>
                <div>
                    <label class="pl-1 text-2xl">Mật khẩu</label>
                    <input type="password" placeholder="Mật khẩu"
                    class="password border p-2 rounded w-full" />
                </div>
                <div class="flex justify-between px-2 pb-3">
                <span class="cursor-pointer"><a>Quên mật khẩu ??</a></span>
                <span class="cursor-pointer"><a>Đăng ký</a></span>
                </div>
                <button class="js-submit-login cursor-pointer bg-black text-white p-2 rounded">
                    Đăng nhập
                </button>
                </div>
            </form>
        </div>
    </div>
    `
};
////xử lý đăng nhập
document.addEventListener("keyup", (e) => {
    const modal = document.querySelector(".js-overlay");
    if(e.key === "Escape") {
           modal.classList.add("hidden");
    }
});
document.addEventListener("click", (e) => {
    e.preventDefault;
    const modal = document.querySelector(".js-overlay");

    if (e.target.matches(".js-open-login")) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }

    if (e.target.matches(".js-close-login") || e.target === modal) {
        closeModal();
        
    }

    if (e.target.matches(".js-submit-login")) {
        loginHandler();
    }
});

const loginHandler = () => {
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");

    console.log("Email:", email.value);
    console.log("Mật khẩu:", password.value);
}

const closeModal = () => {
    const modal = document.querySelector(".js-overlay");
    const closeBtn = document.querySelector(".js-close-btn");

    modal.classList.add("hidden");
    modal.classList.remove("flex");
    closeBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains === "js-close-btn") {
            modal.classList.add("hidden");
        }
    });
    
};

// class FormValiDate {
//     constructor(form, fieds) {
//         this.form = form;
//         this.fieds = fieds;
//     }
//     validate() {
//         // validate khi submit
//         this.validateOnSubmit();
//         // validate khi blur
//         this.validateOnBlur();
//     }

//     validateOnSubmit(){};

//     validateOnBlur(){};


// };

