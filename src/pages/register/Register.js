import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./Register.css";

const Register = () => {
  return (
    <div className="row">
      <div className="col-lg-8 col-xl-6 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-body">
            <div>
              <img className="logo" src="./images/logo.png" />
            </div>
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button title="Register" class="success" type="submit" />
            </form>
            <div className="have-acount">
              <h6 className="text-right">
                Have an account ? click <Link to="/login">here</Link>
              </h6>
            </div>
            <hr class="my-4" />
            <Button title="Register with google" class="danger" icon="google" />
            <Button
              title="Register with facebook"
              class="primary"
              icon="facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
