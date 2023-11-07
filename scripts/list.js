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
  let taskToDisplay = `
    <div class="task-container">
      <div class="task" style="border-color: ${task.color};">
        <h3 class="label">Title: ${task.title}</h3>
        <p class="label">Description: ${task.description}</p>
        <p class="label">Status: ${task.status}</p>
        <p class="label">Start Date: ${task.startDate}</p>
        <p class="label">Budget: ${task.budget}</p>
      </div>
    </div>
  `;

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
  $.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });

  //display the task
  displayTask(taskToSave);
  clearForm();
}

function loadTask() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net/api/tasks",
    success: function (response) {
      let data = JSON.parse(response);
      console.log(data);

      //this pulls all task from name in task.name==""
      // for (let i = 0; i < data.length; i++) {
      //   let task = data[i];
      //   if (task.name == "Adrian") {
      //     displayTask(task);
      //   }
      // }
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function clearForm() {
  $("#txtTitle").val("");
  $("#txtDescription").val("");
  $("#selectColor").val("#000000"); //sets the default color to black
  $("#selectDateTime").val("");
  $("#selectStatus").val("");
  $("#txtBudget").val("");
}

function testRequest() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
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

function deleteTask() {
  console.log("Deleting...");

  const deleteAll = $(".task-container");

  deleteAll.find(".task").remove();
}

function init() {
  //load data
  loadTask();
  //hook events
  $("#btnSave").click(saveTask);
  $("#iconImportant").click(toggleImportant);
  $("#btnDetails").click(toggleVisibility);
  $("#btnDelete").click(deleteTask);
}

window.onload = init;
