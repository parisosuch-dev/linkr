import TypeWriter from "../typewriter";

interface HeaderProps {
    text: string;
}

const Header = (props: HeaderProps) => {
    return (
        <h1 className="text-6xl sm:text-8xl font-black"><TypeWriter text={props.text} delay={50} /></h1>
    );
};

export default Header;