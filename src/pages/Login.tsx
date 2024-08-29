import loginDesign from "../styles/login/Login.module.scss";
import image from "../assets/login/login-image.jfif";
import { Button } from "../components/Button/Button";
import LoginButtons from "../components/Login/LoginButtons";
import { useState } from "react";
import FormField from "../components/Login/FormField";

export default function Login() {
  const [isInputField, setInputField] = useState(false);

  const toggleInputField = () => {
    setInputField(!isInputField);
  };

  return (
    <>
      <div className={loginDesign["login-container"]}>
        <div className={loginDesign["login-image"]}>
          <img src={image} alt="Login-Image" />
        </div>
        <div className={loginDesign["login-details"]}>
          <div className={loginDesign["login-details-wrapper"]}>
            <h1>Sign up to diaspora.home</h1>
            <LoginButtons />
            <div className={loginDesign["border"]}>
              <span></span>
              <p>or</p>
              <span></span>
            </div>
            <Button className={`${isInputField ? loginDesign.active : loginDesign["login-btn-email"]}`}
              title="Continue with Email"
              handleClick={toggleInputField}
            />

            {isInputField && <FormField />}

            <div className={loginDesign["login-text"]}>
              {!isInputField && (
                <p>
                  By creating an account you agree with the Terms of Service,
                  Privacy Policy <br />
                  and out default Notification Settings.
                </p>
              )}
              <p>Already have an account? Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
