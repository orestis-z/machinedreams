import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";


export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.8;
  }
`;


function Header({hover}) {
    return (
        <div style={{height: 80,
            position: "fixed",
            top: 0,
            zIndex: 2,
            width: "100%",
            paddingLeft: 120,
            paddingRight: 120,
            paddingTop: 10,
            paddingBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
        <Link to="/" style={{
            textDecoration: 'none',
        }}>
            <div style={{
                backgroundColor: "black",
                color: "white",
                paddingRight: 10,
            }}>
                <p style={{
                    fontSize: 40,
                    fontFamily:"thin",
                }}>
                    Machine Dreams
                </p>
                <p style={{
                    paddingLeft: 1,
                    fontFamily:"light",
                    fontSize: 20,
                    // fontSize: 14,
                    }}>
                    by Orestis Zambounis
                </p>
            </div>
        </Link>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Hover>
                    <Link className="link" to="/utility">Utility</Link>
                </Hover>
                <Hover>
                    <Link className="link" to="/roadmap">Roadmap</Link>
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
                    <Link className="link" to="/about">Creator</Link>
                </Hover>
            <div>
                <Hover>
                    <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} color="white"/></a>
                </Hover>
                    <FontAwesomeIcon icon={faTwitter} size="xs"/>
                <Hover>
                    <a href="https://discord.com" target="_blank"><FontAwesomeIcon icon={faDiscord} color="white"/></a>
                </Hover>
                    <FontAwesomeIcon icon={faTwitter} size="xs"/>
                <Hover>
                    <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white"/></a>
                </Hover>
            </div>
        </div>
        </div>
    )
}

export default Header;
