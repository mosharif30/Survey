import { useState } from "react";
import Accept from "./Accept";
import OtherInfo from "./questions/OtherInfo";
import PersonalInfo from "./questions/PersonalInfo";
import SignUpInfo from "./questions/ClientInfo";
import { useNavigate } from "react-router-dom";
import CountDown from "./CountDown";
import { useEffect } from "react";
import CoundDownPart from "./CountDown";
import Gender from "./questions/Gender";

const Form = () => {
  useEffect(() => {
    // localStorage.setItem("count", 120);
    localStorage.setItem("done", true);
  }, []);
  let navigate = useNavigate();

  const [page, setPage] = useState(0);
  const formTitles = [
    "signup info",
    "gender",
    "mother",
    "other info",
    "accept",
  ];
  const pageDisplay = () => {
    if (page == 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <Gender formData={formData} setFormData={setFormData}></Gender>;
    } else if (page == 2) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
        ></PersonalInfo>
      );
    } else if (page == 3) {
      return (
        <OtherInfo formData={formData} setFormData={setFormData}></OtherInfo>
      );
    } else {
      return <Accept formData={formData}></Accept>;
    }
  };
  const [formData, setFormData] = useState({
    userName: localStorage.getItem("userName"),
    age: localStorage.getItem("age"),
    gender: localStorage.getItem("gender"),
    lastName: localStorage.getItem("lastName"),
    otherInfo: localStorage.getItem("mother"),
  });
  let onTimesup = () => {
    localStorage.setItem("done", true);

    navigate("/formsend", {
      replace: true,
      state: "sorry Your time is up",
    });
  };
  return (
    <>
      <div>
        <CoundDownPart></CoundDownPart>
      </div>
      <div className="form">
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "60%"
                  : page === 3
                  ? "80%"
                  : "100%",
            }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="form-container">
          <div className="header">{formTitles[page]}</div>
          <div className="body">{pageDisplay()}</div>
          <div className="footer">
            <button
              className="btn btn-danger"
              //   disabled={page == 0}
              style={{ display: page == 0 ? "none" : "inline" }}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              prev
            </button>
            <button
              className={
                page === formTitles.length - 1
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
              onClick={() => {
                if (page === formTitles.length - 1) {
                  localStorage.setItem("done", true);
                  localStorage.removeItem("end_date");

                  {
                    navigate("/formsend", {
                      replace: true,
                      //   state: formData,
                    });
                  }
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === formTitles.length - 1 ? "Submit" : "next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
