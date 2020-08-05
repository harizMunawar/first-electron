let {PythonShell} = require('python-shell');

var username = document.getElementById('username');
var password = document.getElementById('password');

function signup() {
    let options = {
        mode: "text",
        pythonPath: 'python\\env-electron\\Scripts\\python.exe',
        pythonOptions: ['-u'],
        args: [username.value, password.value],
    };  

    PythonShell.run('Python/signup.py', options, function  (err, results)  {
    if (err) throw err;
        console.log('signup.py finished.');
        console.log('results from python: ', results);
    });

}

function login() {
    let options = {
        mode: "text",
        pythonPath: 'python\\env-electron\\Scripts\\python.exe',
        pythonOptions: ['-u'],
        args: [username.value, password.value],
    };  

    PythonShell.run('Python/login.py', options, function  (err, results)  {
    if (err) throw err;
        console.log('login.py finished.');
        console.log('results from python: ', results);
        if (results[0] != []){
            window.location.href = 'home.html';
        }
    });

}

document.getElementById('btn_login').onclick = function() { 
    login();
    return false;
};

document.getElementById('btn_signup').onclick = function() { 
    signup();
    return false;
};
  