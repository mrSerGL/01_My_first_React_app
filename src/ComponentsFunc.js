import { NavLink, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import CollectionsRender from './components/CollectionsRender';
import CssSamples from './components/CssSamples';
import Home from './components/Home';
import Counter from './components/eventsStats/Counter';
import Dropdown from './components/eventsStats/Dropdown';
import ColorPicker from './components/eventsStats/ColorPicker';
import Input from 'components/Forms/Input';
import Form from 'components/Forms/Form';
import ToDo from './components/TodoList';
import Clock from './components/lifeCycle/Clock';
import Tabs from 'components/lifeCycle/Tabs';
import tabs from './components/lifeCycle/Tabs/tabs.json';
import HttpQueries from 'components/httpQueries/HttpQueries';
import ColorPickerHoocked from './components/Hooks/ColorPickerRefactored';
import CounterHooked from 'components/Hooks/Counter/CounterHooked';
import SignupForm from './components/Hooks/SignupForm';
import ClockHooked from './components/Hooks/Clock';
import HttpQueriesHooked from './components/Hooks/httpQueriesHooked/HttpQueries';


import css from './Components.module.css';


const ComponentsFunc = () => {
  return (
    <div className="container">
      <header>
        <h3>Header</h3>

        <nav className={css.navList}>
          <NavLink to="/" className={css.navItem}>
            React Home
          </NavLink>
          {/* <NavLink to="queries" className={css.navItem}>
            HTTP queries
          </NavLink> */}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CollectionsRender" element={<CollectionsRender />} />
        <Route path="CssSamples" element={<CssSamples />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="dropdownMenu" element={<Dropdown />} />
        <Route path="ColorPicker" element={<ColorPicker />} />
        <Route path="input" element={<Input />} />
        <Route path="FormOnSubmit" element={<Form />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="clock" element={<Clock />} />
        <Route path="tabs" element={<Tabs items={tabs} />} />
        <Route path="HttpQueries" element={<HttpQueries />} />
        <Route path="colorPickerHoocked" element={<ColorPickerHoocked />} />
        <Route path="counterHooked" element={<CounterHooked />} />
        <Route path="signupForm" element={<SignupForm />} />
        <Route path="clockHooked" element={<ClockHooked />} />
        <Route path="queries" element={<HttpQueriesHooked />} />
      </Routes>

      <hr />

      <footer>
        <h4>Footer</h4>
      </footer>
    </div>
  );
};

export default ComponentsFunc;
