const OtherInfo = ({ formData, setFormData }) => {
  const handleChangeData = (event) => {
    localStorage.setItem("otherData", event.target.value);
    setFormData({ ...formData, otherData: event.target.value });
  };
  return (
    <>
      <textarea
        className="w-100"
        placeholder="نظرات خود را این جا وارد کنید "
        value={formData.otherData}
        onChange={handleChangeData}
      ></textarea>
    </>
  );
};

export default OtherInfo;
