import { useLocation, useNavigate } from "react-router-dom";
import "./formsend.css";
const FormSend = (state) => {
  let navigate = useNavigate();
  const location = useLocation();
  const loggedData = {
    userName: localStorage.getItem("userName"),
    age: localStorage.getItem("age"),
    gender: localStorage.getItem("gender"),
    product: localStorage.getItem("product"),
    otherData: localStorage.getItem("otherData"),
  };
  console.log(loggedData);
  localStorage.removeItem("userName");
  localStorage.removeItem("age");
  localStorage.removeItem("gender");

  localStorage.removeItem("product");
  localStorage.removeItem("otherData");
  localStorage.setItem("done", false);

  return (
    <>
      <div className="container-fluid appContainer">
        <div className="row">
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
          <div className="col-xl-6 col-md-10 col-xs-12 appBox">
            <div className="alert alert-success mt-2" role="alert">
              {location.state == null
                ? "با تشکر از شما. اطلاعات با موفقیت دریافت شد."
                : "متاسفانه زمان شما به پایان رسید اما اطلاعاتی که تا به حال نوشته بودید برای ما ارسال شد"}
            </div>

            <button
              className="button-86 mb-5"
              role="button"
              onClick={() => navigate("/", { replace: true })}
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
        </div>
      </div>
    </>
  );
};

export default FormSend;
