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
      {location.state ? (
        <div className="alert alert-warning mw-100">
          اخطار امنیتی: شما امکان دسترسی به این مسیر را ندارید.
        </div>
      ) : (
        <></>
      )}
      <div class="container-fluid appContainer">
        <div class="row">
          <div class="col-xl-3 col-md-1 col-xs-0"></div>
          <div class="col-xl-6 col-md-10 col-xs-12 appBox">
            <button
              class="button-49"
              role="button"
              onClick={() => navigate("/form", { replace: false })}
            >
              شروع نظرسنجی
            </button>
            <h1 class="display-6 mt-3">وب اپلیکیشن نظرسنجی</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">دارای شمارش معکوس</li>
              <li class="list-group-item">
                حذف نشدن اطلاعات وارد شده بعد از رفرش
              </li>
              <li class="list-group-item">قابلیت رفت و برگشت بین سوالات</li>
              <li class="list-group-item">اعتبار سنجی پاسخ ها</li>
              <li class="list-group-item">
                محافظت از روت ارسال اطلاعات به سمت سرور: در صورت تلاش کاربر ارور
                مناسب نمایش داده می شود.
              </li>
              <li class="list-group-item">انیمیشن برای انتقال بین صفحات</li>
            </ul>
            <div
              class="alert alert-secondary d-flex justify-content-center copyRight"
              role="alert"
            >
              ساخته شده توسط: محمدرضا شریف خانی
            </div>
          </div>
          <div class="col-xl-3 col-md-1 col-xs-0"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
