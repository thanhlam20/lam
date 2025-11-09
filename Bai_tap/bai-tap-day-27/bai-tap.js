const BASE_URL = `https://dummyjson.com`;
const postList = document.querySelector(".js-container");
const query = {};
///them moi
const addPost = document.querySelector(".js-add-post");
addPost.addEventListener("click", () => {
   openModal(() => ({
    modalTitle: `Thêm mới bài viết`,
    modalContent: `
    <div class="flex flex-col">
    <input class="js-new-title p-2 rounded-md mb-5" placeholder="Nhập tiêu đề mới...">
    <textarea class="js-new-body border border-gray-400 rounded-md mb-5 p-2" placeholder="Nhập nội dung mới..."></textarea>
    <button class="js-save-new bg-[#0fb40f91] rounded-md text-white text-xl p-2">Lưu bài viết</button>
    </div>
    `,
   }));
    const modal = document.querySelector(".js-modal");
    const saveBtn = modal.querySelector(".js-save-new");

    saveBtn.addEventListener("click", async() => {
        const title = modal.querySelector(".js-new-title").value.trim();
        const body = modal.querySelector(".js-new-body").value.trim();
        if (!title || !body) {
            alert(`Vui lòng nhập đầy đủ tiêu đề và nội dung!`);
            return;
        }

        try {
            setLoading();
            const newData = await fetch(`${BASE_URL}/posts/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                title,
                body,
                userId: 1,
                }),
            });
            if (!newData.ok) {
                throw new Error("Bài viết mới chưa đc thêm!");
            }
            /////////////////////////////////////
            alert("Đã thêm bài viết thành công!");
            closeModal();
        } catch (error) {
            console.log(error)
            renderError("Có lỗi khi thêm bài viết!");
            closeModal();
        } finally {
            setLoading(false);
        }
    });
});


const renderPosts = (posts) => {
const postList = document.querySelector(".js-container");
const html = posts
    .map(
        (post) => `
        <div class="js-container border border-gray-600 mt-3 p-3">
        <h2 class="text-2xl font-bold">${post.title}</h2>
        <p>${post.body}</p>
        <div class="flex justify-between">
          <button class="js-view border border-black p-2 mt-2 rounded-full hover:bg-[#fdfd51]">Xem chi tiết</button>
           <div>
          <button class="js-edit border border-black p-2 mt-2 rounded-md bg-[#79fe7980]">Sửa</button>
           <button class="js-delete-item border border-black p-2 mt-2 rounded-md bg-[#f45b5b90]">Xoá</button>
        </div>
        </div>
      </div>`)
      .join("");
      postList.innerHTML = html;
      //xem chi tier
      const viewBtnList = postList.querySelectorAll(".js-view");
      viewBtnList.forEach ((btn, index) => {
       btn.addEventListener("click", () => {
        openModal(() => ({
            modalTitle: posts[index].title,
            modalContent: posts[index].body,
        }))
       });
      });
///sua item
const editBtnList = postList.querySelectorAll(".js-edit");
    editBtnList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    const currentPost = posts[index];

    openModal(() => ({
      modalTitle: `Chỉnh sửa bài viết`,
      modalContent: `
        <div class="flex flex-col gap-3">
        <h2 class="text-3xl">Tiêu đề</h2>
          <input 
            type="text" 
            class="js-edit-title border p-2 w-full rounded-sm" 
            value="${currentPost.title}"
          >
          <h3 class="text-2xl">Nội dung</h3>
          <textarea 
            class="js-edit-body border p-2 w-full h-32 resize-none rounded-sm"
          >${currentPost.body}</textarea>
          <button class="js-save bg-green-400 p-2 rounded-sm hover:bg-green-500">Lưu</button>
        </div>
      `
    }));
    const modal = document.querySelector(".js-modal");
    modal.querySelector(".js-save").addEventListener("click", () => {
      const newTitle = modal.querySelector(".js-edit-title").value;
      const newBody = modal.querySelector(".js-edit-body").value;

      posts[index].title = newTitle;
      posts[index].body = newBody;

      closeModal();
      renderPosts(posts);
    });
  });
});

//// xoa item
const deleteBtnList = postList.querySelectorAll(".js-delete-item");
    deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       if (confirm ("Bạn chắc chắn muốn xoá bài viết khổng??")) {
        alert("Bài viết đã được xoá!");
       } else {
        alert("Bạn đã huỷ xoá bài viết");
       }

        e.target.closest(".js-container").classList.add("hidden");
        });
      });
};

const setLoading = (status = true) =>  {
    const loaddingEl = document.querySelector(".js-loading");
    loaddingEl.innerHTML = status ? `<span class="text-3xl block text-center"> loatding....</span>` : '';
};

const renderError = (message) => {
    const postListEl = document.querySelector(".js-container");
    postListEl.innerHTML = `<span class="text-3xl block text-center">${message}</span>`
};

const fetchPost = async () => {
    try {
        setLoading();
        let url = `${BASE_URL}/posts`;
        if(query.search) {
            url = `${BASE_URL}/posts/search?q=${query.search}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error ("Failed to fetch / posts");
        }
        const { posts } = await response.json();

        let sortedPosts = [...posts];
        if (query.sort === "desc") {
            sortedPosts.reverse();
        } else if (query.sort === "asc") {
            sortedPosts = [...posts];
        }

        renderPosts(sortedPosts);
    } catch (Error) {
        renderError(`đã có lỗi dữ liệu`)
    } finally {
        setLoading(false);
    }
};

///cu va moi
const addSortEvent = () => {
    const newBtn = document.querySelector(".new");
    const oldBtn = document.querySelector(".old");
    newBtn.addEventListener("click", () => {
        query.sort = "desc";
        fetchPost();
    });
    oldBtn.addEventListener("click", () => {
        query.sort = "asc";
        fetchPost();
    });
};


const debounce = (callback, timeuot = 500) => {
    let timeuotId;
    return (...args) => {
        clearTimeout(timeuotId);
        timeuotId = setTimeout (() => {
            callback(...args);
        }, timeuot);
    };
};

const addSearchEvent = () => {
    const searchEl = document.querySelector(".js-search");
    searchEl.addEventListener("input", debounce((e) => {
        const value = e.target.value;
        query.search = value;
        fetchPost();
    }));
};

const openModal = (callback) => {
    if (typeof callback !== "function") {
        return;
    }
    const modalEl = document.querySelector(".js-modal");
    const modalTitle = modalEl.querySelector(".js-modal-title");
    const modalContent = modalEl.querySelector(".js-modal-content");
    modalEl.classList.remove("hidden");
    const option = callback();
    modalTitle.innerHTML = option.modalTitle;
    modalContent.innerHTML = option.modalContent;
     
};
const closeModal = () => {
    const modalEl = document.querySelector(".js-modal");
    const modalTitle = modalEl.querySelector(".js-modal-title");
    const modalContent = modalEl.querySelector(".js-modal-content");
    modalEl.classList.add("hidden");
    modalTitle.innerText = "";
    modalContent.innerText = "";
};

const addEventCloseModal = () => {
    const overlay = document.querySelector(".js-overlay");
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
};

fetchPost();
addSearchEvent();
addEventCloseModal();
addSortEvent();