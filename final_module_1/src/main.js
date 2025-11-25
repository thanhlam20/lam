export const API_URL = "https://youtube-music.f8team.dev/api";
import "./style.css";
import { app } from "./app";
import { initSidebar } from "./components/sidebar";
import { loadTagList } from "./components/taglist";

const render = async () => {
    document.querySelector("#app").innerHTML = await app();
    initSidebar();
    loadTagList();
};

//  Đóng / Mở modal
document.addEventListener("click", (e) => {
    const modal = document.querySelector(".js-overlay");

    if (e.target.matches(".js-open-login")) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }

    if (e.target.closest(".js-close-btn")) {
        closeModal();
    }

    if (e.target.classList.contains("js-overlay")) {
        closeModal();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") closeModal();
});

const closeModal = () => {
    const modal = document.querySelector(".js-overlay");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
};

//  Submit login
document.addEventListener("submit", async (e) => {
    if (e.target.matches(".js-login-form")) {
        e.preventDefault();
        await loginHandler();
    }
});

//  Xử lý login
const loginHandler = async () => {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert("Sai tài khoản hoặc mật khẩu!");
            return;
        }

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        renderUserAvatar(data.user);

        closeModal();
        alert("Đăng nhập thành công!");
    }
    catch (err) {
        console.error(err);
        alert("Lỗi server!");
    }
};


// render avatar

const renderUserAvatar = (user) => {
    const loginBtn = document.querySelector(".js-open-login");
    if (!loginBtn) return;

    loginBtn.outerHTML = `
        <div class="relative flex items-center gap-2 js-user-menu-trigger select-none pr-10">
            <img src="${user.avatarUrl || "https://i.pravatar.cc/40"}" 
                 class="w-10 h-10 rounded-full object-cover cursor-pointer border" />

            <div class="js-user-menu hidden absolute top-12 right-0 bg-white text-black w-60 rounded-lg shadow-lg py-2">
                <div class="px-4">
                <div class="relative flex items-center gap-2 js-user-menu-trigger select-none mb-4">
                    <img src="${user.avatarUrl || "https://i.pravatar.cc/40"}" 
                    class="w-10 h-10 rounded-full object-cover border" />
                    <div class="flex flex-col">
                        <span class="text-black">${user.name || "User"}</span>
                        <span class="text-black text-xs">${user.email || "User"}</span>
                    </div>
                </div>
               <div class=" flex flex-col">
                <span class=" py-2 hover:bg-gray-100 cursor-pointer">Tài khoản</span>
                <span class="js-logout  py-2 hover:bg-gray-100 cursor-pointer">Đăng xuất</span>
               </div>
            </div>
        </div>
    `;
};


//  User modal, logout

document.addEventListener("click", (e) => {
    const menu = document.querySelector(".js-user-menu");

    if (e.target.closest(".js-user-menu-trigger")) {
        menu?.classList.toggle("hidden");
    } else {
        menu?.classList.add("hidden");
    }

    if (e.target.matches(".js-logout")) {
        logoutHandler();
    }
});

// logout API

const logoutAPI = async () => {
    const refresh_token = localStorage.getItem("refresh_token");

    try {
        const res = await fetch(`${API_URL}/auth/logout`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token})
        });

        if (res.status === 404) return { success: true };
        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Loguot API  error", error);
        return { error: true };
    }
}

const logoutHandler = async () => {
    const res = await logoutAPI();

    if (!res || res.error) {
        alert("Đăng xuất thất bại");
        return;
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    alert("Đã đăng xuất!");
    window.location.reload();
};

// 

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    try {
        const res = await fetch(`${API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (res.ok) {
            const user = await res.json();
            renderUserAvatar(user);
        }
    } catch (err) {
        console.log("Token hết hạn hoặc lỗi.");
    }
});

//  Chuyển sang form đăng ký
let registerModal;

document.addEventListener("click", (e) => {
    if (e.target.closest(".js-register")) {
        const loginModal = document.querySelector(".js-overlay");
        loginModal.classList.add("hidden");
        loginModal.classList.remove("flex");

        if (!registerModal) {
            registerModal = document.createElement("div");
            registerModal.classList.add(
                "bg-[#000000cf]",
                "fixed",
                "inset-0",
                "flex",
                "justify-center",
                "items-center",
                "z-[9999]"
            );
            registerModal.innerHTML = `
                <form class="js-register-form">
                <div class"fixed">js-overlay-register</div>
                    <div class="relative bg-white w-96 p-6 rounded-xl shadow-xl flex flex-col gap-4">
                        <button type="button" class="js-close-register absolute top-1 right-2 px-1 rounded">
                            <i class="fa-solid fa-xmark cursor-pointer"></i>
                        </button>
                        <h2 class="text-2xl font-bold text-center">Đăng ký</h2>
                        <div>
                            <label class="pl-1 text-2xl">Họ tên</label>
                            <input type="text" placeholder="Nhập họ tên..." class="register-name border p-2 rounded w-full" required />
                        </div>
                        <div>
                            <label class="pl-1 text-2xl">Email</label>
                            <input type="email" placeholder="Nhập email..." class="register-email border p-2 rounded w-full" required />
                        </div>
                        <div>
                            <label class="pl-1 text-2xl">Mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu" class="register-password border p-2 rounded w-full" required />
                        </div>
                        <div>
                            <label class="pl-1 text-2xl">Xác nhận mật khẩu</label>
                            <input type="password" placeholder="Nhập lại mật khẩu..." class="register-confirm-password border p-2 rounded w-full" required />
                        </div>
                        <button type="submit" class="js-submit-register cursor-pointer bg-black text-white p-2 rounded">
                            Đăng ký
                        </button>
                    </div>
                </form>
            `;
            document.body.appendChild(registerModal);
        } else {
            registerModal.classList.remove("hidden");
            registerModal.classList.add("flex");
        }
    }

    // Đóng register modal
    if (e.target.closest(".js-close-register") || e.target === registerModal) {
        registerModal.classList.add("hidden");
        registerModal.classList.remove("flex");
    }
});

// Submit đăng ký
document.addEventListener("submit", async (e) => {
    if (e.target.matches(".js-register-form")) {
        e.preventDefault();

        const name = document.querySelector(".register-name").value;
        const email = document.querySelector(".register-email").value;
        const password = document.querySelector(".register-password").value;
        const confirmPassword = document.querySelector(".register-confirm-password").value;

        // Kiểm tra mật khẩu trùng nhau
        if (password !== confirmPassword) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp!");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Đăng ký thất bại!");
                return;
            }

            // Lưu token và render avatar
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            renderUserAvatar(data.user);

            registerModal.classList.add("hidden");
            registerModal.classList.remove("flex");

            alert("Đăng ký thành công!");
        } catch (err) {
            console.error(err);
            alert("Lỗi server!");
        }
    }
});



await render();
