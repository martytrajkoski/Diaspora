type ButtonProps = {
    title: string;
    className: string;
    image? : string ;
    handleClick?: ()=>void
}

export function Button({title, className,image,handleClick}:ButtonProps ){
    return(
        <button className={className} onClick={handleClick}>
           <img src={image} alt="" /> {title}
        </button>
    )
}