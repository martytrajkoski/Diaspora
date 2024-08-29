import { Button } from "../Button/Button";
import googleImg from "../../assets/login/google-svgrepo-com.svg";
import appleImg from "../../assets/login/apple-svgrepo-com.svg";
import loginDesign from "../../styles/login/Login.module.scss";

export default function LoginButtons() {
    return (
        <>
          <Button
              image={googleImg}
              title="Sign up with Gooogle"
              className={loginDesign["login-btn"]}
            />
            <Button
              image={appleImg}
              title="Sign up with Apple"
              className={loginDesign["login-btn"]}
            />
        </>
    )
}