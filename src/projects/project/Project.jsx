import React from 'react'
import s from './Project.module.css'

function Project () {
    return <div className={s.project}>
        <div className={s.presentation}>
            <span className={s.viewButton}><a href="#">Смотреть</a></span>
        </div>
        <div className={s.description}>
            <h3>Название проекта</h3>
            <p>Краткое описание</p>
        </div>
    </div>

}
export default Project