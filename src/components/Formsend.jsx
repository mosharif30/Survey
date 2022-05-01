import { useLocation, useNavigate } from "react-router-dom";

const FormSend = (state) => {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const loggedData = {
    userName: localStorage.getItem("userName"),
    lastName: localStorage.getItem("lastName"),
    city: localStorage.getItem("city"),
  };
  console.log(loggedData);
  localStorage.removeItem("userName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("city");
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
