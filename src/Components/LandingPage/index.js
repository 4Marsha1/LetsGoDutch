import React from 'react';
import styles from './Landing.module.css';
import { Link } from "react-router-dom";
import { URL_PREFIX } from '../../constants';
import memberOne from '../../uploads/1.jpg';
import memberTwo from '../../uploads/2.jpg';

const Index = () => {
    return (
        <div className={styles["parent-container"]}>
            <div className={styles["jumbo"]}>
                <div className={styles["head-1"]}>
                    <div className={styles['hr']}></div>
                    <span className={styles["head-1-span"]}>
                        Let's Go Dutch!
                    </span>
                    <div className={styles['hr']}></div>
                </div>
                <div className={styles["head-2"]}>
                    <span className={styles['head-2-span']}>
                        Team HackOverflowIt
                    </span>
                </div>
                <div className={styles["title"]}>
                    <span className={styles['title-span']}>
                        This is Team HackOverflowIt. We built this app using MERN Stack. Hope you enjoy using it. There are still some bugs and we are working on it!
                    </span>
                </div>
                <div className={styles["btn-section"]}>
                    <Link to={URL_PREFIX + '/login'} style={{ textDecoration: 'none' }} >
                        <div className={styles["btn"]}>
                            SignUp
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles["section-1"]}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        Discover & enjoy <strong>our amazing features!</strong>
                    </span>
                </div>
                <div className={styles["content"]}>
                    <span className={styles["content-span"]}>
                        This App provides a lot of features. Some Notable ones are mentioned below. Do have a read!
                    </span>
                </div>
                <div className={styles["boxes"]}>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-group-advertising-kiranshastry-solid-kiranshastry.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Add Groups & Friends
                            </span>
                            <span className={styles["mats-content"]}>
                                Add friends to your profile. Create groups and add
                                members to share the cost of a particular bill.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/categorize.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Categorize expenses
                            </span>
                            <span className={styles["mats-content"]}>
                                Make seperate categories for food, travel,
                                entertainment etc, and know what you are
                                paying for.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-split-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev-1.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Split by % or Shares
                            </span>
                            <span className={styles["mats-content"]}>
                                Split the expenses by percentage or shares.
                                Make your own payments easy and precise.
                            </span>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <img src="https://img.icons8.com/ios-filled/64/000000/mobile-payment.png" />
                        </div>
                        <div className={styles["mats"]}>
                            <span className={styles["mats-title"]}>
                                Payment Gateway
                            </span>
                            <span className={styles["mats-content"]}>
                                Make your bill payments easily using our Payment Gateway.
                                The payment will be done through Razorpay and invoice will
                                be sent through email.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles["section-1"]} ${styles["bg"]}`}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        Our <strong>Team!</strong>
                    </span>
                </div>
                <div className={styles["team-boxes"]}>
                    <div className={styles["team-mem"]}>
                        <img src={memberOne} />
                        <span className={styles["name"]}>Abhishek Bharadwaz</span>
                        <span className={styles["desg"]}>Front-End Dev</span>
                    </div>
                    <div className={styles["team-mem"]}>
                        <img src={memberTwo} />
                        <span className={styles["name"]}>Jitul Teron</span>
                        <span className={styles["desg"]}>Back-End Dev</span>
                    </div>
                </div>
            </div>

            <div className={styles["section-1"]}>
                <div className={styles["tagline"]}>
                    <span className={styles["tagline-span"]}>
                        The <strong>Tech Stack</strong> used!
                    </span>
                </div>
                <div className={styles["boxes"]}>
                    <div className={styles["box"]}>
                        <div className={styles["tech-icon"]}>
                            <img src="https://www.cloudsavvyit.com/p/uploads/2021/07/f5932bc2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1" />
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["tech-icon"]}>
                            <img src="https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" />
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["tech-icon"]}>
                            <img src="https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png" />
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["tech-icon"]}>
                            <img src="https://www.anychart.com/_design/img/upload/plugins/nodejs-logo.png" />
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles["footer"]}>
                <div className={styles["line-1"]}>

                </div>
                <div className={styles["line-2"]}>
                    <span>Copyright &copy; HackOverFlowIt. | Terms & Conditions | Privacy Policy | All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Index
