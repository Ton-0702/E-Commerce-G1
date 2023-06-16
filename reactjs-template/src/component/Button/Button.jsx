import styled from "styled-components";

export const StyledButton = styled.div`
  .btn {
    /* align-items: center; */
    text-align: center;
    /* display: flex;
    gap: 10px; */
  }
  button {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
    border-color: ${(props) => props.borderColor};
    border-radius: ${(props) => props.borderRadius};
    font-size: ${(props) => props.fontSize};
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  span{
    padding-left: 10px;
  }
  
`;

export const DefaultButton = ({
  width,
  height,
  textColor,
  bgColor,
  borderColor,
  borderRadius,
  urlImg,
  fontSize,
  buttonName,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      urlImg={urlImg}
      fontSize={fontSize}
      buttonName={buttonName}
    >
      <div className="btn">
        <button>
          {urlImg ? <img src={urlImg} alt="" /> : null}
          <span>{buttonName}</span>
        </button>
      </div>
    </StyledButton>
  );
};
