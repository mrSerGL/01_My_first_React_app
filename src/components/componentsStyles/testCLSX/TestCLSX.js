import clsx from 'clsx';
// import alert from './testCLSX.module.css' // сейчас тянется из vanilaCSS

// const className = clsx(
//     "first",
//     10,
//     undefined && "second",
//     true && "third",
//     false ? "fourth" : "fifth"
//   );
  // console.log(className);

  const TestCLSX = ({ variant, outlined, elevated, children }) => {
    return (
      <p
        className={clsx(
          "alert",
          variant,
          outlined && "is-outlined",
          elevated && "is-elevated"
        )}
      >
        {children}
      </p>
    );
  };

  export default TestCLSX;