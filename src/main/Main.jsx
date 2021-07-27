import React from 'react'
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Main () {
    return <main className={s.main}>
        <div className={styleContainer.container}>
            <div className={s.text}>
                <span>Всем привет</span>
                <h1>Я Дмитрий</h1>
                <p>Front-end разработчик</p>
            </div>
            <div className={s.photo}></div>
        </div>
    </main>
}
export default Main