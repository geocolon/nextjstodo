"udr client"
import clsx from "clsx";
import {ReactNode} from "react"
import {fimenu} from "react-icons/fi"


interface buttonProp {
    type? : "button" | "submit" | "reset"
    text: string | ReactNode 
    onClick? : () =>void
    actionButton? : boolen 
}

const Button = ({type, text, onClick, actionButton}: buttonProp) => {
    return (
        <>
        <button
        onClick={onClick}
        type={type}
        className={clsx(
            actionButton && "bg-orange-700 rounded-ful p-2 text-white",
            "bg-oragne-700 px-2 text-white"
        )}
        > {text}</button>
        </>
    )
};

export default Button;