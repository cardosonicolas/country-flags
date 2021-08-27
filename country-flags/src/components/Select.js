function Select({ onChange, options, placeholder, clear }) {
  return (
    <select name="select" onChange={onChange}>
      <option disabled selected={!!clear} hidden>
        {placeholder}
      </option>

      {options.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Select;
