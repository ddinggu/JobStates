import styled from 'styled-components';

// ================== Wrapper & Boxes ==================  //
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
  top: 50px;
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
  top: 50px;
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
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  height: 75px;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  background-color: hsla(0, 0%, 100%, 0.94);
`;

export const Nav = styled.span`
  color: black;
  font-size: xx-large;
  font-family: 'Merriweather', serif;
  cursor: pointer;
`;
