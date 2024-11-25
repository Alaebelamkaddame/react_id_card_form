import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../App";
import { validateForm } from "./Validation.jsx";
import "../index.css"

function Form() {
  const { formData, setFormData } = useContext(FormContext);
  const [localFormData, setLocalFormData] = useState(formData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(localFormData);
    setErrors(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      setFormData(localFormData);
      navigate("/submite");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 className="bg-red-700 text-xl text-center">Form</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="FiName"
          value={localFormData.FiName}
          onChange={handleChange}
        />
        {errors.FiName && <p style={{ color: "red" }}>{errors.FiName}</p>}
      </div>

      <div>
        <label>Family Name:</label>
        <input
          type="text"
          name="FamName"
          value={localFormData.FamName}
          onChange={handleChange}
        />
        {errors.FamName && <p style={{ color: "red" }}>{errors.FamName}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="Age"
          value={localFormData.Age}
          onChange={handleChange}
        />
        {errors.Age && <p style={{ color: "red" }}>{errors.Age}</p>}
      </div>

      <div>
        <label>Gender:</label>
        <select
          name="Gender"
          value={localFormData.Gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.Gender && <p style={{ color: "red" }}>{errors.Gender}</p>}
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="Adresse"
          value={localFormData.Adresse}
          onChange={handleChange}
        />
        {errors.Adresse && <p style={{ color: "red" }}>{errors.Adresse}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="Tel"
          value={localFormData.Tel}
          onChange={handleChange}
        />
        {errors.Tel && <p style={{ color: "red" }}>{errors.Tel}</p>}
      </div>

      <div>
        <label>Photo:</label>
        <input type="file" name="Photo" onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;




