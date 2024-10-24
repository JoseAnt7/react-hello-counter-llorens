import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Number_counter } from "./numbers";

//create your first component
const Home = ({number, number2, number3, number4, number5, number6}) => {
	
	return (
		<div className="text-center">
			<div className="d-flex justify-content-center">
				<Number_counter value={<i class="fa-solid fa-clock"></i>}/>
				<Number_counter value={number6}/>
				<Number_counter value={number5}/>
				<Number_counter value={number4}/>
				<Number_counter value={number3}/>
				<Number_counter value={number2}/>
				<Number_counter value={number}/>
			</div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
