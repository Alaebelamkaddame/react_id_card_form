export const validateForm = (data) => {
    const errors = {};
  
    // Validate First Name
    if (!data.FiName.trim()) {
      errors.FiName = "First Name is required.";
    } else if (!/^[a-zA-Z]+$/.test(data.FiName)) {
      errors.FiName = "First Name should only contain alphabets.";
    }
  
    // Validate Family Name
    if (!data.FamName.trim()) {
      errors.FamName = "Family Name is required.";
    } else if (!/^[a-zA-Z]+$/.test(data.FamName)) {
      errors.FamName = "Family Name should only contain alphabets.";
    }
  
    // Validate Age
    if (!data.Age) {
      errors.Age = "Age is required.";
    } else if (isNaN(data.Age) || data.Age < 1 || data.Age > 120) {
      errors.Age = "Age must be a valid number between 1 and 120.";
    }
  
    // Validate Gender
    if (!data.Gender) {
      errors.Gender = "Gender is required.";
    } else if (data.Gender !== "Male" && data.Gender !== "Female") {
      errors.Gender = "Gender must be either 'Male' or 'Female'.";
    }
  
    // Validate Address
    if (!data.Adresse.trim()) {
      errors.Adresse = "Address is required.";
    } else if (data.Adresse.length < 5) {
      errors.Adresse = "Address must be at least 5 characters long.";
    }
  
    // Validate Phone
    if (!data.Tel.trim()) {
      errors.Tel = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.Tel)) {
      errors.Tel = "Phone number must be a valid 10-digit number.";
    }
  
    return errors;
  };
  
