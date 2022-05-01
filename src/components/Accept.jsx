
const Accept = ({ formData }) => {
  return (
    <>
      <div>are you sure</div>
      <div>{localStorage.getItem("userName")}</div>
      <div>{localStorage.getItem("lastName")}</div>
      <div>{localStorage.getItem("city")}</div>
    </>
  );
};

export default Accept;
