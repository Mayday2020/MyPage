import React from 'react'
import s from './Remotely.module.css'

function Remotely () {
    return <div className={s.remotelyBlock}>
        <div className={`${s.remotelyContainer} ${s.container}`}>
            <div className={s.remotely}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
            </div>
            <button className={s.employ}>Нанять меня</button>
        </div>

    </div>
}
export default Remotely