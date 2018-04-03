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

  //Darnita - 4/2/2018 - Mapping
var unicores = [
  {
    name: 'COMM 101',
    description: 'Oral Comm. & Pres.',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'ENGL 101',
    description: 'College Composition',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'UNIV 101',
    description: 'City-University Life',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 480',
    description: 'Senior Capstone',    
    credits: '3.0',
    needed: false,
    completed: false
  }
];

//code from dr voortman
  function getUnivCoreCourses(unicore) {
  var mapping1 = {};
  return mapping1[unicore];
}
function displaysCourses(createRow) {
  unicores.forEach((unicore) => {
    var unicoreCourses = getUnivCoreCourses(unicore.name);
    createRow(unicore, unicoreCourses);
  })
}

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
  {
    name: 'Investigate Science',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'Interpret Creative Works',
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
  {
    name: 'Understand People',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'Succeed in Business',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'Appreciate & Apply the Arts',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'Discover Technology',
    credits: '3.0',
    needed: false,
    completed: false
  }
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
        course_code: "BIOL 101",
        course_description: "General Biology I"
      },
      {
        course_code: "BIOL 102",
        course_description: "General Biology II"
      },
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "CHEM 101",
        course_description: "General Chemistry I"
      },
      {
        course_code: "NSET 110",
        course_description: "Intro to Natural Sciences I"
      },
      {
        course_code: "NSET 111",
        course_description: "Environmental Science"
      },
      {
        course_code: "NSET 120",
        course_description: "General Biology I"
      },
      {
        course_code: "NSET 122",
        course_description: "The Science of Light"
      },
      {
        course_code: "NSET 130",
        course_description: "Owner’s Manual for Human Body"
      },
      {
        course_code: "NSET 131",
        course_description: "Impacts of Microbes and Infectious Diseases on History"
      },
      {
        course_code: "NSET 140",
        course_description: "Chemistry in Daily Life"
      },
      {
        course_code: "NSET 181",
        course_description: "Astronomy, Space, and Time"
      },                             
      {
        course_code: "NSET 182",
        course_description: "Are We Alone? The Search for Life in the Universe"
      }              
    ],
    "Investigate Mathematics": [
      {
        course_code: "MATH 150",
        course_description: "The Mathematical Experience"
      },
      {
        course_code: "MATH 165",
        course_description: "Basic Algebra"
      },
      {
        course_code: "MATH 175",
        course_description: "Elementary Statistics"
      },
      {
        course_code: "MATH 180",
        course_description: "College Algebra"
      },
      {
        course_code: "MATH 181",
        course_description: "Pre-Calculus"
      },                  
      {
        course_code: "MATH 190",
        course_description: "Calculus 1"
      }              
    ], 
    "Interpret Creative Works": [
      {
        course_code: "CINE 202",
        course_description: "Children’s Literature"
      },
      {
        course_code: "EDUC 252",
        course_description: "Children’s Literature"
      },
      {
        course_code: "ENGL 120",
        course_description: "Introduction to Literary Studies"
      },
      {
        course_code: "ENGL 250",
        course_description: "World Lit: Drama, Poetry, Epic"
      },
      {
        course_code: "ENGL 251",
        course_description: "World Lit: Novels"
      },
      {
        course_code: "EDUC 252",
        course_description: "The Art of Creative Nonfiction"
      },
      {
        course_code: "ENGL 253",
        course_description: "The Art of Poetry"
      },
      {
        course_code: "ENGL 254",
        course_description: "The Art of Short Story"
      },
      {
        course_code: "ENGL 255",
        course_description: "Theoretical Approaches to the Study of Literature"
      },      
      {
        course_code: "JOUR 225",
        course_description: "Deconstructing the Story"
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
        course_code: "BMGT 204",
        course_description: "Salesmanship"
      },
      {
        course_code: "BMGT 205",
        course_description: "Principles of Marketing"
      },
      {
        course_code: "BMGT 234",
        course_description: "Ethical Leadership"
      },
      {
        course_code: "BMGT 271",
        course_description: "The Money Thing: Life and Finances During and After College"
      },      
      {
        course_code: "CMPS 330",
        course_description: "Electronic Commerce"
      },
      {
        course_code: "ECON 202",
        course_description: "Principles of Microeconomics"
      },
      {
        course_code: "ECON 203",
        course_description: "Economic History of the U.S."
      }              
    ], 
    "Appreciate & Apply the Arts": [
      {
        course_code: "ART 100",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "EDUC 228",
        course_description: "Intro to Visual Arts"
      },
      {
        course_code: "CINE 170",
        course_description: "Introduction to Screenwriting for NonMajors"
      },
      {
        course_code: "COMM 290",
        course_description: "Seminar in Media Studies"
      },      
      {
        course_code: "COPA 250",
        course_description: "Exploring the Arts"
      },
      {
        course_code: "COPA 252",
        course_description: "The Art of Creative Nonfiction"
      },
      {
        course_code: "COPA 253",
        course_description: "The Art of Poetry"
      },      
      {
        course_code: "COPA 254",
        course_description: "The Art of Short Story"
      },
      {
        course_code: "EDUC 251",
        course_description: "Art and Music in Teaching"
      },
      {
        course_code: "ENGL 200",
        course_description: "Creative Writing"
      },      
      {
        course_code: "PSYC 150",
        course_description: "Psychological Foundations"
      },
      {
        course_code: "MLNG 220",
        course_description: "French Literature in Translation"
      },
      {
        course_code: "MUS 101",
        course_description: "Music Appreciation"
      },      
      {
        course_code: "PHOT 101",
        course_description: "Photography for Non-Majors"
      },
      {
        course_code: "THEA 111",
        course_description: "Introduction to Acting"
      },            
      {
        course_code: "THEA 230",
        course_description: "Introduction to Theatrer"
      }              
    ],
    "Discover Technology": [
      {
        course_code: "CMPS 114",
        course_description: "Problem Solving with Info Tech"
      },
      {
        course_code: "EDUC 101",
        course_description: "Technological Literacy in Education for the 21st Century"
      },
      {
        course_code: "ETGR 205",
        course_description: "Engineering Technology Graphics"
      },
      {
        course_code: "JOUR 103",
        course_description: "Graphic Design I"
      },      
      {
        course_code: "NSET 101",
        course_description: "Intro to Natural Sciences and Technology"
      }              
    ]             
  };
  return mapping[theme];
}
function displayCourses(createRow) {
  themes.forEach((theme) => {
    var themeCourses = getThematicCourses(theme.name);
    createRow(theme, themeCourses);
  })
}

