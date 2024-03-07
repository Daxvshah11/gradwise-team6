// /* it has all the queries used in the actual html page*/

// const pool = require('./code');

// // Function to insert a new record into the 'courses' table
// async function addCourse(course_id, course_name) {
//   try {
//     const sql = 'INSERT INTO courses (course_id ,course_name) VALUES (?, ?)';
//     const [rows, fields] = await pool.execute(sql, [course_id, course_name]);
//     console.log("Course added successfully");
//     return { success: true, message: 'Course added successfully' };
//   } catch (error) {
//     console.error('CODE2.JS LINE 13 - Error adding course:');
//     return { success: false, message: 'Failed to add course' };
//   }
// }

// // Function to update a record in the 'courses' table
// async function updateCourse(course_id, new_course_name) {
//   const sql = 'UPDATE courses SET course_name = ? WHERE course_id = ?';
//   const [rows, fields] = await pool.execute(sql, [new_course_name, course_id]);
//   console.log("CODE2.JS LINE 22")
//   console.log(rows.affectedRows)
//   return rows.affectedRows;
// }

// // Function to delete a record from the 'courses' table
// async function deleteCourse(course_id) {
//   const sql = 'DELETE FROM courses WHERE course_id = ?';
//   const [rows, fields] = await pool.execute(sql, [course_id]);
//   console.log("CODE2.JS LINE 33")
//   return rows.affectedRows; // Returns the number of rows affected by the operations
// }

// // Function to get all records from the 'courses' table
// async function getAllCourses() {
//   const sql = 'SELECT * FROM courses';
//   const [rows, fields] = await pool.execute(sql);

//   console.log("l31")
//   console.log(rows)
//   return rows;
// }
// async function getAllmodules() {
//   const sql = 'SELECT * FROM modules';
//   const [rows, fields] = await pool.execute(sql);

//   console.log("l31")
//   console.log(rows)
//   return rows;
// }
// async function addmodule(module_id, module_name) {
//   try {
//     const sql = 'INSERT INTO modules (module_id ,module_name) VALUES (?, ?)';
//     const [rows, fields] = await pool.execute(sql, [module_id, module_name]);
//     console.log("module added successfully");
//     return { success: true, message: 'module added successfully' };
//   } catch (error) {
//     console.error('CODE2.JS LINE 13 - Error adding module:');
//     return { success: false, message: 'Failed to add module' };
//   }
// }

// // // Function to update a record in the 'modules' table
// async function updatemodule(module_id, new_module_name) {
//   const sql = 'UPDATE modules SET module_name = ? WHERE module_id = ?';
//   const [rows, fields] = await pool.execute(sql, [new_module_name, module_id]);
//   console.log("CODE2.JS LINE 22")
//   console.log(rows.affectedRows)
//   return rows.affectedRows;
// }

// // Function to delete a record from the 'modules' table
// async function deletemodule(module_id) {
//   const sql = 'DELETE FROM modules WHERE module_id = ?';
//   const [rows, fields] = await pool.execute(sql, [module_id]);
//   console.log("CODE2.JS LINE 33")
//   return rows.affectedRows; // Returns the number of rows affected by the operations
// }

// // Function to get all records from the 'modules' table
// async function getAllmodules() {
//   const sql = 'SELECT * FROM modules';
//   const [rows, fields] = await pool.execute(sql);

//   console.log("l31")
//   console.log(rows)
//   return rows;
// }
// Export the functions for use in other files
// module.exports = {
//   addCourse,
//   updateCourse,
//   deleteCourse,
//   getAllCourses
// };
/* it has all the queries used in the actual html page*/

const pool = require('./code');

// COURSES
async function addCourse(course_name) {
  try {
    const sql = 'INSERT INTO COURSES (course_name) VALUES (?)';
    console.log(course_name);
    const [rows, fields] = await pool.execute(sql, [course_name]);
    console.log("l107")
    console.log(rows)
    return rows;
  } catch (error) {
    console.log("l111")
    console.error("Error executing SQL query:", error);
  }
}

async function getCourses() {
  const sql = 'SELECT course_name FROM COURSES';
  const [rows, fields] = await pool.execute(sql);
  return rows;
}
async function getModules() {
  const sql = 'SELECT module_name FROM MODULES';
  const [rows, fields] = await pool.execute(sql);
  return rows;
}
async function getSubskills() {
  const sql = 'SELECT subskill_name FROM SUBSKILLS';
  const [rows, fields] = await pool.execute(sql);
  return rows;
}
async function getSkilltopics() {
  const sql = 'SELECT skilltopic_name FROM SKILLTOPICS';
  const [rows, fields] = await pool.execute(sql);
  return rows;
}





async function updateCourse(new_course_name, old_course_name) {
  const sql = 'UPDATE COURSES SET course_name = ? WHERE course_name = ?';
  console.log("l120");
  const [rows, fields] = await pool.execute(sql, [new_course_name, old_course_name]);
  return rows;
}
async function deleteCourse(course_name) {
  const sql = 'DELETE FROM COURSES WHERE course_name = ?';
  const [rows, fields] = await pool.execute(sql, [course_name]);
  return rows;
}
async function getAllCourses() {
  const sql = 'SELECT * FROM COURSES';
  const [rows, fields] = await pool.execute(sql);

  console.log("l31")
  console.log(rows)
  return rows;
}

// MODULES

