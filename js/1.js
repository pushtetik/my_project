

function show_hide_password(target) {
    var input = document.getElementById('password-input');
    var input1 = document.getElementById('password-input1')
    var image = document.getElementById('myImage');
    
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input1.setAttribute('type', 'text');
      input.setAttribute('type', 'text');
      image.setAttribute('src', 'images/1.png'); //измените путь к изображению, если это требуется
    } else {
      target.classList.remove('view');
      input1.setAttribute('type', 'password');
      input.setAttribute('type', 'password');
      image.setAttribute('src', 'images/2.png'); //измените путь к изображению, если это требуется
    }
    
    return false;
  }
function show_hide_password1(target) {
    var input = document.getElementById('password-input');
    var image = document.getElementById('myImage');
    
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
   
      input.setAttribute('type', 'text');
      image.setAttribute('src', 'images/1.png'); //измените путь к изображению, если это требуется
    } else {
      target.classList.remove('view');
      input.setAttribute('type', 'password');
      image.setAttribute('src', 'images/2.png'); //измените путь к изображению, если это требуется
    }
    
    return false;
  }
 