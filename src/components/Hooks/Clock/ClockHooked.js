import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function ClockHooked() {
  //- если значение по умолчанию useState - функция, то функция вызовется только один раз и вернет значение по умолчанию

  const [time, setTime] = useState(() => new Date());

  //- useRef(null) вызовется при первом рендере, будет хранить объект current, которое было при первом рендере -  {current: null}

  const intervalId = useRef(null);


  //*  тело useEffect вызовется один раз, при первом рендере
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
      console.log('tik');
    }, 1000);

    //* вызывается перед последним рендером, перед изъятием из DOM (размонтированием)
    return () => clearInterval(intervalId.current);
  }, []);

  const stop = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      // intervalId.current = null;
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}
