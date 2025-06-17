document.getElementById("askButton").addEventListener("click", function () {
  const input = document.getElementById("questionInput").value.toLowerCase();
  const responseDiv = document.getElementById("response");

  console.log("Button clicked, input:", input); // Add this line!

  let response = "Sorry, I need more context to help with that one.";

  if (input.includes("okc") && input.includes("pacers")) {
    response = "CapCast likes OKC tonight – 63% confidence. Indiana's defense has struggled vs fast-paced teams.";
  } else if (input.includes("lakers") && input.includes("celtics")) {
    response = "CapCast is riding with the Celtics – 58% confidence. Better road net rating, fewer turnovers.";
  } else if (input.includes("heat") && input.includes("knicks")) {
    response = "Knicks are the lean – 54% confidence. Miami's backcourt is banged up.";
  }

  responseDiv.innerHTML = `<p>${response}</p>`;
});

