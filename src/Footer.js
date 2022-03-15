import * as s from "./styles/globalStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";


export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.67;
  }
`;

function Header() {
    return (
        <s.Container
            flex={1}
            ai={"center"}
            jc={"center"}
            // fd="row"
            style={{ width: "100vw", paddingTop: 70, paddingBottom: 60, display: "inline-flex" }}
        >
            <div>
                <Hover>
                    <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} color="white" /></a>
                </Hover>
                <FontAwesomeIcon icon={faTwitter} size="xs" />
                <Hover>
                    <a href="https://discord.com" target="_blank"><FontAwesomeIcon icon={faDiscord} color="white" /></a>
                </Hover>
                <FontAwesomeIcon icon={faTwitter} size="xs" />
                <Hover>
                    <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" /></a>
                </Hover>
            </div>
            <p style={{ color: "white", lineHeight: "2em", fontFamily: "seriff", fontSize: 12, marginTop: 10 }}>
                © 2022 Orestis Zambounis. All rights reserved.
            </p>
        </s.Container>
    )
}

export default Header;
