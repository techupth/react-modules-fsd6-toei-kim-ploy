import "./App.css";
import * as allcompo from "./components/allComponent";

function App() {
  return (
    <div>
      <allcompo.Header />
      <allcompo.MainContent />
      <allcompo.ProductSection />
      <allcompo.FAQ />
      <allcompo.Footer />
    </div>
  );
}

export default App;
