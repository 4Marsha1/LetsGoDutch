import React from 'react';
import styles from './GroupScreen.module.css';

const Index = ({ group }) => {
    
// console.log(group[0],"group")
    const total = group[0]?.group?.expenses?.food + group[0]?.group.expenses.travel + group[0]?.group.expenses.others;
        
    return (
        <div className={styles['container']}>
            <div className={styles['group-card']}>
                <div className={styles['basic']}>
                    <img src='https://picsum.photos/200' className={styles['img']} />
                    <div className={styles['details']}>
                        <span> {group[0]?.group.name} </span>
                        <span> {group[0]?.group.description} </span>
                    </div>
                </div>
                <div className={styles['advanced']}>
                    <div className={styles['expenses']}>
                        <span>Food : {group[0]?.group.expenses.food} </span>
                        <span>Travel : {group[0]?.group.expenses.travel} </span>
                        <span>Others : {group[0]?.group.expenses.others} </span>
                        <span>Total Amount : {total} </span>
                    </div>
                    <div className={styles['people']}>
                        {group[0]?.group.members.map(friend => <span>{friend.user_id.name}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
