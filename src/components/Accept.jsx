const Accept = ({ formData }) => {
  return (
    <>
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th scope="col">نام</th>
            <th scope="col">سن</th>
            <th scope="col">جنسیت</th>
            <th scope="col">محصول</th>
            <th scope="col">نظر</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-dark">
            <td>
              {localStorage.getItem("userName") == null ? (
                <span className="text-warning">وارد نشده</span>
              ) : (
                localStorage.getItem("userName")
              )}
            </td>
            <td>
              {localStorage.getItem("age") == null ? (
                <span className="text-warning">وارد نشده</span>
              ) : (
                localStorage.getItem("age")
              )}
            </td>
            <td>
              {localStorage.getItem("gender") == null ? (
                <span className="text-warning">وارد نشده</span>
              ) : (
                localStorage.getItem("gender")
              )}
            </td>
            <td>
              {localStorage.getItem("product") == null ? (
                <span className="text-warning">وارد نشده</span>
              ) : (
                localStorage.getItem("product")
              )}
            </td>
            <td>
              {localStorage.getItem("otherData") == null ? (
                <span className="text-warning">وارد نشده</span>
              ) : (
                localStorage.getItem("otherData")
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Accept;
