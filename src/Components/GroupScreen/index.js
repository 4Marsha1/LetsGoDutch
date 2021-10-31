import React from 'react';
import styles from './GroupScreen.module.css';

const Index = ({ group }) => {
    const groupObj =group?group.map(grp => {
        const total = grp.expenses.food + grp.expenses.travel + grp.expenses.other;
        return (
            <div className={styles['group-card']}>
                <div className={styles['basic']}>
                    <img src='https://picsum.photos/200' className={styles['img']} />
                    <div className={styles['details']}>
                        <span> {grp.group_name} </span>
                        <span> {grp.group_title} </span>
                    </div>
                </div>
                <div className={styles['advanced']}>
                    <div className={styles['expenses']}>
                        <span>Food : {grp.expenses.food} </span>
                        <span>Travel : {grp.expenses.travel} </span>
                        <span>Others : {grp.expenses.other} </span>
                        <span>Total Amount : {total} </span>
                    </div>
                    <div className={styles['people']}>
                        {grp.friends.map(friend => <span>{friend.name}</span>)}
                    </div>
                </div>
            </div>
        );
    }):null
    return (
        <div className={styles['container']}>
            {groupObj}
        </div>
    )
}

export default Index
