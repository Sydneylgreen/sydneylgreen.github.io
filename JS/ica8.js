var button = document.createElement("button");
button.innerHTML = "Back To Home Page";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    location.href = "index.html";
  });





