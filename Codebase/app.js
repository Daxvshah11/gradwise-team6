const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbOperations = require('./code2');

const app = express();
const port = 3019;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getCourses', async (req, res) => {
  try {
    const courses = await dbOperations.getCourses();
    res.json({ courses });
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.get('/getModules', async (req, res) => {
  try {
    const modules = await dbOperations.getModules();
    res.json({ modules });
  } catch (error) {
    console.error('Failed to fetch modules:', error);
    res.status(500).json({ error: 'Failed to fetch modules' });
  }
});

app.get('/getSubskills', async (req, res) => {
  try {
    const subskills = await dbOperations.getSubskills();
    res.json({ subskills });
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.get('/getSkilltopics', async (req, res) => {
  try {
    const skilltopics = await dbOperations.getSkilltopics();
    res.json({ skilltopics });
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});



// COURSES

app.post('/submit_AC', async (req, res) => {
  let operation;
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const courseName = requestData.course_name;


    console.log(courseName);

    operation = await dbOperations.addCourse(courseName);
    // console.log(operation);
    if (operation && operation.affectedRows > 0) {

      console.log('APP.JS LINE 31 - Course added successfully');
      res.json(operation);
    }
    else {
      console.error("APP.JS LINE 32 - Course failed")
      res.json(operation)
    }

  } catch (error) {
    console.log("LINE 41")
    console.error('APP.JS LINE 41 Failed to add course:');
    res.json(operation);
  }
});

app.post('/submit_DC', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const courseName = requestData.course_name;

    console.log(courseName);

    const affected_rows = await dbOperations.deleteCourse(courseName);
    if (affected_rows) {
      console.log('Course deleted successfully');
      res.json({ success: true });
    }
    else {
      console.log("Course Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to delete course:', error);
    res.json({ success: false, message: 'Failed to delete course' });
  }
});


app.post('/submit_UC', async (req, res) => {
  try {
    const { course_name_old, course_name_new } = req.body;

    console.log(course_name_new);
    const affected_rows = await dbOperations.updateCourse(course_name_new, course_name_old);
    if (affected_rows) {
      console.log('Course updated successfully');
      res.json({ success: true });
    }
    else {
      console.log("Course Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to update course:', error);
    res.json({ success: false, message: 'Failed to Update course' });
  }
});



app.post('/submit_RC', async (req, res) => {
  try {

    var rows = await dbOperations.getAllCourses();
    // console.log(rows);
    if (rows.length) {
      res.json({ success: true, rows: rows });
    }
    else {
      res.json({ success: false, rows: null })
    }

  } catch (error) {
    console.error('Failed to read courses:', error);
    res.json({ success: false, message: 'Failed to read courses' });
  }
});
// Course_Module Link
app.post('/submit_ACML', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const Module_name = requestData.Module_name;
    const Course_Name = requestData.Course_name;

    console.log(Module_name);
    console.log(Course_Name);
    const rows = await dbOperations.Course_Module_link(Course_Name, Module_name);
    if (rows && rows.affectedRows > 0) {
      console.log('Module added to Course successfully');
      res.json({ success: true });
    }
    else {
      console.log("Module could not be added to course")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to add Module:', error);
    res.json({ success: false, message: 'Failed to add Module' });
  }
});
// Module_SubSkill Link
app.post('/submit_AMSL', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const Module_name = requestData.Module_name;
    const Subskill_Name = requestData.Subskill_name;

    console.log(Module_name);
    console.log(Subskill_Name);
    const rows = await dbOperations.Module_Subskill_link(Module_name, Subskill_Name);
    if (rows && rows.affectedRows > 0) {
      console.log('Subkill added to Module successfully');
      res.json({ success: true });
    }
    else {
      console.log("Subkill could not be added to Module")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to add Subkill:', error);
    res.json({ success: false, message: 'Failed to add Subskill' });
  }
});
// Subkill-SkillTopic Link
app.post('/submit_ASSTL', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const Skill_Topic = requestData.Skill_Topic;
    const Subskill_Name = requestData.Subskill_name;

    console.log(Skill_Topic);
    console.log(Subskill_Name);
    const rows = await dbOperations.Subskill_Skilltopic_link(Subskill_Name, Skill_Topic);
    if (rows && rows.affectedRows > 0) {
      console.log('SubTppic added to Module successfully');
      res.json({ success: true });
    }
    else {
      console.log("Subtopic could not be added to Subskill")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to add Subtopic:', error);
    res.json({ success: false, message: 'Failed to add Substopic' });
  }
});

// MODULES
app.post('/submit_AM', async (req, res) => {
  let operation;
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const ModuleName = requestData.Module_name;


    console.log(ModuleName);

    operation = await dbOperations.addModule(ModuleName);
    // console.log(operation);
    if (operation && operation.affectedRows > 0) {

      console.log('APP.JS LINE 31 - Module added successfully');
      res.json(operation);
    }
    else {
      console.error("APP.JS LINE 32 - Module failed")
      res.json(operation)
    }

  } catch (error) {
    console.log("LINE 41")
    console.error('APP.JS LINE 41 Failed to add Module:');
    res.json(operation);
  }
});

app.post('/submit_DM', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const ModuleName = requestData.Module_name;

    console.log(ModuleName);

    const affected_rows = await dbOperations.deleteModule(ModuleName);
    if (affected_rows) {
      console.log('Module deleted successfully');
      res.json({ success: true });
    }
    else {
      console.log("Module Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to delete Module:', error);
    res.json({ success: false, message: 'Failed to delete Module' });
  }
});

app.post('/submit_UM', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const Module_name_old = requestData.Module_name_old;
    const Module_name_new = requestData.Module_name_new;

    console.log(Module_name_new);
    const affected_rows = await dbOperations.updateModule(Module_name_new, Module_name_old);
    if (affected_rows) {
      console.log('Module updated successfully');
      res.json({ success: true });
    }
    else {
      console.log("Module Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to update Module:', error);
    res.json({ success: false, message: 'Failed to Update Module' });
  }
});

app.post('/submit_RM', async (req, res) => {
  try {

    var rows = await dbOperations.getAllModules();
    // console.log(rows);
    if (rows.length) {
      res.json({ success: true, rows: rows });
    }
    else {
      res.json({ success: false, rows: null })
    }

  } catch (error) {
    console.error('Failed to read Modules:', error);
    res.json({ success: false, message: 'Failed to read Modules' });
  }
});


// SUBSKILLS
app.post('/submit_AS', async (req, res) => {
  let operation;
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skillName = requestData.skill_name;


    console.log(skillName);

    operation = await dbOperations.addSubskills(skillName);
    // console.log(operation);
    if (operation && operation.affectedRows > 0) {

      console.log('APP.JS LINE 31 - skill added successfully');
      res.json(operation);
    }
    else {
      console.error("APP.JS LINE 32 - skill failed")
      res.json(operation)
    }

  } catch (error) {
    console.log("LINE 41")
    console.error('APP.JS LINE 41 Failed to add skill:');
    res.json(operation);
  }
});

app.post('/submit_DS', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skillName = requestData.skill_name;

    console.log(skillName);

    const affected_rows = await dbOperations.deleteSubskills(skillName);
    if (affected_rows) {
      console.log('skill deleted successfully');
      res.json({ success: true });
    }
    else {
      console.log("skill Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to delete skill:', error);
    res.json({ success: false, message: 'Failed to delete skill' });
  }
});

app.post('/submit_US', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skill_name_old = requestData.skill_name_old;
    const skill_name_new = requestData.skill_name_new;

    console.log(skill_name_new);
    const affected_rows = await dbOperations.updateSubskills(skill_name_new, skill_name_old);
    if (affected_rows) {
      console.log('skill updated successfully');
      res.json({ success: true });
    }
    else {
      console.log("skill Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to update skill:', error);
    res.json({ success: false, message: 'Failed to Update skill' });
  }
});

app.post('/submit_RS', async (req, res) => {
  try {

    var rows = await dbOperations.getAllSubskills();
    // console.log(rows);
    if (rows.length) {
      res.json({ success: true, rows: rows });
    }
    else {
      res.json({ success: false, rows: null })
    }

  } catch (error) {
    console.error('Failed to read skills:', error);
    res.json({ success: false, message: 'Failed to read skills' });
  }
});


// SKILLTOPICS
app.post('/submit_AST', async (req, res) => {
  let operation;
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skillName = requestData.skilltopic_name;


    console.log(skillName);

    operation = await dbOperations.addSkilltopics(skillName);
    // console.log(operation);
    if (operation && operation.affectedRows > 0) {

      console.log('APP.JS LINE 31 - skill added successfully');
      res.json(operation);
    }
    else {
      console.error("APP.JS LINE 32 - skill failed")
      res.json(operation)
    }

  } catch (error) {
    console.log("LINE 41")
    console.error('APP.JS LINE 41 Failed to add skill:');
    res.json(operation);
  }
});

