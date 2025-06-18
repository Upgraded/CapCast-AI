document.addEventListener('DOMContentLoaded', () => {
  const askButton = document.getElementById('askButton');
  const questionInput = document.getElementById('questionInput');
  const outputSection = document.getElementById('outputSection');

  if (askButton) {
    askButton.addEventListener('click', () => {
      const question = questionInput.value.trim();

      if (question.length > 0) {
        // Placeholder output
        outputSection.innerHTML = ""; // Clear old response
outputSection.innerHTML = `<p><strong>Capcast:</strong> Analyzing your query: "${question}". Confidence: <span class="confidence">TBD%</span>.</p>`;

        outputSection.innerHTML = '<p>Please enter a valid question.</p>';
      }
    });
  }
});
