const Gender = ({ formData, setFormData }) => {
  const question = {
    text: "جنسیت خود را مشخص کنید:",
    options: [
      { id: 0, text: "مرد" },
      { id: 1, text: "زن" },
      { id: 2, text: "سایر" },
    ],
  };
  const handleClick = (e) => {
    localStorage.setItem("gender", e.target.innerText);
    setFormData({ ...formData, lastName: e.target.innerText });
  };
  return (
    <>
      <h1>{question.text}</h1>
      <ul>
        {question.options.map((option,i) => {
          return (
            <li key={i}
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
      </ul>
    </>
  );
};

export default Gender;
