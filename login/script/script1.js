
let account = document.querySelector('#account');
let back = document.querySelector('#back');
let login = document.querySelector('.login');
let sigin = document.querySelector('#sigin');
let visible = document.querySelector('.visible');
let unvisible = document.querySelector('.unvisible');
let pass = document.querySelector('.password');
let visibility = document.querySelector('.visibility');

// change login to signup
account.addEventListener('click', function () {
  login.style.right = '-500px';
  sigin.style.right = '200px';
}
)
back.addEventListener('click', function () {
  login.style.right = '200px';
  sigin.style.right = '-500px';
})



//  visibilty eye

pass.addEventListener('keyup', function () {
  let count = pass.value.length;
  if (count == 0) {
    visible.style.display = 'none';
    unvisible.style.display = "none";

  } else {
    visible.style.display = 'inline';
    unvisible.style.display = "inline";

  }
})

visibility.addEventListener('click', function () {
  let eye = pass.getAttribute('type');
  if (eye == 'password') {
    unvisible.style.display = "inline";
    pass.setAttribute('type', 'text');
  } else {
    pass.setAttribute('type', 'password');
    visible.style.display = "inline";
    unvisible.style.display = "none";
  }
})