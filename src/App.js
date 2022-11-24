import logo from './logo.svg';
import './App.css';
import Display from './Mycomponents/Display'
function App() {
  // let fname = document.getElementById("input").value;
  // console.log(fname);
  let age = Number(prompt("Enter your age: "))
  return (
    <>
      {/* <input type="text" id="input"/> */}
      <Display age={age}/>
    </>
  );
}

export default App;
