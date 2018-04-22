// this is the modeltest
// it should NOT contain any html or css
/*------------------------------------------------------------------- */
/* The data */
var gradtracker = (function () {
	// this is the internal state of the model
	// no one can access this directly
	var schedule = {
		"FA 18": {
			"CMPS 260": {

			}
		}
	}
	var catalog = {
		"IT Core Courses": {
			"CMPS 160": {
				Description: "Databases",
				Prerequisites: [],
				Credits: 3.0,
				Semester: ["FA"]
			},
			"CMPS 161": {
				Description: "Network and Security",
				Prerequisites: [],
				Credits: 3.0,
				Semester: ["FA"]
			},
			"CMPS 162": {
				Description: "Intro to Programming",
				Prerequisites: ["CMPS 160"],
				Credits: 3.0,
				Semester: ["SP"]
			},
			"CMPS 163": {
				Description: "Business Analytics",
				Prerequisites: [],
				Credits: 3.0
			},
			"CMPS 260": {
				Description: "Data Structures",
				Prerequisites: ["CMPS 162"],
				Credits: 3.0
			},
			"CMPS 261": {
				Description: "Server Management",
				Prerequisites: ["CMPS 161"],
				Credits: 3.0
			},
			"CMPS 262": {
				Description: "Advanced Programming",
				Prerequisites: ["CMPS 260"],
				Credits: 3.0
			},
			"CMPS 355": {
				Description: "Internship I",
				Prerequisites: ["Junior Standing"],
				Credits: 3.0
			},
			"CMPS 356": {
				Description: "Internship II",
				Prerequisites: ["Junior Standing"],
				Credits: 3.0
			},
			"CMPS 360": {
				Description: "Survey of Programming Languages",
				Prerequisites: ["CMPS 261 and CMPS 262"],
				Credits: 3.0
			},
			"CMPS 361": {
				Description: "Web Application Development",
				Prerequisites: ["CMPS 261 and CMPS 262"],
				Credits: 3.0
			},
			"CMPS 362": {
				Description: "Networking",
				Prerequisites: ["CMPS 161"],
				Credits: 3.0
			},
			"CMPS 363": {
				Description: "Digital Security",
				Prerequisites: ["CMPS 161"],
				Credits: 3.0
			},
			"CMPS 364": {
				Description: "NoSQL Databases",
				Prerequisites: ["CMPS 163 and CMPS 261"],
				Credits: 3.0
			},
			"CMPS 460": {
				Description: "Mobile Application Development",
				Prerequisites: ["CMPS 361"],
				Credits: 3.0
			},
			"CMPS 461": {
				Description: "Big Data Applications",
				Prerequisites: ["CMPS 364"],
				Credits: 3.0
			},
			"CMPS 462": {
				Description: "Data Mining",
				Prerequisites: ["CMPS163, CMPS261, CMPS262"],
				Credits: 3.0
			},
			"CMPS 463": {
				Description: "Entrepreneurship for Software Developers",
				Prerequisites: ["CMPS 163 and CMPS 361"],
				Credits: 3.0
			},
			"CMPS 464": {
				Description: "Software Development for E-Commerce",
				Prerequisites: ["CMPS 163 and CMPS 361"],
				Credits: 3.0
			},
			"CMPS 480": {
				Description: "Senior Project",
				Prerequisites: ["All IT Core Classes"],
				Credits: 3.0
			},
			"TBD": {
				Description: "Special Topics/Independent Study",
				Prerequisites: ["See Specific Course Description"],
				Credits: 3.0
			},
		}
	};

	var schedule = {
		"SP 18": ["CMPS 162", "CMPS 163", "CMPS 262", "CMPS 263"],
		"ZU 18": []
	};

	function getCatalog() { //gets information on the schedule
		return catalog;
	}

	function getSchedule() { //gets information on the schedule
		return schedule;
	}

	let state = {
		catalogView: ""
	}

	function setCatalogView(catalog) {
		state.catalogView = catalog;
	}

	// function GetUndergraduateCatalog() {
	// 	return UndergraduateCatalog;
	// }

	function getCategories() {
		if (state.catalogView === "undergrad") {
			return UndergraduateCatalog.categories;
		} else if (state.catalogView === "mba") {
			return MBACatalog.categories;
		}
		else if (state.catalogView === "minor") {
			return minorCatalog.categories;
		} else {
			// display error message
		}
	}

	function getTitle() {
		if (state.catalogView === "undergrad") {
			return UndergraduateCatalog.title;
		} else if (state.catalogView === "mba") {
			return MBACatalog.title;
		}
		else if (state.catalogView === "minor") {
			return minorCatalog.title;
		} else {
			// display error message
		}
	}

	function getValue() {
		if (state.catalogView === "undergrad") {
			return UndergraduateCatalog.value;
		} else if (state.catalogView === "mba") {
			return MBACatalog.value;
		}
		else if (state.catalogView === "minor") {
			return minorCatalog.value;
		} else {
			// display error message
		}
	}

	function addCourse(term, course) { //adds course to the schedule
		schedule[term].push(course);
		notify();
	}

	var schedules = [
		{
			name: 'CMPS 160',
			credits: '3.0'
			// needed: true,
			// completed: true
		},
		{
			name: 'CMPS 161',
			credits: ''
			// needed: true,
			// completed: true
		},
		{
			name: 'CMPS 260',
			credits: ''
			// needed: false,
			// completed: false
		},
		{
			name: 'CMPS 361',
			credits: ''
			// needed: false,
			// completed: false
		},
		{
			name: 'CMPS 363',
			credits: ''
			// needed: false,
			// completed: false
		}
	];

	//FALL
	function getScheduleCourses(schedule) {
		console.log(schedule);
		var mappingSchedule = {
			"CMPS 160": [
				{
					course_code: "160",
					course_description: "Databases"
				}
			],
			"CMPS 161": [
				{
					course_code: "161",
					course_description: "Network and Security"
				}
			],
			"CMPS 260": [
				{
					course_code: "260",
					course_description: "Data Structures"
				}
			],
			"CMPS 361": [
				{
					course_code: "361",
					course_description: "Web Application Development"
				}
			],
			"CMPS 363": [
				{
					course_code: "363",
					course_description: "Digital Security"
				}
			]
		};
		return mappingSchedule[schedule];
	}

	function displaySchedule(createRow) {
		schedules.forEach((schedule) => {
			var scheduleCourses = getScheduleCourses(schedule.name);
			createRow(schedule, scheduleCourses);
		})
	}

	var schedulesSpring = [
		{
			name: 'CMPS 162',
			credits: '3.0'
			// needed: true,
			// completed: true
		},
		{
			name: 'CMPS 163',
			credits: ''
			// needed: true,
			// completed: true
		},
		{
			name: 'CMPS 261',
			credits: ''
			// needed: false,
			// completed: false
		},
		{
			name: 'CMPS 262',
			credits: ''
			// needed: false,
			// completed: false
		},
		{
			name: 'CMPS 480',
			credits: ''
			// needed: false,
			// completed: false
		}
	];

	//SPRING
	function getScheduleCoursesSpring(spring) {
		console.log(spring);
		var mappingScheduleSpring = {
			"CMPS 162": [
				{
					course_code: "162",
					course_description: "Intro to Programming"
				}
			],
			"CMPS 163": [
				{
					course_code: "163",
					course_description: "Business Analytics"
				}
			],
			"CMPS 261": [
				{
					course_code: "261",
					course_description: "Server Management"
				}
			],
			"CMPS 262": [
				{
					course_code: "262",
					course_description: "Advanced Programming"
				}
			],
			"CMPS 480": [
				{
					course_code: "480",
					course_description: "Senior Project"
				}
			]
		};
		return mappingScheduleSpring[spring];
	}

	function displayScheduleSpring(createRow) {
		schedules.forEach((spring) => {
			var springCourses = getScheduleCoursesSpring(spring.name);
			createRow(spring, springCourses);
		})
	}

	// we have to call all of them if something changes
	var listeners = [];

	// this function registers/adds a listener
	function listen(cb) {
		// collect them in the listeners array
		listeners.push(cb);
	}

	// notify all listeners of a change to the grid
	function notify() {
		// iterate through the array and call the listen callback function
		for (var i = 0; i < listeners.length; i++) {
			// call the function
			listeners[i](schedule);
		}
	}
// //////////////////////////// BEGIN DARNITA -  ///////////////////////////////////////////////

	function checkboxclick(courseSelection) {
		alert(courseSelection);

		if (courseSelection.isChecked === 'checked') {
			courseSelection.course.completed = true;
		} else {
			courseSelection.course.completed = false;
		}
	}

	function getTotalCreditsEarned(courses) {
		let total = 0;

		//console.log(courses);

		// this is an example. you need to pass in the correct course
		courses.forEach(course => {
			if (course.completed) {
				total += course.credits;
			}
		});

		return total;
	}

var getCheckBox = document.getElementsByClassName('checkbox');
function selectAll(SelectAllCheckBox){
var i = 0;
//debugger;
	if (SelectAllCheckBox.checked) {
		while (i < getCheckBox.length){
			getCheckBox[i].checked = true;
			 i++
		}
	}
	else{
		while(i < getCheckBox.length){
			getCheckBox[i].checked = false;
			i++
		}
	}
}
// //////////////////////////// END DARNITA -  ///////////////////////////////////////////////
	return {
		listen: listen,
		notify: notify,
		getSchedule: getSchedule,
		addCourse: addCourse,
		getCatalog: getCatalog,
		setCatalogView: setCatalogView,
		getCategories: getCategories,
		getTitle : getTitle,
		getValue : getValue,
		displaySchedule: displaySchedule,
		displayScheduleSpring: displayScheduleSpring,
		checkboxclick: checkboxclick,
		selectAll: selectAll,
		getTotalCreditsEarned: getTotalCreditsEarned
	};
})();
