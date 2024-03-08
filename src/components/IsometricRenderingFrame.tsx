import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./IsometricRenderingFrame.module.css";

const IsometricRenderingFrame: FunctionComponent = () => {
  return (
    <section className={styles.isometricRenderingFrame}>
      <div className={styles.parentForm}>
        <div className={styles.buttonFrame}>
          <div className={styles.emailField}>
            <h1 className={styles.subscribeOurNewsletter}>
              Subscribe Our Newsletter
            </h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
            </div>
          </div>
          <GroupComponent2
            propWidth="469px"
            propPadding="0px var(--padding-12xs) 0px var(--padding-5xl)"
            propWidth1="469px"
          />
        </div>
      </div>
      <div className={styles.rectangleBg}>
        <img
          className={styles.newsletterFormIcon}
          alt=""
          src="/newsletter-form@2x.png"
        />
        <img
          className={styles.dRenderingIsometricFdgdf1Icon}
          loading="lazy"
          alt=""
          src="/3drenderingisometricfdgdf-1@2x.png"
        />
      </div>
    </section>
  );
};

export default IsometricRenderingFrame;
