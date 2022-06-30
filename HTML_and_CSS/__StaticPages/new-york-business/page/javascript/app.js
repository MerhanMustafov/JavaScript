const circles = document.getElementsByClassName("circle");
console.log(circles);

[...circles].forEach((circle) => {
	circle.addEventListener("mouseover", (event) => {
		let heroSection = document.getElementsByClassName("hero");
		heroSection = heroSection[0];

		let title = [...document.getElementsByClassName("title")][0];
		let sub_title = [...document.getElementsByClassName("sub-title")][0];

		if ([...circles].indexOf(circle) == 0) {
			heroSection.style.backgroundImage =
				"linear-gradient(rgb(0, 0, 5, 0.5), rgb(0, 0, 5, 0.5)), url(./images/NYC.jpg)";

			title.style.color = "rgb(189, 189, 189)";
			sub_title.style.color = "rgb(211, 211, 211)";
		} else if ([...circles].indexOf(circle) == 1) {
			heroSection.style.backgroundImage =
				"linear-gradient(rgb(0, 0, 5, 0.5), rgb(0, 0, 5, 0.5)), url(./images/newyork_city.jpg)";

			title.style.color = "white";
			sub_title.style.color = "white";
		} else {
			heroSection.style.backgroundImage =
				"linear-gradient(rgb(0, 0, 5, 0.5), rgb(0, 0, 5, 0.5)), url(./images/new-york-city1.jpg)";

			title.style.color = "#bfd9ff";
			sub_title.style.color = "#bfd9ff";
		}
	});
});
