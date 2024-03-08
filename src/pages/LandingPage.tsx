import { FunctionComponent } from "react";
import Subheader from "../components/Subheader";
import RectangleSubscribe from "../components/RectangleSubscribe";
import RectangleFeugiatUtTransfer from "../components/RectangleFeugiatUtTransfer";
import FrameComponent from "../components/FrameComponent";
import FramesGroup from "../components/FramesGroup";
import IsometricRenderingFrame from "../components/IsometricRenderingFrame";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.pageTitle}>
        <div className={styles.contentContainer}>
          <Subheader />
          <RectangleSubscribe />
        </div>
      </section>
      <RectangleFeugiatUtTransfer />
      <FrameComponent />
      <FramesGroup />
      <IsometricRenderingFrame />
    </div>
  );
};

export default LandingPage;
