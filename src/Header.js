import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import ReactGA from 'react-ga';



export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

function onLinkClick() {
    window.location.pathname != "/" && ReactGA.pageview("/");
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}


function Header() {
    const {width, height} = useWindowDimensions();
    const [showMenu, setMenu] = useState(false);
    document.body.style.overflow = showMenu ? 'hidden' : 'unset';
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
                maxWidth: 1000,
                width: "90%",
                paddingTop: 10,
                paddingBottom: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Hover>
                    <HashLink to="/#home"
                    onClick={onLinkClick}
                    style={{
                        textDecoration: 'none',
                    }}>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            paddingRight: 10,
                        }}>
                            <p style={{
                                fontSize: width < 500 ? 35 : 40,
                                fontFamily: "thin",
                            }}>
                                Machine Dreams
                            </p>
                            <p style={{
                                paddingLeft: 1,
                                fontFamily: "light",
                                fontSize: width < 500 ? 17.5 : 20,
                                // fontSize: 14,
                            }}>
                                by Orestis Zambounis
                            </p>
                        </div>
                    </HashLink>
                </Hover>
                {width > 800 ?<div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Hover>
                        <HashLink
                    onClick={onLinkClick}

                    className="link ml" to="/#community">Community</HashLink>
                    </Hover>
                    <Hover>
                        <HashLink
                    onClick={onLinkClick}
                    className="link ml" to="/#utility">Utility</HashLink>
                    </Hover>
                    <Hover>
                        <HashLink
                    onClick={onLinkClick}
                    className="link ml" to="/#roadmap">Roadmap</HashLink>
                    </Hover>
                    <Hover>
                        <HashLink
                    onClick={onLinkClick}
                    className="link ml" to="/#creator">Creator</HashLink>
                    </Hover>
                    {/* <Hover>
                        <HashLink className="link" to="#faqs">FAQs</HashLink>
                    </Hover> */}
                    {/* <Hover>
                        <Link className="link" to="/binary">Binary</Link>
                    </Hover>
                    <Hover>
                        <Link className="link" to="/fluid">Fluid</Link>
                    </Hover>
                    <Hover>
                        <Link className="link" to="/lucid">Lucid</Link>
                    </Hover> */}
                    {width > 900 ? <div>
                        <Hover className="ml">
                            <a href="https://twitter.com/machinedreamart" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} color="white" />
                            </a>
                        </Hover>
                        <FontAwesomeIcon icon={faTwitter} size="xs" />
                        <Hover>
                            <a href="https://discord.gg/kR63zCVT" target="_blank">
                                <FontAwesomeIcon icon={faDiscord} color="white" />
                            </a>
                        </Hover>
                        <FontAwesomeIcon icon={faTwitter} size="xs" />
                        <Hover>
                            <a href="https://instagram.com/machinedreamsart" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} color="white" />
                            </a>
                        </Hover>
                    </div> : null}
                </div> :
                <>
                    {<div
                        id="transition-menu"
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: "black",
                            position: "fixed",
                            top: `calc((${height}px - 100vh) / 2)`,
                            bottom: `calc((100vh - ${height}px) / 2)`,
                            left: 0,
                            right: 0,
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                        className={`menu ${showMenu ? 'menu-shown' : 'menu-hidden'}`}
                    >
                        <Hover
                            style={{
                                marginBottom: 40,
                                fontSize: 30,
                                fontFamily: "regular"
                            }}
                            onClick={() => setMenu(!showMenu)}
                        >
                            <HashLink
                    onClick={onLinkClick}
                    className="link" to="/#community">Community</HashLink>
                        </Hover>
                        <Hover
                            style={{
                                marginBottom: 40,
                                fontSize: 30,
                                fontFamily: "regular"
                            }}
                            onClick={() => setMenu(!showMenu)}
                        >
                            <HashLink
                    onClick={onLinkClick}
                    className="link" to="/#utility">Utility</HashLink>
                        </Hover>
                        <Hover
                            style={{
                                marginBottom: 40,
                                fontSize: 30,
                                fontFamily: "regular"
                            }}
                            onClick={() => setMenu(!showMenu)}
                        >
                            <HashLink
                    onClick={onLinkClick}
                    className="link" to="/#roadmap">Roadmap</HashLink>
                        </Hover>
                        <Hover
                            style={{
                                marginBottom: 70,
                                fontSize: 30,
                                fontFamily: "regular"
                            }}
                            onClick={() => setMenu(!showMenu)}
                        >
                            <HashLink
                    onClick={onLinkClick}
                    className="link" to="/#creator">Creator</HashLink>
                        </Hover>
                        <div>
                            <Hover>
                                <a href="https://twitter.com/machinedreamart" target="_blank"><FontAwesomeIcon icon={faTwitter} color="white" size="2xl" /></a>
                            </Hover>
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                            <Hover>
                                <a href="https://discord.gg/kR63zCVT" target="_blank"><FontAwesomeIcon icon={faDiscord} color="white" size="2xl" /></a>
                            </Hover>
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                            <Hover>
                                <a href="https://instagram.com/machinedreamsart" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} color="white" size="2xl" />
                                </a>
                            </Hover>
                        </div>
                        <Hover
                            style={{cursor: "pointer", marginTop: 70}}
                            onClick={() => setMenu(false)}
                        >
                            <i
                                className="fat fa-xmark"
                                style={{fontSize: 40, color: "white"}}
                            />
                        </Hover>
                    </div>}
                    <Hover
                        style={{cursor: "pointer"}}
                        onClick={() => setMenu(true)}
                    >
                        <i
                            className="fat fa-bars"
                            style={{fontSize: width < 500 ? 30 : 35, color: "white"}}
                        />
                    </Hover>
                </>}
            </div>
        </div>
    )
}

export default Header;
