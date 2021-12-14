import { MdOutlineAddReaction, MdMic } from 'react-icons/md';
import { AiOutlinePaperClip } from 'react-icons/ai';
import React from 'react';
import styles from './icons.module.css';

const AddReaction = () => (
  <div className={styles.addReactions}><MdOutlineAddReaction /></div>
);

const Microphone = () => (
  <div className={styles.microphone}><MdMic /></div>
);

const PaperClip = () => (
  <div className={styles.paperClip}><AiOutlinePaperClip /></div>
);

export { AddReaction, Microphone, PaperClip };
