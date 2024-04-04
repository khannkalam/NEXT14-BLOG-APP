"use client";

import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Writepage = () => {
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState("");

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Title" />
       <div className={styles.editor} >
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image
            src="/plus.png"
            alt="image"
            className={styles.image}
            width={20}
            height={20}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                src="/image.png"
                alt="image"
                className={styles.image}
                width={20}
                height={20}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt="image"
                className={styles.image}
                width={20}
                height={20}
              />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="image" className={styles.image} width={20} height={20}/>
            </button>
        </div>
        )}
        <ReactQuill className={styles.textArea}  theme="bubble" value={value} onChange={setvalue} placeholder="Tell your Story..." />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Writepage;
