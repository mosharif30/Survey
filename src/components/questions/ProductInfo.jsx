
const ProductInfo = ({ formData, setFormData }) => {
  const question = {
    text: "محصول  شما از چه دسته ای بود؟",

    options: [
      { id: 0, text: "لباس" },
      { id: 1, text: "مواد خوراکی" },
      { id: 2, text: "لوازم الکترونیکی" },
      { id: 2, text: "لوازم خانگی" },
    ],
  };
  const handleClick = (e) => {
    localStorage.setItem("product", e.target.innerText);
    setFormData({ ...formData, product: e.target.innerText });
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
                  localStorage.getItem("product") == option.text
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

export default ProductInfo;
