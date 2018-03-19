
# main-website
The home of OpenForge.io, built using Stencil.js!

## Development

### File Structure
**UI** components should reside in the `src/components` folder.

While **Page** components should reside in the `src/pages` folder. A page component is responsible for the grouping and layout of varios different components into a page. Also responsible for any logic around the communication between the different components, the rest of the application (i.e. routing), and with the external world.

### Tools

#### Linting & Code Formatting:
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project uses:
- [prettier](http://prettier.io/) for code formatting.
- [tslint](https://palantir.github.io/tslint/) for linting with rules from:
  - [tslint-react](https://github.com/palantir/tslint-react)
  - [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
  - [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

`package.json` defines an npm script for linting. To lint the project at any time, simply run the script with
```
$ npm run lint
```
