import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("done", false);
  }, []);
  return (
    <>
      {location.state ? (
        <div className="alert alert-danger">
          sorry you don't have acces to this Route
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => navigate("/form", { replace: false })}>
        start the survey
      </button>
    </>
  );
};

export default Home;
