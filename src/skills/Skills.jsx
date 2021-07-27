import React from 'react'
import s from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Accusantium architecto atque commodi cum debitis dolorum eligendi error fugit impedit inventore iste, ' +
        'laboriosam neque optio quasi, qui quos reiciendis sequi tenetur.'
    return <div className={s.skillsBlock}>
        <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
            <h2 className={s.title}>Скиллы</h2>
            <div className={s.skills}>
                <Skill title={'js'} description={description}/>
                <Skill title={'react'} description={description}/>
                <Skill title={'HTML/CSS'} description={description}/>
            </div>
        </div>
    </div>

}

export default Skills