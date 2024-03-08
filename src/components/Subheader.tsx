import { FunctionComponent } from "react";
import styles from "./Subheader.module.css";

const Subheader: FunctionComponent = () => {
  return (
    <header className={styles.subheader}>
      <div className={styles.subheaderChild} />
      <div className={styles.rowFrame}>
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <img
            className={styles.buildIcon}
            loading="lazy"
            alt=""
            src="/build.svg"
          />
        </div>
      </div>
      <div className={styles.transferOfRealEstate}>
        <div className={styles.loremIpsumDolorSitAmetCon}>
          <div className={styles.loremIpsumDolorSitAmetConChild} />
          <div className={styles.customersFrame}>
            <div className={styles.aboutUs}>About us</div>
          </div>
          <div className={styles.customersFrame1}>
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.customersFrame2}>
            <div className={styles.agents}>Agents</div>
          </div>
          <div className={styles.customersFrame3}>
            <div className={styles.services}>Services</div>
          </div>
          <div className={styles.customersFrame4}>
            <div className={styles.listings}>Listings</div>
          </div>
          <img
            className={styles.vuesaxlinearsearchNormalIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
        </div>
      </div>
      <div className={styles.enterYourEmail}>
        <div className={styles.getAQuote}>
          <div className={styles.renderingIsometricFdgdf}>
            <div className={styles.otherServices}>Other services</div>
            <div className={styles.vuesaxlineararrowRightWrapper}>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright@2x.png"
              />
            </div>
          </div>
        </div>
        <button className={styles.framebookNowReadMore}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default Subheader;
