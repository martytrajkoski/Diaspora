type ButtonProps = {
    title: string;
    className: string;
    handleClick: ()=>void
}

export function Button({title, className, handleClick}:ButtonProps ){
    return(
        <button className={className} onClick={handleClick}>
            {title}
        </button>
    )
}