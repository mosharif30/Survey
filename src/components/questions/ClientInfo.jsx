const ClientInfo = ({ formData, setFormData }) => {
  const handleChangeName = (event) => {
    localStorage.setItem("userName", event.target.value);
    setFormData({ ...formData, userName: event.target.value });
  };
  const handleChangeAge = (event) => {
    localStorage.setItem("age", event.target.value);
    setFormData({ ...formData, age: event.target.value });
  };
  return (
    <>
      <input
        placeholder="Enter Your  fullName"
        value={formData.userName}
        onChange={handleChangeName}
      ></input>
      <input
        placeholder="Enter Your  Age"
        value={formData.age}
        onChange={handleChangeAge}
      ></input>
    </>
  );
};

export default ClientInfo;
