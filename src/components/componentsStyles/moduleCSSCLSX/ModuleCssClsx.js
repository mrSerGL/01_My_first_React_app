import clsx from "clsx";
import css from './ModuleCssClsx.module.css'

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated
      })}
    >
      {children}
    </p>
  );
};