const name1 = document.getElementsByClassName('member__name');
const job = document.getElementsByClassName('member__job');
const title = document.getElementsByClassName('team__title');
const title_desc = document.getElementsByClassName('team__desc');
title_desc[0].addEventListener('mouseover', function handleMouseOver() {
  title_desc[0].style.color = 'black';
});
title_desc[0].addEventListener('mouseout', function handleMouseOut() {
  title_desc[0].style.color = 'var(--dark-txt-color)';
});
title[0].addEventListener('mouseover', function handleMouseOver() {
  title[0].style.color = 'black';
});
title[0].addEventListener('mouseout', function handleMouseOut() {
  title[0].style.color = 'var(--title-color)';
});
name1[0].addEventListener('mouseover', function handleMouseOver() {
    name1[0].style.color = 'black';
    job[0].style.color = '#dc7800';
  });
name1[0].addEventListener('mouseout', function handleMouseOut() {
    name1[0].style.color = 'var(--title-color)';
    job[0].style.color = 'var(--orange-color)';
});
name1[1].addEventListener('mouseover', function handleMouseOver() {
  name1[1].style.color = 'black';
  job[1].style.color = '#dc7800';
});
name1[1].addEventListener('mouseout', function handleMouseOut() {
  name1[1].style.color = 'var(--title-color)';
  job[1].style.color = 'var(--orange-color)';
});
name1[2].addEventListener('mouseover', function handleMouseOver() {
  name1[2].style.color = 'black';
  job[2].style.color = '#dc7800';
});
name1[2].addEventListener('mouseout', function handleMouseOut() {
  name1[2].style.color = 'var(--title-color)';
  job[2].style.color = 'var(--orange-color)';
});