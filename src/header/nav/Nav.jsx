import React from 'react'
import s from './Nav.module.css'

function Nav(){
    return <nav className={s.nav}>
        <a className={s.nav_items} href="#">Главная </a>
        <a className={s.nav_items} href="#">Скиллы </a>
        <a className={s.nav_items} href="#">Проекты </a>
        <a className={s.nav_items} href="#">Контакты </a>
    </nav>
}
export default Nav