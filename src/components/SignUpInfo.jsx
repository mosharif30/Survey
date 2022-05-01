const SignUpInfo = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    localStorage.setItem("userName", event.target.value);
    setFormData({...formData, userName : event.target.value});
  };
  return (
    <>
      <input
        placeholder="username"
        value={formData.userName}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SignUpInfo;
