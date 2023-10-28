interface InputProps {
    placeholder: string;
}

const Input = (props: InputProps) => {
    return (
        <input
            placeholder={props.placeholder}
        />
    );
}

export default Input;