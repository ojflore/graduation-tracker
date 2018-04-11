// this is the model
// it should NOT contain any html or css
var gradtracker = (function() {

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

  function addCourse(term, course) { //adds course to the schedule
    schedule[term].push(course);
    notify();
  }

var genelecs = [
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

  function getGenCourses(genelec) {
    console.log(genelec);
  var mapping5 = {
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
  return mapping5[genelec];
}

  function display5Courses(createRow) {
    genelecs.forEach((genelec) => {
      var genelecCourses = getGenCourses(genelec.name);
      createRow(genelec, genelecCourses);
    })
  }

  // function displayFall(createRow) {
  //   fallSched18.forEach((fallSched) => {
  //     var fallScheduler = getFallCourses(fallSched.name);
  //     createRow(fallSched, fallScheduler);
  //   })
  // }

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

  return {
    listen: listen,
    notify: notify,
    getSchedule: getSchedule,
    addCourse: addCourse,
    getCatalog: getCatalog,
    display5Courses: display5Courses
  };
})();