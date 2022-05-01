const PersonalInfo = ({ formData, setFormData }) => {
    const handleChange = (event) => {
      localStorage.setItem("mother", event.target.value);
      setFormData({ ...formData, lastName: event.target.value });
    };
  return (
    <>
      <input
        placeholder="mother"
        value={formData.mother}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default PersonalInfo;
