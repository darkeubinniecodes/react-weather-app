import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by Catarina Santos and it's{" "}
          <a
            href="https://github.com/darkeubinniecodes/react-weather-app"
            target="blank"
            rel="noonpener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
