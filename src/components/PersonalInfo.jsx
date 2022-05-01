const PersonalInfo = ({ formData, setFormData }) => {
    const handleChange = (event) => {
      localStorage.setItem("lastName", event.target.value);
      setFormData({ ...formData, lastName: event.target.value });
    };
  return (
    <>
      <input
        placeholder="lastname"
        value={formData.lastName}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default PersonalInfo;
