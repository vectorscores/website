const requireRoot = require("app-root-path").require;
const { maybe } = require("eleventy-lib");

const partialPath = "partials";
const head = requireRoot(`${partialPath}/head.11ty.js`);
const header = requireRoot(`${partialPath}/header.11ty.js`);
const footer = requireRoot(`${partialPath}/footer.11ty.js`);

module.exports = (data) =>
  `<!DOCTYPE html>
    <html>
        ${head(data)}
        <body>
            ${header(data)}
            <div class="page-content">
                <div class="wrapper">
                    ${maybe(
                      `<aside id="maintenance">
                       <header>Under maintenance</header>
                       <p>${data.maintenance}</p>
                   </aside>`,
                      data.maintenance
                    )}
                    ${data.content}
                </div>
            </div>
            ${footer(data)}
        </body>
    </html>`;
