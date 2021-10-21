'use strict';
const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@builder.io/gatsby',
      options: {
        /** TODO: update this with your API key! */
        publicAPIKey: 'd5b8b20dc181415283f3177a6ea6301c',
        // to allow editing on local host
        custom404Dev: path.resolve('src/pages/404.tsx'),
        templates: {
          // Render every `page` model as a new page using the /page.tsx template
          // based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.tsx')
        }
      }
    }
  ]
};
