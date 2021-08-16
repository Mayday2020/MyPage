import React from 'react'
import s from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Accusantium architecto atque commodi cum debitis dolorum eligendi error fugit impedit inventore iste, ' +
        'laboriosam neque optio quasi, qui quos reiciendis sequi tenetur.'
    return <div className={s.projectsBlock}>
        <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
            <h2 className={s.title}>Мои работы</h2>
            <div className={s.projects}>
                <Project title={'js'} description={description}/>
                <Project title={'react'} description={description}/>
            </div>
        </div>
    </div>

}

export default Projects