interface ContainerProps {
    children: React.ReactNode;
}

{/*Specify types of children by defining an interface.
Then, annotate the container component params to be of that type.*/}
const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
    <div className="
        max-w-[1920px]
        mx-auto
        xl:px-20
        md:px-2
        px-4">
        {children}
    </div> );
}
 
export default Container;