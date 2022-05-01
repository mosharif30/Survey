const Gender = ({ formData, setFormData }) => {
  const question = {
    text: "what is Your Sex?",
    options: [
      { id: 0, text: "Male" },
      { id: 1, text: "Female" },
      { id: 2, text: "Others" },
    ],
  };
  const handleClick = (e) => {
    console.log(e.target.innerText);
    localStorage.setItem("gender", e.target.innerText);
    setFormData({ ...formData, lastName: e.target.innerText });
  };
  return (
    <>
      <h1>{question.text}</h1>
      <ul>
        {question.options.map((option) => {
          return (
            <li
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
