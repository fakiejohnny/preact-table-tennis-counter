import { h, Component } from 'preact';
import style from './style';

import Panel from './../../components/panel';

export default class Home extends Component {

	render() {
		return (
            <div class={style.home}>
                <Panel username="Conrad"/>
                <Panel username="Paul"/>
            </div>
		);
	}
}
