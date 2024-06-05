import { TestCardFailed } from "@/widgets/TestCardFailed";
import { TestCardSuccess } from "@/widgets/TestCardSuccess";
import { $currentTest } from "@/stores/currentTest/currentTest";
import dataBaseReaderWriter from "../classes/dataBase";
import { useUnit } from "effector-react";

import style from './dp.module.scss'


export default async function detalPage() {

  const handleClick = () => {
    window.location.assign('http://localhost:3000/')
  }

  let currentTest = useUnit($currentTest)

  let database = await dataBaseReaderWriter._readDatabase();
  let dataFailed = database[currentTest]["failedTests"]
  let dataSuccess = database[currentTest]["successTests"]
  
  const rawFailed = dataFailed.map((item, i) =>{
    return <TestCardFailed 
    key={i} 
    name ={item.name}
    result = {item.result}
    error = {item.error}/>
  })

  const rawSuccess = dataSuccess.map((item, i) =>{
    return <TestCardSuccess 
    key={i} 
    name ={item.name}/>
  })

  return (
    <main >
      <div>
      <div className={style.Card}>
            <div className={style.Flex}>
                <span className={style.Status}>success</span>
                <span className={style.Date}>03.06.24 18:18</span>
            </div>
            <span className={style.allTests}>Тестов в ране: <b>24</b></span>
            <div className={style.Flex1}>
                <span>Пройдено: <b>24</b></span>
                <span>Провалено: <b>0</b></span>
            </div>
            <button onClick={() => handleClick()} className={style.Button}>
              <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19.5L33.75 0.0144272V38.9856L0 19.5Z" fill="white" />
              </svg>
            </button>
        </div>
        {rawFailed}
        {rawSuccess}
      </div>
    </main>
  );
}
