import './WriteInput.css';

interface inputProps {
    type?: string;
    label?: string;
    value?: string;
    disabled?: boolean;
    onChange?: any;
    onClick?: any;
    name?: any;
}

export default function WriteInput(props: inputProps) {
    const { type, label, onChange, disabled, onClick, value, name } = props;

    return (
        <>

            <input name={name} type={type} placeholder={label} disabled={disabled} onChange={onChange} onClick={onClick} value={value} />
        </>
    );
}