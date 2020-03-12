'use strict'

const course = {
  courseCode: 'ELEN4010'
}

const addYO = function (theCourse) {
  theCourse.yearOffered = theCourse.courseCode.substring(4, 5)
}

const CourseInfo = function (theCourse) {
  console.log(`${course.courseCode} is offered in year ${course.yearOffered}`)
}

addYO(course)

CourseInfo(course)
