import styles from "./chat.module.css";
import React from "react";
import { Header } from "../Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { WindowChat } from "./WindowChat/WindowChat";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setInitials } from "../../redux/AuthReducer/authReducer";

const Chat = () => {
  const isActive = useSelector((state) => state.auth.isActive)
  const dispatch = useDispatch()
  const firstName = useSelector((state) => state.auth.firstName).split('')[0]
  const lastName = useSelector((state) => state.auth.lastName).split('')[0]
  const checkInitials = useSelector((state) => state.auth.initials)
  const initials = firstName + lastName
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (!isActive) {
      setRedirect(true)
    }
    if (!checkInitials) {
      dispatch(setInitials(initials))
    }
  }, [])

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainMenu}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.chat}>
          <WindowChat />
        </div>
      </div>
    </div>
  );
};

export { Chat };