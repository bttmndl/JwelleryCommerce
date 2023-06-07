import React, { useState } from "react";
// import ring from "./jewlRing.jpg";
import ProductCard from "./ProductCard";
const Sell = () => {
  const[productInfo,setProductInfo]=useState({
    productImage:"",
    productTitle:"",
    category:"",
    material:"",
    price:"",
    productDetails:""
  })
  const{ productImage,productTitle,category,material,price,productDetails}= productInfo;
  const handleOnChange = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };
  console.log(productInfo);

  return (
    <div>
      <section id="form-details">
        <div className="ringImgContainer">
          <ProductCard productInfo={productInfo}/>
        </div>
        <form action="">
          <span>Latest Items</span>
          <h2>Add New Items Here</h2>
          <input type="file" name="productImage" value={productInfo.productImage}  onChange={handleOnChange}/>
          <input type="text" placeholder="Title" name="productTitle" value={productInfo.productTitle}  onChange={handleOnChange}/>
          <label for="category">Category:</label>

          <select name="category" id="category">
            <option value="ring">Ring</option>
            <option value="earring">Earring</option>
            <option value="bracelets & bangles">Bracelets & Bangles</option>
            <option value="pendants">Pendants</option>
            <option value="necklaces">Necklaces</option>
            <option value="nose ring">Nose rings</option>

          </select>
          <label for="material">Material:</label>

          <select name="material" id="material">
            <option value="volvo">Rose Gold</option>
            <option value="saab">White Gold</option>
            <option value="mercedes">Yellow Gold</option>
            <option value="audi">Platinum</option>
            <option value="audi">Diamond</option>
            <option value="audi">Gemstone</option>
            <option value="audi">22KT Gold</option>
            <option value="audi">24KT Gold</option>
            <option value="audi">Silver</option> 
          </select>
          <input type="number" placeholder="Price" name="price" value={productInfo.price} onChange={handleOnChange}/>
          <textarea name="productDetails" id="" cols="30" rows="4" value={productInfo.productDetails}  onChange={handleOnChange}>
           About Jwellary
          </textarea>
          <button className="normal">Add Items</button>
        </form>
      </section>
    </div>
  );
};

export default Sell;
