import { useState } from "react";
import Accept from "../Accept";
import OtherInfo from "../questions/OtherInfo";
import SignUpInfo from "../questions/ClientInfo";
import { useNavigate } from "react-router-dom";
import CountDown from "../CountDown";
import { useEffect } from "react";
import CoundDownPart from "../CountDown";
import Gender from "../questions/Gender";
import ProductInfo from "../questions/ProductInfo";
import "./form.css";
const Form = () => {
  
  useEffect(() => {
    // localStorage.setItem("count", 120);
    localStorage.setItem("done", true);
  }, []);
  let navigate = useNavigate();

  const [page, setPage] = useState(0);
  const formTitles = [
    "اطلاعات شخصی",
    "جنسیت",
    "اطلاعات ",
    "انتقاد یا پیشنهاد خریدار",
    "تاییدیه",
  ];
  const pageDisplay = () => {
    if (page == 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <Gender formData={formData} setFormData={setFormData}></Gender>;
    } else if (page == 2) {
      return (
        <ProductInfo
          formData={formData}
          setFormData={setFormData}
        ></ProductInfo>
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
    product: localStorage.getItem("product"),
    otherData: localStorage.getItem("otherData"),
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
      <div className="container-fluid appContainer">
        <div className="row">
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
          <div className="col-xl-6 col-md-10 col-xs-12 appBox">
            {" "}
            <div
              type="button"
              className="btn btn-warning position-relative mt-3 mb-2 me-2"
            >
              <CoundDownPart></CoundDownPart>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                زمان
              </span>
            </div>
            <div className="form">
              <div className="progress">
                <div
                  className="progress-bar bg-success progress-bar-striped progress-bar-animated"
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
                <div className="header mt-2">
                  <h1>{formTitles[page]}</h1>
                </div>
                <div className="body">{pageDisplay()}</div>
                <div className="footer">
                  <button
                    className="btn btn-danger mt-4 mb-2"
                    //   disabled={page == 0}
                    style={{ display: page == 0 ? "none" : "inline" }}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    صفحه قبل
                  </button>
                  <button
                    className={
                      page === formTitles.length - 1
                        ? "btn btn-success mt-4 me-3 mb-2"
                        : "btn btn-primary mt-4 me-3 mb-2"
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
                    {page === formTitles.length - 1 ? "ارسال" : "صفحه بعد"}
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
        </div>
      </div>
    </>
  );
};

export default Form;
