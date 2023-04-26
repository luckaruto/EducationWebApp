USE IELTS;
-- Account
INSERT INTO ACCOUNT VALUES("20127237", "mipu", "mipu", "pmp", "113", "@gmail.com", "bth.jpg", "student");
INSERT INTO ACCOUNT VALUES("20127063", "mipu", "mipu", "pmp", "113", "@gmail.com", "bth.jpg", "teacher");
INSERT INTO ACCOUNT VALUES("20127507", "mipu", "mipu", "pmp", "113", "@gmail.com", "bth.jpg", "student");
-- CALL DeleteAccount("20127063");

-- Course
INSERT INTO COURSE VALUES ("999","LIS 9.0", "LISTENING-9.0", "EZ 9+", "50.00", "bth.jpg", "20127063");
INSERT INTO COURSE VALUES ("111","LIS 9.0", "LISTENING-9.0", "EZ 9+", "50.00", "bth.jpg", "20127063");
INSERT INTO COURSE VALUES ("113","LIS 9.0", "LISTENING-9.0", "EZ 9+", "50.00", "bth.jpg", "20127063");

-- Lesson
INSERT INTO LESSON VALUES("227", "111", "STARTER", "GROUP6", "vid1.mp4", "TL.pdf");
INSERT INTO LESSON VALUES("222", "999", "MOVER", "GROUP6", "vid2.mp4", "TL.pdf");
INSERT INTO LESSON VALUES("232", "113", "FLYER", "GROUP6", "vid3.mp4", "TL.pdf");
INSERT INTO LESSON VALUES("666", "113", "KET", "GROUP6", "vid3.mp4", "TL.pdf");
INSERT INTO LESSON VALUES("999", "113", "PET", "GROUP6", "vid3.mp4", "TL.pdf");
-- DELETE FROM LESSON WHERE CID = "113"; 

-- Note
INSERT INTO NOTE VALUES("123", "222", "20127237", "GROUP6");
INSERT INTO NOTE VALUES("456", "666", "20127063", "GROUP6");
INSERT INTO NOTE VALUES("789", "999", "20127507", "GROUP6");

-- Cart
INSERT INTO CART VALUES("111", "20127237", true);
INSERT INTO CART VALUES("999", "20127237", true);
INSERT INTO CART VALUES("113", "20127237", false);
INSERT INTO CART VALUES("111", "20127507", true);
INSERT INTO CART VALUES("999", "20127507", false);
INSERT INTO CART VALUES("113", "20127507", true);

-- Forum
INSERT INTO FORUM VALUES ("777","20127237", "PHRASED VERD", "2022-04-03", "9+", "bth.jpg");
INSERT INTO FORUM VALUES ("888","20127507", "RELATIVE CLAUSE", "2020-03-06", "9+", "bth.jpg");
INSERT INTO FORUM VALUES ("000","20127237", "PERFECT TENSE", "2019-01-03", "9+", "bth.jpg");

-- Test

INSERT INTO TEST VALUES ("001","227", "LISTENING", "Quizzes", "00:15:00");
INSERT INTO TEST VALUES ("002","232", "PHRASED VERD", "Quizzes", "00:20:00");
INSERT INTO TEST VALUES ("003","227", "PERFECT TENSE", "Listening", "00:15:00");


-- Question
INSERT INTO QUESTION VALUES ("001","001", "In 1967, One Hundred Years of Solitude was published in?| Spanish| Italian| French", "", "100-years-of-solitude.mp3");
INSERT INTO QUESTION VALUES ("002","001", "The story can be described as?| science fiction| fantasy| magical realism", "", "100-years-of-solitude.mp3");
INSERT INTO QUESTION VALUES ("003","001", "In 1982| the book was first translated| the book began to sell extremely well| Márquez won the Nobel Prize in Literature", "", "100-years-of-solitude.mp3");
INSERT INTO QUESTION VALUES ("004","002", "Kathy is a tall fashion model, and everyone says she TAKES AFTER| her short, fat father| her tall, handsome son| her tall, beautiful mother", "", "");
INSERT INTO QUESTION VALUES ("005","002", "Christmas decorations are usually TAKEN DOWN| just before Christmas| soon after Christmas| all through Christmas", "", "");
INSERT INTO QUESTION VALUES ("006","002", "Before TAKING OFF your shoes, you'll have to| take off your socks| untie your shoelaces| put on your feet", "", "");

-- Solution
INSERT INTO SOLUTION VALUES ("001","001", "Spanish");
INSERT INTO SOLUTION VALUES ("002","002", "magical realism");
INSERT INTO SOLUTION VALUES ("003","003", "Márquez won the Nobel Prize in Literature");
INSERT INTO SOLUTION VALUES ("004","004", "her tall, beautiful mother");
INSERT INTO SOLUTION VALUES ("005","005", "soon after Christmas");
INSERT INTO SOLUTION VALUES ("006","006", "untie your shoelaces");

-- Assignment
INSERT INTO ASSIGNMENT VALUES("001", "001", "20127237", "2020-03-06", NULL);
INSERT INTO ASSIGNMENT VALUES("002", "002", "20127237", "2020-03-06", NULL);

-- Answer
INSERT INTO ANSWER VALUES ("001", "001", "001", "Spanish");
INSERT INTO ANSWER VALUES ("002", "002", "001", "magical realism");
INSERT INTO ANSWER VALUES ("003", "003", "001", "Márquez won the Nobel Prize in Literature");
INSERT INTO ANSWER VALUES ("004", "004", "002", "herAA tall, beautiful mother");
INSERT INTO ANSWER VALUES ("005", "005", "002", "soon after Christmas");
INSERT INTO ANSWER VALUES ("006", "006", "002", "AAuntie your shoelaces");

-- Comment
INSERT INTO COMMENT VALUES ("001", "888", "20127063", null, null, "Xiao Chou Huo");
INSERT INTO COMMENT VALUES ("002", null, "20127507", "999", null, "Pe Meo HuHong");
INSERT INTO COMMENT VALUES ("003", null, "20127237", null, "002", "Luc Che Nha");

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chou.huog5459';
-- flush privileges;

