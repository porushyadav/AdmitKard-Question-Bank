const message = document.getElementById("success");
const button = document.getElementById("addTask");
const query = document.getElementById("query");
const topic = document.getElementById("topic");
const tag = document.getElementById("tag");

//show notification on click the question

button.addEventListener("click", function (e) {
  //verifying data at front end for showing notification
  if (
    query.value.trim().length == 0 ||
    topic.value.trim().length == 0 ||
    tag.value.trim().length == 0
  ) {
    message.innerHTML = "Invalid Input";
    message.classList.add("error");
    message.classList.add("alert");
    setTimeout(function () {
      message.remove();
    }, 3000);
  } else {
    message.innerHTML = "Question have been added";
    message.classList.add("alert");
    message.classList.add("alert-success");
    setTimeout(function () {
      message.remove();
    }, 3000);
  }

  console.log(query.value);
});
