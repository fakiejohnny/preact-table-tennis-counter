import { h, Component } from 'preact';
import style from './style';

export default class Panel extends Component {
	state = {
		count: 0
	};

	increment = () => {
        this.setState({ count: this.state.count+1 });
	};

	render({ username }, { count }) {
		return (
			<div class={style.panel} onClick={this.increment}>
				<p class={style.name}>{username}</p>
				<p class={style.points}>{count}</p>
			</div>
		);
	}
}
