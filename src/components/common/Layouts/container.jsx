import styled from "styled-components";
import colors from "../../../styles/color";

function Container({ children }) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

export default Container;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 0;
  padding: 20px;
  background-color: white;
  overflow: hidden;
`;
