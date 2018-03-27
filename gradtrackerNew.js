  //If it is in the DOM, it can't

	// <!-- Core Courses Sum Function -->
    var total = 0;
    function creditsNeeded1(item){
        if(item.checked) {
           total+= parseInt(item.value);
        }
		else {
           total-= parseInt(item.value);
        }
        document.getElementById('core-need').innerHTML = total;
        document.getElementById('core-need').innerHTML = total;
    }
	var total1 = 0;
    function creditsEarned1(item){
        if(item.checked){
           total1+= parseInt(item.value);
        } else{
           total1-= parseInt(item.value);
        }
        document.getElementById('core-earn').innerHTML = total1;
        document.getElementById('core-earn').innerHTML = total1;
    }

	// <!-- Thematic Courses Sum Function -->
	var total2 = 0;
    function creditsNeeded2(item){
        if(item.checked) {
           total2+= parseInt(item.value);
        }
		else {
           total2-= parseInt(item.value);
        }
        document.getElementById('thematic-need').innerHTML = total2;
        document.getElementById('thematic-need').innerHTML = total2;
    }
	var total3 = 0;
    function creditsEarned2(item){
        if(item.checked){
           total3+= parseInt(item.value);
        } else{
           total3-= parseInt(item.value);
        }
        document.getElementById('thematic-earn').innerHTML = total3;
        document.getElementById('thematic-earn').innerHTML = total3;
    }

	// <!-- Sum Functions js starts here -->
	var total4 = 0;
    function creditsNeeded3(item){
        if(item.checked) {
           total4+= parseInt(item.value);
        }
		else {
           total4-= parseInt(item.value);
        }
        document.getElementById('major-need').innerHTML = total4;
        document.getElementById('major-need').innerHTML = total4;
    }
	var total5 = 0;
    function creditsEarned3(item){
        if(item.checked){
           total5+= parseInt(item.value);
        } else{
           total5-= parseInt(item.value);
        }
        document.getElementById('major-earn').innerHTML = total5;
        document.getElementById('major-earn').innerHTML = total5;
    }

	// <!-- IT Electives Sum Function -->
	var total6 = 0;
    function creditsNeeded4(item){
        if(item.checked) {
           total6+= parseInt(item.value);
        }
		else {
           total6-= parseInt(item.value);
        }
        document.getElementById('it-need').innerHTML = total6;
        document.getElementById('it-need').innerHTML = total6;
    }
	var total7 = 0;
    function creditsEarned4(item){
        if(item.checked){
           total7+= parseInt(item.value);
        } else{
           total7-= parseInt(item.value);
        }
        document.getElementById('it-earn').innerHTML = total7;
        document.getElementById('it-earn').innerHTML = total7;
    }

	// <!-- General Elective Sum Function -->
	var total8 = 0;
    function creditsNeeded5(item){
        if(item.checked) {
           total8+= parseInt(item.value);
        }
		else {
           total8-= parseInt(item.value);
        }
        document.getElementById('elective-need').innerHTML = total8;
        document.getElementById('elective-need').innerHTML = total8;
    }
	var total9 = 0;
    function creditsEarned5(item){
        if(item.checked){
           total9+= parseInt(item.value);
        } else{
           total9-= parseInt(item.value);
        }
        document.getElementById('elective-earn').innerHTML = total9;
        document.getElementById('elective-earn').innerHTML = total9;
    }

// jquery starts here
  $(function(){
    gradtracker.listen(function(){ //listens to model everything it changess
      $("#test").empty(); //empties the table
      var schedule = gradtracker.getSchedule(); //calls the function in gradtracker.js that returns the object in the schedule
      // console.log(schedule);
      var sp18 = schedule["SP 18"];
      // console.log(sp18);
      for (var i = 0; i < sp18.length; i++) {
        $("#test1").append("<tr><td>" + sp18[i] + "</td></tr>");
      }
    });

    gradtracker.listen(function(){ //listens to model everything it changes
      $("#test").empty(); //empties the table
      var catalog = gradtracker.getCatalog(); //calls the function in gradtracker.js that returns the object in the schedule
      console.log(catalog);
      var cmps160 = catalog["CMPS 160"];
      console.log(cmps160);
      var tr = $("#test").append("<tr>");

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
      for (var key in cmps160) {
        tr.append("<td>" + key + "</td>"); //adds object to the table
      }
      for (var course in catalog) {
        var tr = $("#test").append("<tr>");
        for (var key in catalog[course]) {
          console.log(key);
          tr.append("<td>" + catalog[course][key] + "</td>"); //adds object to the table
        }
      }
    });

    $("#course1-drop").click(function(){ //makes a change in the model
      gradtracker.addCourse("SP 18", "CMPS 160");
    });

    $("#test").change(function() {
        console.log("hello world");
        console.log($(this).val());
        gradtracker.addCourse("SP 18", $(this).val());
    });
// Hide and Show divs
    $(function(){
      //hides all divs except the main div onload of page
      $("#ctn2").hide();
      $("#ctn3").hide();
      $("#ctn4").hide();
      $("#ctn5").hide();
      //hides the main div onclick of undergrad button and shows undergrad page
      $("#undergrad").click(function(){
        $("#ctn1").hide();
        $("#ctn2").show();
      });
      //hides undergrad page onclick of home button and takes you back to main page
      $("#home").click(function(){
        $("#ctn1").show();
        $("#ctn2").hide();
      });
      //hides main page onclick of mba button and takes you to mba page
      $("#mba").click(function(){
        $("#ctn3").show();
        $("#ctn1").hide();
      });
      //hides mba page onclick of home button and takes you back to main page
      $("#home1").click(function(){
        $("#ctn1").show();
        $("#ctn3").hide();
      });
      //hides main page onclick of mba button and takes you to mba page
      $("#minor").click(function(){
        $("#ctn4").show();
        $("#ctn2").hide();
      });
      //hides mba page onclick of home button and takes you back to main page
      $("#home2").click(function(){
        $("#ctn1").show();
        $("#ctn4").hide();
      });
      $(".sched-button").click(function(){
        $("#ctn5").show();
        $("#ctn2").hide();
      });
      //hides mba page onclick of home button and takes you back to main page
      $("#home3").click(function(){
        $("#ctn1").show();
        $("#ctn5").hide();
      });
    });


//


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

  });
