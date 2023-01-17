import { GlobalStyle } from "./Globalstyles";
import RotaMain from "./routes";
import { ApiContextProvider } from "./context/apiContext";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
      <RotaMain />
      </ApiContextProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
