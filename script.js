const fs = require('fs')
const lodash = require('lodash')
const htmlText = `  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
const cssText = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`

const createHTMLFile = () => {
    fs.writeFile('index.html', htmlText, (err) => {
        if (err) throw err;
        console.log('html file created')
    })
}

const createCSSFile = async() => {
    fs.mkdirSync('./styles')
    fs.writeFile('./styles/style.css', cssText, (err) => {
        if (err) throw err;
        console.log('css file created')
    })
} 

const del = () => {
    fs.rmdir('./styles', () => {
        console.log('css файл удален')
    })
    fs.unlink('./index.html', () => {
        console.log('html файл удален')
    })
}

createHTMLFile()
createCSSFile()
del()