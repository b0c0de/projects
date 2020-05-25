/////////////
// REACT
/////////////

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInstrument: "rockn'roll",
      buttonDetails: [
      { letter: "Q",
        instrument: "bongo",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/African and Eastern Percussion/23[kb]bongo lo.aif.mp3" },
      {
        letter: "W",
        instrument: "tabla",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/African and Eastern Percussion/45[kb]solid-tabla-hit.aif.mp3" },
      {
        letter: "E",
        instrument: "steel drum",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/African and Eastern Percussion/79[kb]SteelDrum-vs.aif.mp3" },

      {
        letter: "A",
        instrument: "blart",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/Electronic Hits/29[kb]blart.aif.mp3" },
      {
        letter: "S",
        instrument: "clonk",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/Electronic Hits/32[kb]fm_clonk.wav.mp3" },
      {
        letter: "D",
        instrument: "ratatat",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/Electronic Hits/98[kb]ratatat.aif.mp3" },

      {
        letter: "Z",
        instrument: "cowbell",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (SINGLE HITS)/Western and Latin Percussion/7[kb]hicow.aif.mp3" },
      {
        letter: "X",
        instrument: "bass",
        audioFile: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
      {
        letter: "C",
        instrument: "crash",
        audioFile: "https://sampleswap.org/samples-ghost/DRUMS (FULL KITS)/DRUM MACHINES/80s Drum Machine/94[kb]80s-CRASH2.aif.mp3" }] };




    // insert functional bindings here
    this.buttonDivs = this.buttonDivs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.playThatBeat = this.playThatBeat.bind(this);
  }


  // Functions:

  //Generate the button divs from the this.state.buttonDetails object so we can render them later on:
  buttonDivs() {
    let divList = this.state.buttonDetails.map(item => {
      return React.createElement("button", { class: "drum-pad", onClick: this.handleClick, onKeyDown: this.handleKey, id: item.instrument }, item.letter, React.createElement("audio", { class: "clip", id: item.letter, src: item.audioFile }));
    });

    // In order for the user to be able to use the keyboard as soon as the page loads, we need to set the focus on one of the buttons of the drumpad. We arbitrarily to do so with the first button:		
    divList[0].props.autofocus = "autofocus";

    // ... and finally, the fuction returns the list of divs for each of our buttons:
    return divList;
  }


  // For when the drumpad buttons are clicked:
  handleClick(event) {
    this.setState({
      currentInstrument: event.target.id });


    this.playThatBeat(event.target.textContent);
  }



  // For when the keyboard is used:
  handleKey(event) {
    // We'll convert the character code of the keyboard key to a letter:
    let keyPressed = String.fromCharCode(event.keyCode);

    // If the key pressed is a valid one for our drumpad...
    if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(keyPressed)) {
      //... then we'll use filter to retrieve the button's/instrument's details:
      let instrumentDetails = this.state.buttonDetails.filter(item => {
        return item.letter == keyPressed;
      });
      // from the details array that we've created, we'll retrieve the instrument's name:
      let instrumentName = instrumentDetails[0].instrument;
      // then we'll update the state so that the display DIV has the correct information
      this.setState({
        currentInstrument: instrumentName });


      // We need to light up our button, for which we'll have to briefly set it's attributes to include the class .active . To do so, we'll use setTimeout, for which we need a little function:
      let toggleActive = function () {
        document.getElementById(instrumentName).classList.toggle("active");
      };
      // "Press" the button in:
      toggleActive();
      // ... and 100ms later, "release" the button:
      setTimeout(toggleActive, 100);

      // ... and finally call our audio-playing function:
      this.playThatBeat(keyPressed);
    }
  }



  //This function plays the audio element:
  playThatBeat(padLetter) {
    let audioElement = document.getElementById(padLetter);
    audioElement.play();
  }



  render() {
    return (
      React.createElement("div", { id: "drum-machine" },

      React.createElement("div", { id: "name" }, "drum"),


      React.createElement("div", { id: "display" },
      this.state.currentInstrument),


      React.createElement("div", { id: "button-area" },
      this.buttonDivs())));




  }}
// End of "Presentational"

// Render the component to the DOM:
ReactDOM.render(React.createElement(Presentational, null), document.getElementById("entire-machine"));