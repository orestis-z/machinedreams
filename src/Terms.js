import React, { useEffect, useState } from 'react';
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const StyledVid = styled.video`
  background-color: black;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  transition: width 0.5s;
`;

export const StyledImg = styled.img`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  width: ${({ width }) => (width ? width : 200)}px;
//   @media (min-width: 900px) {
//     width: ${({ width }) => ((width ? width : 200) * 1.25)}px;
//   }
//   @media (min-width: 1000px) {
//     width: ${({ width }) => ((width ? width : 200) * 1.5)}px;
//   }
  transition: width 0.5s, opacity 0.2s;
  :hover {
    opacity: ${({ hover }) => (hover ? 0.7 : 1)};
  }
`;

export const Hover = styled.div`
  display: inline-block;
  transition:opacity 0.2s;
  :hover {
    opacity: 0.67;
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

function Terms() {
    const {width} = useWindowDimensions();
    useEffect(() => {
        document.title = "Machine Dreams Art | Terms"
     }, []);
    return (
        <s.Screen id="">
            <s.Container
                flex={1}
                ai="center"
                jc="center"
                fd="column"
                width="100%"
            >
                <div style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    maxWidth: 1000,
                    marginTop: 80,
                }}>
                    <p style={{
                        fontSize: 65,
                        fontFamily: "hairline",
                        color: "white",
                        marginTop: 50,
                        marginBottom: 50
                    }}
                    >
                        TERMS & CONDITIONS
                    </p>
                    <div style={{
                        flex: 1,
                        color: "white",
                        // hyphens: "auto",
                        textAlign: "justify",
                    }}
                    >
                        <p style={{ lineHeight: "2em", fontFamily: "seriff", fontSize: width > 800 ? 17 : 15 }}>
                        Machine Dreams is a series of 3 collections of digital artworks (NFTs) available through on the Ethereum network. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions before approval. Furthermore, as the Machine Dreams smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions.
                        <br/><br/>
This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for any and all transactions involving Machine Dreams digital collectibles.
</p>
                <p style={{
                        fontSize: 45,
                        fontFamily: "thin",
                        color: "white",
                        marginTop: 80,
                        marginBottom: 50
                    }}
                    >
                        Ownership
                    </p>

                    <p style={{ lineHeight: "2em", fontFamily: "seriff", fontSize: width > 800 ? 17 : 15 }}>
                    i. You Own the NFT. Machine Dreams are NFTs on the Ethereum blockchain. When you purchase an NFT, you own the underlying Machine Dream token, the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at no point may we seize, freeze, or otherwise modify the ownership of any Machine Dream token.
                    <br/><br/>
                    ii. Personal Use. Subject to your continued compliance with these Terms, Orestis Zambounis grants you a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely forthe following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your Machine Dream token / NFT, provided that the marketplace cryptographically verifies Machine Dream owner’s rights to display the Art for their Machine Dream token to ensure that only the actual owner can display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your Machine Dream token, provided that the website/application cryptographically verifies Machine Dream owner’s rights to display the Art for their Machine Dream token to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Machine Dream token leaves the website/application.
                    <br/><br/>
                    iii. Commercial Use. Subject to your continued compliance with these Terms, AntiMatter Labs grants you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of Machine Dreams generally, provided that the marketplace cryptographically verifies each Machine Dream owner’s rights to display the Art for their Machine Dream token to ensure that only the actual owner can display the Art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Machine Dreams generally, provided that the third party website or application cryptographically verifies Machine Dream owner’s rights to display the Art for their Machine Dream token to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Anti CryptoPunk leaves the website/application; or (iii) earning revenue from any of the foregoing.

                    </p>

                    </div>
                </div>
            </s.Container>
        </s.Screen >
    );
}

export default Terms;
