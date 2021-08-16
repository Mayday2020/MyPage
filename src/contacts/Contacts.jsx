import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <div className={s.container}>
                <h2 className={s.title}>Контакты</h2>
                    <form action="" className={s.formBlock}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10">some disc</textarea>
                    </form>
                <button className={s.submitButton}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;