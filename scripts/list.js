function saveTest() {
  console.log("save is called");
}

function toggleImportant() {
  const nonImportant = "fa-regular fa-user";
  const isImportant = "fa-solid fa-user";

  $("#iconImportant").removeClass(nonImportant).addClass(isImportant);
}

function init() {
  //load data

  //hook events
  $("#btnSave").click(saveTest);
}

window.onload = init;
