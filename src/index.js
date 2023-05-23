import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import './index.css'

// import paintings from './paintings.json';

// =======  React-элементы и React.createElement() ================

// const element1 = React.createElement('span', {children: 'Hello'});
// const element2 = React.createElement('span', {children: 'world'});

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [element1, ' ', element2],
// });

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// ======= JSX как шаблонизатор ===================================

// const element1 = <span>Hello</span>;
// const element2 = <span>world</span>;

// const jsxElement = (
//   <div>
//     {element1}
//     {element2}
//   </div>
// );

// console.log('jsxElement:', jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'));

// ========== Компонент Painting ======================================

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const data = paintings[0];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

// ================ Компоненты-функции ========================

//* перенесли в Painting.js

// function Painting(props) {
//   console.log('props:', props);

//   const { url, title, profileUrl, authorName, price } = props;

//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title} </h2>
//       <p>
//         Автор: <a href={profileUrl}>{authorName}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// ReactDOM.render(<Painting a="5" b={10} c={{d: 10}}/>, document.querySelector('#root'));

// const painting1 = paintings[2];

// <Painting
// url={painting1.url}
// title={painting1.title}
// authorName={painting1.author.tag}
// profileUrl={painting1.author.url}
// price={painting1.price}
// />

// ReactDOM.render(
// <App />, document.querySelector('#root'),
// );

//================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename="/01_My_first_React_app">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
