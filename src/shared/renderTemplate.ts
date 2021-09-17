interface ITemplateParameters {
  cssPath: string;
  jsPath: string;
  content: string;
  title: string;
  favicon: string;
}

export default function renderTemplate({
  cssPath,
  jsPath,
  content,
  title,
  favicon,
}: ITemplateParameters): string {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`;
  const style = `<link href="/${cssPath}" type="text/css" rel="stylesheet" />`;
  const script = `<script src="/${jsPath}"></script>`;
  return html
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace('<link', `${style} <link`)
    .replace('</body>', `${script} </body>`)
    .replace('</div>', `${content} </div>`)
    .replace(
      '<link',
      `<link rel="icon" type="image/png" href="${favicon}"}/> <link`
    );
}
