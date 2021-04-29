const button = document.getElementById('button');
const audioElement = document.getElementById('audio');



// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
  }
  




//Get jokes from API

// VoiceRSS Speech Function
function tellMe(joke) {
    const jokeString = joke;
    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
      key: '572e993ec9844449a07604e35e9cfcc6',
      src: jokeString,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  }
  

async function getJokes(){
    
    
let joke = '';
const apiUrl = 'https://api.chucknorris.io/jokes/random';
    try {

       const response = await fetch(apiUrl);
       const data = await response.json();
       joke = data.value;
       console.log(joke);
   // Passing Joke to VoiceRSS API
    tellMe(joke);
    // Disable Button
    toggleButton();
        
    } catch (error) {
        //Catch Errors
        console.log("OOps ",error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
