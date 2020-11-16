import "./Input.css";

const Input = (props) => {
  return (
    <div className="form-label-group">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
