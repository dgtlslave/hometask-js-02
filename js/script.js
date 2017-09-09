
  var adminPass = 123;
  var userPass = null;
  var login = prompt('Who are you?', '');

  if (login != null && login == 'admin') {

    if (adminPass == (userPass = prompt('Enter your password, God of the system', ''))) {
      alert('Welcome Black Master!');
    }
    else {
      alert('Incorrect password, try again ...');
    }

  } else {
    alert ('Unknown user, try again ...');
  }
