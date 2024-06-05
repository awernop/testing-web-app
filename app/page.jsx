import styles from "./page.module.scss";
import { $currentTest } from "@/stores/currentTest/currentTest";
import { Card } from "@/widgets/Card";
import dataBaseReaderWriter from "./classes/dataBase";


export default async function Home() {

  let database = await dataBaseReaderWriter._readDatabase();

  const raw = database.map((item, i) =>{
    return <Card 
    key={i} 
    status = {item.result}
    date = {item.date}
    allTests = {item.testsCount}
    successTests = {item.successCount}
    failedTests = {item.failedCount} 
    click = {i}/>
  })

 

  return (
    <main className={styles.main}>
      <div>
        {raw}
      </div>
    </main>
  );
}
