import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Input, ClickedIcon, Container } from '../../ui';
import { ViewList, PlaylistAddCheck } from '@material-ui/icons';
import { connect } from 'react-redux';
import { task } from '../../redux/actions';
const ControlWrapper = styled(Container)`
	& > :first-child {
		/* padding-left: 0; */
		margin-left: 0;
	}
	& > :last-child {
		/* padding-right: 0; */
		margin-right: 0;
	}
`;
const ToogledButtonWrapper = styled.div`
	display: flex;
`;

export class TaskListControl extends Component {
	static propTypes = {
		selectCurrentList: PropTypes.func,
		activeList: PropTypes.string
	};

	state = {
		search: '',
		filters: [],
		taskButtons: [
			{ name: 'avaibleList', icon: <ViewList /> },
			{ name: 'doneList', icon: <PlaylistAddCheck /> }
		]
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	renderTaskControlButtons = () =>
		this.state.taskButtons.map(button => (
			<ClickedIcon
				key={button.name}
				size={20}
				padding={'12.5px'}
				margin={'1px'}
				onClick={() => this.props.selectCurrentList(button.name)}
				icon={button.icon}
				active={this.props.activeList === button.name}
			/>
		));

	render() {
		const { search } = this.state;
		return (
			<ControlWrapper>
				<Input
					value={search}
					style={{
						flexGrow: 1,
						marginRight: 7.5
					}}
					onChange={this.handleChange('search')}
				/>

				<ToogledButtonWrapper>
					{this.renderTaskControlButtons()}
				</ToogledButtonWrapper>
			</ControlWrapper>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	activeList: task.activeList
});

const mapDispatchToProps = {
	selectCurrentList: task.selectCurrentList
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(TaskListControl)
);
