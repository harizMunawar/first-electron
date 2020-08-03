let {PythonShell} = require('python-shell');
function sendToPython() {
    let options = {
        mode: "text",
        pythonPath: 'python\\env-electron\\Scripts\\python.exe',
        pythonOptions: ['-u'],
    };

    PythonShell.run('Python/hello.py', options, function  (err, results)  {
    if (err) throw err;
        console.log('hello.py finished.');
        console.log('results', results);
        result.textContent = results[0];
    });

  }
btn.addEventListener('click', () => {
    sendToPython();
});
  