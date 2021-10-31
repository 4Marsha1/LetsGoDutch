import React from 'react';
import styles from './GroupHeads.module.css';
import { ReactComponent as Create } from '../../uploads/create-icon.svg'
import { Link } from 'react-router-dom';
import { URL_PREFIX } from '../../constants';

const index = ({ groups }) => {

    const groupList = groups?groups.map(group => {
        return (

            <Link
                className={styles['group']}
                style={{ textDecoration: 'none' }}
                to={{
                    pathname: URL_PREFIX + '/groupscreen',
                    state: {
                        id: group.id,
                        fromGroupHead: true,
                    },
                }}
            >
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
            </Link>
        )
    }):null

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
