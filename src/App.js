// Import Pages
import AboutUs from "./pages/AboutUs";
// Global Style
import GlobalStyle from "./components/GlobalStyleComponent";
// Components
import Nav from "./components/NavComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
