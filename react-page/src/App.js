import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="NOT FOUND" width="80px" />
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h1>Well, Its the H1 Heading</h1>
      <ol>
        <li>Its popular , so i am learning reactsd</li>

        <li>I can get a job too if I know react</li>
      </ol>
      <footer>
        <p>20xx op development. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
