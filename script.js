document.getElementById('sign-in-call-btn').addEventListener('click', () => {
 const cover = document.getElementById('cover');
 cover.classList.add('right');
 cover.classList.remove('left');

 const signin = document.getElementById('sign-in-call');
 signin.classList.add('hide');

  const signup = document.getElementById('sign-up-call');
 signup.classList.remove('hide');
})

document.getElementById('sign-up-call-btn').addEventListener('click', () => {
 const cover = document.getElementById('cover');
 cover.classList.add('left');
 cover.classList.remove('right');

  const signin = document.getElementById('sign-in-call');
  signin.classList.remove('hide');

  const signup = document.getElementById('sign-up-call');
 signup.classList.add('hide');
})