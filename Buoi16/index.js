var a = "Xoan";

function changeName(name) {
  return name.toUpperCase();
}
function Welcome() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      null,
      "Hello"
    ),
    React.createElement(
      "p",
      null,
      "Xoan"
    ),
    React.createElement(
      "p",
      null,
      changeName(a)
    ),
    React.createElement(
      "p",
      null,
      "Hello"
    )
  );
}

ReactDOM.render(React.createElement(Welcome, null), document.getElementById("root"));