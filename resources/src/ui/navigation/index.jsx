import styled from 'styled-components';
import { navigation, color } from '../';
import { NavLink } from 'react-router-dom';
import config from '../../config';

const NavigationWrapper = styled.header`
	display: flex;
	flex-direction: column;
	padding: 0;
	background-color: ${color.primary};
	height: ${config.APP_HEIGHT}px;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.4);
`;

const NavigationLogo = styled.span`
	display: flex;
	width: ${navigation.width}px;
	height: ${navigation.width}px;
	background-color: ${color.white};
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

const NavigationList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
`;

const NavigationItemUI = styled.li`
	display: flex;
	width: ${navigation.width}px;
	height: ${navigation.width}px;
	padding: 0;
	margin: 0;
`;

const NavigationLink = styled(NavLink).attrs({
	activeClassName: 'active'
})`
	color: #ffffff;
	width: ${navigation.width}px;
	height: ${navigation.width}px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		background-color: rgba(0, 0, 0, 0.5);
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export {
	NavigationWrapper,
	NavigationItemUI,
	NavigationList,
	NavigationLogo,
	NavigationLink
};
