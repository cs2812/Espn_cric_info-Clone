import React from "react";
import styles from "./LSB.module.css";
import image1 from "./images/image1.svg";
import search from "./images/search.svg";

const LeftSideBar = () => {
  return (
    <div className={styles.leftnews}>
      {/* 1st div */}

      <div className={styles.leftSide_1stdiv}>
        <img
          src={image1}
          style={{ width: "150px", margin: "auto", marginTop: "20px" }}
        />
        <h4>Which spinner has taken the most wickets in an IPL season?</h4>
        <div>
          <input
            placeholder="Ask a Question"
            type="text"
            style={{
              border: "3px solid blue",
              borderRadius: "50px",
              marginTop: "10px",
              textAlign: "center",
              width: "200px",
              height: "30px",
            }}
          />
        </div>
      </div>

      {/* 2nd div */}
      <div className={styles.leftSide_2nddiv}>
        <div
          style={{
            border: "1px solid white",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          Key Series
        </div>
        <hr />
        <div style={{ marginLeft: "20px" }}>
          <li>
            <a href="#">India v South Africa</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">England v New Zealand</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Sri Lanka v Australia</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Pakistan v West Indies</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">West Indies v Bangladesh</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Zimbabwe v Afghanistan</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Netherlands v England</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Ireland v India</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Ranji Trophy</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Vitality Blast</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">County Div1</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">County Div2</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Women's Championship</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">World Test Championship</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">WorldCup Super League</a>
          </li>
        </div>
      </div>

      {/* quick link */}
      <div className={styles.quickLink}>
        <div
          style={{
            // boxShadow:
            //   "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            marginLeft: "20px",
          }}
        >
          <h4>Quick Links</h4>
        </div>
        <hr />

        <div style={{ marginLeft: "20px" }}>
          <li style={{ marginTop: "10px" }}>
            <a href="#">T20 Time Out</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">T20 Time Out Hindi</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">ICC Ranking</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Fantasy Pick</a>
          </li>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Haan Ya Naa</a>
          </li>
        </div>
      </div>

      {/* ESPNCricInfo */}
      <div className={styles.apps}>
        <div style={{ marginLeft: "20px" }}>
          <h3>ESPNcricinfo Apps</h3>
        </div>
        <hr />
        <div style={{ marginLeft: "10px" }}>
          <li style={{ marginTop: "10px" }}>
            <a href="#">Android App</a>
          </li>
          <li style={{ marginTop: "10px"}}>
            <a href="#">iOS App</a>
          </li>
        </div>
      </div>

      {/* social media */}
      <div className={styles.socialmedia}>
        <div style={{ marginLeft: "20px" }}>
          <h3> Follow ESPNcricinfo</h3>
        </div>
        <hr />
        <div style={{ marginLeft: "20px" }}>
          <li style={{ marginTop: "10px"}}>
            <a href="#">Instagram</a>
          </li>
          <li style={{ marginTop: "10px"}}>
            <a href="#">Twitter</a>
          </li>
          <li style={{ marginTop: "10px"}}>
            <a href="#">Facebook</a>
          </li>
          <li style={{ marginTop: "10px"}}>
            <a href="#">Youtube</a>
          </li>
        </div>
      </div>

      {/* espn site */}
      <div className={styles.apps}>
        <div style={{ marginLeft: "20px" }}>
          <h3>ESPN Sites</h3>
        </div>
        <hr />
        <div style={{ marginLeft: "20px" }}>
          <li style={{ marginBottom: "10px"}}>
            <a href="#">The Cricket Monthly</a>
          </li>
          <li style={{ marginBottom: "10px"}}>
            <a href="#">ESPN</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
