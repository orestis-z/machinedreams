import * as s from "./styles/globalStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import Mailchimp from './Mailchimp'


export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.67;
  }
`;

export const SpacerL = styled.div`
  height: 8em;
`;

export const SpacerXS = styled.div`
  height: 2em;
`;

function Divider() {
    return (<div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "90vw", maxWidth: 1000 }} />)
}


function Header() {
    return (
        <div
            style={{width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <SpacerL />
            <Divider/>
            <SpacerXS />
            <s.Container
                flex={1}
                ai="center"
                jc="center"
                style={{ width: "100vw", paddingTop: 70, paddingBottom: 60, display: "inline-flex" }}
            >
                <div style={{marginBottom: 40}}>
                    <Hover>
                        <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} color="white" size="2xl"/></a>
                    </Hover>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <Hover>
                        <a href="https://discord.com" target="_blank"><FontAwesomeIcon icon={faDiscord} color="white" size="2xl"/></a>
                    </Hover>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                    <Hover>
                        <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" size="2xl"/></a>
                    </Hover>
                </div>
                <div style={{marginBottom: 30}}>
                    <p style={{color: 'white', fontStyle: "italic", marginBottom: 10}}>GET ON THE LIST</p>
                    <Mailchimp
                    action='https://orestisz.us14.list-manage.com/subscribe/post?u=22a8baef20ac23a6f90c2c5bb&amp;id=9e7761dac1'
                    fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                        }
                        ]}
                        messages = {
                            {
                            sending: "Sending...",
                            success: "Thank you for subscribing!",
                            error: "An unexpected error occurred.",
                            empty: "You must enter an e-mail address.",
                            duplicate: "Already subscribed",
                            button: "Subscribe"
                            }
                        }
                        className='mailchimp'
                    />
                </div>
                <Hover>
                    <HashLink to="/terms/#" className="link" style={{fontFamily: "seriff", lineHeight: "2em", fontSize: 12, marginTop: 10, paddingRight: 0}}>
                        Terms & Conditions
                    </HashLink>
                </Hover>
                <p style={{ color: "white", lineHeight: "2em", fontFamily: "seriff", fontSize: 12 }}>
                    © 2022 Orestis Zambounis. All rights reserved.
                </p>
            </s.Container>
        </div>
    )
}

export default Header;
