import styled from "styled-components";
import { devices } from "../utils";

const Select = ({ onChange, options, placeholder, clear }) => {
  return (
    <FilterRegion name="select" onChange={onChange}>
      <option disabled selected={!!clear} hidden>
        {placeholder}
      </option>

      {options.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </FilterRegion>
  );
};

export default Select;

const FilterRegion = styled.select`
  width: 60%;
  padding: 1.3em;
  border: none;
  border-radius: 3px;
  background-color: hsl(0, 0%, 100%);
  outline: 0;

  @media ${devices.laptop} {
    width: 15%;
  }
`;
