import courses from './data/courses.js';

const courseList = document.querySelector('#courseList');

const showCourses = () => {
  const cnt = 15;
  const course = courses(cnt).map((course) => createCourse(course));
  return courseList.append(...course);
};

const createCourse = (course) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'course-item');
  li.insertAdjacentHTML(
    'beforeend',
    `
      <div class="thumbnail-container">
        <img class="course-thumbnail" src="${course.imageURL}" alt="개발 전용차선 강의">
      </div>
      <h1 class="course-title">${course.title}</h1>
    `
  );
  return li;
};

export default showCourses;
