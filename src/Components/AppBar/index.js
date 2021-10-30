import React from 'react';
import styles from './AppBar.module.css';
import { useHistory } from 'react-router';
import { ReactComponent as Back } from '../../uploads/back.svg'
import { URL_PREFIX } from '../../constants';

const Index = ({ type, handleLogout }) => {
    const history = useHistory()
    return (
        <div className={styles['appbar']}>
            {type == 1 ?
                <></> : <div onClick={() => history.push(URL_PREFIX + '/homescreen')}><Back className={styles['back-btn']} /></div>
            }
            <div className={styles['logo']}>
                <span className={styles['text']}>Let's Go Dutch</span>
            </div>
            {type == 1 ?
                <div className={styles['profile']}>
                    <img className={styles['profile-img']} src='https://picsum.photos/200' />
                    <div onClick={handleLogout}>
                        <img
                            className={styles['logout']}
                            src='https://img.icons8.com/external-sbts2018-outline-sbts2018/58/ffffff/external-logout-social-media-basic-1-sbts2018-outline-sbts2018.png'
                        />
                    </div>

                </div> :
                <div onClick={handleLogout}>
                    <img
                        className={styles['logout']}
                        src='https://img.icons8.com/external-sbts2018-outline-sbts2018/58/ffffff/external-logout-social-media-basic-1-sbts2018-outline-sbts2018.png'
                    />
                </div>
            }
        </div>
    )
}

export default Index
