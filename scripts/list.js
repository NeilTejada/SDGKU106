let flag = false;
let isVisible = true;

function toggleVisibility() {
  if (isVisible) {
    $("#form").hide();
    isVisible = false;
    console.log("hide");
  } else {
    $("#form").show();
    isVisible = true;
    console.log("show");
  }
}

function displayTask(task) {
  let taskToDisplay = `<h3>${task.title}</h3>`;
  $(".pending-task").append(taskToDisplay);
}

function saveTask() {
  console.log("save is called");
  //get the values
  const title = $("#txtTitle").val();
  const description = $("#txtDescription").val();
  const color = $("#selectColor").val();
  const startDate = $("#selectDateTime").val();
  const status = $("#selectStatus").val();
  const budget = $("#txtBudget").val();

  console.log(title, description, color, startDate, status, budget);

  //build the object
  let taskToSave = new Task(
    flag,
    title,
    description,
    color,
    startDate,
    status,
    budget
  );
  console.log(taskToSave);

  //save to server

  //display the task
  displayTask(taskToSave);
}

function toggleImportant() {
  const nonImportant = "fa-regular fa-user";
  const isImportant = "fa-solid fa-user";

  if (flag) {
    $("#iconImportant").removeClass(isImportant).addClass(nonImportant);
    flag = false;
  } else {
    $("#iconImportant").removeClass(nonImportant).addClass(isImportant);
    flag = true;
  }
}

function init() {
  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iconImportant").click(toggleImportant);
  $("#btnDetails").click(toggleVisibility);
}

window.onload = init;
