import React from 'react';
import styles from './AppBar.module.css';
import { useHistory } from 'react-router';
import { ReactComponent as Back } from '../../uploads/back.svg'
import { URL_PREFIX } from '../../constants';
import {useSelector} from "react-redux"
const Index = ({ type, handleLogout }) => {
    const history = useHistory()
    const authReducer = useSelector(state => state.authReducer)
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
                    <img className={styles['profile-img']} src={authReducer?.user?.profile_pic} />
                    <div onClick={handleLogout}>
                        <img
                            className={styles['logout']}
                            src='https://img.icons8.com/ios-filled/50/ffffff/logout-rounded.png'
                        />
                    </div>

                </div> :
                <></>
            }
        </div>
    )
}

export default Index
