import React from 'react';
import styles from './AppBar.module.css';
import { useHistory } from 'react-router';
import { ReactComponent as Back } from '../../uploads/back.svg'
import { URL_PREFIX } from '../../constants';

const Index = ({ type, user }) => {
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
                </div> :
                <></>
            }
        </div>
    )
}

export default Index
