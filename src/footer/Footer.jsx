import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.container}>
                <h2 className={s.title}>Лихолетов Дмитрий</h2>
                <div className={s.iconsBlock}>
                    <div className={s.icon}> </div>
                    <div className={s.icon}> </div>
                    <div className={s.icon}> </div>
                    <div className={s.icon}> </div>
                </div>
                <span className={s.AllRightsReserved}>&copy; 2021 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;