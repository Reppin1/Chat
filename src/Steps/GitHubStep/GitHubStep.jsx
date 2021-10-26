import { Button } from "../Button/Button";
import styles from "./gitHubStep.module.css";
import logo from "../../assets/gitHubLogo.png"

const GitHubStep = ({ onClick }) => {
 return (
  <div className={styles.main}>
   <h1>Import data from GitHub?</h1>
    <div>
      <div>
        <img width={70} height={70} src={logo} alt="" />
      </div>
      <Button onClick={onClick}>
        Import data from GitHub
      </Button>
        <p className={styles.noImport}>Do not import data</p>
    </div>
  </div>
 );
};

export {GitHubStep};