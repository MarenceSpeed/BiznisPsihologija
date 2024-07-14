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

const texts = [
    "",
    "Da...život je definitivno besmislen...nepravedan i nefer... I to je jasno svakome ko je iole zagrebao ispod površnog i banalnog... Memento mori...pa to da ne možemo zaštiti one koje volimo od patnje...pa tek zla sudbina za dobre ljude...i ostale teške priče koje su jednostavno kalibrisane datosti ovog univerzuma... Tajna je u nečemu drugom... Iako je život sam po sebi besmislen Naš Posao je da mu damo smisao... I tu nema kraja ljudskoj kreativnosti... Od monaha na Svetoj Gori... Preko ljudi zaljubljenih u materijalno... Umetnika i naučnika rešenih da promene svet... Do šankera na Ibici... I svega između... I svako treba da pronađe mesto baš za sebe na toj Lestvici... Baš tamo gde će njemu lično biti dobro...",
    "Potpuno me je oduševila misao koju sam čuo pre neki dan na auto otpadu...od čoveka koji je sa mnom stajao u redu...nalakćen na svog razdrndanog mezimca...i čekao da nas obojicu odere i obrlati vlasnik auto otpada...polučovek...polueuro... Druže...sve je to lepo...avioni...kamioni...skupe limuzine...ali vrednost automobila se jedino meri po tome na koliko si mora i vikend putovanja sa njim otišao...sve ostalo je potpuno nebitno. Kakva duboka životna filozofija... Kakav nasmešeni i pozitivni Mudrac...sa najneočekivanijeg mogućeg mesta...",
    "Znaj brzo ce doci kraj vise vremena nema daj veliki zagrljaj i nema problema.",
    "Potreba oba pertnera",
    "Losa energija i razumevanje partnera",
    "Svet je tvoj i dan i noc cega ces posle da se secas.",
    "Ovo je Peti tekst.",
  ];
  
  let currentIndex = 0;
  
  const textDiv = document.getElementById("textDiv");
  const nextButton = document.getElementById("nextButton");
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % texts.length;
    textDiv.innerText = texts[currentIndex];
  });
  

