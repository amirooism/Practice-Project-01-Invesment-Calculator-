import Header from "./Components/Header.jsx";
import Result from "./Components/Result.jsx";
import UserInput from "./Components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }
  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleUserInput} />
      <Result input={userInput} />
    </>
  );
}

export default App;
