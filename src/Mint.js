import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  font-size: 16px;
//   border-radius: 50px;
  border: 3px solid;
  border-color: white;
  background-color: black;
  padding: 12px;
  font-weight: bold;
  color: white;
//   width: 100px;
  cursor: pointer;
//   box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
//   -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
//   -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  color: var(--secondary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
//   box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
//   -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
//   -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
//   width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

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

export const StyledVid = styled.video`
//   box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
//   box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.7);
//   border: 4px dashed var(--secondary);
//   border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}%;
  width: ${({ width }) => (width ? width : 256)}px;
  @media (min-width: 900px) {
    width: ${({ width }) => ((width ? width : 256) * 1.25)}px;
  }
  @media (min-width: 1000px) {
    width: ${({ width }) => ((width ? width : 256) * 1.5)}px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: white;
//   color: var(--secondary);
  text-decoration: none;
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function App(props) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Max mint per TX – 4`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
      console.log(blockchain)
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}(s)...`);
    setClaimingNft(true);
    // console.log(blockchain)
    // console.log(blockchain.account)
    blockchain.smartContract.methods
      .mintToken(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Mint successful! Go visit opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 4) {
      newMintAmount = 4;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch(props.tokenConfig, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const saleInActive = blockchain.smartContract && !data.publicSaleIsActive && !data.binarySaleIsActive && !data.saleIsActive;
  const loading = data.loading || blockchain.loading;
  const binaryMint = data.binarySaleIsActive && !data.publicSaleIsActive;

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        // style={{ backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d3d12134152947.61cf3d0560b05.gif" : null}
        // image={CONFIG.SHOW_BACKGROUND ? "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e22b6103029081.5f442f87612bd.jpg" : null}


        // overlay
      >
          <div style={{
                // display: "flex",
                color: "white",
                paddingTop: 120,
                // width: "calc(100vw -120px)",
                // backgroundColor: "red"
            }}>
          <p style={{
                    fontSize: 70,
                    fontFamily:"hairline",
                    paddingBottom: 50,
                }}>
                    {props.title}
                </p>
                </div>
        {/* <StyledLogo alt={"logo"} src={"/config/images/logo.png"} /> */}
        {/* <s.TextTitle style={{
                marginTop: 24,
                marginLeft: 24,
                marginRight: 24,
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
                position: "relative",
                textShadow: "0px 0px 10px rgba(0,0,0,0.4)"
              }}>Ukraine Punks</s.TextTitle>
        <s.SpacerSmall />
        <s.TextSubTitle style={{
            fontSize: width > 650 ? 26 : 20,
            textAlign: "center",
            color: "white",
            position: "relative",
            paddingLeft: "10vw",
            paddingRight: "10vw",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            backgroundColor: "rgba(0,0,0,0.7)"
            }}>Putin started an unprovoked war against Ukraine, a war against Europe, a war against the whole world. There is no purgatory for war criminals!<br/>
            We are building an NFT community to take action against Russia's aggression in Ukraine.<br/>
        </s.TextSubTitle>
        <s.SpacerMedium /> */}
        <s.SpacerSmall />
        {/* <div style={{width: "80vw"}}>
            <Swiper
                // modules={[Autoplay]}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // navigation
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // spaceBetween={50}
                slidesPerView={5}
            >
                {[...Array(128).keys()].map(i => <SwiperSlide><StyledImg src={`/config/images/small/${i}.gif`} key={i} width={128} borderRadius="0" /></SwiperSlide>)}
            </Swiper>
        </div> */}
        {/* <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-between",
        }}>
            {[...Array(4).keys()].map(i => <StyledImg src={`/config/images/small/${i}.gif`} key={i} width={128} borderRadius="0" />)}
        </div>
        <s.SpacerLarge />
        <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-between",
        }}>
            {[...Array(4).keys()].map(i => <StyledImg src={`/config/images/small/${i + 4}.gif`} key={i} width={128} borderRadius="0" />)}
        </div>
        <s.SpacerLarge />
        <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-between",
        }}>
            {[...Array(4).keys()].map(i => <StyledImg src={`/config/images/small/${i + 8}.gif`} key={i} width={128} borderRadius="0" />)}
        </div>
        <s.SpacerLarge />
        <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-between",
        }}>
            {[...Array(4).keys()].map(i => <StyledImg src={`/config/images/small/${i + 12}.gif`} key={i} width={128} borderRadius="0" />)}
        </div> */}
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>

          {/* <s.SpacerLarge /> */}
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            // width=""
            style={{
              backgroundColor: "rgba(0,0,0,0.9)",
              padding: 35,
            //   borderRadius: 24,
            //   border: "4px solid var(--secondary)",
              border: "4px solid white",
              boxShadow: "0px 0px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
              <s.Container flex={1} jc={"center"} ai={"center"}>
            {/* <StyledImg alt={"example"} src={"/config/images/121.gif"} /> */}
            <StyledVid autoPlay loop muted src={"/config/videos/video128-slow.mp4"} type="video/mp4" borderRadius="0"/>
          </s.Container>
            <s.SpacerLarge />
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply ? numberWithCommas(data.totalSupply) : "–"} / {numberWithCommas(CONFIG.MAX_SUPPLY)}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Sold out
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            )
            :
            loading ? <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--accent-text)",
            }}
          >
            Connecting...
          </s.TextDescription>
          :
            saleInActive ? <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--accent-text)",
            }}
          >
            Sale not active
          </s.TextDescription>
            : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  PRICE – {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}
                </s.TextTitle>
                <s.SpacerXSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    {/* <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription> */}
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect(props.tokenConfig, props.abi));
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                            maxWidth: 256 * 1.5 ,
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                      <s.SpacerXSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        –
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : binaryMint ? "BINARY MINT*" : "MINT"}
                      </StyledButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                        fontSize: 12,
                        marginTop: 25,
                        maxWidth: 256 * 1.5 ,
                      }}
                    >
                      *The mint will only succeed if you own the corresponding binary pairs
                    </s.TextDescription>
                  </>
                )}
              </>
            )}
            <s.SpacerXSmall />
          </s.Container>
          {/* <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/142.svg"}
              style={{ transform: "scaleX(-1)" }}
            />
          </s.Container> */}
        </ResponsiveWrapper>
        {/* <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {[...Array(128).keys()].map(i => <SwiperSlide><StyledImg src={`/config/images/small/${i}.gif`} key={i} width={64} borderRadius="0" /></SwiperSlide>)}
        </Swiper> */}
        {/* {[...Array(32).keys()].map(i => <StyledImg src={`/config/images/small/${i}.gif`} key={i} width={64} borderRadius="0" />)}
        {[...Array(32).keys()].map(i => <StyledImg src={`/config/images/small/${i + 32}.gif`} key={i + 32} width={64} borderRadius="0" />)}
        {[...Array(32).keys()].map(i => <StyledImg src={`/config/images/small/${i + 64}.gif`} key={i + 64} width={64} borderRadius="0" />)}
        {[...Array(32).keys()].map(i => <StyledImg src={`/config/images/small/${i + 96}.gif`} key={i + 96} width={64} borderRadius="0" />)} */}
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--secondary-text)",
              marginTop: 60,
              marginBottom: 24,
              fontSize: 14,
            }}
          >
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
            successfully mint your NFT. We recommend that you don't lower the
            gas limit.
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
