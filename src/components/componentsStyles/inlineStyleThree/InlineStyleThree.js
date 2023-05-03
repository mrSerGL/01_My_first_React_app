const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
  };

  const Alert = ({ children }) => {
    return <p style={alertStyles}>{children}</p>;
  };

  const InlineStyleThree = () => {
    return (
      <>
        <Alert>Please update your email!</Alert>
        <Alert>There was an error during transaction!</Alert>
        <Alert>Payment received, thank you for your purchase!</Alert>
      </>
    );
  };

  export default InlineStyleThree;
  
