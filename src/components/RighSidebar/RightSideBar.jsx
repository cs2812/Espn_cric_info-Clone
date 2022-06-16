import React from "react";
import styles from "./RSB.module.css";

const RightSideBar = () => {
  return (
    <div className={styles.rightnews}>
      {/* 1st div */}
      <div className={styles.rightSide_1stdiv}>
        <div
          style={{
            border: "1px solid white",
            marginLeft: "20px",
          }}
        >
          <h3>News Headline</h3>
          <hr />
        </div>
        <div className={styles.news}>
          <li style={{ marginTop: "10px" ,marginLeft:"10px" }}>
            <a href="#">Houghton appointed Zimbabwe coach</a>
          </li>
          <li style={{ marginTop: "10px" ,marginLeft:"10px"}}>
            <a href="#">WI vs Ban: Injured Yasir Ali ruled out</a>
          </li>
          <li style={{ marginTop: "10px" ,marginLeft:"10px"}}>
            <a href="#">Zim vs Afg: Noor bags four on debut</a>
          </li>
          <li style={{ marginTop: "10px" ,marginLeft:"10px"}}>
            <a href="#">SA's Matshikwe convictd in fixing case</a>
          </li>
          <li style={{ marginTop: "10px" ,marginLeft:"10px"}}>
            <a href="#">Shpageeza: Rashid, Gurbaz retained</a>
          </li>
          <li style={{ marginTop: "10px" ,marginLeft:"10px"}}>
            <a href="#">Buzz: Jason Gillespie's funny sunnies</a>
          </li>
        </div>
      </div>

      {/* 1st image */}
      <div className={styles.rightSide_1stdiv}>
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article1}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            On this Day: The Don's Invincibls hammer England
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article2}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Quote Unquote: who's saying what?
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article3}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            T Nataranjan, the miracle man of Chinnappampatti
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article4}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>The latst cricket photos</h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article5}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>The Rise of A-team cricket</h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article6}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Who does it best in women's cricket
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article7}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            How the IPL franchises spent money in the auction
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article8}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Record index: most runs, most wicket, and a lot more
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article9}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>Blaster from the past</h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article10}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Ranking: Who's leading in every format
          </h4>
        </div>
        <hr />
        <div>
          <div className={styles.articleContainer}>
            <div className={styles.article11}></div>
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Goodbye, Hollywood: a farewell to warne
          </h4>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RightSideBar;
