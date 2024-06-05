import style from './cards.module.scss'

export const TestCardFailed = ({name, result, error}) =>{
    return(
        <div className={style.CardF}>
            <span>Название: {name}</span>
            <span>Статус: {result}</span>
            <span>Ошибка: {error}</span>
        </div>
    )
}