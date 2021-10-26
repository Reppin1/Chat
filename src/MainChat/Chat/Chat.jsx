import styles from "./chat.module.css";
import { Header } from "../Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { WindowChat } from "./WindowChat/WindowChat";

const Chat = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.header }>
        <Header />
      </div>
      <div className={ styles.mainMenu }>
        <div className={ styles.sideBar }>
          <SideBar />
        </div>
        <div className={ styles.chat }>
          <WindowChat />
        </div>
      </div>
    </div>
  );
};

export { Chat };