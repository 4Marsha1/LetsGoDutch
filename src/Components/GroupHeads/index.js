import React from 'react';
import styles from './GroupHeads.module.css';
import { ReactComponent as Create } from '../../uploads/create-icon.svg'

const index = () => {
    return (
        <div className={styles['groups']}>
            <div className={styles['group']}>
                <img className={styles['group-image']} src='https://iconutopia.com/wp-content/uploads/2020/04/mushroom-phone-wallpaper-iconutopia-1.jpg' />
                <div className={styles['group-details']}>
                    <div className={styles['group-name']}>
                        <span>Picnic 2021</span>
                    </div>
                    <div className={styles['group-info']}>
                        <span>This group is for bill spliting picnic 2021</span>
                    </div>
                </div>
                <img className={styles['people']} src='https://img.icons8.com/material/96/000000/guest-male--v1.png' />
            </div>

            {/* // tempp */}
            <div className={styles['group']}>
                <img className={styles['group-image']} src='https://iconutopia.com/wp-content/uploads/2020/04/mushroom-phone-wallpaper-iconutopia-1.jpg' />
                <div className={styles['group-details']}>
                    <div className={styles['group-name']}>
                        <span>Picnic 2021</span>
                    </div>
                    <div className={styles['group-info']}>
                        <span>This group is for bill spliting picnic 2021</span>
                    </div>
                </div>
                <img className={styles['people']} src='https://img.icons8.com/material/96/000000/guest-male--v1.png' />
            </div>

            <div className={styles['create-group']}>
                <Create className={styles['create-icon']} />
            </div>

        </div>
    )
}

export default index
