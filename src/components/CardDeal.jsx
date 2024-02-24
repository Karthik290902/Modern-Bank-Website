import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Discovering a superior card deal is a breeze with our user-friendly
        platform. In just a few easy steps, explore and compare credit card
        options to find the perfect fit for your financial needs, ensuring you
        get the best value and benefits available.
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"></img>
    </div>
  </section>
);

export default CardDeal;
