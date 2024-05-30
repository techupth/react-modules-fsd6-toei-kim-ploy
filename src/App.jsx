import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./conponents/components";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
