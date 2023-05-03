import './vanilaCSS.css';

// const VanilaCSS = ({ children }) => {
//     return <p className="alert">{children}</p>;
//   };

const VanilaCSS = ({ variant, outlined, elevated, children }) => {
    
    const classNames = ["alert", variant];
    if (outlined) classNames.push("is-outlined");
    if (elevated) classNames.push("is-elevated");
  
    return <p className={classNames.join(" ")}>{children}</p>;
  };

export default VanilaCSS ; 