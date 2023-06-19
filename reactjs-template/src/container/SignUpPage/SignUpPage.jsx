import logo from "../../assets/logo.png";
import login_img from "../../assets/login_img.jpg";
import login_gg from "../../assets/logo_gg.png";
import styled from "styled-components";
import { DefaultButton } from "../../component/Button";
import { NavLink } from "react-router-dom";
import { DefaultInput } from "../../component/Input/Input";
const StyledSignUpPage = styled.div`
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
  .form-sign-up {
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
  button:hover {
    background-color: rgb(11, 116, 229);
    color: white;
  }
  .sign-up-gg:hover {
    background-color: rgb(11, 116, 229);
    color: white;
    border: none;
  }
  a {
    text-decoration: none;
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
              <form
                action="#"
                id="form_info"
                className="form_info"
                name="form_info"
                onSubmit={checkForm}
              >
                <h2 className="header-sign-up">Create an account</h2>
                <p>Let's create an account and start your shopping</p>
                <div className="input">
                  <DefaultInput
                    placeHolder="Name"
                    width={"400px"}
                    height={"50px"}
                    paddingLeft={"20px"}
                    borderRadius={"12px"}
                    name="name"
                    id="name"
                  ></DefaultInput>
                  <DefaultInput
                    placeHolder="Email"
                    width={"400px"}
                    height={"50px"}
                    paddingLeft={"20px"}
                    borderRadius={"12px"}
                    name="email"
                    id="email"
                  ></DefaultInput>
                  <DefaultInput
                    placeHolder="Password"
                    width={"400px"}
                    height={"50px"}
                    paddingLeft={"20px"}
                    borderRadius={"12px"}
                    name="password"
                    id="password"
                  ></DefaultInput>
                  <DefaultInput
                    placeHolder="Confirm Password"
                    width={"400px"}
                    height={"50px"}
                    paddingLeft={"20px"}
                    borderRadius={"12px"}
                    name="confirm-password"
                    id="confirm-password"
                  ></DefaultInput>
                </div>

                <div className="btn">
                  <DefaultButton
                    width={"420px"}
                    height={"50px"}
                    buttonName={"Create Account"}
                    bgColor={"black"}
                    borderRadius={"20px"}
                    borderNone={"none"}
                    textColor={"White"}
                    type="submit"
                    value="Save"
                  ></DefaultButton>
                  <DefaultButton
                    width={"420px"}
                    height={"50px"}
                    buttonName={"Sign Up With Google"}
                    bgColor={"white"}
                    borderRadius={"20px"}
                    textColor={"black"}
                    urlImg={login_gg}
                    className="sign-up-gg"
                    onclick={clearForm}
                  ></DefaultButton>

                  <p>
                    If you have an account &emsp;
                    <NavLink to="/login">Login</NavLink>
                  </p>
                </div>
              </form>
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

function checkForm() {
  var id_name = document.getElementById("name");

  var id_Email = document.getElementById("email");
  var id_Password = document.getElementById("password");
  var id_Confirm_Password = document.getElementById("confirm-password");
  if (id_name.value == null) {
    id_name.classList.add("alert-input");
  }

  if (id_Email.value == null) {
    id_Email.classList.add("alert-input");
  }
  if (id_Password.value == null) {
    id_Password.classList.add("alert-input");
  }
  if (id_Confirm_Password.value == null) {
    id_Confirm_Password.classList.add("alert-input");
  }
}
function clearForm() {
  document.getElementById("form_info").reset();
}
