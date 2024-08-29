import select_btn from "../../styles/selectionbutton/Selectionbutton.module.scss" 

type SelectionButtonProps = {
    title: string
    subtitle?: string
    leftIcon?: boolean
    rightIcon?: boolean
    favicon?: string
    handleClick: ()=>void
}

export function SelectionButton({title, subtitle, leftIcon, rightIcon, favicon, handleClick}: SelectionButtonProps){
    return(
        <div className={subtitle ? (select_btn.outlineLarge):(select_btn.outline)} onClick={handleClick}>
            {rightIcon && <div className={select_btn.radio_border}><div className={select_btn.radio_circle}></div></div>}
            {leftIcon &&  <div className={select_btn.radio}><i className={favicon}></i></div>}
            {subtitle ? (<div className={select_btn.btn_container}><h5>{title}</h5><small>{subtitle}</small></div>):(<h3>{title}</h3>)}
        </div>
    )
}