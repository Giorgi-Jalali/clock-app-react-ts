import styled from "styled-components";

type Props = {
  more: boolean;
};

const InfoContainer = (props: Props) => {
  const location = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const now: any = new Date();
  const start: any = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const recentDate = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = recentDate.getDay();

  const getWeekNumber = (d: any) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart: any = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekN = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekN;
  };

  const weekNumber = getWeekNumber(new Date());

  return (
    <MoreInfoContainer more={props.more}>
      <div>
        <TimeZone>
          <div>CURRENT TIMEZONE</div>
          <Location>{location}</Location>
        </TimeZone>
        <YearDay>
          <div>DAY OF THE YEAR</div>
          <DayOfYear>{dayOfYear}</DayOfYear>
        </YearDay>
      </div>
      <div>
        <WeekDay>
          <div>DAY OF THE WEEK</div>
          <DayOfWeek>
            {weekDay} - {weekDays[weekDay]}
          </DayOfWeek>
        </WeekDay>
        <Week>
          <div>WEEK NUMBER</div>
          <WeekNumber>{weekNumber}</WeekNumber>
        </Week>
      </div>
    </MoreInfoContainer>
  );
};

export default InfoContainer;

const MoreInfoContainer = styled.div<Props>`
  background: rgba(255, 255, 255, 0.8);
  color: #303030;
  display: ${(props) => (props.more ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 26px 60px 26px;
  font-size: 10px;
  line-height: 28px;
  letter-spacing: 2px;
  @media (min-width: 700px) {
    flex-direction: row;
    font-size: 12px;
    padding: 50px 60px;
  }
  @media (min-width: 1200px) {
    padding: 40px 100px;
    justify-content: space-around;
  }
`;

const TimeZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Location = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  @media (min-width: 700px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const YearDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DayOfYear = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media (min-width: 700px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const WeekDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DayOfWeek = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media (min-width: 700px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const Week = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WeekNumber = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media (min-width: 700px) {
    font-size: 30px;
    line-height: 36px;
  }
`;