var majorReqs = [
  {
    name: 'MATH 175',
    description: 'Elementary Statistics',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'MATH 180',
    description: 'College Algebra (Investigate Math)',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'UNIV 101',
    description: 'Psych. Foundations (Understand People)',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'PSYC 150',
    description: 'Psych. Foundations (Understand People)',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'ACCT 101',
    description: 'Introductory Accounting I',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'ACCT 102',
    description: 'Introductory Accounting II',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 101',
    description: 'Introduction to Business',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 201',
    description: 'Business Law I',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'BMGT 202',
    description: 'Business Law II',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 205',
    description: 'Principals of Marketing',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 221',
    description: 'Bus. Comm. and Research',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'BMGT 300',
    description: 'Corporate Finance',    
    credits: '3.0',
    needed: false,
    completed: false
  },
    {
    name: 'BMGT 310',
    description: 'Management Science',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 417',
    description: 'Strategic Planning',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 160',
    description: 'Databases',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 161',
    description: 'Network and Security',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 162',
    description: 'Introduction to Programming',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 163',
    description: 'Business Analytics',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 260',
    description: 'Data Structurese',    
    credits: '3.0',
    needed: false,
    completed: false
  },
{
    name: 'CMPS 261',
    description: 'Server Management',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 262',
    description: 'Advanced Programming',
    credits: '3.0',
    needed: false,
    completed: false
    },
  {
    name: 'CMPS 480',
    description: 'Senior Capstone',    
    credits: '3.0',
    needed: false,
    completed: false
  }
];

//code from dr voortman
  function getMajorReqsCourses(majorReq) {
  var mapping3 = {};
  return mapping3[majorReq];
}
function display3Courses(createRow) {
  majorReqs.forEach((majorReq) => {
    var majorReqCourses =getMajorReqsCourses(majorReq.name);
    createRow(majorReq, majorReqCourses);
  })
}

var majorelecs = [
  {
    name: 'BMGT 380',
    description: 'Cooperative Education I',
    credits: '6.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 480',
    description: 'Cooperative Education II',
    credits: '6.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 355',
    description: 'Internship in Info Tech I',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 356',
    description: 'Internship in Info Tech II',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 360',
    description: 'Survey of Programming Languages',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 361',
    description: 'Web Application Development',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 362',
    description: 'Digital Security',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 363',
    description: 'Business Law I',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 364',
    description: 'NoSQL Databases',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'BMGT 205',
    description: 'Principals of Marketing',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 460',
    description: 'Mobile Application Development',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'BMGT 300',
    description: 'Corporate Finance',    
    credits: '3.0',
    needed: false,
    completed: false
  },
    {
    name: 'CMPS 460',
    description: 'Mobile Application Development',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 461',
    description: 'Big Data Applications',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 462',
    description: 'Data Mining',
    credits: '3.0',
    needed: false,
    completed: false
    },
    {
    name: 'CMPS 463',
    description: 'Entrepreneurship for Software Development',    
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'CMPS 464',
    description: 'Software Development for E-Commerce',
    credits: '3.0',
    needed: false,
    completed: false
  },
  {
    name: 'TBD',
    description: 'Special Topics/Independent Studye',    
    credits: '3.0',
    needed: false,
    completed: false
  }
];

//code from dr voortman
  function getMajCourses(majorelec) {
  var mapping4 = {};
  return mapping4[majorelec];
}
function display4Courses(createRow) {
  majorelecs.forEach((majorelec) => {
    var majorelecCourses = getMajCourses(majorelec.name);
    createRow(majorelec, majorelecCourses);
  })
}


var genelecs = [
  {
    name: 'General Elective 1',
    credits: '3.0',
    needed: true,
    completed: true
  },
  {
    name: 'General Elective 2',
    credits: '3.0',
    needed: true,
    completed: true
  },
  {
    name: 'General Elective 3',
    credits: '3.0',
    needed: false,
    completed: false
  }
];

  function getGenCourses(genelec) {
  var mapping5 = {
    "General Elective 1": [
      {
        course_code: "",
        course_description: "General Elective"
      }        
    ],
    "General Elective 2": [
      {
        course_code: "",
        course_description: "General Elective"
      }        
    ],
    "General Elective 3": [     
      {
        course_code: "",
        course_description: "General Elective"
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
    displaysCourses: displaysCourses,
    display3Courses: display3Courses,
    display4Courses: display4Courses,
    display5Courses: display5Courses,
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
