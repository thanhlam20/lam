const form = document.querySelector("#form");
const input = document.querySelector(".js-input");
const list = document.querySelector(".js-list");

// click add task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Vui lòng nhập nội dung công việc");
    return;
  }

  const taskEl = document.createElement("div");
  taskEl.className =
    "flex justify-between items-center bg-[#8758ff] text-white p-2 mb-2 rounded";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const btnGroup = document.createElement("div");

// icon sửa
  const editicon = document.createElement("button");
  editicon.innerHTML = `<svg class="js-edit w-4 h-4 cursor-pointer hover:text-[#1a1a40] transition" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                  </svg>`

// icon xoá
  const deleteIcon = document.createElement("button");
  deleteIcon.innerHTML = `<svg  class="js-delete w-4 h-4 cursor-pointer hover:text-[#1a1a40] transition" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>`
  deleteIcon.className = "px-2 py-1"

  btnGroup.append(editicon);
  btnGroup.append(deleteIcon);
  taskEl.append(taskContent);
  taskEl.append(btnGroup);
  list.append(taskEl);

  // Xoá value input
  input.value = "";

  deleteIcon.addEventListener("click", () => {
    taskEl.remove();
  });

  editicon.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskContent.textContent;
    editInput.className =
      "p-1 border border-[#fff] bg-transparent text-white rounded w-[350px] outline-none";

    taskEl.replaceChild(editInput, taskContent);

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Add task";
    saveBtn.className =
      "bg-[#8758ff] text-white px-2 py-1 rounded";

    btnGroup.innerHTML = "";
    btnGroup.append(saveBtn);

    saveBtn.addEventListener("click", () => {
      const newText = editInput.value.trim();
      if (newText === "") {
        alert("Nội dung không được đe trống");
        return;
      }

      taskContent.textContent = newText;

      taskEl.replaceChild(taskContent, editInput);

      btnGroup.innerHTML = "";
      btnGroup.append(editicon);
      btnGroup.append(deleteIcon);
    });
  });
});
