import React from 'react';
import { Link } from 'react-router-dom';
import { URL_PREFIX } from '../../constants';
import styles from './Login.module.css'

const Index = ({ email, password, isGettingSubmitted, handleChange, handleFormSubmit }) => {
    const isLoginDisabled = isGettingSubmitted || !email || !password;
    return (
        <div className={styles['container']}>
            <div className={styles['login-card']}>
                <span className={styles['login']}>Login</span>
                <div className={styles['hr']}></div>
                <form className={styles['form']} onSubmit={handleFormSubmit}>
                    <input
                        type='email'
                        className={styles['email']}
                        name='email'
                        value={email}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        className={styles['password']}
                        name='password'
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    {isLoginDisabled ?
                        <button className={styles['login-btn']} disabled>
                            Login
                        </button> :
                        <button className={styles['login-btn']} onClick={handleFormSubmit}>
                            Login
                        </button>}
                </form>
                <div className={styles['redirect']}>
                    <span>Not a member?</span> <Link to={URL_PREFIX + '/signup'} style={{ textDecoration: 'none' }}>SignUp</Link>
                </div>
            </div>
        </div>
    )
}

export default Index
