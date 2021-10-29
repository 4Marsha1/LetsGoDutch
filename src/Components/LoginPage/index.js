import React, { useState } from 'react'
import styles from './Login.module.css'

// import { Link, withRouter } from 'react-router-dom';

const Index = (props) => {

    const [toggle, setToggle] = useState(false);
    const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return (
        <div>
            <div className={`${styles["container"]} ${toggle ? styles["sign-in-mode"] : styles["sign-up-mode"]}`}>
                <div className={styles["forms-container"]}>
                    <div className={styles["signin-signup"]}>
                        <form action="#" className={[styles["sign-in-form"]]}>
                            <h2 className={styles["title"]}>Sign in</h2>
                            <div className={styles["input-field"]}>
                                <i className="fas fa-user"></i>
                                <input type="email" placeholder="Email" name='email_login' value={props.email_login} onChange={props.handleChange} />
                            </div>
                            <div className={styles["input-field"]}>
                                <i className={`${styles["fas"]} ${styles["fa-lock"]}`}></i>
                                <input type="password" placeholder="Password" name='password_login' value={props.password_login} onChange={props.handleChange} />
                            </div>
                            <input type="submit" value="Login" className={`${styles["btn"]} ${styles["solid"]}`} onClick={props.handleFormSubmit} />
                        </form>
                        <form action="#" className={styles["sign-up-form"]}>
                            <h2 className={styles["title"]}>Sign up</h2>
                            <div className={styles["profile-upload"]}>
                                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} style={{ display: 'none' }} />
                                <label htmlFor='input'>
                                    <div htmlFor='input' className={styles["img-holder"]}>
                                        <img src={profileImg} alt="" id="img" className={styles["img"]} />
                                    </div>
                                </label>
                            </div>
                            <div className={styles["input-field"]}>
                                <i className={`${styles["fas"]} ${styles["fa-user"]}`}></i>
                                <input type="text" placeholder="Username" name='name' value={props.name} onChange={props.handleChange} />
                            </div>
                            <div className={styles["input-field"]}>
                                <i className={`${styles["fas"]} ${styles["fa-envelope"]}`}></i>
                                <input type="email" placeholder="Email" name='email' value={props.email} onChange={props.handleChange} />
                            </div>
                            <div className={styles["input-field"]}>
                                <i className={`${styles["fas"]} ${styles["fa-lock"]}`}></i>
                                <input type="password" placeholder="Password" name='password1' value={props.password1} onChange={props.handleChange} />
                            </div>
                            <div className={styles["input-field"]}>
                                <i className={`${styles["fas"]} ${styles["fa-lock"]}`}></i>
                                <input type="password" placeholder="Confirm Password" name='password2' value={props.password2} onChange={props.handleChange} />
                            </div>
                            <div>
                                <input type="checkbox" className={styles["checkbox"]} id="terms" name='terms' value={props.terms} onChange={props.handleChange} />
                                <label htmlFor="terms">
                                    <span >I accept the <a className={styles["terms"]} href="#">Terms and Conditions </a></span>
                                </label>
                            </div>
                            <input type="submit" className={styles["btn"]} value="Sign up" onClick={props.handleFormSubmit} />
                        </form>
                    </div>
                </div>

                <div className={styles["panels-container"]}>
                    <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
                        <div className={styles["content"]}>
                            <h3>Haven't Registered yet?</h3>
                            <p>Make your account right away and feel the power of technology in your thumbs!</p>
                            <button className={`${styles["btn"]} ${styles["transparent"]}`} id="sign-up-btn"
                                onClick={() => { setToggle(!toggle) }}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                    <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
                        <div className={styles["content"]}>
                            <h3>Already a member? </h3>
                            <p>Hey! head to the Sign-in page, there's nothing for you here!</p>
                            <button className={`${styles["btn"]} ${styles["transparent"]}`} id="sign-in-btn"
                                onClick={() => { setToggle(!toggle) }}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
