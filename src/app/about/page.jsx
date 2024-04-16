
import Menu from "@/components/menu/MenuPage";
import styles from "./about.module.css";
import Image from "next/image";

import React from "react";

const aboutpage = () => {
  return (
    <div className={styles.container}>
     <h1 className= {styles.title}> ABOUT US</h1>
     <h4 className= {styles.email}> PiexelPlanet@gmail.com</h4>
     <p className={styles.para}>"Welcome to Pixel Planet, your ultimate destination for the latest and greatest in the gaming universe! Dive into a galaxy of gaming content where pixels come alive and adventures await. Explore insightful reviews, captivating gameplay analyses, exclusive sneak peeks, and entertaining anecdotes from the vast cosmos of gaming. Join our community of passionate gamers as we embark on thrilling journeys across virtual worlds, sharing insights, tips, and tales from every corner of Pixel Planet. Whether you're a seasoned player or just getting started, Pixel Planet is your orbiting hub for all things gaming. Blast off into a universe of pixels, passion, and endless fun – only on Pixel Planet!"</p>
        <div className={styles.imageContainer}>
          <Image src="/bg2.jpeg" width={1024} height={704} alt="image" className={styles.image} />
        </div>
      </div>

  );
};

export default aboutpage;
