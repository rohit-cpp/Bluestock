import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
