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
      <div className="row w-75 me-auto ms-auto">
        <input
          className="mt-4"
          placeholder="نام و نام خانوادگی کامل خود را وارد کنید"
          value={formData.userName}
          onChange={handleChangeName}
        ></input>
        <input
          className="mt-4"
          placeholder="سن خود را وارد کنید"
          value={formData.age}
          onChange={handleChangeAge}
        ></input>
      </div>
    </>
  );
};

export default ClientInfo;
