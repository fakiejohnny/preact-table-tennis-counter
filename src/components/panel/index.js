import { h, Component } from 'preact';
import style from './style';

export default class Panel extends Component {

	render({ username, increment, count, winns }, {}) {
		return (
			<div class={style.panel} onClick={increment}>
				<p class={style.username}>{username}</p>
				<p class={style.count}>{count}</p>
				<p class={style.winns}>{winns}</p>
			</div>
		);
	}
}
