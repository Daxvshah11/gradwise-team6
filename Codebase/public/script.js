// COURSES
function submitForm_AC(event) {
  event.preventDefault();
  const course_name = document.getElementById('course_name').value;
  data = { course_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_AC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {

      if (data.affectedRows > 0) {
        alert("Course Added Successfully")
      }
      else {
        alert("Course Already Exists")
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function populateOldCourseName() {
  const selectElement = document.getElementById('course_name_upd_old');

  const response = await fetch('/getCourses');
  const courses = await response.json();

  courses.courses.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.course_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_UC(event) {
  event.preventDefault();
  const course_name_old = document.getElementById('course_name_upd_old').value;
  const course_name_new = document.getElementById('course_name_upd_new').value;

  const data = { course_name_old, course_name_new };

  fetch('/submit_UC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert("Course Updated Successfully");
      } else {
        alert("Course to be Updated Not Found");
      }
    })
    .catch(error => console.error('Error:', error));
}

async function populateOldCourseName1() {
  // event.preventDefault();
  const selectElement = document.getElementById('course_name_del');

  const response = await fetch('/getCourses');
  const courses = await response.json();

  courses.courses.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.course_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_DC(event) {
  event.preventDefault();
  const course_name = document.getElementById('course_name_del').value;
  data = { course_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_DC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Course Deleted Successfully")
      } else {
        alert("Course to be Deleted Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
function submitForm_RC(event) {
  event.preventDefault()

  fetch('/submit_RC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    //body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.rows.length) {
        // Create a table
        var table = '<table border="1"><tr><th>Course Name</th></tr>';

        // Loop through the data and add rows to the table
        for (var i = 0; i < data.rows.length; i++) {
          table += '<tr><td>' + data.rows[i].course_name + '</td></tr>';
        }

        // Close the table tag
        table += '</table>';

        // Display the table inside the "read_output" div
        document.getElementById('read_output').innerHTML = table;
      }
      else {
        alert("No Courses Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
// MODULES
async function populateOldCourseName2() {
  const selectElement = document.getElementById('course_name_link');

  const response = await fetch('/getCourses');
  const courses = await response.json();

  courses.courses.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.course_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_AM(event) {
  event.preventDefault();
  const Module_name = document.getElementById('module_name').value;
  data = { Module_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_AM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {

      if (data.affectedRows > 0) {
        alert("Module Added Successfully")
      }
      else {
        alert("Module Already Exists")
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
async function populateOldModuleName() {
  const selectElement = document.getElementById('module_name_upd_old');

  const response = await fetch('/getModules');
  const modules = await response.json();
  console.log(modules);

  modules.modules.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.module_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_UM(event) {
  event.preventDefault();
  const Module_name_old = document.getElementById('module_name_upd_old').value;
  const Module_name_new = document.getElementById('module_name_upd_new').value;

  data = { Module_name_old, Module_name_new }

  console.log("data = ")
  console.log(data)

  fetch('/submit_UM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Module Updated Successfully")
      } else {
        alert("Module to be Updated Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
async function populateOldModuleName1() {
  const selectElement = document.getElementById('module_name_del');

  const response = await fetch('/getModules');
  const modules = await response.json();
  console.log(modules);

  modules.modules.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.module_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_DM(event) {
  event.preventDefault();
  const Module_name = document.getElementById('module_name_del').value;
  data = { Module_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_DM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Module Deleted Successfully")
      } else {
        alert("Module to be Deleted Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
function submitForm_RM(event) {
  event.preventDefault()

  fetch('/submit_RM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.rows.length) {
        // Create a table
        var table = '<table border="1"><tr><th>Module Name</th></tr>';

        // Loop through the data and add rows to the table
        for (var i = 0; i < data.rows.length; i++) {
          table += '<tr><td>' + data.rows[i].module_name + '</td></tr>';
        }

        // Close the table tag
        table += '</table>';

        // Display the table inside the "read_output" div
        document.getElementById('read_output').innerHTML = table;
      }
      else {
        alert("No Modules Found")
      }
    })
    .catch(error => console.error('Error:', error));
}

async function populateOldModuleName2() {
  const selectElement = document.getElementById('module_name_cou_link');

  const response = await fetch('/getModules');
  const modules = await response.json();
  console.log(modules);

  modules.modules.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.module_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
async function populateOldModuleName3() {
  const selectElement = document.getElementById('module_name_ss_link');

  const response = await fetch('/getModules');
  const modules = await response.json();
  console.log(modules);

  modules.modules.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.module_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_ACML(event) {
  event.preventDefault();
  const Module_name = document.getElementById('module_name_cou_link').value;
  const Course_name = document.getElementById('course_name_mod_link').value;
  data = { Module_name, Course_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_ACML', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Module added to Course Successfully")
      } else {
        alert("Module could not be added to Course")
      }
    })
    .catch(error => console.error('Error:', error));
}
// SUBSKILLS
function submitForm_AS(event) {
  event.preventDefault();
  const skill_name = document.getElementById('subskill_name').value;
  data = { skill_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_AS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {

      if (data.affectedRows > 0) {
        alert("skill Added Successfully")
      }
      else {
        alert("skill Already Exists")
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function populateOldSubskillName() {
  const selectElement = document.getElementById('subskill_name_upd_old');

  const response = await fetch('/getSubskills');
  const subskills = await response.json();

  subskills.subskills.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.subskill_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_US(event) {
  event.preventDefault();
  const skill_name_old = document.getElementById('subskill_name_upd_old').value;
  const skill_name_new = document.getElementById('subskill_name_upd_new').value;

  data = { skill_name_old, skill_name_new }

  console.log("data = ")
  console.log(data)

  fetch('/submit_US', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("subskill Updated Successfully")
      } else {
        alert("subskill to be Updated Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
async function populateOldSubskillName1() {
  const selectElement = document.getElementById('subskill_name_del');

  const response = await fetch('/getSubskills');
  const subskills = await response.json();

  subskills.subskills.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.subskill_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_DS(event) {
  event.preventDefault();
  const skill_name = document.getElementById('subskill_name_del').value;
  data = { skill_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_DS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("skill Deleted Successfully")
      } else {
        alert("skill to be Deleted Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
function submitForm_RS(event) {
  event.preventDefault()

  fetch('/submit_RS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.rows.length) {
        // Create a table
        var table = '<table border="1"><tr><th>skill Name</th></tr>';

        // Loop through the data and add rows to the table
        for (var i = 0; i < data.rows.length; i++) {
          table += '<tr><td>' + data.rows[i].subskill_name + '</td></tr>';
        }

        // Close the table tag
        table += '</table>';

        // Display the table inside the "read_output" div
        document.getElementById('read_output').innerHTML = table;
      }
      else {
        alert("No skills Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
async function populateOldSubskillName2() {
  const selectElement = document.getElementById('ss_name_module_link');

  const response = await fetch('/getSubskills');
  const subskills = await response.json();

  subskills.subskills.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.subskill_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
async function populateOldSubskillName3() {
  const selectElement = document.getElementById('subskill_name_st_link');

  const response = await fetch('/getSubskills');
  const subskills = await response.json();

  subskills.subskills.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.subskill_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_AMSL(event) {
  event.preventDefault();
  console.log("HI");
  const Module_name = document.getElementById('module_name_ss_link').value;
  const Subskill_name = document.getElementById('ss_name_module_link').value;
  data = { Module_name, Subskill_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_AMSL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Subskill added to Module Successfully")
      } else {
        alert("Subskill could not be added to Module")
      }
    })
    .catch(error => console.error('Error:', error));
}
// SKILLTOPICS
function submitForm_AST(event) {
  event.preventDefault();
  const skilltopic_name = document.getElementById('skilltopic_name').value;
  data = { skilltopic_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_AST', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {

      if (data.affectedRows > 0) {
        alert("skilltopic Added Successfully")
      }
      else {
        alert("skilltopic Already Exists")
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
async function populateOldSkilltopicName() {
  const selectElement = document.getElementById('skilltopic_name_upd_old');

  const response = await fetch('/getSkilltopics');
  const skilltopics = await response.json();
  console.log(skilltopics);

  skilltopics.skilltopics.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.skilltopic_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}

function submitForm_UST(event) {
  event.preventDefault();
  const skilltopic_name_old = document.getElementById('skilltopic_name_upd_old').value;
  const skilltopic_name_new = document.getElementById('skilltopic_name_upd_new').value;

  data = { skilltopic_name_old, skilltopic_name_new }

  console.log("data = ")
  console.log(data)

  fetch('/submit_UST', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("skilltopic Updated Successfully")
      } else {
        alert("skilltopic to be Updated Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
async function populateOldSkilltopicName1() {
  const selectElement = document.getElementById('skilltopic_name_del');

  const response = await fetch('/getSkilltopics');
  const skilltopics = await response.json();
  console.log(skilltopics);

  skilltopics.skilltopics.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.skilltopic_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_DST(event) {
  event.preventDefault();
  const skilltopic_name = document.getElementById('skilltopic_name_del').value;
  data = { skilltopic_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_DST', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("skilltopic Deleted Successfully")
      } else {
        alert("skilltopic to be Deleted Not Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
function submitForm_RST(event) {
  event.preventDefault()

  fetch('/submit_RST', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.rows.length) {
        // Create a table
        var table = '<table border="1"><tr><th>skilltopic Name</th></tr>';

        // Loop through the data and add rows to the table
        for (var i = 0; i < data.rows.length; i++) {
          table += '<tr><td>' + data.rows[i].skilltopic_name + '</td></tr>';
        }

        // Close the table tag
        table += '</table>';

        // Display the table inside the "read_output" div
        document.getElementById('read_output').innerHTML = table;
      }
      else {
        alert("No skilltopics Found")
      }
    })
    .catch(error => console.error('Error:', error));
}
async function populateOldSkilltopicName2() {
  const selectElement = document.getElementById('st_name_subskill_link');

  const response = await fetch('/getSkilltopics');
  const skilltopics = await response.json();
  console.log(skilltopics);

  skilltopics.skilltopics.forEach((course) => {
    const option = document.createElement('option');
    option.textContent = course.skilltopic_name; // Assuming course.name is the course name
    selectElement.appendChild(option);
  });
}
function submitForm_ASSTL(event) {
  event.preventDefault();
  console.log("HI");
  const Skill_Topic = document.getElementById('st_name_subskill_link').value;
  const Subskill_name = document.getElementById('subskill_name_st_link').value;
  data = { Skill_Topic, Subskill_name }

  console.log("data = ")
  console.log(data)

  fetch('/submit_ASSTL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response as needed
      if (data.success) {
        alert("Skill_Topic added to Subskill Successfully")
      } else {
        alert("Sub_Topic could not be added to Subskill")
      }
    })
    .catch(error => console.error('Error:', error));
}


 