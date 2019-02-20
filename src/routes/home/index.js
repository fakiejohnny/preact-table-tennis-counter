import { h, Component } from 'preact';
import style from './style';

import Panel from './../../components/panel';

export default class Home extends Component {

	state = {
		count1 : 0,
		count2 : 0,
		winns1 : 0,
		winns2 : 0
	};

	increment1 = () => {
		this.setState({ count1: this.state.count1 + 1 });

		if (this.state.count1 >= 11 && this.state.count1 - this.state.count2 >= 2) {
			console.log("Player 1 win!");
			this.setState({
				winns1: this.state.winns1 + 1
			});
			this.reset();
		}
	};

	increment2 = () => {
		this.setState({ count2: this.state.count2 + 1 });

		if (this.state.count2 >= 11 && this.state.count2 - this.state.count1 >= 2) {
			console.log("Player 2 win!");
			this.setState({
				winns2: this.state.winns2 + 1
			});
			this.reset();
		}
	};

	reset = () => {
		this.setState({
			count1 : 0,
			count2 : 0,
		});
	}

	render() {
		return (
            <div class={style.home}>
                <Panel username="Conrad" count={this.state.count1} winns={this.state.winns1} increment={this.increment1}/>
                <Panel username="Paul" count={this.state.count2} winns={this.state.winns2} increment={this.increment2}/>
            </div>
		);
	}
}
