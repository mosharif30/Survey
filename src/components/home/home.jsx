import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./home.css";
const Home = () => {
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("done", false);
  }, []);
  return (
    <>
      <div className="container-fluid appContainer">
        <div className="row">
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
          <div className="col-xl-6 col-md-10 col-xs-12 appBox">
            {location.state ? (
              <div className="alert alert-warning mw-100">
                اخطار امنیتی: شما امکان دسترسی به این مسیر را ندارید.
              </div>
            ) : (
              <></>
            )}
            <button
              className="button-49"
              role="button"
              onClick={() => navigate("/form", { replace: false })}
            >
              شروع نظرسنجی
            </button>
            <h1 className="display-6 mt-3">وب اپلیکیشن نظرسنجی</h1>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">دارای شمارش معکوس</li>
              <li className="list-group-item">
                حذف نشدن اطلاعات وارد شده بعد از رفرش
              </li>
              <li className="list-group-item">قابلیت رفت و برگشت بین سوالات</li>
              <li className="list-group-item">اعتبار سنجی پاسخ ها</li>
              <li className="list-group-item">
                محافظت از روت ارسال اطلاعات به سمت سرور: در صورت تلاش کاربر ارور
                مناسب نمایش داده می شود.
              </li>
              <li className="list-group-item">انیمیشن برای انتقال بین صفحات</li>
            </ul>
            <div
              className="alert alert-secondary d-flex justify-content-center copyRight"
              role="alert"
            >
              ساخته شده توسط: محمدرضا شریف خانی
            </div>
          </div>
          <div className="col-xl-3 col-md-1 col-xs-0"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