async function addModule(module_name) {
  const sql = 'INSERT INTO MODULES (module_name) VALUES (?)';
  console.log('l144');
  const [rows, fields] = await pool.execute(sql, [module_name]);
  console.log("l9")
  console.log(rows)
  return rows;
}
async function updateModule(new_module_name, old_module_name) {
  const sql = 'UPDATE MODULES SET module_name = ? WHERE module_name = ?';
  const [rows, fields] = await pool.execute(sql, [new_module_name, old_module_name]);
  return rows;
}
async function deleteModule(module_name) {
  const sql = 'DELETE FROM MODULES WHERE module_name = ?';
  const [rows, fields] = await pool.execute(sql, [module_name]);
  return rows;
}
async function getAllModules() {
  const sql = 'SELECT * FROM MODULES';
  const [rows, fields] = await pool.execute(sql);

  console.log("l31")
  console.log(rows)
  return rows;
}

// SUBSKILLS

async function addSubskills(subskill_name) {
  const sql = 'INSERT INTO SUBSKILLS (subskill_name) VALUES (?)';
  const [rows, fields] = await pool.execute(sql, [subskill_name]);
  console.log("l9")
  console.log(rows)
  return rows;
}
async function updateSubskills(new_subskill_name, old_subskill_name) {
  const sql = 'UPDATE SUBSKILLS SET subskill_name = ? WHERE subskill_name = ?';
  const [rows, fields] = await pool.execute(sql, [new_subskill_name, old_subskill_name]);
  return rows;
}
async function deleteSubskills(subskill_name) {
  const sql = 'DELETE FROM SUBSKILLS WHERE subskill_name = ?';
  const [rows, fields] = await pool.execute(sql, [subskill_name]);
  return rows;
}
async function getAllSubskills() {
  const sql = 'SELECT * FROM SUBSKILLS';
  const [rows, fields] = await pool.execute(sql);

  console.log("l31")
  console.log(rows)
  return rows;
}

// SKILLTOPICS

async function addSkilltopics(skilltopic_name) {
  const sql = 'INSERT INTO SKILLTOPICS (skilltopic_name) VALUES (?)';
  const [rows, fields] = await pool.execute(sql, [skilltopic_name]);
  console.log("l9")
  console.log(rows)
  return rows;
}
async function updateSkilltopics(new_skilltopic_name, old_skilltopic_name) {
  const sql = 'UPDATE SKILLTOPICS SET skilltopic_name = ? WHERE skilltopic_name = ?';
  const [rows, fields] = await pool.execute(sql, [new_skilltopic_name, old_skilltopic_name]);
  return rows;
}
async function deleteSkilltopics(skilltopic_name) {
  const sql = 'DELETE FROM SKILLTOPICS WHERE skilltopic_name = ?';
  const [rows, fields] = await pool.execute(sql, [skilltopic_name]);
  return rows;
}
async function getAllSkilltopics() {
  const sql = 'SELECT * FROM SKILLTOPICS';
  const [rows, fields] = await pool.execute(sql);

  console.log("l31")
  console.log(rows)
  return rows;
}
// LINKING COURSES AND MODULES
async function Course_Module_link(coursename, modulename) {
  console.log('l228');
  console.log(coursename);
  console.log(modulename);
  const sql = 'INSERT INTO COURSE_MODULE_LINK (course_ID, module_ID) SELECT c.ID AS course_ID, m.ID AS module_ID FROM COURSES c JOIN MODULES m ON c.course_name = ? AND m.module_name = ?';
  const [rows, fields] = await pool.execute(sql, [coursename, modulename]);
  console.log("l231")
  console.log(rows)
  return rows;
}
// LINKING MOUDLES AND SUBSKILLS
async function Module_Subskill_link(modulename, subskillname) {
  console.log('l228');
  console.log(modulename);
  console.log(subskillname);
  const sql = 'INSERT INTO MODULE_SUBSKILL_LINK (module_ID, subskill_ID) SELECT m.ID AS module_ID, ss.ID AS subskill_ID FROM MODULES m JOIN SUBSKILLS ss ON m.module_name = ? AND ss.subskill_name = ?';
  const [rows, fields] = await pool.execute(sql, [modulename, subskillname]);
  console.log("l231")
  console.log(rows)
  return rows;
}
// LINKING SUBSKILLS AND SKILLTOPICS
async function Subskill_Skilltopic_link(subskillname, skilltopicname) {
  console.log('l228');
  console.log(subskillname);
  console.log(skilltopicname);
  const sql = 'INSERT INTO SUBSKILL_SKILLTOPIC_LINK (subskill_ID, skilltopic_ID) SELECT ss.ID AS subskill_ID, st.ID AS skilltopic_ID FROM SUBSKILLS ss JOIN SKILLTOPICS st ON ss.subskill_name = ? AND st.skilltopic_name = ?';
  const [rows, fields] = await pool.execute(sql, [subskillname, skilltopicname]);
  console.log("l231")
  console.log(rows)
  return rows;
}


// // Export the functions for use in other files
module.exports = {
  addCourse,
  updateCourse,
  deleteCourse,
  getAllCourses,

  addModule,
  updateModule,
  deleteModule,
  getAllModules,

  addSubskills,
  updateSubskills,
  deleteSubskills,
  getAllSubskills,

  addSkilltopics,
  updateSkilltopics,
  deleteSkilltopics,
  getAllSkilltopics,

  Course_Module_link,
  Module_Subskill_link,
  Subskill_Skilltopic_link,

  getCourses,
  getModules,
  getSubskills,
  getSkilltopics
};