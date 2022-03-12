import React from "react";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link } from "react-router-dom";


export const StyledVid = styled.video`
  background-color: black;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  margin-left: calc((((100vh - 80px) / 9 * 16) - 200vh + 160px) / 2);
  transition: width 0.5s;
`;

export const StyledVidContainer = styled.div`
    width: calc((100vh - 80px)/ 9 * 16);
    overflow:hidden;
    display:block;
`

export const StyledImg = styled.img`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  width: ${({ width }) => (width ? width : 200)}px;
  @media (min-width: 900px) {
    width: ${({ width }) => ((width ? width : 200) * 1.25)}px;
  }
  @media (min-width: 1000px) {
    width: ${({ width }) => ((width ? width : 200) * 1.5)}px;
  }
  transition: width 0.5s, opacity 0.2s;
  :hover {
    opacity: ${({ hover }) => (hover ? 0.7 : 1)};
  }
`;

function VideoPlayer() {
  return (
    <s.Screen>
      <s.Container
        flex={1}
        // ai={"space-between"}
        jc={"center"}
        fd="row"
      >
          <StyledVidContainer>
        <StyledVid
            autoPlay
            loop
            muted
            src="/config/videos/video128-slow2.mp4"
            type="video/mp4"
            borderRadius="0"
            style={{
            }}
        />

          </StyledVidContainer>
      </s.Container>
      <div style={{
                // display: "flex",
                color: "white",
                padding: 120,
                // width: "calc(100vw -120px)",
                // backgroundColor: "red"
            }}>
                <p style={{
                    fontSize: 70,
                    fontFamily:"hairline",
                    paddingBottom: 50,
                }}>
                    Machine Dreams
                </p>
                <s.Container
        flex={1}
        // ai={"space-between"}
        jc={"center"}
        fd="row"
      >

                <div style={{
                     flex: 1,
                     color: "white",
                     hyphens: "auto",
	textAlign: "justify"
                    }}
                    >

                    <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    MACHINE DREAMS is a series of three AI generated art collections placed on the Ethereum Network using the ERC-721 token standard:
                    <ul>
                    <li>
                            Binary Machine Dreams – the base collection consisting of 128 pieces
                        </li>
                        <li>
                            Fluid Machine Dreams – the secondary collection consisting of 8'128 pieces
                        </li>
                        <li>
                            Lucid Machine Dream – the third collection consisting of one master piece
                        </li>
                    </ul>
                    </p>
                </div>
                        <div style={{
                     flexDirection: "columnn",
                     flexShrink: 1,
                     paddingLeft: 60,
                    //  backgroundColor: "green",
                    }}
                    >
                 {/* <p style={{
                     fontSize: 30,
                    fontFamily:"thin",
                    // paddingTop: 60,
                }}>

                    Specifications
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
Dimensions: 4096 x 4096
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Length: 256 seconds
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Color depth: 256 per channel
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Codec: h.264
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
Frame rate: 30 fps
            </p> */}
                 <p style={{
                     fontSize: 30,
                    fontFamily:"thin",
                    // paddingTop: 60,
                }}>

                    Thanks To
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
                Dmitriy Vecheruk
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Zisimos Charmpalis
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Marie Zedler
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Antonio Civiletti
            </p>
        </div>
        </s.Container>
            </div>
            <div style={{
                // display: "flex",
                color: "white",
                padding: 120,
                // width: "calc(100vw -120px)",
                // backgroundColor: "red"
            }}>
                <p style={{
                    fontSize: 70,
                    fontFamily:"hairline",
                    paddingBottom: 50,
                }}>
                    Utility
                </p>
                <s.Container
        flex={1}
        // ai={"space-between"}
        jc={"center"}
        fd="row"
      >

                <div style={{
                     flex: 1,
                     color: "white",
                     hyphens: "auto",
	textAlign: "justify"
                    }}
                    >

<p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    <p>
                        For each pair of BINARY MACHINE DREAM token that you own you will be able to mint the corresponding FLUID MACHINE DREAM token for free.
                        <br/>
                        <br/>
                    60% of the auctioned sale of the master piece LUCID MACHINE DREAM will go to the community.
                Each member will receive ETH from the sale proportional to their BINARY & FLUID MACHINE DREAM holdings. To be precise, 30% of the profits will go to the BINARY MACHINE DREAMS holders and 30% to the FLUID MACHINE DREAMS holders.
                        </p>
                    </p>
                </div>

        </s.Container>
            </div>
            <div style={{
                // display: "flex",
                color: "white",
                padding: 120,
                // width: "calc(100vw -120px)",
                // backgroundColor: "red"
            }}>
                <p style={{
                    fontSize: 70,
                    fontFamily:"hairline",
                    paddingBottom: 50,
                }}>
                    Roadmap
                </p>
                <s.Container
        flex={1}
        // ai={"space-between"}
        jc={"center"}
        fd="row"
      >

                <div style={{
                     flex: 1,
                     color: "white",
                     hyphens: "auto",
	textAlign: "justify"
                    }}
                    >

<p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    <p>
                        For each pair of BINARY MACHINE DREAM token that you own you will be able to mint the corresponding FLUID MACHINE DREAM token for free.
                        <br/>
                        <br/>
                    60% of the auctioned sale of the master piece LUCID MACHINE DREAM will go to the community.
                Each member will receive ETH from the sale proportional to their BINARY & FLUID MACHINE DREAM holdings. To be precise, 30% of the profits will go to the BINARY MACHINE DREAMS holders and 30% to the FLUID MACHINE DREAMS holders.
                        </p>
                    </p>
                </div>

        </s.Container>
            </div>
      <div style={{height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "calc(100vw - 240px)", marginLeft: 120}}/>
      <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          color: "white",
            padding: 120,
            width: "100vw",
            // paddingTop: 120,
            // paddingBottom: 120,
            // backgroundColor: "yellow",
        }}
        >
      <div style={{
          flexDirection: "columnn",
        //   flex: 1,
          marginRight: 30,
          //  backgroundColor: "green",
          // borderWidth: 2,
          // borderColor: "white",
          // borderStyle: "solid"
          width: "calc(50vw - 90px)"
        }}
        >
        <Link to="/binary" style={{textDecoration: "none", color: "white", display: "inline-block"}}>
<p style={{fontFamily: "thin", fontSize: 30, marginBottom: 20}}>
                Binary Machine Dreams
            </p>
            <div style={{
                display: "flex",
                alignItems: "center",
                }}
            >
            <StyledImg src={`/config/images/small/0.gif`} width={128} borderRadius="0" style={{marginRight: 30}}/>
            <StyledImg src={`/config/images/small/1.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`/config/images/arrow-right.svg`} width={20} borderRadius="0" hover />
                    </div>
            </Link>
                    </div>
                    <div style={{
                        flexDirection: "columnn",
                        marginLeft: 30,
                    }}
                    >
                    <Link to="/fluid" style={{textDecoration: "none", color: "white", display: "inline-block"}}>
<p style={{fontFamily: "thin", fontSize: 30, marginBottom: 20}}>
                Fluid Machine Dreams
            </p>
            <div style={{
                display: "flex",
                alignItems: "center",
                // width: "calc(50vw - 90px)",
                }}
            >
            <StyledImg src={`/config/images/favpairs/509.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`/config/images/favpairs/391.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`/config/images/arrow-right.svg`} width={20} borderRadius="0" hover />
                    </div>
            </Link>
                    </div>
                </div>
                <div style={{height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "calc(100vw - 240px)", marginLeft: 120}}/>
    </s.Screen>
  );
}

export default VideoPlayer;
