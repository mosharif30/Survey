import man from "./pic/man.png";
import woman from "./pic/woman.png";

import forbidden from "./pic/forbidden.png";

const Gender = ({ formData, setFormData }) => {
  const question = {
    text: "جنسیت خود را مشخص کنید:",
    options: [
      { id: 0, text: "مرد", pic: man },
      { id: 1, text: "زن", pic: woman },
      { id: 2, text: "سایر", pic: forbidden },
    ],
  };
  const handleClick = (e) => {
    localStorage.setItem("gender", e.target.innerText);
    setFormData({ ...formData, lastName: e.target.innerText });
  };
  return (
    <>
      <h1>{question.text}</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {question.options.map((option, i) => {
          return (
            <>
              <div className="col">
                <div
                  className="card h-100"
                  onClick={handleClick}
                  style={{
                    backgroundColor:
                      localStorage.getItem("gender") == option.text
                        ? "#7f8c8d"
                        : "white",
                  }}
                >
                  <img src={option.pic} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{option.text}</h5>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <ul>
        {question.options.map((option, i) => {
          return (
            <li
              key={i}
              style={{
                backgroundColor:
                  localStorage.getItem("gender") == option.text
                    ? "red"
                    : "white",
              }}
              onClick={handleClick}
            >
              {option.text}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Gender;
