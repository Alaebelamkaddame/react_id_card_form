import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../App.jsx";


function Submite() {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Saved Data:</h2>
      {formData.Photo && (
        <img
          src={URL.createObjectURL(formData.Photo)}
          alt="Uploaded"
          style={{ width: "100px", height: "100px", marginTop: "10px" }}
        />
      )}
      <p>First Name: {formData.FiName}</p>
      <p>Family Name: {formData.FamName}</p>
      <p>Age: {formData.Age}</p>
      <p>Gender: {formData.Gender}</p>
      <p>Address: {formData.Adresse}</p>
      <p>Phone: {formData.Tel}</p>
      
      <button onClick={() => navigate("/")}>Edit</button>
    </div>
  );
}

export default Submite;





