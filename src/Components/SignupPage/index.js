import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_PREFIX } from '../../constants';
import styles from './Signup.module.css'

const Index = ({ profile, name, email, password1, password2, handleChange, handleFormSubmit, isGettingSubmitted }) => {

    const isLoginDisabled = isGettingSubmitted || !email || !password1 || !password2;
    const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
                profile = profileImg
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (
        <div className={styles['container']}>
            <div className={styles['login-card']}>
                <span className={styles['login']}>Signup</span>
                <div className={styles['hr']}></div>
                <form className={styles['form']} onSubmit={handleFormSubmit}>
                    <label htmlFor="input">
                        <div className={styles["img-holder"]}>
                            <img src={profileImg} alt="" id="img" className={styles["img"]} />
                        </div>
                    </label>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} style={{ display: 'none' }} />
                    <input
                        type='text'
                        className={styles['name']}
                        name='name'
                        value={name}
                        placeholder="Username"
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        className={styles['email']}
                        name='email'
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        className={styles['password']}
                        name='password1'
                        placeholder="Password"
                        value={password1}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        className={styles['password']}
                        name='password2'
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={handleChange}
                    />
                    {isLoginDisabled ?
                        <button className={styles['login-btn']} disabled>
                            Signup
                        </button> :
                        <button className={styles['login-btn']} onClick={handleFormSubmit}>
                            Signup
                        </button>}
                </form>
                <div className={styles['redirect']}>
                    <span>Already a member?</span> <Link to={URL_PREFIX + '/login'} style={{ textDecoration: 'none' }}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Index
