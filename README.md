# Kùzu Website

This repository hosts the source code for [Kùzu website](https://kuzudb.github.io).

## Test Locally
Since this website is a static website, you can test it with any static web server. For example, you can use the one provided by Python:

```bash
python3 -m http.server
```

## Add Content
### Documentations and Blogs
The documentations and blogs have been migrated to [kuzu-docs](https://github.com/kuzudb/kuzu-docs). Please do not directly edit the files under `docusaurus` in this repository. To make changes to the documentations, please edit the documentations in [kuzu-docs](https://github.com/kuzudb/kuzu-docs). Once the changes have been merged to [kuzu-docs](https://github.com/kuzudb/kuzu-docs), the CI pipeline will automatically build the documentation and create a pull request in this repository. Merging the pull request will automatically deploy the documentation to the server.


## Contributing
We welcome contributions to Kùzu website. If you are interested in contributing to Kùzu website, please read our [Contributing Guide](CONTRIBUTING.md).
