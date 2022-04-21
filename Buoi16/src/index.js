let a = "Xoan"

function changeName(name){
  return name.toUpperCase();
}
function Welcome() {
  return (
    <div>
      <a>Hello</a>
      <p>Xoan</p>
      <p>{changeName(a)}</p>
      <p>Hello</p>
    </div>

  )
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
