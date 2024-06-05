'use client'
import { changeTest } from '@/stores/currentTest/currentTest'

import style from './cards.module.scss'

export const Card = ({ status, date, allTests, successTests, failedTests, click }) => {
    
    const handleClick = () => {
        changeTest(click)
        window.location.assign('http://localhost:3000/detalPage')
    }

    return (
        <div className={style.Card}>
            <div className={style.Flex}>
                <span className={style.Status}>{status}</span>
                <span className={style.Date}>{date}</span>
            </div>
            <span className={style.allTests}>Тестов в ране: <b>{allTests}</b></span>
            <div className={style.Flex1}>
                <span>Пройдено: <b>{successTests}</b></span>
                <span>Провалено: <b>{failedTests}</b></span>
            </div>
            <button onClick={() => handleClick()} className={style.Button}><svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 19.5L0.25 38.9856V0.0144291L34 19.5Z" fill="white" />
            </svg></button>
        </div>
    )
}