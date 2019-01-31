import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="bigCounter">
			<div className="calendar" />

			<div className="four">4</div>
			<div className="three">3</div>
			<div className="two">2</div>
			<div className="one">1</div>
		</div>
		);
	}
}
