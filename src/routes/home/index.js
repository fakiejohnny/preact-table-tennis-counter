import { h, Component } from 'preact';
import style from './style';

import Panel from './../../components/panel';

const Home = () => (
	<div class={style.home}>
		<Panel username="Conrad"/>
		<Panel username="Paul"/>
	</div>
);

export default Home;
