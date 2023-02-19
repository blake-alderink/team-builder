import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import { findByRole } from "@testing-library/react";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  function submitHandler(values) {
    setTeamMembers([...teamMembers, values]);
    console.log(teamMembers);
  }

  return (
    <div className="App">
      <Form submitHandler={submitHandler} />
      <div>
        {teamMembers.map((member) => {
          return (
            <h1>
              Name: {member.name}, Role: {member.role}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
