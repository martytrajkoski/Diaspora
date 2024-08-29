import { useState } from "react";
import loginDesign from "../../styles/login/Login.module.scss";
import { Button } from "../Button/Button";

export default function FormField() {
     
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

   const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if(username && password) {
        console.log(username , password)
    }
        
   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={loginDesign["input-field"]}>
          <label htmlFor="username">Username or Email</label>
          <input type="text" name="username" className={loginDesign["input"]} onChange={(e) => setUsername(e.target.value)} />
          <div className={loginDesign["label-forgot"]}>
            <label htmlFor="username">Password</label>
            <p>Forgot?</p>
          </div>
          <input type="password" name="password" className={loginDesign["input"]} onChange={(e) => setPassword(e.target.value)} />
          <Button className={loginDesign["login-btn-email"]} title="Sign In" />
        </div>
      </form>
    </>
  );
}
