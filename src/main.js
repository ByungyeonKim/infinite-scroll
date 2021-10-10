import showCourses from './course.js';
import delayTime from './util.js';

const observer = document.querySelector('#observer');
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
