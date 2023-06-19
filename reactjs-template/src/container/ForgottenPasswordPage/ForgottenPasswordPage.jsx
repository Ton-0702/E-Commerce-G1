import logo from "../../assets/logo.png";
import login_img from "../../assets/login_img.jpg";
import login_gg from "../../assets/logo_gg.png";
import styled from "styled-components";
import { DefaultButton } from "../../component/Button";
import { NavLink } from "react-router-dom";
import { DefaultInput } from "../../component/Input/Input";
const StyledForgottenPasswordPage = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    max-width: 1900px;
    height: 100vh;
    /* height: 900px; */
    background: rgb(11, 116, 229);

    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .form-content {
    background-color: white;
    max-width: 1200px;
    height: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .form-left img {
    width: 30px;
    height: 30px;
  }
  .form-left {
    float: left;
    width: 50%;
  }
  .form-right {
    float: right;
    width: 50%;
  }
  .form-right img {
    width: 600px;
    height: 798px;
    border-radius: 25px;
  }
  .form-forgotten-password {
    padding-left: 80px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input {
    border: none;
    border-bottom: 1px solid gray;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .header-forgotten-password {
    font-size: 30px;
  }
  .btn {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .btn p {
    padding-left: 98px;
  }
  button:hover {
    background-color: rgb(11, 116, 229);
    color: white;
  }
  .forgotten-password-gg:hover {
    background-color: rgb(11, 116, 229);
    color: white;
    border: none;
  }
  a {
    text-decoration: none;
  }
  .forgotten-password {
    padding-left: 160px;
  }
`;

export const ForgottenPasswordPage = () => {
  return (
    <StyledForgottenPasswordPage>
      <div className="wrapper">
        <div className="form-content">
          <div className="form-left">
            <img src={logo} alt="" />
            <div className="form-forgotten-password">
              <h2 className="header-forgotten-password">Forgotten-Password</h2>
              <p>Enter your email address</p>
              <div className="input">
                <DefaultInput
                  placeHolder="Enter Your Email"
                  width={"400px"}
                  height={"50px"}
                  paddingLeft={"20px"}
                  borderRadius={"12px"}
                ></DefaultInput>
              </div>

              <div className="btn">
                <DefaultButton
                  width={"420px"}
                  height={"50px"}
                  buttonName={"Forgotten Password"}
                  bgColor={"black"}
                  borderRadius={"20px"}
                  borderNone={"none"}
                  textColor={"White"}
                ></DefaultButton>
              </div>
              <div className="forgotten-password">
                <NavLink to="/login">Return to Login</NavLink>
              </div>
            </div>
          </div>
          <div className="form-right">
            <img src={login_img} alt="" />
          </div>
        </div>
      </div>
    </StyledForgottenPasswordPage>
  );
};
