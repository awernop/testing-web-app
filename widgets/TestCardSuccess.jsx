import style from './cards.module.scss'

export const TestCardSuccess = ({name}) =>{
    return(
        <div className={style.CardS}>
            <span>Название: {name}</span>
        </div>
    )
}