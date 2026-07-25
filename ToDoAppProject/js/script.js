let submitButton = document.querySelector(".submit-button");
let input = document.querySelector("#input");
let tasksDiv = document.querySelector("#tasks");

function AddTask() {
  if (input.value == "") {
    alert("Please add task name first");
    return;
  }

  let content = `
    <div
      class="task d-flex justify-content-between align-items-center border rounded-3 p-3 mb-3"
      >
        <p>${input.value}</p>

        <div>
            <button class="btn btn-success btn-sm me-2 edit-btn">Edit</button>

            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
      </div>
  `;
  tasksDiv.innerHTML += content;

  input.value = "";
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  AddTask();
});

tasksDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    let lastP = ``;
    EditTask(e.target);
  }
  if (e.target.classList.contains("save-btn")) {
    SaveTask(e.target);
  }
  if (e.target.classList.contains("cancel-btn")) {
    CancelTask(e.target, lastP);
  }
  if (e.target.classList.contains("delete-btn")) {
    DeleteTask(e.target);
  }
});

function RenderTask(task, text) {
  task.innerHTML = `
        <p>${text}</p>

        <div>
            <button class="btn btn-success btn-sm me-2 edit-btn">
                Edit
            </button>

            <button class="btn btn-danger btn-sm delete-btn">
                Delete
            </button>
        </div>
    `;
}

function EditTask(button) {
  let task = button.closest(".task");
  let taskName = task.querySelector("p").innerText;
  lastP = taskName;

  task.innerHTML = `
    <input
        type="text"
        class="form-control me-3 edit-input"
        value="${taskName}"
    >

    <div class="d-flex gap-2">
        <button class="btn btn-primary btn-sm me-2 save-btn">
            Save
        </button>

        <button class="btn btn-secondary btn-sm cancel-btn">
            Cancel
        </button>
    </div>
  `;
}

function SaveTask(button) {
  let task = button.closest(".task");

  let newValue = task.querySelector(".edit-input").value;

  RenderTask(task, newValue);
}

function CancelTask(button, lastP) {
  let task = button.closest(".task");

  RenderTask(task, lastP);
}

function DeleteTask(button) {
  let task = button.closest(".task");
  task.remove();
}
