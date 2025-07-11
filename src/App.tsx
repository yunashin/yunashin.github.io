import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./components/Routes";
import { devModeOn } from "./constants/testingConstants";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <div>
          <Routes />
        </div>
        <footer>
          {devModeOn && (
            <div>
              <div
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                dev mode on
              </div>
              <a href="/blog-post-generator" style={{ color: "orange" }}>
                blog post generator
              </a>
            </div>
          )}
        </footer>
      </ErrorBoundary>
    </div>
  );
}

export default App;
