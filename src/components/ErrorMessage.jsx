const ErrorMessage = ({ message }) => {
  return (
    <div className="message error">
      <h3>Error</h3>

      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;