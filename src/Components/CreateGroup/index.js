import React, { useState ,useEffect} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import styles from './CreateGroup.module.css';
import axios from 'axios';
const Index = ({ state, handleChange, handleSubmitClick }) => {

    const [options,setOptions] = useState(state.friends);

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
    useEffect(async()=>{
        const token =localStorage.getItem("token")
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };
        const data = await  axios.get("https://let-go-dutch.herokuapp.com/users/usersEmails",config);
        console.log(data,"user");
        setOptions(data.data)
    },[])
    const onSelectChange=(data,s)=>{
        console.log(s,"second")
        const e={
            target:{
                name:'friends',
                value:data
            }
        }
        handleChange(e);
    }

    return (

        <div className={styles['create-group-bg']}>
            <span className={styles['title']}>Create Group</span>
            <form className={styles['create-group-form']} onSubmit={handleSubmitClick}>
                <label htmlFor="input">
                    <div className={styles["img-holder"]}>
                        <img src={profileImg} alt="" id="img" className={styles["img"]} />
                    </div>
                </label>
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} style={{ display: 'none' }} />

                <div className={styles['group']}>
                    <label htmlFor='grp' className={styles['grp-label']}>Group Name: </label>
                    <input type='text' id='grp' className={styles['grp-input']} name='group_name' value={state.group_name} onChange={handleChange} />
                </div>
                <div className={styles['group']}>
                    <label htmlFor='grp1' className={styles['grp-label']}>Group Title: </label>
                    <input type='text' id='grp1' className={styles['grp-input']} name='group_title' value={state.group_title} onChange={handleChange} />
                </div>
                <div className={styles['friends']}>
                    <label htmlFor='friends' className={styles['frnd-label']}>Add friends: </label>
                    <Multiselect options={options} displayValue='email'  name="friends" id="friends"  className={styles['frnd-input']}  onSelect={onSelectChange} />
                </div>
                <div className={styles['expenses']}>
                    <span className={styles['expenses-title']}>Expenses:</span>

                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item1'>Food</label>
                        <input type='number' className={styles['item-input']} id='item1' name='food' value={state.expenses.food} onChange={handleChange} />
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item2'>Travel</label>
                        <input type='number' className={styles['item-input']} id='item2' name='travel' value={state.expenses.travel} onChange={handleChange} />
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item3'>Others</label>
                        <input type='number' className={styles['item-input']} id='item3' name='others' value={state.expenses.others} onChange={handleChange} />
                    </div>
                    {/* <div className={styles['item']}>
                        <label className={styles['item-label']} htmlFor='item'>Total Amount</label>
                        <input type='number' className={styles['item-input']} id='item' name='total' onChange={handleChange} value={state.expenses.total} />
                    </div> */}
                </div>
                <div className={styles['create-btn']} onClick={handleSubmitClick}>
                    Create Group
                </div>
            </form>
        </div>
    )
}

export default Index
