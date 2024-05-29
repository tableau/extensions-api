# Test website


## Building

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

After installing [yarn](https://yarnpkg.com/) and [nodejs](https://nodejs.org/en/download/package-manager), run

```
$ yarn
```

from the `website` subfolder within this repository.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Creating a Pull Request

To get your changes merged, create a Pull Request.
Github Actions are configured to automatically test for changes.
For simple typo or wording fixes, you don't need a peer review - feel free to just go ahead and merge.
For actual new content, we encourage to get at least one peer review.

The released or production documentation is served from the `main` branch.
Changes or updates should first be checked into the `dev` branch and then merged to `main` when ready for public release.

### Deployment

As soon as your pull request to https://github.com/tableau/test-extensions-api is merged to `main`, the new web page will be deployed automatically within a couple of minutes.

### View the docs

| Branch | URL |
|---- |---- |
| `dev` | [https://d45.github.io/test-extensions-api/dev](https://d45.github.io/test-extensions-api/dev) |
| `main` | [https://d45.github.io/test-extensions-api](https://d45.github.io/test-extensions-api/)  |
