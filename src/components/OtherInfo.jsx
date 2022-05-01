const OtherInfo = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    localStorage.setItem("city", event.target.value);
    setFormData({ ...formData, city: event.target.value });
  };
  return (
    <>
      <input
        placeholder="city"
        value={formData.city}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default OtherInfo;
