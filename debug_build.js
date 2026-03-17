const { exec } = require('child_process');
const fs = require('fs');

exec('npm run build', (error, stdout, stderr) => {
  fs.writeFileSync('build_debug.log', `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nERROR:\n${JSON.stringify(error, null, 2)}`);
  console.log('Build finished, check build_debug.log');
});
