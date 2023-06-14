import logo from "../../assets/logo.png";
import login_img from "../../assets/login_img.jpg";
import login_gg from "../../assets/logo_gg.png";
import styled from "styled-components";
import { DefaultButton } from "../../component/Button";
import { NavLink } from "react-router-dom";
const StyledSignUpPage = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    max-width: 1900px;
    height: 100vh;
    background: gray;

    margin: 0 auto;
    padding-top: 50px;
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
  .form-sign-up {
    padding-left: 80px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input {
    width: 400px;
    height: 50px;
    border: none;
    border-bottom: 1px solid gray;
  }
  .header-sign-up {
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
`;
export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <div className="wrapper">
        <div className="form-content">
          <div className="form-left">
            <img src={logo} alt="" />
            <div className="form-sign-up">
              <h2 className="header-sign-up">Create an account</h2>
              <p>Let get started your shopping</p>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Password" />
              </div>
              <div>
                <input type="text" placeholder="Confirm Password" />
              </div>
              <div className="btn">
                <DefaultButton
                  width={"400px"}
                  height={"50px"}
                  buttonName={"Create Account"}
                  bgColor={"black"}
                  borderRadius={"20px"}
                  textColor={"White"}
                ></DefaultButton>
                <DefaultButton
                  width={"400px"}
                  height={"50px"}
                  buttonName={"Sign Up With Google"}
                  bgColor={"white"}
                  borderRadius={"20px"}
                  textColor={"black"}
                  urlImg={login_gg}
                ></DefaultButton>

                <p>
                  If you have an account &emsp;<NavLink>Login</NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="form-right">
            <img src={login_img} alt="" />
          </div>
        </div>
      </div>
    </StyledSignUpPage>
  );
};
