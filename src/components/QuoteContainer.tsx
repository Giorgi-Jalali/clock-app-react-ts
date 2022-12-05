import { useState } from "react";
import styled from "styled-components";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

type Props = {
  more: boolean;
};

const QuoteContainer = (props: Props) => {
  const [quoteNumber, setQuoteNumber] = useState(0);

  const changeQuote = () => setQuoteNumber(Math.floor(Math.random() * 20));

  return (
    <QuoteDiv more={props.more}>
      <div>{randomQuoteArray[quoteNumber][1]};</div>
      <RefreshAuthor>
        <Author>{randomQuoteArray[quoteNumber][0]}</Author>
        <RefreshIcon onClick={() => changeQuote()} />
      </RefreshAuthor>
    </QuoteDiv>
  );
};

export default QuoteContainer;

const QuoteDiv = styled.div<Props>`
  display: ${(props) => (props.more ? "none" : "flex")};
  flex-direction: column;
  margin-bottom: 80px;
  padding: 32px 26px;
  font-size: 12px;
  line-height: 22px;
  @media (min-width: 700px) {
    font-size: 18px;
    line-height: 28px;
    padding: 60px;
    margin-bottom: 0;
  }
  @media (min-width: 1200px) {
    padding: 60px 120px;
  }
`;
const RefreshAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const Author = styled.div`
  font-weight: 700;
  margin-top: 8px;
  @media (min-width: 700px) {
    margin-top: 15px;
  }
`;

const RefreshIcon = styled.div`
  background-color: #4a4d52;
  background-image: url(${refreshIcon});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center;
  width: 28px;
  height: 28px;
  margin-left: 30px;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 700px) {
    background-size: 20px 20px;
    width: 34px;
    height: 34px;
  }
`;

const randomQuoteArray: [string, string][] = [
  [
    "Michael Jordan",
    "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
  ],
  [
    "Henry David Thoreau",
    "Many men go fishing all of their lives without knowing that it is not fish they are after.",
  ],
  ["Vince Lombardi", "Winners never quit and quitters never win."],
  [
    "Babe Ruth",
    "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
  ],
  [
    "Bob Feller",
    "Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is.",
  ],
  [
    "Dan Gable",
    "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.",
  ],
  ["Bobby Unser", "Success is where preparation and opportunity meet."],
  ["Kareem Abdul-Jabbar", "You can't win unless you learn how to lose."],
  [
    "Barry Switzer",
    "Some people are born on third base and go through life thinking they hit a triple.",
  ],
  ["Heywood Broun", "Sports do not build character. They reveal it."],
  [
    "Earl Monroe",
    "Just be patient. Let the game come to you. Don't rush. Be quick, but don't hurry.",
  ],
  ["Billie Jean King", "Champions keep playing until they get it right."],
  ["Yogi Berra", "Half the lies they tell about me aren't true."],
  ["P. G. Wodehouse", "To find a man's true character, play golf with him."],
  ["Eric Liddell", "God made me fast. And when I run, I feel His pleasure."],
  [
    "Muhammad Ali",
    "It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up.",
  ],
  [
    "Wayne Gretzky",
    "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
  ],
  [
    "George Orwell",
    "Serious sport has nothing to do with fair play. It is bound up with hatred, jealousy, boastfulness, disregard of all rules and sadistic pleasure in witnessing violence. In other words, it is war minus the shooting.",
  ],
  [
    "Mia Hamm",
    "I am building a fire, and everyday I train, I add more fuel. At just the right moment, I light the match.",
  ],
  [
    "Michael Phelps",
    "You can't put a limit on anything. The more you dream, the farther you get.",
  ],
];
