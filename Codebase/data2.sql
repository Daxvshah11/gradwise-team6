-- creating a database if not created
create database if not exists DASS_Project;
use DASS_Project;

-- creating table for courses
CREATE TABLE if not exists COURSES (
    ID int PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100)
);

-- creating table for modules
CREATE TABLE if not exists MODULES (
    ID int PRIMARY KEY AUTO_INCREMENT,
    module_name VARCHAR(100)
);

-- creating table for subskills
CREATE TABLE if not exists SUBSKILLS (
    ID int PRIMARY KEY AUTO_INCREMENT,
    subskill_name VARCHAR(100)
);

-- creating table for skilltopics
CREATE TABLE if not exists SKILLTOPICS (
    ID int PRIMARY KEY AUTO_INCREMENT,
    skilltopic_name VARCHAR(100)
);

-- creating link between courses and modules
CREATE TABLE IF NOT EXISTS COURSE_MODULE_LINK (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    course_ID INT,
    module_ID INT,
    FOREIGN KEY (course_ID) REFERENCES COURSES(ID) ON DELETE CASCADE,
    FOREIGN KEY (module_ID) REFERENCES MODULES(ID) ON DELETE CASCADE,
    UNIQUE KEY (course_ID, module_ID)
);

-- creating link between modules and subskills
CREATE TABLE IF NOT EXISTS MODULE_SUBSKILL_LINK (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    module_ID INT,
    subskill_ID INT,
    FOREIGN KEY (module_ID) REFERENCES MODULES(ID) ON DELETE CASCADE,
    FOREIGN KEY (subskill_ID) REFERENCES SUBSKILLS(ID) ON DELETE CASCADE,
    UNIQUE KEY (module_ID, subskill_ID)
);

-- creating link between subskills and skilltopics
CREATE TABLE IF NOT EXISTS SUBSKILL_SKILLTOPIC_LINK (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    subskill_ID INT,
    skilltopic_ID INT,
    FOREIGN KEY (subskill_ID) REFERENCES SUBSKILLS(ID) ON DELETE CASCADE,
    FOREIGN KEY (skilltopic_ID) REFERENCES SKILLTOPICS(ID) ON DELETE CASCADE,
    UNIQUE KEY (subskill_ID, skilltopic_ID)
);

-- creating table for exercises
CREATE TABLE if not exists EXERCISES (
    ID int PRIMARY KEY AUTO_INCREMENT,
    ex_tpye varchar(100)
);

-- creating table for exercise data linked from EXERCISES
CREATE TABLE if not exists EXERCISE_DATA (
    ID int,
    ex_ID int,
    ex_key text,
    ex_value text,
    FOREIGN KEY (ex_ID) REFERENCES EXERCISES(ID) ON DELETE CASCADE
);

-- creating tags table
create table if not exists TAGS(
    ID int PRIMARY KEY AUTO_INCREMENT,
    tag_type varchar(100)
);

-- creating table for tag values connecting from tags
CREATE TABLE if not exists TAG_VALUES (
    ID int,
    tag_ID int,
    tag_value text,
    FOREIGN KEY (tag_ID) REFERENCES TAGS(ID) ON DELETE CASCADE
);

-- creating link between exercises and tags
CREATE TABLE IF NOT EXISTS EXERCISE_TAG_LINK (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ex_ID INT,
    tag_ID INT,
    FOREIGN KEY (ex_ID) REFERENCES EXERCISES(ID) ON DELETE CASCADE,
    FOREIGN KEY (tag_ID) REFERENCES TAGS(ID) ON DELETE CASCADE,
    UNIQUE KEY (ex_ID, tag_ID)
);