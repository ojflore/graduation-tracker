// this is the model
// it should NOT contain any html or css
var gradtracker = (function() {

  // this is the internal state of the model
  // no one can access this directly
  var catalog = {
    "CMPS 160": {
      description: "Databases",
      credits: 3.0,
      prereq: []
    },
    "CMPS 162": {
      description: "Programming",
      credits: 3.0,
      prereq: ["CMPS 160"]
    }
  };

  var schedule = {
    "SP 18": ["CMPS 160"],
    "ZU 18": []
  };

var themes = [
  {
    name: 'Explore the World - Choice 1',
    credits: '3.0',
    needed: true,
    completed: true
  },
  {
    name: 'Explore the World - Choice 1',
    credits: '3.0',
    needed: true,
    completed: true
  },
  // {
  //   name: 'Investigate Science',
  //   credits: '3.0',
  //   needed: false,
  //   completed: false
  // },
  // {
  //   name: 'Investigate Mathematics',
  //   credits: '3.0',
  //   needed: false,
  //   completed: false
  // },
  // {
  //   name: 'Interpret Creative Works',
  //   credits: '3.0',
  //   needed: false,
  //   completed: false
  // },    
  {
    name: 'Understand People',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'Understand People',
    credits: '3.0',
    needed: false,
    completed: false
  },
// {
//     name: 'Succeed in Business',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   },
//   {
//     name: 'Appreciate & Apply the Arts',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   },
//   {
//     name: 'Discover Technology',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   },
//   {
//     name: 'COMM 101',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   },
//   {
//     name: 'ENGL 101',
//     credits: '3.0',
//     needed: false,
//     completed: false
//     },
//     {
//     name: 'UNIV 101',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   },
//   {
//     name: 'CMPS 480',
//     credits: '3.0',
//     needed: false,
//     completed: false
//   }
];
//code from dr voortman
  function getThematicCourses(theme) {
  var mapping = {
    "Explore the World - Choice 1": [
      {
        course_code: "ARBC 101",
        course_description: "Elementary Arabic I"
      },
      {
        course_code: "ARBC 102",
        course_description: "Elementary Arabic II"
      },
      {
        course_code: "ARBC 201",
        course_description: "Intermediate Arabic I"
      },
      {
        course_code: "ARBC 202",
        course_description: "Intermediate Arabic II"
      },
      {
        course_code: "ECON 201",
        course_description: "Principles of Macroeconomics"
      },
      {
        course_code: "FREN 101",
        course_description: "Elementary French I"
      },
      {
        course_code: "FREN 101",
        course_description: "Elementary French I"
      },
      {
        course_code: "FREN 102",
        course_description: "Elementary French II"
      },
      {
        course_code: "FREN 201",
        course_description: "Intermediate French I"
      },
      {
        course_code: "FREN 202",
        course_description: "Intermediate French II"
      },
      {
        course_code: "GCS 175",
        course_description: "Intro to Global Cultural Studies"
      },
      {
        course_code: "GCS 225",
        course_description: "Anthropology of Belief"
      },
      {
        course_code: "GCS 230",
        course_description: "Literature: A Global View"
      },
      {
        course_code: "GCS 295",
        course_description: "Special Topics in GCS"
      },
      {
        course_code: "GCS/MLNG 205",
        course_description: "Languages of the World"
      },
      {
        course_code: "HIST 201",
        course_description: "Western Civilization I"
      },
      {
        course_code: "HIST 202",
        course_description: "Western Civilization II"
      },
      {
        course_code: "HIST 255",
        course_description: "Military History"
      },
      {
        course_code: "MLNG 221",
        course_description: "Spanish Literature in Translation"
      },
      {
        course_code: "MLNG 225",
        course_description: "Representation of Minorities in World Literature"
      },
      {
        course_code: "MLNG 228",
        course_description: "Eastern European Literature/Culture"
      },
      {
        course_code: "PADM 210",
        course_description: "Public Administration"
      },
      {
        course_code: "POLS 205",
        course_description: "World Geography"
      },
      {
        course_code: "POLS 250",
        course_description: "Intro to Study of Gov’t Systems"
      },
      {
        course_code: "PHIL 100",
        course_description: "World Religions"
      },
      {
        course_code: "SOC 111",
        course_description: "World Cultures"
      },
      {
        course_code: "SOC/MLNG 260",
        course_description: "Japanese Culture"
      },
      {
        course_code: "SPAN 101",
        course_description: "Elementary Spanish I"
      },
      {
        course_code: "SPAN 102",
        course_description: "Elementary Spanish II"
      },
      {
        course_code: "SPAN 201 ",
        course_description: "Intermediate Spanish I"
      },
      {
        course_code: "SPAN 201 ",
        course_description: "Intermediate Spanish II"
      },
      {
        course_code: "THEA 225 ",
        course_description: "History Theatre I"
      },
      {
        course_code: "HEA 226",
        course_description: "History Theatre II"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ],
    "Investigate Science": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ],
    "Investigate Mathematics": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ], 
    "Interpret Creative Works": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ], 
    "Understand People": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "EDUC 228",
        course_description: "Educational Psychology"
      },
      {
        course_code: "HIST 203",
        course_description: "History of the United States I"
      },
      {
        course_code: "HIST 204",
        course_description: "Foundations in Feminism: Women’s History"
      },      
      {
        course_code: "HIST 206",
        course_description: "Foundations in Feminism: Women’s History"
      },

      {
        course_code: "HIST 220",
        course_description: "History of American Music"
      },
      {
        course_code: "POLS 102",
        course_description: "American National Government"
      },      
      {
        course_code: "PSYC 150",
        course_description: "Psychological Foundations"
      },

      {
        course_code: "PSYC 203",
        course_description: "Theories of Personality"
      },
      {
        course_code: "PSYC 214",
        course_description: "Psychology of Emotion"
      },

      {
        course_code: "PSYC 230",
        course_description: " Marriage and the Family"
      },
      {
        course_code: "SOCW 105",
        course_description: "Sociological Foundations"
      },
      {
        course_code: "SOCW 240",
        course_description: "Anthropological Approaches"
      }            
    ],
    "Succeed in Business": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ], 
    "Appreciate & Apply the Arts": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ],
    "Discover Technology": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "TRAN",
        course_description: "Approved Transfer"
      }              
    ]             
    // "Succeed in Business": [
    //   // ...
    //]
  };
  return mapping[theme];
}
function displayCourses(createRow) {
  themes.forEach((theme) => {
    const themeCourses = getThematicCourses(theme.name);
    createRow(theme, themeCourses);
  })
}

 function calculateCreditsNeeded(item, currentvalue, notify) {
  var total = 0;
    if (item.checked){
     total = parseInt(currentvalue) + parseInt(item.value);
    } else {
     total = parseInt(currentvalue) - parseInt(item.value);
    }
    //total = item.checked ? parseInt(total) + parseInt(item.value) : parseInt(total) - parseInt(item.value);
   notify(total);
 }
