interface TextFieldProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  //   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  name,
  value,
  //   onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        // onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextField;
