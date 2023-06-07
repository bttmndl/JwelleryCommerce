import React, { useState } from "react";
// import ImagePopup from './styles.css';


function ProductCard({ productInfo }) {
  const [size, setSize] = useState("m");
  const{ productImage,productTitle,category,material,price,productDetails}=productInfo;
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event) => {
    setShowPopup(true);
    setPopupPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="bg"></div>
          <img className="productImg"
            src={productImage}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseEnter}
          />
          {/* {showPopup && (
            <ImagePopup
              imageSrc={productImage}
              position={popupPosition}
              onClose={handleMouseLeave}
            />
          )} */}
        </div>
        <div className="bottom">
          <div className="updata">
            <h1 className="name">{productTitle}</h1>
            <h1 className="name">{price}</h1>

            <div className="shoe-size">
              <label htmlFor="s">
                <input
                  type="radio"
                  name="size"
                  id="s"
                  checked={size === "s"}
                  onChange={handleSizeChange}
                />
                <span>36mm</span>
              </label>
              <label htmlFor="m">
                <input
                  type="radio"
                  name="size"
                  id="m"
                  checked={size === "m"}
                  onChange={handleSizeChange}
                />
                <span>40mm</span>
              </label>
              <label htmlFor="l">
                <input
                  type="radio"
                  name="size"
                  id="l"
                  checked={size === "l"}
                  onChange={handleSizeChange}
                />
                <span>44mm</span>
              </label>
             
            </div>
            <div className="description">
              {productDetails}
            </div>
          </div>
          <button className="buy">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
