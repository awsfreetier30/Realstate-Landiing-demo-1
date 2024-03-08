import { FunctionComponent } from "react";
import styles from "./FramesGroup.module.css";

const FramesGroup: FunctionComponent = () => {
  return (
    <section className={styles.framesGroup}>
      <div className={styles.textFrame}>
        <div className={styles.textFrame1}>
          <h1 className={styles.weAreA}>
            We are a global, boutique real estate brokerage
          </h1>
        </div>
        <div className={styles.textFrame2}>
          <div className={styles.propertyList}>
            <div className={styles.brokerageFrame}>
              <div className={styles.transferFrame}>
                <div className={styles.theTransferOfRealEstateParent}>
                  <h1 className={styles.theTransferOf}>
                    The transfer of real estate
                  </h1>
                  <div className={styles.adipiscingText}>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                      sit pellentesque sollicitudin. Egestas faucibus lacus diam
                      in senectus consectetur. Mattis elit adipiscing quisque
                      tellus scelerisque vehicula ante nunc. Tellus consequat
                      nisl quis nisl justo.
                    </div>
                  </div>
                </div>
                <div className={styles.bookFrame}>
                  <div className={styles.globalbrokeragetitle}>
                    <button className={styles.bookNowFrame}>
                      <div className={styles.bookNow}>Book Now!</div>
                    </button>
                    <button className={styles.bookNowFrame1}>
                      <div className={styles.readMore}>Read More</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.customerGroup}>
                <div className={styles.frameParent}>
                  <div className={styles.separatorRectangleParent}>
                    <div className={styles.separatorRectangle}>12+</div>
                    <div className={styles.customers}>Customers</div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>14+</div>
                    <div className={styles.officesWrapper}>
                      <div className={styles.offices}>Offices</div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>10+</div>
                    <div className={styles.students}>Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <div className={styles.subscribeText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FramesGroup;
