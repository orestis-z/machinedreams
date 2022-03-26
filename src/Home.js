import React, { useEffect, useState } from 'react';
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ReactPlayer from 'react-player/lazy'


export const StyledVid = styled.video`
  background-color: black;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  transition: width 0.5s;
`;

export const StyledImg = styled.img`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  transition: width 0.5s, opacity 0.2s;
  :hover {
    opacity: ${({ hover }) => (hover ? 0.7 : 1)};
  }
`;

const MAX_LOADING_TIME = 3;

export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: ${({ off }) => (off ? 1 : 0.67)};
  }
`;

export const HoverA = styled.a`
  transition:opacity 0.2s;
  :hover {
    opacity: ${({ off }) => (off ? 1 : 0.67)};
  }
`;

export const HoverLi = styled.li`
  transition:opacity 0.2s;
  :hover {
    opacity: 0.67;
  }
`;

export const SpacerL = styled.div`
  height: 8em;
`;

export const SpacerM = styled.div`
  height: 6em;
`;

export const SpacerS = styled.div`
  height: 4em;
`;

export const SpacerXS = styled.div`
  height: 2em;
`;

export const HL = styled.span`
//   text-decoration: underline;
//   font-style: italic;
  font-weight: bold;
`

const LINKS_OFF = true;

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

function Divider() {
    return (<div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "80vw", maxWidth: 1000 }} />)
}

const PUBLIC_ASSETS_URL = "https://machinedreamsart.s3.amazonaws.com/public"

function Home() {
    const [loading, setLoading] = useState(true);
    const {width} = useWindowDimensions();
    setTimeout(() => setLoading(false), MAX_LOADING_TIME * 1000);
    return (
        <>
            <div
            id="transition-loader"
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            className={`alert alert-success ${loading ? 'loader-shown' : 'loader-hidden'}`}
            onTransitionEnd={event => {
                const id = event.target.getAttribute("id");
                console.log(id)
                if (id == "transition-loader")
                    setLoading(false);
                // event.stopPropagation()
            }}
            >
                <div class="loader">Loading...</div>
            </div>
            <s.Screen id="home">
                <s.Container
                    flex={1}
                    // ai={"space-between"}
                    jc={"center"}
                    fd="row"
                >
                    {/* <StyledVid
                        autoPlay
                        loop
                        muted
                        src={`${PUBLIC_ASSETS_URL}/lucid/video-sr-4k.mp4`}
                        type="video/mp4"
                        borderRadius="0"
                        style={{
                            maxWidth: 1000,
                            height: "calc(100vh - 80px)",
                            marginTop: 80,
                            width: "80vw"
                        }}
                    /> */}
                    {/* <StyledImg
                        src="/config/videos/10000.png"
                        type="video/mp4"
                        borderRadius="0"
                        style={{
                            maxWidth: 1000,
                            height: "calc(100vh - 80px)",
                            marginTop: 80,
                            width: "80vw"
                        }}
                    /> */}
                    <ReactPlayer
                        url='https://vimeo.com/690681684'
                        playing
                        loop
                        muted
                        height="calc(100vh - 80px)"
                        width={width > 800 ? Math.min(0.8 * width, 1000) : width}
                        style={{
                            maxWidth: 1000,
                            marginTop: 80,
                            borderWidth: 2,
                            // borderStyle: "solid",
                            // borderColor: "white",
                        }}
                        onStart={() => setLoading(false)}
                    />
                </s.Container>
                <SpacerL />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        maxWidth: 1000,
                    }}>
                        <p style={{
                            fontSize: 70,
                            fontFamily: "thin",
                            color: "white",
                            textDecoration: "underline",
                            fontStyle: "italic",
                            textAlign: width > 1000 ? null : "initial"
                        }}
                            id="machinedreams"
                        >
                            Moving Artworks from a Machines Mind
                        </p>
                    </div>
                </s.Container>
                <SpacerS />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        maxWidth: 1000,
                    }}>
                        <p style={{
                            // fontSize: 70,
                            fontFamily: "hairline",
                            // paddingBottom: 50,
                            color: "white"
                        }}
                            id="machinedreams"
                        >
                            {/* Machine Dreams */}
                        </p>
                        <div style={{
                            flex: 1,
                            color: "white",
                            // hyphens: "auto",
                            textAlign: "justify",
                        }}
                        >
                            <p style={{ lineHeight: "2em", fontFamily: "seriff", fontSize: 17 }}>
                                MACHINE DREAMS is a series of <HL>three AI generated art collections</HL> placed on the <HL>Ethereum</HL> network.
                                <br />
                                The ERC-721 based <HL>NFT</HL> collections leverage the hyperspace of the machine's mind displaying never-ending movements of dream characters in <HL>60 fps</HL>.
                                <br />
                                The art pieces were generated by a <HL>GAN algorithm</HL> trained on publicly available art images. Using the transfer learning technique, the mind of the machine learned to hallucinate obscure dream characters never seen before. In a final step, an AI powered <HL>super-resolution algorithm</HL> was applied to obtain visuals in the <HL>7K ultra high definition format</HL>.
                                {/* Three collections compromise the series: */}
                                {/* <ul>
                                    <HoverLi>
                                        <Link to="/binary" style={{ textDecoration: "none", color: "white" }}>
                                            BINARY MACHINE DREAMS – the base collection consisting of 128 art pieces
                                        </Link>
                                    </HoverLi>
                                    <HoverLi>
                                        <Link to="/fluid" style={{ textDecoration: "none", color: "white" }}>
                                            FLUID MACHINE DREAMS – the secondary collection consisting of 8,128 art pieces
                                        </Link>
                                    </HoverLi>
                                    <HoverLi>
                                        <Link to="/lucid" style={{ textDecoration: "none", color: "white" }}>
                                            LUCID MACHINE DREAM – the final collection consisting of a single master piece
                                        </Link>
                                    </HoverLi>
                                </ul> */}
                                <div style={{ marginTop: 40, display: "flex", flexDirection: width > 1200 ? "row" : "column", justifyContent: "space-between", lineHeight: "1.3em" }}>
                                    <div>
                                        <Hover
                                        off={LINKS_OFF}
                                        style={{ display: "flex", flexDirection: "column", justiyContent: "center", alignItems: "center", textAlign: "center" }}>
                                            <Link to="/binary" style={{ textDecoration: "none", color: "white", display: "inline-block", pointerEvents: LINKS_OFF ? "none" : "auto", marginBottom: width > 1200 ? 0 : width > 800 ? 80 : 30, marginTop: width > 1200 ? 0 : width > 800 ? 80 : 30 }}>
                                                <div style={{ marginBottom: width > 1200 ? 14 : width > 800 ? 35 : 10 }}>
                                                    <StyledImg
                                                        src={`${PUBLIC_ASSETS_URL}/binary/small/0.gif`}
                                                        borderRadius="0"
                                                        style={{
                                                            marginRight: width > 1200 ? 27 : width > 800 ? 50 : 20,
                                                            width: width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : "calc((80vw - 20px) / 2)"
                                                        }}
                                                    />
                                                    <StyledImg
                                                                                                                src={`${PUBLIC_ASSETS_URL}/binary/small/1.gif`}
                                                        borderRadius="0"
                                                        style={{
                                                            width: width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : "calc((80vw - 20px) / 2)"
                                                        }}
                                                    />
                                                </div>
                                                BINARY MACHINE DREAMS
                                                <br />
                                                <span style={{ fontSize: 13 }}>128 pieces</span>
                                                {/* –
                                            <br /> */}
                                                {/* base collection
                                            <br /> */}
                                                {/* 96 art pieces */}
                                            </Link>
                                        </Hover>
                                    </div>
                                    <div>
                                        <Hover
                                        off={LINKS_OFF}
                                        style={{ display: "flex", flexDirection: "column", justiyContent: "center", alignItems: "center", textAlign: "center" }}>
                                            <Link
                                                to="/fluid"
                                                style={{ textDecoration: "none", color: "white", display: "inline-block", pointerEvents: LINKS_OFF ? "none" : "auto", marginBottom: width > 1200 ? 0 : width > 800 ? 80 : 30, marginTop: width > 1200 ? 0 : width > 800 ? 80 : 30 }}
                                            >
                                                <div style={{ marginBottom: width > 1200 ? 14 : width > 800 ? 35 : 10 }}>
                                                    <StyledImg
                                                        src={`${PUBLIC_ASSETS_URL}/fluid/small/509.gif`}
                                                        borderRadius="0"
                                                        style={{
                                                            marginRight: width > 1200 ? 27 : width > 800 ? 50 : 20,
                                                            width: width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : "calc((80vw - 20px) / 2)"
                                                        }}
                                                    />
                                                    <StyledImg
                                                        src={`${PUBLIC_ASSETS_URL}/fluid/small/391.gif`}
                                                        style={{
                                                            width: width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : "calc((80vw - 20px) / 2)"
                                                        }}
                                                        borderRadius="0"
                                                    />
                                                </div>
                                                FLUID MACHINE DREAMS
                                                <br />
                                                <span style={{ fontSize: 13 }}>8,128 pieces</span>
                                                {/* –
                                            <br /> */}
                                                {/* secondary collection
                                            <br /> */}
                                            </Link>
                                            {/* 8'96 art pieces */}
                                        </Hover>
                                    </div>
                                    <div>
                                        <Hover
                                        off={LINKS_OFF}
                                        style={{ display: "flex", flexDirection: "column", justiyContent: "center", alignItems: "center", textAlign: "center" }}>
                                            <Link to="/lucid" style={{ textDecoration: "none", color: "white", display: "inline-block", pointerEvents: LINKS_OFF ? "none" : "auto"}}>
                                                <div style={{ marginBottom: width > 1200 ? 14 : width > 800 ? 35 : 10 }}>
                                                    {/* <StyledImg src={`/config/images/small.gif`} width={96 / 9 * 16} borderRadius="0" /> */}
                                                    <ReactPlayer
                                                        url='https://vimeo.com/690681684'
                                                        playing
                                                        loop
                                                        muted
                                                        height={width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : ((0.8 * width - 20) / 2)}
                                                        width={(width > 1200 ? 135 : width > 800 ? 256 : width > 600 ? 192 : ((0.8 * width - 20) / 2)) / 9 * 16}
                                                    />
                                                </div>
                                                LUCID MACHINE DREAM
                                                <br />
                                                {/* –
                                            <br /> */}
                                                {/* final collection
                                            <br /> */}
                                                <span style={{ fontSize: 13 }}>one piece</span>
                                            </Link>
                                        </Hover>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </s.Container>
                <SpacerL id="community"/>
                <s.Container
                    flex={1}
                    jc={"center"}
                    ai={"center"}
                    width="100%"

                >
                    <div  style={{
                        width: "80%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: width > 1000 ? "row" : "column",
                        maxWidth: 1000,
                        padding: 35,
                        border: "4px solid white",
                        maxWidth: 1000
                    }}>

                        <div style={{ lineHeight: "1.2em", fontFamily: "seriff", fontSize: 40, color: "white", marginRight: 20, fontFamily: "thin" }}>
                            <p style={{
                                textAlign: "center",
                                width: width > 1000 ? 180 : null,
                                fontFamily: "light",
                                fontStyle: "italic",
                                textDecoration: "underline",
                                marginBottom: width > 1000 ? 0 : 20,
                            }}>
                                GET ON THE LIST
                            </p>
                        </div>
                        <div style={{
                            lineHeight: "2em",
                            fontFamily: "seriff",
                            fontSize: 17,
                            color: "white",
                            marginRight: width > 1000 ? 55 : 0,
                            textAlign: width > 1000 ? "justify" : "center",
                            marginBottom: width > 1000 ? 0 : 20,
                        }}>
                            <p>
                                The machine dream community just started out and is growing at a fast pace. Join our <Hover ><a target="_blank" href="https://discord.com" style={{ textDecoration: "none", color: "white" }}><HL>Discord server</HL></a></Hover> now to get on the <HL>early whitelist</HL>. The minting date is going to be decided.
                            </p>
                        </div>
                            <Hover >
                            <a target="_blank" href="https://discord.com" style={{ textDecoration: "none", color: "black" }}>
                        <div
                            style={{
                                lineHeight: "1.2em",
                                fontFamily: "seriff",
                                fontSize: 40,
                                backgroundColor: "white",
                                padding: 20,
                                fontFamily: "thin",
                                display: "flex",
                            }}>
                                <p style={{backgroundColor: "transparent", textAlign: "center", width: width > 1000 ? 180 : null}}>
                                    JOIN DISCORD
                                </p>
                        </div>
                                </a>
                            </Hover>
                    </div>
                </s.Container>
                <SpacerL id="utility" />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        maxWidth: 1000,
                    }}

                    >
                        <p style={{
                            fontSize: 70,
                            fontFamily: "hairline",
                            paddingBottom: 50,
                            color: "white"
                        }}
                        >
                            Utility
                        </p>
                        <div style={{
                            flex: 1,
                            color: "white",
                            // hyphens: "auto",
                            textAlign: "justify"
                        }}
                        >
                            <div style={{ lineHeight: "2em", fontFamily: "seriff", fontSize: 17 }}>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <div>
                                        <p>

                                                MACHINE DREAMS brings two NFT worlds together that are typically kept apart: art projects and utility based NFT collections backed by collaborative communities.
                                                <br/>
                                                The project's smart contract is designed to <HL>reward the early believers</HL> of the project. Holders of art pieces from the first collection will be able to mint parts of the second collection for <HL>free</HL>. Lastly, <HL>60% of the profits</HL> of the final masterpiece will be <HL>distributed to the holders</HL> of the first two collections.
                                        </p>
                                        <p style={{
                                            fontSize: 60,
                                            fontFamily: "thin",
                                            color: "white",
                                            textDecoration: "underline",
                                            fontStyle: "italic",
                                            marginTop: 45,
                                            marginBottom: 45,
                                            lineHeight: 1,
                                            textAlign: width > 1000 ? null : "initial"
                                        }}
                                        >
                                            Merge Two Tokens and Create a New One
                                        </p>
                                        <p>
                                                You can combine two <Hover off={LINKS_OFF}><Link to="/binary" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>BINARY MACHINE DREAM</Link></Hover> tokens and unlock the interpolated <Hover off={LINKS_OFF}><Link to="/lucid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>LUCID MACHINE DREAM</Link></Hover> token at no additional cost:
                                        </p>

                                    </div>

                                    {width > 620 ?
                                        <div style={{display: "flex", alignItems: "center", marginBottom: 40, marginTop: 18}}>
                                            <div style={{display: "flex", flexDirection: "column", marginRight: 30, alignItems: "center"}}>
                                                    <p style={{color: "transparent", userSelect: "none"}}>BINARY</p>
                                                <StyledImg
                                                    src={`${PUBLIC_ASSETS_URL}/binary/small/5.gif`}
                                                    borderRadius="0"
                                                    style={{
                                                        marginBottom: 10,
                                                        width: 150,
                                                    }}
                                                />
                                                <StyledImg
                                                    src={`${PUBLIC_ASSETS_URL}/binary/small/43.gif`}
                                                     borderRadius="0"
                                                     style={{
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                        width: 150,
                                                    }} />
                                                    <p>BINARY pair</p>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: 30}}>
                                            <StyledImg
                                                src={`/config/images/arrow-right.svg`}
                                                borderRadius="0"
                                                style={{ width: 30 }}
                                            />
                                            {/* <p style={{fontStyle: "italic", fontSize: 13}}>merge</p> */}
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                            <p style={{color: "transparent", userSelect: "none"}}>FLUID</p>
                                            <StyledImg
                                                src={`/config/images/favpairs/662.gif`}
                                                borderRadius="0"
                                                style={{ marginBottom: 10, width: 256 }}
                                            />
                                            {/* <StyledImg src={`${PUBLIC_ASSETS_URL}/fluid/small/662.gif`} width={256} height={256} borderRadius="0" style={{ marginBottom: 10 }} /> */}
                                             <p>FLUID result</p>
                                        </div>
                                    </div>
                                    :
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        marginBottom: 40,
                                        marginTop: 40
                                    }}>
                                            <p>BINARY pair</p>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginTop: 5,
                                            }}>
                                                <StyledImg
                                                    src={`${PUBLIC_ASSETS_URL}/binary/small/5.gif`}
                                                    borderRadius="0"
                                                    style={{
                                                        marginRight: 10,
                                                        width: "calc((80vw - 20px) / 2)",
                                                    }}
                                                />
                                                <StyledImg
                                                    src={`${PUBLIC_ASSETS_URL}/binary/small/43.gif`}
                                                     borderRadius="0"
                                                     style={{
                                                        marginLeft: 10,
                                                        width: "calc((80vw - 20px) / 2)",
                                                    }} />
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            marginBottom: 15,
                                            marginTop: 15,
                                        }}>
                                            <StyledImg
                                                src={`/config/images/arrow-right.svg`}
                                                borderRadius="0"
                                                style={{
                                                    width: 30,
                                                    transform: "rotate(90deg)"
                                                }}
                                            />
                                            {/* <p style={{fontStyle: "italic", fontSize: 13}}>merge</p> */}
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"
                                        }}>
                                            <StyledImg
                                                src={`/config/images/favpairs/662.gif`}
                                                borderRadius="0"
                                                style={{
                                                    marginBottom: 10,
                                                    width: "calc(min(80vw - 20px), 256px)",
                                                }}
                                            />
                                            {/* <StyledImg src={`${PUBLIC_ASSETS_URL}/fluid/small/662.gif`} width={256} height={256} borderRadius="0" style={{ marginBottom: 10 }} /> */}
                                             <p>FLUID result</p>
                                        </div>
                                    </div>
                                    }
                                    <div>
                                        <p>
                                        The BINARY holders will be able to merge their tokens and mint the resulting FLUID tokens for <HL>free</HL>*. The public FLUID mint will then follow at <HL>0.08 ETH</HL> per NFT.
                                        <br/>
                                        The mint price for the BINARY tokens will be <HL>0.16 ETH</HL>. This means that if you own 5 BINARY tokens you can mint 10 FLUID tokens for free and equalize the public mint price.
                                        <br/>
                                        <p style={{fontStyle: "italic", fontSize: 13, lineHeight: "1.6em", marginTop: 5}}>*The amount of freely mintable FLUID tokens as a function of BINARY tokens owned can be calculated using the formula n(n-1)/2.
                                        This means that for 2 BINARY tokens owned you can mint 1 FLUID token for free, with 3 3, with 4 6, with 5 10, with 6 15, etc. This functionality will be enforced in the FLUID smart contract. Please note that gas fees will occur during the free mint.
                                        </p>
                                        </p>
                                    </div>

                                <div>
                                    <p style={{
                                        fontSize: 60,
                                        fontFamily: "thin",
                                        color: "white",
                                        textDecoration: "underline",
                                        fontStyle: "italic",
                                        lineHeight: 1,
                                        marginTop: 45,
                                        marginBottom: 45,
                                        textAlign: width > 1000 ? null : "initial"
                                    }}
                                    >
                                        Invest in a Master Piece
                                    </p>
                                        <p>
                                            <HL>60% of the sale</HL> of the master piece <HoverA off={LINKS_OFF}><Link to="/lucid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>LUCID MACHINE DREAM</Link></HoverA> will go to the <HL>community</HL>: 30% of the profits will be transfered to <HoverA off={LINKS_OFF}><Link to="/binary" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>BINARY</Link></HoverA> holders and 30% to <HoverA off={LINKS_OFF}><Link to="/fluid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>FLUID</Link></HoverA> holders*:
                                        </p>

                                </div>
                                <div>
                                    <ReactPlayer
                                                        url='https://vimeo.com/690681684'
                                                        playing
                                                        loop
                                                        muted
                                                        height={(width > 500 ? 500 : width)/16*9}
                                                        width={width > 500 ? 500 : width}
                                                        style={{marginTop: 40, marginBottom: 20}}
                                                        />
                                                        <div style={{
                                                            display: "flex",
                                                            justifyContent: "space-between"
                                                        }}>
                                                            <div style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                flexDirection: "column",
                                                                marginBottom: 40,
                                                                marginLeft: width > 625 ? 0 : width > 500 ? "5vw" : "10vw"
                                                            }}>
                                                                <div>
                                                                    {/* <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 12}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 12}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 12}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 12}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 12}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl"/> */}
                                                                    {/* <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> */}
                                                                    {width > 400 ? <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> : null}
                                                                    {width > 350 ? <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> : null}
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    {/* <i class="fat fa-user" style={{fontSize: 19}}/> */}
                                                                    {/* <StyledImg src="/config/images/asexual.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/asexual.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/asexual.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/asexual.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/asexual.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/asexual.svg" style={{ width: 15  }}/> */}
                                                                </div>
                                                                <p>{width > 500 ? "30% to BINARY holders" : "30% BINARY"}</p>
                                                            </div>
                                                            <div style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                flexDirection: "column",
                                                                marginRight: width > 625 ? 0 : width > 500 ? "5vw" : "10vw"
                                                            }}>
                                                                <div>
                                                                    {/* <StyledImg src="/config/images/oberon.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/oberon.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/oberon.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/oberon.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/oberon.svg" style={{marginRight: 20, width: 15  }}/>
                                                                    <StyledImg src="/config/images/oberon.svg" style={{ width: 15  }}/> */}
                                                                    {/* <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 10}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 10}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 10}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 10}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" style={{marginRight: 10}}/>
                                                                    <FontAwesomeIcon icon={faUser} color="white" size="xl" /> */}
                                                                    {/* <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> */}
                                                                    {/* <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> */}
                                                                    {width > 400 ? <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> : null }
                                                                    {width > 350 ?<i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/> : null}
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19, marginRight: 10}}/>
                                                                    <i class="fat fa-user" style={{fontSize: 19}}/>
                                                                </div>
                                                                <p>{width > 500 ? "30% to FLUID holders" : "30% FLUID"}</p>
                                                            </div>
                                                        </div>
                                            {/* <StyledImg src="/config/images/utility2.gif" width={450} borderRadius="0" style={{ marginRight: 26 }} /> */}
                                </div>
                                <div>
                                <p style={{fontStyle: "italic", fontSize: 13, lineHeight: "1.6em", marginTop: 5}}>
                                    *The distribution will be proportional to the holdings. This means that for each BINARY token that you own you will receive 1/128 of 30% of the LUCID profits and for each FLUID token that you own you will receive 1/8,128 of 30% of the LUCID profits. This distribution will be enforced in the LUCID smart contract.
                                        </p>
                                        <br/>
                                        <p>
                                            Lastly, all MACHINE DREAM holders will be compensated in a fair manner from future sales in both physical art exhibitions and virtual galleries in the Metaverse.
                                        </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </s.Container>
                <SpacerL id="roadmap" />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        maxWidth: 1000,
                    }}>
                    <p style={{
                        fontSize: 70,
                        fontFamily: "hairline",
                        color: "white",
                        paddingBottom: 50,
                    }}>
                        Roadmap
                    </p>
                        <div style={{
                            display: "flex",
                            flexDirection: width > 1000 ? "row" : "column",
                            alignItems: "center",
                        }}>

                            <div style={{
                                flex: 1,
                                color: "white",
                                // hyphens: "auto",
                                // textAlign: "justify"
                            }}
                            >
                                <div style={{ lineHeight: "2em", fontFamily: "seriff", fontSize: 17 }}>
                                    <ul style={{
                                        listStyle: width > 1000 ? "none" : null,
                                        marginLeft: width > 1000 ? 0 : "1em",
                                    }}>
                                        <li style={{ paddingBottom: 10, textDecoration: "line-through" }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>10%</span> Creation of the AI generated art collections MVP
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>20%</span> OGs and community build-up
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>30%</span> Community feedback and art finalization
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>40%</span> NFT ERC-721 smart contracts creation
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>50%</span> <HoverA off={LINKS_OFF}><Link to="/binary" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>BINARY MACHINE DREAMS</Link></HoverA> mint
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>60%</span>  <HoverA off={LINKS_OFF}><Link to="/fluid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>FLUID MACHINE DREAMS</Link></HoverA> private mint for <HoverA><Link to="/binary" style={{ textDecoration: "none", color: "white" }}>BINARY</Link></HoverA> holders
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>70%</span> <HoverA off={LINKS_OFF}><Link to="/fluid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>FLUID MACHINE DREAMS</Link></HoverA> public mint
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>80%</span> Hosting of MACHINE DREAMS exhibitions in the Metaverse
                                        </li>
                                        <li>
                                            <span style={{ fontFamily: "regular", fontStyle: "italic", fontSize: 23, width: width > 1000 ? 90 : "none", display: width > 1000 ? "inline-block" : "none" }}>100%</span> <HoverA off={LINKS_OFF}><Link to="/lucid" style={{ textDecoration: "none", color: "white", pointerEvents: LINKS_OFF ? "none" : "auto" }}>LUCID MACHINE DREAM</Link></HoverA> public auction
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                // flex: 1,
                                color: "white",
                                fontSize: 20, fontFamily: "seriff",
                                marginTop: width > 1000 ? 0 : 60,
                                // hyphens: "auto",
                                // textAlign: "justify"
                            }}
                            >
                                <p style={{ padding: 20, border: "4px solid white", }}>
                                BINARY mint
                                </p>
                                <div style={{paddingTop: 10}}>
                                <StyledImg
                                    src={`/config/images/arrow-right.svg`}
                                    width={23}
                                    borderRadius="0"
                                    style={{
                                        transform: 'rotate(90deg)',
                                        width: 23,
                                    }}
                                />
                                </div>
                                <p
                                    style={{
                                        padding: 20,
                                        border: "4px solid white",
                                    }}
                                >
                                FLUID mint
                                </p>
                                <div
                                    style={{paddingTop: 10}}
                                >
                                <StyledImg
                                    src={`/config/images/arrow-right.svg`}
                                    borderRadius="0"
                                    style={{
                                        transform: 'rotate(90deg)',
                                        width: 23,
                                    }}
                                />
                                </div>
                                <p style={{ padding: 20, border: "4px solid white", }}>
                                LUCID public auction
                                </p>
                            </div>
                        </div>
                    </div>
                </s.Container >
                <SpacerL id="creator" />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        maxWidth: 1000,
                    }}>
                        <div style={{
                            flexDirection: "column",
                        }}>
                            <p style={{
                                fontSize: 70,
                                fontFamily: "hairline",
                                color: "white",
                                paddingBottom: 50,
                            }}>
                                Creator
                            </p>
                            <div style={{
                                display: "flex",
                                alignItems: width > 1000 ? "flex-start" : "center",
                                color: "white",
                                lineHeight: "2em",
                                fontFamily: "seriff",
                                fontSize: 17,
                                flexDirection: width > 1000 ? "row" : "column"
                            }}
                            >
                                <div style={{ marginRight: width > 1000 ? 50 : 0, textAlign: "justify" }}>
                                    <p>
                                        Orestis Zambounis (b. 1991, Basel, Switzerland) is a robotics & AI engineer, and innovator in the visual aesthetics of machine intelligence. He currently resides in Barcelona, Spain, where he works for <HoverA><a href="https://www.seervision.com/" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>Seervision</a></HoverA>, a Swiss startup that creates innovative camera automation software to make live video production effortless.
                                    </p>
                                    <p>
                                        Orestis minted his first NFT collection <HoverA><a href="https://www.anticryptopunks.com/" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>Anti CryptoPunks</a></HoverA> in December 2021 trading over 5 ETH in the first 3 months. Previously, he helped building a machine learning platform to reduce health inequalities in a nonprofit funded by the <HoverA href="https://www.gatesfoundation.org/" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>Bill & Melinda Gates Foundation</HoverA>.
                                    During his Masters, Orestis focused on deep learning and computer vision for robotics, and part of his research was conducted at the <HoverA><a href="https://www.imperial.ac.uk/" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>Imperial College London</a></HoverA>. Before that, he graduated from <HoverA><a href="https://ethz.ch/en.html" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>ETH Zurich</a></HoverA> with a BSc in Mechanical Engineering, performing among the top 5% of his cohort. Upon graduation, he spent a year in Japan, programming drones for <HoverA><a href="https://www.rapyuta-robotics.com/" target="_blank" style={{ textDecoration: "none", color: "white", fontStyle: "italic" }}>Rapyuta Robotics</a></HoverA>, the front runner for cloud robotics.
                                    </p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                    <StyledImg
                                        src={`/config/images/bw.jpeg`}
                                        borderRadius="0"
                                        style={{
                                            marginTop: 10,
                                            width: 225,
                                        }}
                                    />
                                    <div style={{ marginTop: 18 }}>
                                        <Hover>
                                            <a href="mailto:me@orestisz.com" target="_blank"><FontAwesomeIcon icon={faAt} color="white" /></a>
                                        </Hover>
                                        <FontAwesomeIcon icon={faAt} size="xl" color="transparent" />
                                        <Hover>
                                            <a href="https://orestisz.com" target="_blank"><FontAwesomeIcon icon={faHouse} color="white" /></a>
                                        </Hover>
                                        <FontAwesomeIcon icon={faAt} size="xl" color="transparent" />
                                        <Hover>
                                            <a href="http://linkedin.com/in/orestis-z" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
                                        </Hover>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </s.Container >
                <SpacerS/>
                <s.Container
                flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        maxWidth: 1000,
                    }}>
                        {/* <p style={{ color: "white", paddingRight: 30}}>
                                    Become part of our community on Discord now!
                                </p> */}
                                <p style={{
                                        fontSize: 60,
                                        fontFamily: "thin",
                                        color: "white",
                                        textDecoration: "underline",
                                        fontStyle: "italic",
                                        lineHeight: 1,
                                        marginTop: 45,
                                        marginBottom: 45,
                                        textAlign: "center"
                                    }}
                                    >
                                        Enter the Community
                                    </p>
                <Hover >
                            <a target="_blank" href="https://discord.com" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ lineHeight: "1.2em", fontSize: 40, backgroundColor: "white", padding: 20, paddingLeft: 35, paddingRight: 35, fontFamily: "thin", display: "flex" }}>
                                <p style={{backgroundColor: "transparent", textAlign: "center"}}>
                                    JOIN DISCORD NOW
                                </p>
                        </div>
                                </a>
                            </Hover>
                    </div>
                </s.Container>
                {/* <SpacerM />
                <Divider/>
                <SpacerM />
                <s.Container
                    flex={1}
                    ai="center"
                    jc="center"
                    fd="column"
                    width="100%"
                >
                    <div style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        maxWidth: 1000,
                    }}>
                        <div>
                            <Hover>
                                <Link to="/binary" style={{ textDecoration: "none", color: "white", display: "inline-block" }}>

                                <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}><p style={{ fontFamily: "thin", fontSize: 30, marginBottom: 20 }}>
                                        Binary Machine Dreams
                                    </p>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    >
                                        <StyledImg src={`${PUBLIC_ASSETS_URL}/binary/small/0.gif`} width={130} borderRadius="0" style={{ marginRight: 26 }} />
                                        <StyledImg src={`${PUBLIC_ASSETS_URL}/binary/small/1.gif`} width={130} borderRadius="0"
                                        style={{ marginRight: 20 }}
                                        />
                                        <StyledImg src={`/config/images/arrow-right.svg`} width={20} borderRadius="0" hover />
                                    </div>
                                    </div>
                                </Link>
                            </Hover>
                        </div>
                        <div>
                            <Hover>
                                <Link to="/fluid" style={{ textDecoration: "none", color: "white", display: "inline-block" }}>
                                <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}><p style={{ fontFamily: "thin", fontSize: 30, marginBottom: 20 }}>
                                        Fluid Machine Dreams
                                    </p>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        // width: "calc(50vw - 90px)",
                                    }}
                                    >
                                        <StyledImg src={`${PUBLIC_ASSETS_URL}/fluid/small/509.gif`} width={130} borderRadius="0" style={{ marginRight: 26 }} />
                                        <StyledImg src={`${PUBLIC_ASSETS_URL}/fluid/small/391.gif`} width={130} borderRadius="0"
                                        style={{ marginRight: 20 }}
                                        />
                                        <StyledImg src={`/config/images/arrow-right.svg`} width={20} borderRadius="0" hover />
                                    </div>
                                    </div>
                                </Link>
                            </Hover>
                        </div>
                        <div>
                            <Hover>
                                <Link to="/fluid" style={{ textDecoration: "none", color: "white", display: "inline-block" }}>
                                <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}><p style={{ fontFamily: "thin", fontSize: 30, marginBottom: 20 }}>
                                        Lucid Machine Dream
                                    </p>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        // width: "calc(50vw - 90px)",
                                    }}
                                    >
                                        <ReactPlayer
                                                        url='https://vimeo.com/690681684'
                                                        playing
                                                        loop
                                                        muted
                                                        height={130}
                                                        width={130 / 9 * 16}
                                                        style={{marginRight: 20}}
                                                    />
                                        <StyledImg src={`/config/images/arrow-right.svg`} width={20} borderRadius="0" hover />
                                    </div>
                                    </div>
                                </Link>
                            </Hover>
                        </div>
                    </div>
                </s.Container > */}
                {/* <SpacerM /> */}
            </s.Screen >
        </>
    );
}

export default Home;
