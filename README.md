# Kuzu Website

This repository hosts the source code for [Kuzu website](https://kuzudb.github.io).

## Test Locally

This website is built using [Svelte](https://svelte.dev). To test the website locally, you need to have Node.js installed on your machine. You can install Node.js from [here](https://nodejs.org/en/download/).

After installing Node.js, you can clone this repository and run the following commands to test the website locally:

```bash
npm install
npm run dev
```

This will start a development server on `localhost:5173`. You can open this URL in your browser to view the website.

## Build

To build the website, you can run the following command:

```bash
npm run build
```

This will generate the static files in the `_site` directory. It can then be served using any static file server. For example, you can use the one built into Python:

```bash
cd _site
python3 -m http.server
```

## Continuous Integration
This repository uses GitHub Actions for continuous integration. The workflow is defined in the `.github/workflows/svelte.yml` file. When a pull request is opened, the workflow will run and build the website. If the build is successful, the artifacts will be uploaded as a zip file to the pull request. The artifacts can be downloaded and tested locally.

When a pull request is merged, the workflow will run again to build the website and deploy it to the GitHub Pages automatically.

## Contributing
We welcome contributions to Kuzu website. If you are interested in contributing to Kuzu website, please read our [Contributing Guide](CONTRIBUTING.md).
