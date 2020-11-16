import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./Login.css";

const Login = () => {
  return (
    <div className="row">
      <div className="col-lg-8 col-xl-6 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-body">
            <div>
              <img className="logo" src="./images/logo.png" />
            </div>
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin">
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button title="Login" class="success" type="submit" />
            </form>
            <div className="have-acount">
              <h6 className="text-right">
                Have not an account ? click <Link to="/">here</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
