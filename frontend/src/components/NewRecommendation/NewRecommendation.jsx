import React, { useState, useEffect, useContext } from "react";
import { Grid, Item, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./NewRecommendation.css";
import "./styleRecommendation.css";
import OwlCarousel from "react-owl-carousel";

import useStyles from "./style.js";

import Loading from "../Loading/Loading";
import { height } from "@mui/system";
import Footer from "../Footer/Footer";

function NewRecommendation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  // const { questionData } = useContext(QuestionContext);
  const [products, setProducts] = useState(null);
  const getProduct = async (ans, product) => {
    // console.log(ans1, ans2, ans3);
    
    const apiUrl = `${process.env.REACT_APP_API_URL}/answer/${ans}/Refrigerator`;
    const { data } = await axios.get(apiUrl);
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    if (localStorage.getItem("questionData")) {
      const { ans, product } = JSON.parse(localStorage.getItem("questionData"));
      // console.log(data);
      getProduct(ans, product);
      setFlag(true);
    }
  }, []);
  // console.log(products);
  if (!flag) {
    return <Loading />;
  }

  return (
    <div>
      <div className="main_container">
        <p className="text-center heading">All Best Recommendations For You</p>
      </div>
      <Grid container>
        <Grid item xs={3} md={2} className="left_recomon">
          <div className="left_recom">
            <h2 className="properties_title">Product Specification</h2>
          </div>
          <div className="product_spec">
            <div className="product_list">
              <p className="properties">Value for money</p>
            </div>

            <div className="product_list">
              <p className="properties">Brand</p>
            </div>
            <div className="product_list">
              <p className="properties">Popular</p>
            </div>
            <div className="product_list">
              <p className="properties">After Sales</p>
            </div>

            <div className="product_list">
              <p className="properties">Price</p>
            </div>

            <div className="product_list">
              <p className="properties">Overall Score</p>
            </div>
          </div>
        </Grid>

        {products && (
          <Grid item xs={9} md={10} className="right_container">
            <OwlCarousel
              className="owl-theme"
              nav
              stagePadding={30}
              responsive={{
                0: {
                  items: 1,
                },
                450: {
                  items: 2,
                },
                700: {
                  items: 3,
                },
                1000: {
                  items: 4,
                },
              }}
            >
              {products.map((product, index) => {
                // console.log(product);
                return (
                  <div className="productContainer">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white ",
                      }}
                    >
                      <img
                        src={product.Image}
                        alt="Fridge"
                        style={{ width: "80px", height: "200px" }}
                      />
                      
                      <p
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontSize: "10px",
                          fontFamily:"Gill Sans Extrabold",
                          textIndent:"20px",
                          textAlign:"center"
                          
                        }}
                      >
                        {product.ProductName}
                      </p>
                     <hr />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100px",
                        marginTop:"10px"
                      }}
                    >
                      {product.Flipkarturl && (
                        <button
                          className={classes.FlipkartClass}
                          href={product.Flipkarturl}
                          target="_blank"
                        >
                          Flipkart
                        </button>
                      )}
                      {product.Amazonurl && (
                        <button
                          className={classes.AmazonClass}
                          href={product.Amazonurl}
                          target="_blank"
                        >
                          Amazon
                        </button>
                      )}
                      {product.Relianceurl && (
                        <button
                          className={classes.RelianceClass}
                          href={product.Relianceurl}
                          target="_blank"
                        >
                          Reliance
                        </button>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "25px",
                      }}
                    >
                      <hr />

                      <p className="properties">{product.Valueformoney}</p>
                      <hr />
                      <p className="properties">{product.Brand}</p>
                      <hr />

                      <p className="properties">{product.Valueformoney}</p>
                      <hr />

                      <p className="properties">{product.AfterSales}</p>
                      <hr />

                      <p className="properties">{product.Price}</p>
                      <hr />

                      <p className="properties">{product.Score}</p>
                    </div>
                  </div>
                  // </Grid>
                );
              })}
            </OwlCarousel>
          </Grid>
        )}
      </Grid>
      <Footer />
    </div>
  );
}

export default NewRecommendation;
