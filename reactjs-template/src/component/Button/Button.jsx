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
    padding: ${(props) => props.padding};
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
  padding,
  borderColor,
  borderRadius,
  urlImg,
  fontSize,
  buttonName,
  fontawesome
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
      padding = {padding}
      fontSize={fontSize}
      buttonName={buttonName}
      fontawesome = {fontawesome}
    >
      <div className="btn">
        <button>
          {urlImg ? <img src={urlImg} alt="" /> : null}
          {fontawesome ? <i class={fontawesome}></i> : null}
          {buttonName ? <span>{buttonName}</span> :null}
        </button>
      </div>
    </StyledButton>
  );
};
