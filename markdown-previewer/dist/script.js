marked.setOptions({
  sanitize: true });


var AppBox = React.createClass({ displayName: "AppBox",
  getInitialState: function () {
    return { text: '' };
  },
  textChange: function (e) {
    this.setState({ text: marked(e.target.value) });
  },
  render: function () {
    return (
      React.createElement("div", { className: "row" },
      React.createElement(TextBox, { text: this.state.text, onTextChange: this.textChange }),
      React.createElement(ResultBox, { text: this.state.text })));


  } });


var TextBox = React.createClass({ displayName: "TextBox",
  render: function () {
    return (
      React.createElement("div", { className: "input col-md-6" },
      React.createElement("h2", null, "Input"),
      React.createElement("textarea", { className: "form-control", onChange: this.props.onTextChange, placeholder: "Type in your text", rows: "20" }, this.props.text)));


  } });


var ResultBox = React.createClass({ displayName: "ResultBox",
  rawMarkup: function () {
    return { __html: this.props.text };
  },
  render: function () {
    return (
      React.createElement("div", { className: "col-md-6" },
      React.createElement("h2", null, "Output"),
      React.createElement("div", { className: "result", dangerouslySetInnerHTML: this.rawMarkup() })));



  } });



ReactDOM.render(
React.createElement(AppBox, null),
document.getElementById('previewer'));