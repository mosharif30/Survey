const OtherInfo = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    localStorage.setItem("otherData", event.target.value);
    setFormData({ ...formData, city: event.target.value });
  };
  return (
    <>
      <input
        placeholder="otherData"
        value={formData.otherData}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default OtherInfo;
