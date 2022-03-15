import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';



export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.8;
  }
`;


function Header({ hover }) {
    return (
        <div style={{
            height: 80,
            position: "fixed",
            top: 0,
            zIndex: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: "100%",
                maxWidth: 1100,
                width: "80%",
                paddingTop: 10,
                paddingBottom: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Hover>
                    <HashLink to="/#home" style={{
                        textDecoration: 'none',
                    }}>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            paddingRight: 10,
                        }}>
                            <p style={{
                                fontSize: 40,
                                fontFamily: "thin",
                            }}>
                                Machine Dreams
                            </p>
                            <p style={{
                                paddingLeft: 1,
                                fontFamily: "light",
                                fontSize: 20,
                                // fontSize: 14,
                            }}>
                                by Orestis Zambounis
                            </p>
                        </div>
                    </HashLink>
                </Hover>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Hover>
                        <HashLink className="link" to="#utility">Utility</HashLink>
                    </Hover>
                    <Hover>
                        <HashLink className="link" to="#roadmap">Roadmap</HashLink>
                    </Hover>
                    <Hover>
                        <Link className="link" to="/binary">Binary</Link>
                    </Hover>
                    <Hover>
                        <Link className="link" to="/fluid">Fluid</Link>
                    </Hover>
                    <Hover>
                        <Link className="link" to="/lucid">Lucid</Link>
                    </Hover>
                    <Hover>
                        <HashLink className="link" to="#creator">Creator</HashLink>
                    </Hover>
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
                </div>
            </div>
        </div>
    )
}

export default Header;
