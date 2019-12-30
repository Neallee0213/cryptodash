import styled from 'styled-components'
import { blueBoxShadow, redBoxShadow } from './Styles'


export const Tile = styled.div`
box-shadow:0 1.5rem 4rem rgba(0,0,0, .15);
background-color:white;
padding: 10px;
color: black;

`;

export const SelectableTile = styled(Tile)`
    &:hover{
        cursor: pointer;
        ${blueBoxShadow}
    }
`;


export const DeletableTile = styled(SelectableTile)`
	&:hover{
		cursor: pointer; 
		${redBoxShadow}
	}
`;

export const DisabledTile = styled(Tile)`
	pointer-events: none;
  opacity: 0.4;
`;
