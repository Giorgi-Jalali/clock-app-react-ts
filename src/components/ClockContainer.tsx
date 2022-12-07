import { useEffect, useState } from "react";

import styled from "styled-components";
import countryID from "countries-and-timezones";

import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";

type Props = {
  more: boolean;
  setMore: (arg: boolean) => void;
};

interface ArrowProps {
  more: boolean;
}

const ClockContainer = (props: Props) => {
  const [minutes, setMinutes] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const recentDate = new Date();
      const hoursMinutes = recentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      setMinutes(hoursMinutes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const cityArr = location.split("/");
  const city = cityArr[1];

  const country: any = countryID.getTimezone(location);

  const recentHour = new Date().getHours();

  return (
    <GreetingContainer>
      <div>
        <Greeting>
          {recentHour >= 5 && recentHour < 18 ? <Sun /> : <Moon />}
          <Hello>
            {recentHour >= 5 && recentHour < 12
              ? "good morning"
              : recentHour >= 12 && recentHour < 18
              ? "good afternoon"
              : "good evening"}
            <Span>, it's currently</Span>
          </Hello>
        </Greeting>

        <Clock>{minutes}</Clock>
        <CityCountry>
          in {city}, {country.countries[0]}
        </CityCountry>
      </div>
      <MoreLessButton onClick={() => props.setMore(!props.more)}>
        <MoreLess>{props.more ? "LESS" : "MORE"}</MoreLess>

        <Arrow more={props.more} />
      </MoreLessButton>
    </GreetingContainer>
  );
};

export default ClockContainer;

const GreetingContainer = styled.div`
  padding: 75px 26px 70px 26px;
  @media (min-width: 700px) {
    padding: 60px;
  }
  @media (min-width: 1200px) {
    padding: 60px 120px;
  }
`;

const Greeting = styled.div`
  display: flex;
`;

const Sun = styled.div`
  background: url(${sun});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const Moon = styled.div`
  background: url(${moon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const Hello = styled.div`
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (min-width: 700px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const Clock = styled.div`
  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 1px;
  margin: 16px 0;
`;

const Span = styled.span`
  display: none;
  @media (min-width: 700px) {
    display: inline;
  }
`;

const CityCountry = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const MoreLessButton = styled.div`
  background: #ffffff;
  border-radius: 28px;
  width: 115px;
  height: 39px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 48px;
  cursor: pointer;
`;

const MoreLess = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 3.75px;
  color: #000000;
  margin-left: 20px;
`;

const Arrow = styled.div<ArrowProps>`
  background-color: #303030;
  border-radius: 50%;
  background-image: url(${arrowDown});
  transform: rotate(${(props) => (props.more ? "180deg" : "0deg")});
  background-position: center;
  background-size: 10px 7px;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
`;
