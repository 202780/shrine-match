import styled from "styled-components";
import colors from "../../styles/color";

function QuestionContent({ question }){
    return (
        <StyledQuestion>
            <div> 1 / 5 </div>
            <div> 여행 중 발견한 오래된 지도에 신사로 가는 네 개의 경로가 표시되어 있다. 어떤 길을 선택할까? </div>
        </StyledQuestion>
    );
}

export default QuestionContent;

const StyledQuestion = styled.div`
  position: absolute;
  text-align: center;
  max-width: 360px;
  width: auto;
  z-index: 10;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "NanumMyeongjo", serif;
  top: 14rem;
  color: ${colors.secondary};

  & > div {
    margin-bottom: 1.5rem;
  }
`;