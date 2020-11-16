import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : null}
      className={`btn btn-${props.class} btn-block button text-uppercase`}
    >
      {props.icon ? <i className={`fa fa-${props.icon} icon`}></i> : null}
      {props.title}
    </button>
  );
};

export default Button;
