document.addEventListener("DOMContentLoaded", function () {
  const askButton = document.querySelector("button");
  const inputField = document.querySelector("input");
  const output = document.querySelector(".output-section span");

  const predictions = [
    "Based on trends and defense rating, the Pacers are likely to cover. Confidence: 68%.",
    "Due to recent injuries and matchup data, OKC is slightly favored. Confidence: 72%.",
    "Capcast model suggests it's a toss-up — avoid this bet. Confidence: 53%.",
    "Data favors OKC on the road tonight. Confidence: 77%.",
    "Historical matchups point toward the under. Confidence: 65%.",
    "Capcast projects a blowout — Pacers dominate. Confidence: 81%."
  ];

  askButton.disabled = false;

  askButton.addEventListener("click", () => {
    const random = Math.floor(Math.random() * predictions.length);
    output.textContent = predictions[random];
  });
});
