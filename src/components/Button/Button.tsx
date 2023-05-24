type Props = {
    variant?: 'default' | 'dark' | 'primary' | 'light'; 
    children:React.ReactNode;
};

export function Button({ variant, children }: Props){
    let bgColor = 'text-black';
    if (variant === 'primary') bgColor = 'bg-primary';
    if (variant === 'light') bgColor = 'bg-PrimaryLight';
   
    return (
    <button className="py-2 px-4 rounded-md bg-primary font-bold ">
        {children}
    </button>
    );
}