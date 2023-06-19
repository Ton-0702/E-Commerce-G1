import styled from "styled-components";

export const StyledInput = styled.div`
  .input {
    /* text-align: center; */
  }
  input {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.bgColor};
    border-color: ${(props) => props.borderColor};
    border-radius: ${(props) => props.borderRadius};
    border-top: ${(props) => props.borderTop};
    border-left: ${(props) => props.borderLeft};
    border-right: ${(props) => props.borderRight};
    border-bottom: ${(props) => props.borderBottom};

    font-size: ${(props) => props.fontSize};

    padding-left: ${(props) => props.paddingLeft};
  }
`;

export const DefaultInput = ({
  width,
  height,
  textColor,
  bgColor,
  borderColor,
  borderRadius,
  borderNone,
  fontSize,
  inputType,
  placeHolder,
  borderTop,
  borderRight,
  borderLeft,
  borderBottom,
  paddingLeft,
}) => {
  return (
    <StyledInput
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderNone={borderNone}
      fontSize={fontSize}
      inputType={inputType}
      placeHolder={placeHolder}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      paddingLeft={paddingLeft}
    >
      <div className="input">
        <input
          type={inputType ? inputType : "text"}
          placeholder={placeHolder}
        />
      </div>
    </StyledInput>
  );
};
