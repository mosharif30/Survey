const Accept = ({ formData }) => {
  return (
    <>
      <div>are you sure</div>
      <div>{localStorage.getItem("userName")}</div>
      <div>{localStorage.getItem("age")}</div>
      <div>{localStorage.getItem("gender")}</div>
      <div>{localStorage.getItem("mother")}</div>
      <div>{localStorage.getItem("otherData")}</div>
    </>
  );
};

export default Accept;
