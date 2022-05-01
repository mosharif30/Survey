import { useLocation, useNavigate } from "react-router-dom";

const FormSend = (state) => {
  let navigate = useNavigate();
  const location = useLocation();
  const loggedData = {
    userName: localStorage.getItem("userName"),
    age: localStorage.getItem("age"),
    gender: localStorage.getItem("gender"),
    mother: localStorage.getItem("mother"),
    otherData: localStorage.getItem("otherData"),
  };
  console.log(loggedData);
  localStorage.removeItem("userName");
  localStorage.removeItem("age");
  localStorage.removeItem("gender");

  localStorage.removeItem("mother");
  localStorage.removeItem("otherData");
  localStorage.setItem("done", false);

  return (
    <>
      {location.state == null ? "thanks we have your answers" : "bad"}
      <button onClick={() => navigate("/", { replace: true })}>
        back to first page
      </button>
    </>
  );
};

export default FormSend;