// var understandPeople = gradtracker.getThematicCourses("Understand People");
// for (var i = 0; i < understandPeople.length; i++) {
//   // add option to dropdown
//   console.log(understandPeople[i].course_code + " " + understandPeople[i].course_code);
// }



// var student = {
//   university_core: {
//       "Understand People": null,
//       "Succeed in Business": "BMGT 101"
//     },
//     major_requirements: {
//
//     }
// };

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
     listeners[i](grid);
   }
 }

  //Darnita - 3/26/2018 - Line 1072-ish "Additional Courses"
  var CMPS_elecs_data = [
    [ 'CMPS 260', 'TEST 1 Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 260','TEST 2 Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
  CMPS_elecs_data.forEach( function( rowData ){
    $('#CMPS_elecs').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var uni_core_data = [
    [ 'COMM 101', 'Oral Comm. & Pres.', '3.0', '<input type="checkbox"/>' ],
    [ 'ENGL 101','College Composition', '3.0', '<input type="checkbox"/>' ],
    [ 'UNIV 101', 'City-University Life', '3.0', '<input type="checkbox"/>' ],
    [ 'CMPS 480','Senior Capstone', '3.0', '<input type="checkbox"/>' ],
  ];
  uni_core_data.forEach( function( rowData ){
    $('#uni_core').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var theme_undergrad_data = [
    [ 'Explore the World - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Explore the World - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Investigate Science', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Investigate Mathematics', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Interpret Creative Works', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Understand People - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Understand People - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Succeed in Business', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Appreciate & Apply the Arts', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Discover Technology', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
  theme_undergrad_data.forEach( function( rowData ){
    $('#theme_undergrad').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var major_req_data = [
    [ 'MATH 175', 'Elementary Statistics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MATH 180', 'College Algebra (Investigate Math)', 'C', 'Thematic', 'Thematic' ],
    [ 'PSYC 150', 'Psych. Foundations (Understand People)', 'C', 'Thematic', 'Thematic' ],
    [ 'ACCT 101', 'Introductory Accounting I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'ACCT 102', 'Introductory Accounting II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 101', 'Introduction to Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 201', 'Business Law I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 202', 'Business Law II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 205', 'Principals of Marketing', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 208', 'Principles of Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 221', 'Bus. Comm. and Research', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 300', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 310', 'Management Science', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 417', 'Strategic Planning', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 160', 'Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 161', 'Network and Security', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 162', 'Introduction to Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 163', 'Business Analytics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 260', 'Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 261', 'Server Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 262', 'Advanced Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 480', 'Senior Project', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
  major_req_data.forEach( function( rowData ){
    $('#major_req').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  //where to put "creditsNeeded4(this)" for calculations. Onclick is HTML
  var major_elec_data = [
    [ 'BMGT 380', 'Cooperative Education I', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'BMGT 480', 'Cooperative Education II', '6', 'Thematic', 'Thematic' ],
    [ 'CMPS 355', 'Internship in Info Tech I', '3', 'Thematic', 'Thematic' ],
    [ 'CMPS 356', 'Internship in Info Tech II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 360', 'Survey of Programming Languages', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 361', 'Web Application Developmen', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 362', 'Advanced Networking', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 363', 'Digital Security', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 364', 'NoSQL Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 460', 'Mobile Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 461', 'Big Data Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 462', 'Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 463', 'Entrepreneurship for Software Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 464', 'Software Development for E-Commerce', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'TBD', 'Special Topics/Independent Study', '1-6', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
major_elec_data.forEach( function( rowData ){
    $('#major_elec').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var CMPS_gen_data = [
    [ 'TestGen Elective 1', 'Need Dropdown', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'TestGen Elective 2', 'Need Dropdown', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'TestGen Elective 2', 'Neeed Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
  CMPS_gen_data.forEach( function( rowData ){
    $('#CMPS_gen').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var theme_minor_data = [
    [ 'Required courses - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Required courses - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Required courses - Choice 3', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'Required courses - Choice 4', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
theme_minor_data.forEach( function( rowData ){
    $('#theme_minor').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var CMPS_elec_data = [
    [ 'CMPS 260', 'Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 261', 'Server Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 262', 'Advanced Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 480', 'Senior Project', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 355', 'Cooperative Education II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 356', 'Internship in Info Tech I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 360', 'Internship in Info Tech II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 361', 'Survey of Programming Languages', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 362', 'Web Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 363', 'Networking', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 364', 'NoSQL Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 460', 'Mobile Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 461', 'Big Data Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 462', 'Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 463', 'Entrepreneurship for Software Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'CMPS 464', 'Software Development for E-Commerce', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'TBD', 'Special Topics/Independent Study', '1-6', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
CMPS_elec_data.forEach( function( rowData ){
    $('#CMPS_elec').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })
  //line 502
  var theme_MBA_data = [
    [ 'MBA 511', 'Accounting for Managers', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 570', 'Global Environment of Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 571', 'Legal Environment of Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 572', 'Marketing', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 573', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 574', 'Organizational Behaviors', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 576 or 540', 'Quanitative Methods or Statistics and Quanitative Methods', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 578', 'Managerial Economics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
theme_MBA_data.forEach( function( rowData ){
    $('#theme_MBA').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var theme_analytics_data = [
    [ 'MBA 542', 'Business Analytics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 543', 'Data Analysis and Visualization', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 544', 'Applied Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 595', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
theme_analytics_data.forEach( function( rowData ){
    $('#theme_analytics').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })

  var theme_MIS_data = [
    [ 'MBA 580', 'Management Info. Systems', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 581', 'Dev. of Support Networks', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 582', 'Dbase Mgmt. and Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
    [ 'MBA 597', 'Special Topics Info. Systems', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
  ];
theme_MIS_data.forEach( function( rowData ){
    $('#theme_MIS').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
  })


// store all the listeners
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
    listeners[i](grid);
  }
}
  // all functionality is accessed through the methods below
  return {
    listen: listen,
    notify: notify,
    getSchedule: getSchedule,
    addCourse: addCourse,
    getCatalog: getCatalog,
    calculateCreditsNeeded: calculateCreditsNeeded,
    displayCourses: displayCourses
  };

  /*
    var catalog = {
      courseName1: {
        title: 'A',
        some: 'B',
        //handle special within the loop in the javascript
        checkbox: 'special',
      },
      courseName2: {
        title: 'C',
        some: 'D'
      }
    }
  */

})();
