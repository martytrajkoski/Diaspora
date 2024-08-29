import { useNavigate } from "react-router-dom"
import { SelectionButton } from "../components/SelectionButton/SelectionButton"
import { Button } from "../components/Button/Button";
import portal from "../styles/PortalPage/PortalPageStyles.module.scss"
import logo from "../assets/Diaspora_logo.png"

export function Portal(){

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/about')
    }

    return(
        <div className={portal.portal}>
            <div className={portal.container}>
                <div className={portal.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={portal.content}>
                    <h1>
                        First things first, are you a service provider or a property owner?
                    </h1>
                    <div className={portal.options}>
                        <SelectionButton title={'Service Provider'} rightIcon handleClick={handleClick} ></SelectionButton>
                        <SelectionButton title={'Property owner'} rightIcon handleClick={handleClick}></SelectionButton>
                    </div>
                    <div className={portal.buttons}>
                        <Button title="Back" className={portal.btn_back} handleClick={handleClick}/>
                        <Button title="Continue" className={portal.btn_submit} handleClick={handleClick}/>
                    </div>
                </div>
            </div>
            
            <div className={portal.footer}>

            </div>
         </div>
    )
}