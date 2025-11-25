
export const login = () => {
    return `
    <div class="flex items-center gap-3">
        <i class="fa-solid fa-tv text-3xl text-white cursor-pointer"></i>

        <button class="js-open-login p-1 px-3 bg-white text-black rounded-full cursor-pointer mr-20">
            Đăng nhập
        </button>

        <div class="js-overlay bg-[#000000cf] fixed inset-0 hidden justify-center items-center">
            <form class="js-login-form">
                <div class="relative bg-white w-96 p-6 rounded-xl shadow-xl flex flex-col gap-4">
                    
                    <button type="button" class="js-close-btn absolute top-1 right-2 px-1 rounded">
                        <i class="fa-solid fa-xmark cursor-pointer"></i>
                    </button>

                    <h2 class="text-2xl font-bold text-center">Đăng nhập</h2>

                    <div>
                        <label class="pl-1 text-2xl">Email</label>
                        <input type="text" placeholder="Nhập email..." class="email border p-2 rounded w-full" />
                    </div>

                    <div>
                        <label class="pl-1 text-2xl">Mật khẩu</label>
                        <input type="password" placeholder="Mật khẩu" class="password border p-2 rounded w-full" />
                    </div>

                    <div class="flex justify-between px-2 pb-3">
                        <span class="cursor-pointer"><a>Quên mật khẩu</a></span>
                        <span class="js-register cursor-pointer"><a>Đăng ký</a></span>
                    </div>

                    <button type="submit" class="js-submit-login cursor-pointer bg-black text-white p-2 rounded">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    </div>
    `;
};


