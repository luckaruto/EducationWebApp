/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     3/23/2023 8:47:00 PM                         */
/*==============================================================*/

DROP SCHEMA IF EXISTS IELTS;
CREATE SCHEMA IELTS;
USE IELTS;

/*==============================================================*/
/* Table: ACCOUNT                                               */
/*==============================================================*/
drop table if exists ACCOUNT;
create table ACCOUNT
(
   ID                   binary(22) not null  comment '',
   USERNAME             varchar(30) not null  comment '',
   PASSWORD             varchar(30) not null  comment '',
   NAME                 text not null  comment '',
   PHONE                varchar(15) not null  comment '',
   MAIL                 varchar(30)  comment '',
   AVA                  varchar(100)  comment '',
   ROLE					varchar(12) not null  comment '',
   primary key (ID)
);

/*==============================================================*/
/* Table: COURSE                                                */
/*==============================================================*/
drop table if exists COURSE;
create table COURSE
(
   CID                  binary(22) not null  comment '',
   NAME                 text not null  comment '',
   CATEGORY             varchar(20) not null  comment '',
   DESCRIPTION          text not null  comment '',
   PRICE                float not null  comment '',
   IMG                  varchar(100) not null  comment '',
   primary key (CID)
);

/*==============================================================*/
/* Table: CART                                                  */
/*==============================================================*/
drop table if exists CART;
create table CART
(
   CID                  binary(22) not null  comment '',
   ID                   binary(22) not null  comment '',
   STATUS               bool not null  comment '',
   primary key (CID, ID)
);

/*==============================================================*/
/* Table: FORUM                                                 */
/*==============================================================*/
drop table if exists FORUM;
create table FORUM
(
   FID                  binary(22) not null  comment '',
   ID                   binary(22) not null  comment '',
   TITLE                text not null  comment '',
   DATE_ESTABLISHED     datetime not null  comment '',
   CONTENT              text not null  comment '',
   IMG                  varchar(100)  comment '',
   primary key (FID)
);

/*==============================================================*/
/* Table: LESSON                                                */
/*==============================================================*/
drop table if exists LESSON;
create table LESSON
(
   LID                  binary(22) not null  comment '',
   CID                  binary(22) not null  comment '',
   NAME                 text not null  comment '',
   CONTENT              text not null  comment '',
   VIDEO                varchar(100) not null  comment '',
   ATTACHMENT           varchar(100) not null  comment '',
   primary key (LID)
);

/*==============================================================*/
/* Table: NOTE                                                  */
/*==============================================================*/
drop table if exists NOTE;
create table NOTE
(
   NID                  binary(22) not null  comment '',
   LID                  binary(22) not null  comment '',
   ID                   binary(22) not null  comment '',
   CONTENT              text not null  comment '',
   primary key (NID)
);

/*==============================================================*/
/* Table: OWNER                                                 */
/*==============================================================*/
drop table if exists OWNER;
create table OWNER
(
   ID                   binary(22) not null  comment '',
   CID                  binary(22) not null  comment '',
   primary key (ID, CID)
);

/*==============================================================*/
/* Table: TEST                                                  */
/*==============================================================*/
drop table if exists TEST;
create table TEST
(
   TID                  binary(22) not null  comment '',
   CID                  binary(22)  comment '',
   TITLE                text not null  comment '',
   DESCRIPTION          text  comment '',
   DURATION             time not null  comment '',
   primary key (TID)
);

/*==============================================================*/
/* Table: QUESTION                                              */
/*==============================================================*/
drop table if exists QUESTION;
create table QUESTION
(
   QID                  binary(22) not null  comment '',
   TID                  binary(22) not null  comment '',
   CONTENT              text not null  comment '',
   IMG                  varchar(100)  comment '',
   AUDIO                varchar(100)  comment '',
   primary key (QID)
);

/*==============================================================*/
/* Table: ASSIGNMENT                                            */
/*==============================================================*/
drop table if exists ASSIGNMENT;
create table ASSIGNMENT
(
   ASSID                binary(22) not null  comment '',
   TID                  binary(22) not null  comment '',
   ID                   binary(22) not null  comment '',
   DATE_SUBMITED        datetime not null  comment '',
   SCORE                float  comment '',
   primary key (ASSID)
);

/*==============================================================*/
/* Table: ANSWER                                                */
/*==============================================================*/
drop table if exists ANSWER;
create table ANSWER
(
   AID                  binary(22) not null  comment '',
   QID                  binary(22) not null  comment '',
   ASSID                binary(22) not null  comment '',
   CONTENT              text not null  comment '',
   primary key (AID)
);

/*==============================================================*/
/* Table: SOLUTION                                              */
/*==============================================================*/
drop table if exists SOLUTION;
create table SOLUTION
(
   SID                  binary(22) not null  comment '',
   QID                  binary(22) not null  comment '',
   CONTENT              text not null  comment '',
   primary key (SID)
);


/*==============================================================*/
/* Table: COMMENT                                               */
/*==============================================================*/
drop table if exists COMMENT;
create table COMMENT
(
   CMTID                binary(22) not null  comment '',
   FID                  binary(22)  comment '',
   ID                   binary(22) not null  comment '',
   CID                  binary(22)  comment '',
   TID                  binary(22)  comment '',
   CONTENT              text not null  comment '',
   primary key (CMTID)
);

alter table ANSWER add constraint FK_ANS_ASSIGNME foreign key (ASSID)
      references ASSIGNMENT (ASSID) on delete restrict on update restrict;

alter table ANSWER add constraint FK_ANSWER_QUESTION foreign key (QID)
      references QUESTION (QID) on delete restrict on update restrict;

alter table ASSIGNMENT add constraint FK_ASSIGNME_ACC foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table ASSIGNMENT add constraint FK_ASSIGNME_TEST foreign key (TID)
      references TEST (TID) on delete restrict on update restrict;

alter table CART add constraint FK_CART_ACCOUNT foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table CART add constraint FK_CART_COURSE foreign key (CID)
      references COURSE (CID) on delete restrict on update restrict;

alter table COMMENT add constraint FK_COMMENT_ACC foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table COMMENT add constraint FK_COMMENT_COURSE foreign key (CID)
      references COURSE (CID) on delete restrict on update restrict;

alter table COMMENT add constraint FK_COMMENT_FORUM foreign key (FID)
      references FORUM (FID) on delete restrict on update restrict;

alter table COMMENT add constraint FK_COMMENT_TEST foreign key (TID)
      references TEST (TID) on delete restrict on update restrict;

alter table FORUM add constraint FK_FORUM_ACC foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table LESSON add constraint FK_LESSON_COURSE foreign key (CID)
      references COURSE (CID) on delete restrict on update restrict;

alter table NOTE add constraint FK_NOTE_LESSON foreign key (LID)
      references LESSON (LID) on delete restrict on update restrict;

alter table NOTE add constraint FK_NOTE_ACCOUNT foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table OWNER add constraint FK_OWNER_ACCOUNT foreign key (ID)
      references ACCOUNT (ID) on delete restrict on update restrict;

alter table OWNER add constraint FK_OWNER_COURSE foreign key (CID)
      references COURSE (CID) on delete restrict on update restrict;

alter table QUESTION add constraint FK_QUESTION_TEST foreign key (TID)
      references TEST (TID) on delete restrict on update restrict;

alter table SOLUTION add constraint FK_SOL_QUESTION foreign key (QID)
      references QUESTION (QID) on delete restrict on update restrict;

alter table TEST add constraint FK_TEST_COURSE foreign key (CID)
      references COURSE (CID) on delete restrict on update restrict;

