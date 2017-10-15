var titles = document.getElementsByClassName('jobtitle');


var job_general = {
	"Default":"35.0",
	"Representative":"65.0",
	"Officer":"1.0",
	"Analyst":"11.0",
	"Coordinator":"49.0",
	"Technician":"36.0",
	"Planner":"13.0",
	"Accountant":"75.0",
	"Specialist":"25.0",
	"Developer":"40.0",
	"Manager":"24.0",
	"Agent":"46.0",
	"Designer":"25.0",
	"Associate":"33.0",
	"Administrator":"48.0",
	"Specialist":"37.0",
	"Clerk":"86.0"
};

// use regex to make more generalizable

for (var i = 0, l = titles.length; i < l; i++) {
	var prob = job_general['Default'];
	title = titles[i].innerText;
	for(job in job_general){
		var re = new RegExp(job);
		if(re.test(title) == true){
			prob = job_general[job];
		}
	}

	var div = document.createElement("div");
	sponsor = titles[i].classList.contains("turnstileLink");
	div.className += " sjcl";
	sibling = titles[i].nextSibling;

	if (sponsor == true) {
		sibling = titles[i].parentElement.getElementsByClassName('sjcl')[0];
	}

	titles[i].parentElement.insertBefore(div,sibling);
	div.innerText=prob + "% of this job is automatable.";
	div.style.fontWeight = 'bold';

	var color = 'black'

	if (prob <= 30) {
		color = 'limegreen'
	} else if (prob > 60) {
		color = 'red'
	}

	div.style.color = color
}
