import * as React from "react";

const styles = {
  about: {
    paddingTop: "3em",
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  version2: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "grey",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}


const AboutPage: React.FC = () => {
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>About</b></div>
        <div style={styles.version}>Customer Relationship Management</div>
        <div style={styles.version2}>Internet And Web Technologies Project</div>
        <div style={{...styles.desc, marginTop: 10}}>
          Submitted to: <br/>
          <b>Shikha Mouria</b>
        </div>
        <div style={styles.desc}>
          <p>
            
            Created By:
            <ol>
              <li>Umakant Vashishtha (2k17/ME/244)</li>
              <li>Tarun Garg (2k17/ME/237)</li>
            </ol>
           </p>
        </div>
      </div>
    );
  }


export default AboutPage;
