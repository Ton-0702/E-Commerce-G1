import styled from "styled-components";

export const StyledButton = styled.div`
  .btn {
    text-align: center;

  }
  button {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
    border-color: ${(props) => props.borderColor};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props)=> props.borderNone};
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
  borderNone,
  urlImg,
  fontSize,
  buttonName,
  buttonType
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderNone={borderNone}
      urlImg={urlImg}
      fontSize={fontSize}
      buttonName={buttonName}
      buttonType={buttonType}
    >
      <div className="btn">
        <button type={buttonType}>
          {urlImg ? <img src={urlImg} alt="" /> : null}
          <span>{buttonName}</span>
        </button>
      </div>
    </StyledButton>
  );
};
