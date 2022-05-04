const OtherInfo = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    localStorage.setItem("otherData", event.target.value);
    setFormData({ ...formData, city: event.target.value });
  };
  return (
    <>
      <textarea
        className="w-100"
        placeholder="نظرات خود را این جا وارد کنید "
        value={formData.otherData}
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default OtherInfo;
