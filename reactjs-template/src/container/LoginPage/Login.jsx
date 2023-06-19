import logo from "../../assets/logo.png";
import login_img from "../../assets/login_img.jpg";
import login_gg from "../../assets/logo_gg.png";
import styled from "styled-components";
import { DefaultButton } from "../../component/Button";
import { NavLink } from "react-router-dom";
import { DefaultInput } from "../../component/Input/Input";
const StyledLoginPage = styled.div`
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
  .form-sign-in {
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
  .header-sign-in {
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
  .sign-in-gg:hover {
    background-color: rgb(11, 116, 229);
    color: white;
    border: none;
  }
  a {
    text-decoration: none;
  }
  .forgotten-password {
    padding-left: 145px;
  }
`;

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="wrapper">
        <div className="form-content">
          <div className="form-left">
            <img src={logo} alt="" />
            <div className="form-sign-in">
              <h2 className="header-sign-in">Sign In</h2>
              <p>Let's get started your shopping</p>
              <div className="input">
                <DefaultInput
                  placeHolder="Email"
                  width={"400px"}
                  height={"50px"}
                  paddingLeft={"20px"}
                  borderRadius={"12px"}
                ></DefaultInput>
                <DefaultInput
                  placeHolder="Password"
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
                  buttonName={"Sign In"}
                  bgColor={"black"}
                  borderRadius={"20px"}
                  borderNone={"none"}
                  textColor={"White"}
                ></DefaultButton>
                <DefaultButton
                  width={"420px"}
                  height={"50px"}
                  buttonName={"Sign In With Google"}
                  bgColor={"white"}
                  borderRadius={"20px"}
                  textColor={"black"}
                  urlImg={login_gg}
                  className="sign-in-gg"
                ></DefaultButton>
                <div className="forgotten-password">
                  <NavLink to="/forgotten-password">Forgotten password?</NavLink>
                 
                </div>
                <p>
                  Don't have an account &emsp;<NavLink to="/">Sign Up</NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="form-right">
            <img src={login_img} alt="" />
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};
