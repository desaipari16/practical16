function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={type === "number" ? "0.01" : undefined}
        step={type === "number" ? "0.01" : undefined}
        className="w-full rounded-lg border border-gray-300
          px-4 py-3 outline-none transition
          focus:border-indigo-500 focus:ring-2
          focus:ring-indigo-200"
      />
    </div>
  );
}

export default FormInput;