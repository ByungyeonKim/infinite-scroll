import courses from './data/courses.js';

const observer = document.querySelector('#observer');
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

let page = 0;
const showMore = async () => {
  const target = page ? observer : courseList;
  target.classList.add('loading');
  await delayTime(showCourses);
  page++;
  target.classList.remove('loading');
};

const io = new IntersectionObserver(([{ isIntersecting }]) => {
  if (isIntersecting) showMore();
});

io.observe(observer);

const randomTimer = (func) => (resolve) => {
  const time = Math.floor(Math.random() * 5) * 1000;
  setTimeout(() => resolve(func()), time);
};

const delayTime = (func) => new Promise(randomTimer(func));
