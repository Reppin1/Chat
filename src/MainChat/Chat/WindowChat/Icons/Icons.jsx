import { MdOutlineAddReaction, MdMic } from 'react-icons/md';
import { AiOutlinePaperClip } from "react-icons/ai";
import React from "react";
import styles from "./icons.module.css"

class AddReaction extends React.Component {
  render() {
    return <div className={styles.addReactions}><MdOutlineAddReaction /></div>
  }
}

class Microphone extends React.Component {
  render() {
    return <div className={styles.microphone}><MdMic /></div>
  }
}

class PaperClip extends React.Component {
  render() {
    return <div className={styles.paperClip}><AiOutlinePaperClip /></div>
  }
}

export { AddReaction, Microphone, PaperClip }