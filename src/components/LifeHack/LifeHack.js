// import { useState, useEffect, useRef } from "react";


//* запрос при изменении массива зависимости in case Load more button (page+1)

// useEffect(()=>{

// },[query, page]);

// <button onClick={setPage(page=>page + 1)}>Load more</button>


//* кастомній хук для открітия-закрітия модалки (можно обойтись одним toggle)

// export const useToggle = () => {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible = true;
//   };

//   const close = () => {
//     setVisible = false;
//   };

//   const toggle = () => {
//     setVisible = prevValue => !prevValue;
//   };

//   return {visible, open, close, toggle}
// };

//* условие на пропуск віполнения при первом рендере (аналог componentDidUpdate)
// https://www.youtube.com/watch?v=IW_ntN7fSbY   2:05

// const [query, setQuery]=useState('');

// const isFirstRender = useRef(true);

// useEffect(()=>{

//     if (isFirstRender.current){
//         isFirstRender.current = false;
//         return;
//     }

//     },[query]);

// ----------------------

useEffect(()=>{
    if(query === ''){
        return
    }
    fetch();
    
}, [query]



//* вызов функции из разных мест в useEffect

// // UserApi.js
// function fetchUser(params) {
//     // body
// }

// // in A.js
// useEffect(()=>{
//     fetchUser()
// },[fetchUser]);

// // in B.js
// useEffect(()=>{
//     fetchUser()
// },[fetchUser]);