import { h, Component } from 'preact';
import style from './style';

export default class Panel extends Component {
	state = {
		count: 0,
		winns: 0
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
		
		if (this.state.count > 11) {
			this.setState({
				winns: this.state.winns+1,
				count: 1
			});
		}
	};

	render({ username }, { count, winns }) {
		return (
			<div class={style.panel} onClick={this.increment}>
				<p class={style.username}>{username}</p>
				<p class={style.count}>{count}</p>
				<p class={style.winns}>{winns}</p>
			</div>
		);
	}
}
