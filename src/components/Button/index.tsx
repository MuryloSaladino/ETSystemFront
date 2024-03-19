interface IButtonProps {
    children: React.ReactNode;
    style?: "primary" | "secondary" | "tertiary" | "integrated";
}

export const Button = ({children, style}:IButtonProps) => {


    return(
        <button>
            {children}
        </button>
    )
}