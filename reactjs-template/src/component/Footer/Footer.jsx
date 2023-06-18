import styled from "styled-components";
import { FooterList } from "./FooterList";
import Visa from "../../assets/Footer/visa.png";
import MasterCard from "../../assets/Footer/MasterCard.png"

const FooterStyled = styled.div`
    
`

const Footer = () => {
    return(
        <FooterStyled>
            <div className="container">
                <div className="footer-1">
                    <FooterList img={[Visa,MasterCard]}></FooterList>
                </div>
            </div>
        </FooterStyled>
    )
}

export { Footer }