function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{
  id: "Drums 1",
  letter: "Q",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },

{
  id: "Heater 2",
  letter: "W",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  id: "Heater 4",
  letter: "E",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  id: "Heater 3",
  letter: "A",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  id: "Heater 6",
  letter: "S",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  id: "Drums 2",
  letter: "D",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  id: "Kick",
  letter: "Z",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  id: "Drums 3",
  letter: "X",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  id: "Drums 4",
  letter: "C",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",









    e => {
      if (e.keyCode == this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener("keydown", this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyDown);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("h1", null, this.props.letter), /*#__PURE__*/
      React.createElement("audio", {
        ref: ref => this.audio = ref,
        className: "clip",
        src: this.props.src,
        id: this.props.letter })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => this.setState({ display }));this.state = { display: "Press key" };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" },
      data.map((d) => /*#__PURE__*/
      React.createElement(DrumPad, {
        id: d.id,
        letter: d.letter,
        src: d.src,
        handleDisplay: this.handleDisplay })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("main"));