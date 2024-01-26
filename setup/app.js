// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Loop over buttons using forEach and button event(e)
btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		// declare styles and call currentTarget to classlist
		const styles = e.currentTarget.classList;
		// If statements to set value
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}
		// Set value colors
		if (count < 0) {
			value.style.color = "red";
		}
		if (count > 0) {
			value.style.color = "green";
		}
		if (count === 0) {
			value.style.color = "black";
		}

		//Set value text to count
		value.textContent = count;
	});
});
