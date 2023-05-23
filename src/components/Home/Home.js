import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <ul>
      <li>
          <Link to="CollectionsRender">
            <p>рендер коллекции </p>
          </Link>
        </li>
        <li>
          <Link to="cssSamples">
            <p>css Samples</p>
          </Link>
        </li>

        <li>
          <Link to="Counter">
            <p>Counter</p>
          </Link>
        </li>
        <li>
          <Link to="dropdownMenu">
            <p>Dropdown menu</p>
          </Link>
        </li>

        <li>
          <Link to="ColorPicker">
            <p>Color picker</p>
          </Link>
        </li>
        <li>
          <Link to="input">
            <p>Input</p>
          </Link>
        </li>
        <li>
          <Link to="FormOnSubmit">
            <p>Form onSubmit</p>
          </Link>
        </li>
        <li>
          <Link to="ToDo">
            <p>To Do с модалкой</p>
          </Link>
        </li>
        <li>
          <Link to="clock">
            <p>Clock без утечки памяти</p>
          </Link>
        </li>
        <li>
          <Link to="tabs">
            <p>
              Tabs - работа с активным элементом в коллекции +
              shouldComponentUpdate+PureComponent
            </p>
          </Link>
        </li>
        <li>
          <Link to="HttpQueries">
            <p>HTTP queries Pokemons</p>
          </Link>
        </li>

        <li>
          <Link to="colorPickerHoocked">
            <p>ColorPicker refactored on Hoock</p>
          </Link>
        </li>

        <li>
          <Link to="counterHooked">
            <p>Counter refactored on Hoock + useEffect</p>
          </Link>
        </li>

        <li>
          <Link to="signupForm">
            <p>
              Signup Form - localStorage, lazy state initialization, Кастомный
              хук useLocalStorage
            </p>
          </Link>
        </li>

        <li>
          <Link to="clockHooked">
            <p>Clock hooked - useRef Clock Первый рендер Последний рендер</p>
          </Link>
        </li>
        <li>
          <Link to="queries">
            <p>HTTP queries - Hooked pokemons </p>
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Home;
