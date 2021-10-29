import React from 'react';
import styles from './AppBar.module.css';

const index = () => {
    return (
        <div className={styles['appbar']}>
            <div className={styles['logo']}>
                <span className={styles['text']}>Let's Go Dutch</span>
            </div>
            <div className={styles['profile']}>
                <img className={styles['profile-img']} src="https://i.pinimg.com/736x/c4/37/9d/c4379deca836c6957daad7125cf6b287.jpg" />
            </div>
        </div>
    )
}

export default index
