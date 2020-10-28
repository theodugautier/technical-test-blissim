<p align="center">
  <a href="https://github.com/theodugautier/technical-test-blissim">
    <img src="https://touteslesbox.fr/wp-content/uploads/2013/12/blissim-logo-full.png" alt="Logo" width="140" height="140">
  </a>

  <p align="center">
    Technical test for <strong>Blissim</strong>
  </p>
</p>

## Sommaire

* [Description](#description)
* [Installation For MacOS](#installation-for-macos)
  * [Installing Dependencies](#installing-dependencies)
  * [Setup](#installation-des-dépendances)
* [Code of Conduct](#code-of-conduct)
  * [Commits](#commits)
  * [Branches](#branches)


## Description

## Installation For MacOS

### Installing Dependencies

To use the application, you need [install docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac/) on your mac.

### Setup

Normally (unless you are on Linux) docker-composite will be installed at the same time as Docker desktop. If you are on Linux, you have to install docker-compose in addition to the Docker package.

So, once the installation is finished, the docker machines are launched. For this, there are two options:
- To run the command in the background: `docker-composes up -d`.
- To get the logs : : `docker-compose up`.

The docker script will virtualize three containers :
- Php
- Nginx
- App Next.js with node:14.11.0

One last step :
````bash
cp app/.env.local.example app/.env.local
````

Then in the `app/.env.local` file, enter the variable `API_URL`.

Et voilà !

Just go to [localhost:3000](http://localhost:3000) to view the Next.js application.
As for the server, it is located at [localhost:4000/index.php](http://localhost:4000/index.php).

## Code of Conduct

### Commits

- **build**: Changes that affect the building system or external dependencies (examples of fields of application: gulp, broccoli, npm, gem).
- **ci**: Changes to our configuration files and CI scripts (examples of scopes: Circle, BrowserStack, SauceLabs).
- **docs**: Documentation changes only.
- **feat**: A new feature.
- **fix** : Fixed a bug.
- **perf** : A code change that improves performance.
- **refactor**: A code change that does not fix a bug and does not add a feature.
- **style** : Changes that do not affect the meaning of the code (white space, formatting, missing semicolons, etc.).
- **test**: Addition of missing tests or correction of existing tests.

For example for a commit that changes the common-commands file: `docs: add command to deploy app`.

### Branches

- **feature/feature-name**: Important Feature
- **bugfix/fix-name**: Fix for the next version of the application that is not critical for the production.