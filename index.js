
function generateButtons() {
  const inputButtonsNo = document.getElementById("inputButtonsNo").value;
  var luckyNo = Math.floor(Math.random() * inputButtonsNo) + 1;
  for (var i = 1; i <= inputButtonsNo; ++i) {
    document.body.style.backgroundColor = "yellow";
    var buttonCreated = document.createElement("button");
    buttonCreated.innerText = "Button" + " " + i;
    buttonCreated.setAttribute("id", i);
    var displayAllButtons = document.getElementById("displayAllButtons");
    displayAllButtons.appendChild(buttonCreated);
    buttonCreated.addEventListener("click", function() {
      if (this.id == luckyNo) {
          document.getElementById("message").innerHTML="You've been lucky! This is the winning button!";
      } else {
         document.getElementById("message").innerHTML= "It wasn't your best shot! Let's try again!";
      }
    });
  }
}
