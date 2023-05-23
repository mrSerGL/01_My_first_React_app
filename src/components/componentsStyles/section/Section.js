import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
