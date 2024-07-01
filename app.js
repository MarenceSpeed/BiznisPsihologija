// Define the array in the global scope
var answers = [];

// Function to save input from textarea
function saveInput() {
    // Get the value from the textarea
    var userInput = document.getElementById('userInput').value;

    // Push the value into the answers array
    answers.push(userInput);

    // Log the array to the console (for testing purposes)
    console.log("Current answers array:", answers);

    // Clear the textarea for new input
    document.getElementById('userInput').value = "";
}

// Function to display all saved inputs
function displayInputs() {
    // Access and use the global array 'answers'
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = ""; // Clear previous content

    // Display each input in the array
    answers.forEach(function(answer, index) {
        displayArea.innerHTML += "<p>Input " + (index + 1) + ": " + answer + "</p>";
    });

    console.log("Displayed inputs:", answers);
}

document.getElementById('dugmemisao').addEventListener('click', function() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // Add some text content to the new paragraph
    newParagraph.textContent = 'This is a new paragraph.';
    
    // Append the new paragraph to the paragraph container
    document.getElementById('paragraphContainer').appendChild(newParagraph);
});


