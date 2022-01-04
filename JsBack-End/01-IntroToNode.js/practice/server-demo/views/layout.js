module.exports = (html, title = "Welcome") => {
  return `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
  </head>
  <body>
  <nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/catalog">Catalog</a>
  </nav>
      ${html}
  </body>
  </html>`;
};
