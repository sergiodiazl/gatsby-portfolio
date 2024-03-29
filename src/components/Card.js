import styled from 'styled-components';
import { Card as CardRebass } from 'rebass/styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  min-width: 15vw;
  max-width: 80vw;
  border-radius: 8px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

export default Card;
