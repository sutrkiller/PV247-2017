import styled from 'styled-components';
import {keyframes} from 'styled-components';

const rotate360 = keyframes`
    0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(359deg);
	}
`;

export const SavingIcon = styled.i`
    display: inline-block;
	animation: ${rotate360} 0.4s linear infinite;
`;

export const StatusPane = styled.span`
	padding: 15px 5px 5px 5px;
	margin-right: 2px; 
	overflow: hidden;	
`;