import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./RectangleSubscribe.module.css";

const RectangleSubscribe: FunctionComponent = () => {
  return (
    <div className={styles.rectangleSubscribe}>
      <div className={styles.groupCustomersOfficesStuden}>
        <div className={styles.frameContainerA}>
          <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
          <div className={styles.rectangleLoremStar}>
            <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
            <div className={styles.yourWillHave}>
              Your will have everything nearby supermarket, buses , station, the
              carmen neighborhood, etc
            </div>
            <GroupComponent2 />
          </div>
        </div>
      </div>
      <div className={styles.frameCustomersFrameOffices}>
        <img
          className={styles.propertyInfoFrame}
          alt=""
          src="/property-info-frame@2x.png"
        />
        <img
          className={styles.frameCustomersFrameOfficesChild}
          loading="lazy"
          alt=""
          src="/group-2@2x.png"
        />
      </div>
    </div>
  );
};

export default RectangleSubscribe;
