function Select(props) {
  return (
    <select name="select" onChange={props.onChange}>
      <option disabled selected hidden>
        {props.placeholder}
      </option>

      {props.options.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Select;