app.post('/submit_DST', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skillName = requestData.skilltopic_name;

    console.log(skillName);

    const affected_rows = await dbOperations.deleteSkilltopics(skillName);
    if (affected_rows) {
      console.log('skill deleted successfully');
      res.json({ success: true });
    }
    else {
      console.log("skill Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to delete skill:', error);
    res.json({ success: false, message: 'Failed to delete skill' });
  }
});

app.post('/submit_UST', async (req, res) => {
  try {
    const requestData = JSON.parse(Object.keys(req.body)[0]);

    const skill_name_old = requestData.skilltopic_name_old;
    const skill_name_new = requestData.skilltopic_name_new;

    console.log(skill_name_new);
    const affected_rows = await dbOperations.updateSkilltopics(skill_name_new, skill_name_old);
    if (affected_rows) {
      console.log('skill updated successfully');
      res.json({ success: true });
    }
    else {
      console.log("skill Not Found")
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Failed to update skill:', error);
    res.json({ success: false, message: 'Failed to Update skill' });
  }
});

app.post('/submit_RST', async (req, res) => {
  try {

    var rows = await dbOperations.getAllSkilltopics();
    // console.log(rows);
    if (rows.length) {
      res.json({ success: true, rows: rows });
    }
    else {
      res.json({ success: false, rows: null })
    }

  } catch (error) {
    console.error('Failed to read skills:', error);
    res.json({ success: false, message: 'Failed to read skills' });
  }
});

app.post("/")

// Serve index.html when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
