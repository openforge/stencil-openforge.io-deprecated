
# main-website
The home of OpenForge.io, built using Stencil.js!

## Development

### Running The Application

npm install
npm run dev --es5 (firefox)
npm start or npm run dev

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

#### Versioning & Changelog
We utilize [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) to generate a changelog from git metadata.

The following tools are used to achieve this purpose:
- [commitizen](https://github.com/commitizen/cz-cli)
- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

With the current configuration, after a developer stages their changes for a commit. They can use the following npm script to walk them through committing their changes.

```
npm run cz
```

Read more about the commit guidelines [here](http://conventionalcommits.org/)

After all changes have been committed, a release and a changelog can be triggered by using the npm [version](https://docs.npmjs.com/cli/version) command. And the current configuration takes care of generating the changelog file based on git metadata.

#### Automation & Hooks
The project uses [husky](https://github.com/typicode/husky) for git hook integations. And uses [lint-staged](https://github.com/okonet/lint-staged) to run automatically run linters on staged files. And [commitlint](https://github.com/marionebl/commitlint) to ensure commits messages follow the conventions.

For every commit, it will ensure files are linted and that the code is formatted to `prettier`'s configuration. It will also confirm that the proposed commit message matches the defined guidelines. If any error occurs in the process, it will **stop and prevent** the commit until the issues are fixed.

If a developer went through providing all the information during a `npm run cz` only to find that there were issues with their commit. They may fix them and instruct commitizen to try the commit again with `npm run cz -- --retry`
