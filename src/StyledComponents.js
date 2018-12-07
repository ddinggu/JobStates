import styled from 'styled-components';

// ================== Wrapper & Boxes ==================  //

// 5 columns 그리드
export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1em;
    min-width: 900px;
    width: ${props => (props.Job ? '100%' : '60%')}
    position: relative;
    margin: auto;
  }
`;

// 3 columns 그리드
export const BoxWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  margin: 5px;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    text-align: center;
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    padding: 15px 10px;
    position: relative;
  }
`;

export const BoxWithBackground = styled(Box)`
  background-color: white;
  margin: 20px 0px 10px 0px;
  position: relative;

  @media only screen and (min-width: 768px) {
    background-color: white;
    position: relative;
  }
`;

// ================== Buttons & Span for buttons ==================  //

export const SpanEditButtonList = styled.span.attrs({
  className: 'ui mini basic icon buttons ',
})`
  top: 10px;
  position: absolute;
  right: 10px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 0px;
    right: 10px;
  }
`;

export const SpanEditButton = styled.span.attrs({
  className: 'ui mini basic icon buttons ',
})`
  top: 10px;
  position: absolute;
  right: 10px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const SpanPlusButton = styled.span`
  position: absolute;
  right: 10px;
  top: -40px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 10px;
    right: -50px;
  }
`;

export const ListItem = styled.li`
  display: inline;
  align: left;
  text-align: left;
`;

export const Header = styled.span`
  position: absolute;
  top: 14px;
  left: 30px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  align: left;
  z-index: 1;
`;

export const Line = styled.div`
  top: 55px;
  border-bottom: 3px solid #4d62ff;
  width: 30px;
  position: absolute;
  left: 30px;
`;

// ================== Headers ==================  //

export const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: hsla(0, 0%, 100%, 0.94);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
    height: 75px;
    padding-top: 0;
    padding-bottom: 0;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    background-color: hsla(0, 0%, 100%, 0.94);
  }
`;

export const NavLogo = styled.span`
  color: black;
  font-size: small;
  font-family: 'Merriweather', serif;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 10px;

  @media only screen and (min-width: 768px) {
    color: black;
    font-size: xx-large;
    font-family: 'Merriweather', serif;
    cursor: pointer;
    position: absolute;
    left: 70px;
    top: 30px;
  }
`;

export const NavAccount = styled.span`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 0px;

  @media only screen and (min-width: 768px) {
    color: black;
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 20px;
  }
`;

export const DivWithMargin = styled.div`
  margin-top: 20px;
`;

export const NavMenu = styled.nav`
  position: absolute;
  top: 32px;
  font-size: small;
  left: 20%;

  @media only screen and (min-width: 768px) {
    position: absolute;
    align: center;
    left: 43%;
    top: 30px;
    font-size: large;
    display: inline;
  }
`;

export const BottomLine = styled.div`
  border: 0.5px solid rgb(166, 183, 196);
  opacity: 0.1;
  width: 200px;
  margin-top: 1rem;
`;

export const FixDatePickerTimer = styled.span`
  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    padding-left: unset;
    padding-right: unset;
    width: 100px;
  }
  & .react-datepicker__input-container {
    width: 100%;
  }
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker {
    width: 314px;
  }
`;
