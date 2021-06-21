const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const dayNames = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thurday',
	'Friday',
	'Saturday',
	'Sunday',
];

function getTime() {
	let date = new Date(),
		min = date.getMinutes(),
		hour = date.getHours();

	return (
		'' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min)
	);
}

function getDate() {
	let date = new Date(),
		day = dayNames[date.getDay() - 1],
		dayNo = date.getDate(),
		month = monthNames[date.getMonth()],
		year = date.getFullYear();

	return '' + day + ' ' + dayNo + ' ' + month + ' ' + year;
}

window.onload = () => {
	document.getElementById('clock').innerHTML = getTime();
	document.getElementById('date').innerHTML = getDate();

	setInterval(() => {
		document.getElementById('clock').innerHTML = getTime();
	}, 100);
};
