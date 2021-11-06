import styles from "./chat.module.css";
import React from "react";
import { Header } from "../Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { WindowChat } from "./WindowChat/WindowChat";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Chat = () => {
  const isActive = useSelector((state) => state.auth.isActive)
  const [redirect, setRedirect] = React.useState(false);
  React.useEffect(() => {
    if(!isActive) {
      setRedirect(true)
    }
  }, [])

  if(redirect) {
    return <Redirect to="/" />
  }

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