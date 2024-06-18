import React, { useState } from "react";
import NavBar from "./components/NavBar";
import CalculatorContainer from "./components/CalculatorContainer";
import ResultsContainer from "./components/ResultsContainer";
import FooterContainer from "./components/FooterContainer";

function App() {
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDriveTime, setTotalDriveTime] = useState(0);
  const [newWaitTime, setNewWaitTime] = useState(0);

  return (
    <>
      <NavBar />
      <CalculatorContainer
        totalDistance={totalDistance}
        setTotalDistance={setTotalDistance}
        totalDriveTime={totalDriveTime}
        setTotalDriveTime={setTotalDriveTime}
        newWaitTime={newWaitTime}
        setNewWaitTime={setNewWaitTime}
      />
      <ResultsContainer
        totalDistance={totalDistance}
        setTotalDistance={setTotalDistance}
        totalDriveTime={totalDriveTime}
        setTotalDriveTime={setTotalDriveTime}
        newWaitTime={newWaitTime}
        setNewWaitTime={setNewWaitTime}
      />
      <FooterContainer />
    </>
  );
}

export default App;
