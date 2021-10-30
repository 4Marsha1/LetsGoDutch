import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import styles from './CreateGroup.module.css';

const Index = () => {
    const data = [
        { name: 'Abhishek', id: 1 },
        { name: 'Bha', id: 2 },
        { name: 'Rad', id: 3 },
        { name: 'Waz', id: 4 },
    ]
    const [options] = useState(data);

    const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
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
        <div className={styles['create-group-bg']}>
            <span className={styles['title']}>Create Group</span>
            <form className={styles['create-group-form']}>
                <label htmlFor="input">
                    <div className={styles["img-holder"]}>
                        <img src={profileImg} alt="" id="img" className={styles["img"]} />
                    </div>
                </label>
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} style={{ display: 'none' }} />

                <div className={styles['group']}>
                    <label htmlFor='grp' className={styles['grp-label']}>Group Name: </label>
                    <input type='text' id='grp' className={styles['grp-input']} name='group_name' />
                </div>
                <div className={styles['group']}>
                    <label htmlFor='grp1' className={styles['grp-label']}>Group Title: </label>
                    <input type='text' id='grp1' className={styles['grp-input']} name='group_title' />
                </div>
                <div className={styles['friends']}>
                    <label htmlFor='friends' className={styles['frnd-label']}>Add friends: </label>
                    <Multiselect options={options} displayValue='name' name="friends" id="friends" className={styles['frnd-input']} />
                </div>
                <div className={styles['expenses']}>
                    <span className={styles['expenses-title']}>Expenses:</span>

                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item1'>Food</label>
                        <input type='number' className={styles['item-input']} id='item1' name='food' />
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item2'>Travel</label>
                        <input type='number' className={styles['item-input']} id='item2' name='travel' />
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item3'>Others</label>
                        <input type='number' className={styles['item-input']} id='item3' name='others' />
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item'>Total Amount</label>
                        <input type='number' className={styles['item-input']} id='item' name='total' />
                    </div>

                </div>
                <div className={styles['create-btn']}>
                    Create Group
                </div>
            </form>
        </div>
    )
}

export default Index
