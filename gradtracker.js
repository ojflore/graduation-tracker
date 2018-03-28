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


//code from dr voortman
  function getThematicCourses(theme) {
  var mapping = {
    "Understand People": [
      {
        course_code: "EDUC 220",
        course_description: "Family and Community Diversity"
      },
      {
        course_code: "EDUC 228",
        course_description: "Educational Psychology"
      },
    ],
    "Succeed in Business": [
      // ...
    ]
  };
  return mapping[theme];
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
//   var CMPS_elecs_data = [
//     [ 'CMPS 260', 'TEST 1 Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 260','TEST 2 Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
//   CMPS_elecs_data.forEach( function( rowData ){
//     $('#CMPS_elecs').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var uni_core_data = [
//     [ 'COMM 101', 'Oral Comm. & Pres.', '3.0', '<input type="checkbox"/>' ],
//     [ 'ENGL 101','College Composition', '3.0', '<input type="checkbox"/>' ],
//     [ 'UNIV 101', 'City-University Life', '3.0', '<input type="checkbox"/>' ],
//     [ 'CMPS 480','Senior Capstone', '3.0', '<input type="checkbox"/>' ],
//   ];
//   uni_core_data.forEach( function( rowData ){
//     $('#uni_core').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var theme_undergrad_data = [
//     [ 'Explore the World - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Explore the World - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Investigate Science', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Investigate Mathematics', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Interpret Creative Works', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Understand People - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Understand People - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Succeed in Business', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Appreciate & Apply the Arts', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Discover Technology', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
//   theme_undergrad_data.forEach( function( rowData ){
//     $('#theme_undergrad').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var major_req_data = [
//     [ 'MATH 175', 'Elementary Statistics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MATH 180', 'College Algebra (Investigate Math)', 'C', 'Thematic', 'Thematic' ],
//     [ 'PSYC 150', 'Psych. Foundations (Understand People)', 'C', 'Thematic', 'Thematic' ],
//     [ 'ACCT 101', 'Introductory Accounting I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'ACCT 102', 'Introductory Accounting II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 101', 'Introduction to Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 201', 'Business Law I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 202', 'Business Law II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 205', 'Principals of Marketing', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 208', 'Principles of Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 221', 'Bus. Comm. and Research', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 300', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 310', 'Management Science', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 417', 'Strategic Planning', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 160', 'Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 161', 'Network and Security', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 162', 'Introduction to Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 163', 'Business Analytics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 260', 'Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 261', 'Server Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 262', 'Advanced Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 480', 'Senior Project', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
//   major_req_data.forEach( function( rowData ){
//     $('#major_req').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   //where to put "creditsNeeded4(this)" for calculations. Onclick is HTML
//   var major_elec_data = [
//     [ 'BMGT 380', 'Cooperative Education I', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'BMGT 480', 'Cooperative Education II', '6', 'Thematic', 'Thematic' ],
//     [ 'CMPS 355', 'Internship in Info Tech I', '3', 'Thematic', 'Thematic' ],
//     [ 'CMPS 356', 'Internship in Info Tech II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 360', 'Survey of Programming Languages', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 361', 'Web Application Developmen', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 362', 'Advanced Networking', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 363', 'Digital Security', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 364', 'NoSQL Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 460', 'Mobile Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 461', 'Big Data Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 462', 'Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 463', 'Entrepreneurship for Software Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 464', 'Software Development for E-Commerce', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'TBD', 'Special Topics/Independent Study', '1-6', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// major_elec_data.forEach( function( rowData ){
//     $('#major_elec').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var CMPS_gen_data = [
//     [ 'TestGen Elective 1', 'Need Dropdown', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'TestGen Elective 2', 'Need Dropdown', '6.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'TestGen Elective 2', 'Neeed Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
//   CMPS_gen_data.forEach( function( rowData ){
//     $('#CMPS_gen').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var theme_minor_data = [
//     [ 'Required courses - Choice 1', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Required courses - Choice 2', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Required courses - Choice 3', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'Required courses - Choice 4', 'Need Dropdown', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// theme_minor_data.forEach( function( rowData ){
//     $('#theme_minor').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var CMPS_elec_data = [
//     [ 'CMPS 260', 'Data Structures', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 261', 'Server Management', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 262', 'Advanced Programming', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 480', 'Senior Project', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 355', 'Cooperative Education II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 356', 'Internship in Info Tech I', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 360', 'Internship in Info Tech II', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 361', 'Survey of Programming Languages', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 362', 'Web Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 363', 'Networking', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 364', 'NoSQL Databases', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 460', 'Mobile Application Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 461', 'Big Data Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 462', 'Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 463', 'Entrepreneurship for Software Development', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'CMPS 464', 'Software Development for E-Commerce', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'TBD', 'Special Topics/Independent Study', '1-6', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// CMPS_elec_data.forEach( function( rowData ){
//     $('#CMPS_elec').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//   //line 502
//   var theme_MBA_data = [
//     [ 'MBA 511', 'Accounting for Managers', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 570', 'Global Environment of Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 571', 'Legal Environment of Business', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 572', 'Marketing', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 573', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 574', 'Organizational Behaviors', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 576 or 540', 'Quanitative Methods or Statistics and Quanitative Methods', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 578', 'Managerial Economics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// theme_MBA_data.forEach( function( rowData ){
//     $('#theme_MBA').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var theme_analytics_data = [
//     [ 'MBA 542', 'Business Analytics', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 543', 'Data Analysis and Visualization', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 544', 'Applied Data Mining', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 595', 'Corporate Finance', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// theme_analytics_data.forEach( function( rowData ){
//     $('#theme_analytics').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
//
//   var theme_MIS_data = [
//     [ 'MBA 580', 'Management Info. Systems', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 581', 'Dev. of Support Networks', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 582', 'Dbase Mgmt. and Applications', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//     [ 'MBA 597', 'Special Topics Info. Systems', '3.0', '<input type="checkbox"/>','<input type="checkbox"/>' ],
//   ];
// theme_MIS_data.forEach( function( rowData ){
//     $('#theme_MIS').append('<tr><td>' + rowData.join('</td><td>') + '</td></tr>')
//   })
// });

  // all functionality is accessed through the methods below
  return {
    listen: listen,
    notify: notify,
    getSchedule: getSchedule,
    addCourse: addCourse,
    getCatalog: getCatalog
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
