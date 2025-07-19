import React from "react";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link } from "react-router-dom";

export const StyledVid = styled.video`
//   box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
//   box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.7);
//   border: 4px dashed var(--secondary);
//   border: 4px dashed var(--secondary);
  background-color: black;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
//   width: ${({ width }) => (width ? width : 512)}px;
//   @media (min-width: 900px) {
//     width: ${({ width }) => ((width ? width : 512) * 1.25)}px;
//   }
//   @media (min-width: 1000px) {
//     width: ${({ width }) => ((width ? width : 512) * 1.5)}px;
//   }

  height: 100vh;
  margin-left: calc(((100vh / 9 * 16) - 200vh) / 2);
//   max-height: calc(100vh - 120px);
//   margin: 60px;
//   margin-left: 0;
  transition: width 0.5s;

`;

export const StyledVidContainer = styled.div`
    width: calc(100vh / 9 * 16);
    overflow:hidden;
    display:block;
`

export const StyledImg = styled.img`
//   box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
//   box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.7);
//   border: 4px dashed var(--secondary);
//   border: 4px dashed var(--secondary);
//   background-color: var(--accent);
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  width: ${({ width }) => (width ? width : 200)}px;
  @media (min-width: 900px) {
    width: ${({ width }) => ((width ? width : 200) * 1.25)}px;
  }
  @media (min-width: 1000px) {
    width: ${({ width }) => ((width ? width : 200) * 1.5)}px;
  }
  transition: width 0.5s;
`;

function VideoPlayer() {
  return (
    <s.Screen>
        <Link to="/">
      <StyledImg
        src={`${process.env.PUBLIC_URL}/config/images/arrow-right.svg`}
        width={16} borderRadius="0"
        style={{
            position: "absolute",
            top: 60,
            left: "calc((200vh - (100vh / 9 * 16)) / 4 + 20px)",
            transform: "scaleX(-1)",
            zIndex: 1,
            backgroundColor: "transparent",
            filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
        }}
      />
       </Link>
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
                // position: "sticky",
                // top: 60,
                // right: 0,
                // left: 0
                // bottom: 0,
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
                    Lucid Machine Dream
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
                    LUCID MACHINE DREAM comprises a novel aesthetic approach to a dataset of portrait paintings: An interpolated hyperspace of the machine's mind displaying never-ending dynamic transitions of lucid dream characters.
                    </p>
                    <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
    Orestis is a pioneer in the world of rare digital art and crypto collectibles, minting the first fully immersive digital artwork NFT in March 2022. He creates unique NFT options: the utility-focused NFT base collection BINARY MACHINE DREAMS, the deriving project FLUID MACHINE DREAMS, and his public projection, LUCID MACHINE DREAM, which will mark the first time interpolated generative AI artworks to be offered to the public for sale.
    </p>
    <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
        Using synesthetic reality experiments based on GAN algorithms developed by artificial intelligence and inspired by lucid hallucinations, MACHINE DREAMS turns datasets into latent multi-sensory experiences to commemorate the beauty of AI and art.
    </p>
    <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
        The GAN AI algorithm was first trained on publicly available images from the Metropolitan Museum of Art. Using the transfer learning technique, the mind of the machine was exposed to art pieces from the WikiArt Visual Art Encyclopedia. The resulting Animated AI Data Painting incorporates shapes and patterns that we associate with human portrait paintings, but only exist in the mind of a machine as dreams. Each transition features a stunning visual interpretation, together forming a multi-faceted reflection of the nuanced relationship between technology and humanity.
    </p>
    <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
    This artwork comes with an artist-signed certificate with backup source files to be shipped by the artist to the future buyer. Orestis will assist the future buyer with installation instructions and oversight.
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
      {/* <div style={{height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "calc(100vw - 120px)", marginLeft: 60}}/> */}
      <div style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",

          color: "white",
            padding: 120,
            paddingTop: 0,
            // paddingTop: 90,
            // paddingBottom: 120,
            width: "100vw",
            // backgroundColor: "yellow",
        }}
        >
                 <div style={{
                     flexDirection: "columnn",
                     flexShrink: 1,
                     paddingRight: 60,
                    //  backgroundColor: "green",
                    }}
                    >
                 <p style={{
                     fontSize: 30,
                    fontFamily:"thin",
                    // paddingTop: 60,
                }}>

                    Specifications
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
Dimensions: 7282 x 4096
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Length: 384 seconds
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Color depth: 256 per channel
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                Codec: h.264
            </p>
            <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
Frame rate: 30 fps
            </p>
            </div>
                <div  style={{
                    flexDirection: "columnn",
                    flex: 2,
                    paddingRight: 60,
                    // backgroundColor: "blue",
                }}>
                    <p style={{
                    fontSize: 30,
                    fontFamily:"thin",
                    // paddingTop: 60,
                }}>
                    NFT
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17, paddingTop: 20}}>
                    Token: custom ERC-721 token on the Ethereum network
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    Community profits: 60% of the sale will go to the community*
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    Sale format: auction
                </p>
                <p style={{lineHeight: "2em", fontFamily: "seriff", fontSize: 17}}>
                    Mint date: to be announced
                </p>
                <p style={{lineHeight: "1.4em", fontFamily: "seriff", fontSize: 12, paddingTop: 20}}>
                *each member will receive ETH from the sale proportional to their BINARY & FLUID MACHINE DREAM token holdings
                </p>
                        </div>
                        {/* <div style={{
                     flexDirection: "columnn",
                     flex: 1,
                    //  backgroundColor: "green",
                    }}
                    >
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
            </div> */}
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
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/small/0.gif`} width={128} borderRadius="0" style={{marginRight: 30}}/>
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/small/1.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/arrow-right.svg`} width={20} borderRadius="0" />
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
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/favpairs/509.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/favpairs/391.gif`} width={128} borderRadius="0" style={{marginRight: 30}} />
            <StyledImg src={`${process.env.PUBLIC_URL}/config/images/arrow-right.svg`} width={20} borderRadius="0" />
                    </div>
            </Link>
                    </div>
                </div>
                <div style={{height: 1, backgroundColor: "rgba(255,255,255,0.3)", width: "calc(100vw - 240px)", marginLeft: 120}}/>
    </s.Screen>
  );
}

export default VideoPlayer;
