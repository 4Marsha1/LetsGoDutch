import React from 'react';
import styles from './GroupHeads.module.css';
import { ReactComponent as Create } from '../../uploads/create-icon.svg'
import { Link } from 'react-router-dom';
import { URL_PREFIX } from '../../constants';

const index = ({ groups }) => {

    const groupList = groups.map(group => {
        return (
            <div className={styles['group']}>
                <img className={styles['group-image']} src={group.group_profile} />
                <div className={styles['group-details']}>
                    <div className={styles['group-name']}>
                        <span>{group.group_name}</span>
                    </div>
                    <div className={styles['group-info']}>
                        <span>{group.group_title}</span>
                    </div>
                </div>
                <img className={styles['people']} src='https://img.icons8.com/material/96/000000/guest-male--v1.png' />
            </div>
        )
    })

    return (
        <div className={styles['groups']}>
            {groupList}

            <Link to={URL_PREFIX + '/creategroup'} >
                <div className={styles['create-group']}>
                    <Create className={styles['create-icon']} />
                </div>
            </Link>
        </div>
    )
}

export default index
