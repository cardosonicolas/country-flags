import styled from "styled-components";

const ArrowIcon = () => {
  return (
    <SvgWrapper viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </SvgWrapper>
  );
};

const SvgWrapper = styled.svg`
  fill: ${({ theme }) => theme.text};
  stroke: ${({ theme }) => theme.text};
  vertical-align: text-bottom;
`;

export default ArrowIcon;
