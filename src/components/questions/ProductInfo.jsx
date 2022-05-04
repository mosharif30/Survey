import diet from "./pic/diet.png";
import electronics from "./pic/electronics.png";
import smartphone from "./pic/smartphone.png";
import clothes from "./pic/clothes.png";

const ProductInfo = ({ formData, setFormData }) => {
  const question = {
    text: "محصول  شما از چه دسته ای بود؟",

    options: [
      { id: 0, text: "لباس", pic: clothes },
      { id: 1, text: "مواد خوراکی", pic: diet },
      { id: 2, text: "لوازم الکترونیکی", pic: smartphone },
      { id: 2, text: "لوازم خانگی", pic: electronics },
    ],
  };
  const handleClick = (e) => {
    localStorage.setItem("product", e.target.innerText);
    setFormData({ ...formData, product: e.target.innerText });
  };
  return (
    <>
      <h1>{question.text}</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {question.options.map((option, i) => {
          return (
            <>
              <div class="col">
                <div
                  class="card h-100"
                  onClick={handleClick}
                  style={{
                    backgroundColor:
                      localStorage.getItem("product") == option.text
                        ? "#7f8c8d"
                        : "white",
                  }}
                >
                  <img src={option.pic} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{option.text}</h5>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductInfo;
