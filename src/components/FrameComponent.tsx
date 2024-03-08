import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.bestProjectOfTheYearsWrapper}>
          <div className={styles.bestProjectOf}>Best Project of the Years</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.ourRecentProjectsParent}>
              <h1 className={styles.ourRecentProjects}>Our recent projects</h1>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-10.svg"
                  />
                  <div className={styles.wrapperGroup11}>
                    <img
                      className={styles.wrapperGroup11Child}
                      loading="lazy"
                      alt=""
                      src="/group-11.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.villaFrameParent}>
              <div className={styles.villaFrame} />
              <img
                className={styles.villaFrameIcon}
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.sobhaHearlandIiVillasParent}>
                  <div className={styles.sobhaHearlandIi}>
                    Sobha Hearland II Villas
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                    bibendum.
                  </div>
                  <div className={styles.starsParent}>
                    <div className={styles.stars}>
                      <img
                        className={styles.starinactivebigIcon}
                        loading="lazy"
                        alt=""
                        src="/starinactivebig.svg"
                      />
                      <img
                        className={styles.starinactivebigIcon1}
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-1.svg"
                      />
                      <img
                        className={styles.starinactivebigIcon2}
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-2.svg"
                      />
                      <img
                        className={styles.starinactivebigIcon3}
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-3.svg"
                      />
                      <img
                        className={styles.starinactivebigIcon4}
                        loading="lazy"
                        alt=""
                        src="/starinactivebig-4.svg"
                      />
                    </div>
                    <div className={styles.starsvalue}>4.83</div>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent rectangle20="/rectangle-20@2x.png" />
            <GroupComponent
              rectangle20="/rectangle-21@2x.png"
              propBackgroundImage="url('/rectangle-21@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
