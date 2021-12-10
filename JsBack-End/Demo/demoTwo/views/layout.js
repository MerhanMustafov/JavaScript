module.exports = (html, title) => `
<html>
    <head>
    <title>My Page: ${title} </title>
    </head>
    <body>
        <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/catalog">Catalog</a>
        </nav>
        ${html}
    </body>
</html>
`