interface HeaderProps {
    text: string;
}

const Header = (props: HeaderProps) => {
    return (
        <h1 className="text-6xl sm:text-8xl font-black">{props.text}</h1>
    );
};

export default Header;