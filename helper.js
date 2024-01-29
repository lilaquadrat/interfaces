const fs = require('fs');
const path = require('path');
const args = process.argv;

const target = args[2] || 'cjs';

const distDir = `./lib/${target}`;
const outputPath = path.join(distDir, 'index.d.ts');

if(target === 'cjs') {

  fs.writeFileSync(`${distDir}/index.js`, '');
  console.log(`index.js for ${target} created successfully.`);

} else {

  // Read all files in the dist directory
  fs.readdir(distDir, (err, files) => {
    if (err) {
      console.error('Error reading dist directory:', err);
      return;
    }
  
    // Filter out only .d.ts files and exclude index.d.ts
    const exports = files
      .filter(file => file.endsWith('.d.ts') && file !== 'index.d.ts')
      .map(file => {
        // Assuming the structure is flat and files can be exported directly
        const moduleName = file.replace('.d.ts', '');
        return `export * from './${moduleName}';`;
      });
  
    // Write the index.d.ts file
    fs.writeFile(outputPath, exports.join('\n'), (err) => {
      if (err) {
        console.error('Error writing index.d.ts:', err);
      } else {
        console.log(`index.d.ts for ${target} created successfully.`);
      }
    });
  });

}

