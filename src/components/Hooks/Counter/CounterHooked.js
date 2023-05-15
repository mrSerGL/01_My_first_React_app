import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function CounterHooked() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [total, setTotal] = useState(0);

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
    // console.log(`total clicks: ${totalClick }`)
    setTotal(totalClick)
  }, [counterA, counterB]);

  return (
    <> <p>Total clicks: {total}</p>

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
