import express from "express";
import controller from "../controllers/Controller.js";
const router = express.Router();

//------------------------------------COURSE------------------------------------//
router.get("/course", controller.course); //toàn bộ course
router.get("/inforcourse/:id", controller.inforCourse); //thông tin 1 course
router.get("/course/:id", controller.courseLesson); //lessons của 1 course
router.get("/mycourse/:id", controller.myCourse); //my course của student
router.get("/mycart/:id", controller.myCart); //cart của student
router.get("/myclass/:id", controller.myClass); //courses của teacher
router.post("/addcourse", controller.addCourse); //thêm course
router.put("/updatecourse", controller.updateCourse); //cập nhật course
router.delete("/deletecourse/:id", controller.deleteCourse); //xóa course
//-------------------------------------CART-------------------------------------//
router.post("/addtocart", controller.addToCart); //thêm vào giỏ hàng
router.put("/enrollcourse", controller.enrollCourse); //thanh toán course đã thêm vào giỏ hàng
router.put("/rating", controller.rateCourse); //đánh giá course đã thanh toán
router.delete("/deletefromcart", controller.deleteFromCart); //xóa course khỏi giỏ hàng
//------------------------------------LESSON------------------------------------//
router.post("/addlesson", controller.addLesson); //thêm lesson
router.put("/updatelesson", controller.updateLesson); //cập nhật lesson
router.delete("/deletelesson/:id", controller.deleteLesson); //xóa lesson
//------------------------------------UTILS------------------------------------//
router.post("/image", controller.getImage); //lấy ảnh từ database
router.get("/video/:name", controller.getVideo); //lấy ảnh từ database
//------------------------------------COMMENT------------------------------------//
router.get("/fcmt/:id", controller.getForumComment); //lấy comment của 1 forum
router.get("/ccmt/:id", controller.getCourseComment); //lấy comment của 1 course
router.get("/tcmt/:id", controller.getTestComment); //lấy comment của 1 test
router.post("/afcmt", controller.addForumComment); //thêm comment trong forum
router.post("/accmt", controller.addCourseComment); //thêm comment trong course
router.post("/atcmt", controller.addTestComment); //thêm comment trong test
router.put("/ufcmt", controller.updateForumComment); //sửa comment trong forum
router.put("/ufcmt", controller.updateCourseComment); //sửa comment trong course
router.put("/ufcmt", controller.updateTestComment); //sửa comment trong test
router.delete("/dfcmt", controller.deleteForumComment); //xóa comment trong forum
router.delete("/dccmt", controller.deleteCourseComment); //xóa comment trong course
router.delete("/dtcmt", controller.deleteTestComment); //xóa comment trong test
//-------------------------------------NOTE-------------------------------------//
router.post("/ln", controller.getNote); //lấy note của 1 lesson
router.post("/an", controller.addNote); //thêm note trong lesson
router.put("/un", controller.updateNote); //sửa note trong lesson
router.delete("/dn", controller.deleteNote); //xóa note trong lesson
//-----------------------------------QUESTION-----------------------------------//

router.get("/lq/:id", controller.lessonQuiz); //lấy quiz của 1 lesson
router.post("/aq", controller.addQuestion); //thêm quiz trong lesson
router.put("/uq", controller.updateQuestion); //sửa quiz trong lesson
router.delete("/dq/:id", controller.deleteQuestion); //xóa quiz trong lesson

//-------------------------------------FORUM------------------------------------//
router.get("/forum", controller.forumList); //lấy ds forum
router.get("/forum/:id", controller.specificForum); //lấy 1 forum
router.post("/af", controller.addForum); //thêm 1 forum
router.put("/uf", controller.updateForum); //sửa 1 forum
router.delete("/df", controller.deleteForum); //xóa 1 forum

//-------------------------------------USER------------------------------------//
router.post("/uu", controller.updateUser); //update thông tin user

export default router;