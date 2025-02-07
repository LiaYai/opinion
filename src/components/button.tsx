type ButtonProps = {
  children: string,
  onClick?: () => void,
  className?: string
};

export const PrimaryButton = ({onClick,children, className}: ButtonProps) => {
  return <button onClick={onClick} type='button' className={`bg-accent rounded-[50px] text-primary font-bold px-5 py-1.5 cursor-pointer focus-visible:none focus-visible:ring-2  hover:shadow-2xl hover:filter:invert() ${className}`}> {children} </button>
}

export const SecondaryButton = ({children}: ButtonProps) => {
  return <button type='button' className="bg-primary rounded-[50px] border border-accent text-accent font-bold px-5 py-1.5 cursor-pointer"> {children} </button>
}