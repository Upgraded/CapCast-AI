document.addEventListener('DOMContentLoaded', () => {
  const askButton = document.getElementById('askButton');
  const questionInput = document.getElementById('questionInput');
  const outputSection = document.getElementById('outputSection');

  if (askButton) {
    askButton.addEventListener('click', () => {
      const question = questionInput.value.trim();

      outputSection.innerHTML = ""; // Clear any previous result

if (question.length > 0) {
  outputSection.innerHTML = `<p><strong>Capcast:</strong> Analyzing your query: "${question}". Confidence: <span class="confidence">TBD%</span>.</p>`;
} else {
  outputSection.innerHTML = `<p class="error">Please enter a valid question.</p>`;
}

      }
    });
  }
});
