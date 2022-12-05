import styled from "styled-components";

import QuoteContainer from "./QuoteContainer";
import ClockContainer from "./ClockContainer";
import InfoContainer from "./InfoContainer";

import daytimeMobile from "../assets/mobile/bg-image-daytime.jpg";
import daytimeTablet from "../assets/tablet/bg-image-daytime.jpg";
import daytimeDesktop from "../assets/desktop/bg-image-daytime.jpg";

import nighttimeMobile from "../assets/mobile/bg-image-nighttime.jpg";
import nighttimeTablet from "../assets/tablet/bg-image-nighttime.jpg";
import nighttimeDesktop from "../assets/desktop/bg-image-nighttime.jpg";

import { useState } from "react";

interface Props {
  nightMode: boolean;
}

export default function Main(props: Props) {
  const [more, setMore] = useState<boolean>(false);

  return (
    <MainContainer nightMode={props.nightMode}>
      <QuoteContainer more={more} />

      <ClockContainer more={more} setMore={setMore} />

      <InfoContainer more={more} />
    </MainContainer>
  );
}

const MainContainer = styled.div<Props>`
  background-color: #d8d8d8;
  background-blend-mode: multiply;
  background-image: url(${(props) =>
    props.nightMode ? nighttimeMobile : daytimeMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 375px;
  height: auto;
  border-radius: 20px;
  @media (min-width: 700px) {
    background-image: url(${(props) =>
      props.nightMode ? nighttimeTablet : daytimeTablet});
    width: 600px;
  }
  @media (min-width: 1200px) {
    background-image: url(${(props) =>
      props.nightMode ? nighttimeDesktop : daytimeDesktop});
    width: 1000px;
  }
`;
