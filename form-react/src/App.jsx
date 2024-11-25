import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import Submite from "./component/Submite";


export const FormContext = React.createContext();

function App() {
  const [formData, setFormData] = useState({
    FiName: "",
    FamName: "",
    Age: "",
    Gender: "",
    Adresse: "",
    Tel: "",
    Photo: null,
  });

  return (
    <>
      <FormContext.Provider value={{ formData, setFormData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/submite" element={<Submite />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </>
        
  );
}

export default App;
