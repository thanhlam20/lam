const formEl = document.querySelector("#form");
const taskListEl = document.querySelector(".js-list");
const inputEl = document.querySelector(".js-input");
const addBtnEl = document.querySelector(".js-add");

const tasks = [];

const getHtmlEntities = (html) => {
 
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
};

const hasDuplicate = (newTitle, excludedIndex = -1) => {
  return tasks.some(
    (task, index) =>
      task.title.toLowerCase() === newTitle.toLowerCase() &&
      index !== excludedIndex
  );
};

const addNewTask = (e) => {
  e.preventDefault();
  const value = inputEl.value.trim();

  if (!value) return alert("Vui lòng điền tiêu đề công việc!");

  if (hasDuplicate(value)) {
    inputEl.value = "";
    return alert(`Công việc "${value}" đã tồn tại!`);
  }

  tasks.push({
    title: value,
    completed: false,
    editing: false,
  });
  renderTask();
  inputEl.value = "";
};

const handleTaskActions = (e) => {
  const taskItem = e.target.closest(".js-item");
  if (!taskItem) return;

  const taskIndex = +taskItem.dataset.index;
  const task = tasks[taskIndex];

  if (e.target.closest(".js-title")) {
    task.completed = !task.completed;
    renderTask();
    return;
  }

  if (e.target.closest(".js-edit")) {
    tasks.forEach((task, index) => (task.editing = index === taskIndex));
    console.log(tasks);

    renderTask();
    return;
  }

  if (e.target.closest(".js-done")) {
    e.preventDefault();
    const inputEditEl = taskItem.querySelector(".js-edit-input");

    const newTitle = inputEditEl.value.trim();

    if (!newTitle) {
      inputEditEl.value = "";
      alert("Task title cannot be empty!");
      inputEditEl.focus();
      return;
    }
    if (hasDuplicate(newTitle, taskIndex)) {
      inputEditEl.value = "";
      alert(`Công việc "${newTitle}" đã tồn tại!`);
      inputEditEl.focus();
      return;
    }

    tasks[taskIndex].title = newTitle;
    tasks[taskIndex].editing = false;
    renderTask();
    return;
  }

  if (e.target.closest(".js-delete")) {
    if (confirm(`Bạn muỗn xóa công việc "${task.title}" ?`)) {
      tasks.splice(taskIndex, 1);
      renderTask();
    }
  }
};

const renderTask = () => {
  const html = tasks
    .map((task, index) => {
      if (task.editing) {
        return `
          <div class="js-item flex items-center justify-between my-4 rounded-md bg-transparent" data-index=${index}>
            <form class="js-edit-form w-full flex text-sm">
              <input type="text" value="${getHtmlEntities(
                task.title
              )}" class="js-edit-input bg-transparent outline-none border border-solid border-[#8758ff] text-white py-2 px-4 w-[300px]" />
              <button class="js-done bg-[#8758ff] text-white border-none cursor-pointer px-2 py-2 hover:text-[#1a1a40]">Add Task</button>
            </form>
          </div>
      `;
      }

      return `
          <div class="js-item flex items-center justify-between py-3 px-4 my-4 rounded-md bg-[#8758ff] text-white ${
            task.completed ? "line-through text-opacity-40" : ""
          }" data-index=${index}>
              <p class="js-title cursor-pointer flex-1 text-left hover:text-[#1a1a40]">${getHtmlEntities(
                task.title
              )}</p>
              <div class="flex items-center gap-3 px-1">
                  <svg class="js-edit w-4 h-4 cursor-pointer hover:text-[#1a1a40] transition" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                  </svg>
                  <svg  class="js-delete w-4 h-4 cursor-pointer hover:text-[#1a1a40] transition" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
              </div>
          </div>
      `;
    })
    .join("");
  taskListEl.innerHTML = html;
};

renderTask();

formEl.addEventListener("submit", addNewTask);
taskListEl.addEventListener("click", handleTaskActions);
addBtnEl.addEventListener("mousedown", (e) => e.preventDefault());