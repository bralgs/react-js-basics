import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import { Home } from "./components/Home";
import { Header } from "./components/Header";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home",
			homeMounted: true
		};
	}

	onGreet() {
		alert("Hello!");
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		let homeCmp = "";
		if (this.state.homeMounted) {
			homeCmp = (
				<Home
					name={"Max"}
					initialAge={27}
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName={this.state.homeLink}
				/>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">{homeCmp}</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button
							onClick={this.onChangeHomeMounted.bind(this)}
							className="btn btn-primary"
						>
							(Un)Mount Home Component
						</button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, window.document.getElementById("root"));
