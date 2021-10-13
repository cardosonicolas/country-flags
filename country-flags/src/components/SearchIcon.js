import styled from "styled-components";

const SearchIcon = () => {
  return (
    <SvgWrapper viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </SvgWrapper>
  );
};

const SvgWrapper = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.text};
`;

export default SearchIcon;
