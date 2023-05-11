import useLocalStorage from '../../../hooks/useLocalStorage';  
import styles from './SignupForm.module.css';

//- Кастомный хук useLocalStorage

//# импортируем useLocalStorage from '../../../hooks/useLocalStorage'

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export default function SignupForm() {

  //- lazy state initialization - записываем как функцию - запусимится только один раз. инчаче будет запускаться при каждом рендере.

  const [email, setEmail] = useLocalStorage('email', '');

  //   const [email, setEmail] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
  //   });
  const [password, setPassword] = useLocalStorage('password', '');

  //   const [password, setPassword] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
  //   });

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  //- оптимизировано, перенеесли в useLocalStorage

  //   useEffect(() => {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }, [email]);

  //   useEffect(() => {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }, [password]);

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
