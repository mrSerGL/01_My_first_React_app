import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function CounterHoocked() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  // //# запускается при изменении стейта или пропов (при каждом рендере)
  // useEffect(()=>{
  //   console.log('useEffect is started')
  // });

  // //# запускается при первом рендере (есть пустой массив зависимостей)
  // useEffect(()=>{
  //   console.log('useEffect is started')
  // },[]);

  //# запускается при изменении значения в массиве зависимостей)
  useEffect(() => {
    const totalClick = counterA + counterB;
    console.log(`total clicks: ${totalClick }`)
  }, [counterA, counterB]);

  return (
    <> 

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раза
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раза
      </button>
    </>
  );
}
