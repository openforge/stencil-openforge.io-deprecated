<p align="center">
  <img src="https://github.com/openforge/main-website/blob/master/src/assets/logo-openforge.png?raw=true"/>
</p>
<p align="center">
  <a href="http://www.openforge.io/">Official Website</a> |
  <a href="http://www.openforge.io/opportunities">Opportunities</a> |
  <a href="https://www.facebook.com/OpenForgeUS/">Facebook</a>
</p>

<h3 align="center">
  Leading By Example.
</h3>

<p align="center">
  Working with the latest technologies, designing the best products, and sharing our knowledge with the world wide community.
</p>

# OpenForge

The OpenForge Community is composed of team members and public contributors banded together for a common goal of leading by example.  We are experts in applying UI/UX and Software Architecture principles towards enhancing businesses nation (and world!) wide.

In addition to providing services for our clients; it is our belief that we should also focus on benefiting the community that surrounds us. For this reason; all OpenForge initiatives (that are not client related) are Open Sourced; including our design and business consulting resources which can be found on our Website at [www.openforge.io](http://openforge.io). 

If you are a community member who would like to take part of our paid (yes, we said PAID!) Open Source contributions please reach out to us via our [opportunities page](http://www.openforge.io/opportunities).   We also always encourage anyone to contribute to anything we are doing, and we hope to contribute to your projects as well!


# Website Development 

The OpenForge.io website is built using a combination of [Stencil.js](https://stenciljs.com/) by our friends at [Ionic Framework](https://ionicframework.com/) anbd Bootstrap for styling.

### Setup
```
npm install
```

#### Install the Google WebP utility from the following link:
https://developers.google.com/speed/webp/docs/precompiled

#### Or install from the command line (Mac OS X):
```
brew install webp
```

#### Make Sure .webp Images are available by running the following commands:
```
for file in src/assets/*.jpg; do cwebp -q 75 "$file" -o "${file%.jpg}.webp"; done
```

```
for file in src/assets/*.png; do cwebp -q 75 "$file" -o "${file%.png}.webp"; done
```

```
for file in src/assets/*.jpeg; do cwebp -q 75 "$file" -o "${file%.jpeg}.webp"; done
```

### Running This Application
```
npm run dev
```

```
npm run dev --es5 // firefox
```

### File Structure
**UI** components should reside in the `src/components` folder.

While **Page** components should reside in the `src/pages` folder. A page component is responsible for the grouping and layout of varios different components into a page. Also responsible for any logic around the communication between the different components, the rest of the application (i.e. routing), and with the external world.

### Tools

#### Linting & Code Formatting:
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project uses:
- [sass-lint](https://github.com/sasstools/sass-lint) for sass linting (sass-lint.yml contains configuration)
- [prettier](http://prettier.io/) for code formatting.
- [tslint](https://palantir.github.io/tslint/) for linting with rules from:
  - [tslint-react](https://github.com/palantir/tslint-react)
  - [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
  - [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

`package.json` defines an npm script for linting. To lint the project at any time, simply run the script with
```
$ npm run lint
```

CSS Linting
```
$ node_modules/sass-lint/bin/sass-lint.js sass-lint -c sass-lint.yml '**/*.scss' -v -q
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


## Deployment

The branches develop, qa, staging, and master are all set up for continuous integration and deployment with Travis CI and Firebase. To deploy, create a PR for the appropriate branch, or commit and push directly (avoid this if possible).

If manual deployment is needed, use the following. Only do this on the develop branch, follow the PR request flow for all other branches.

```
npm run prepublish
```

_Note:  You may have to install firebase-tools via ```npm install -g firebase-tools``` and then authenticate via command line on your local machine to firebase_

```
npm run firebase:deploy:dev // deploy to firebase dev environment
``` 

