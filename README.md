# Kùzu Website

This repository hosts the source code for [Kùzu website](https://kuzudb.github.io).

## Building
This website is generated through [Jekyll](https://jekyllrb.com/). 

- To install Jekyll, follow the documentation [here](https://jekyllrb.com/docs/installation/).
- To test locally, follow the documentation [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
  - Note: If you are using Ruby 3.0 and Jekyll 4.2.x or older (which should be the case if you follow the installation above), run `bundle add webrick` before running `bundle install` 

## Add content
### Documentations
The documentations has been migrated to [kuzu-docs](https://github.com/kuzudb/kuzu-docs). Please do not directly edit the files under `docusaurus` in this repository. To make changes to the documentations, please edit the documentations in [kuzu-docs](https://github.com/kuzudb/kuzu-docs). Once the changes have been merged to [kuzu-docs](https://github.com/kuzudb/kuzu-docs), the CI pipeline will automatically build the documentation and create a pull request in this repository. Merging the pull request will automatically deploy the documentation to the server.

### Blog
We use [Just The Doc](https://github.com/just-the-docs/just-the-docs) as our theme. Example usage can be found on their GitHub. To add content, modify existing markdown files or create new ones under `docs/blog`.

## Contributing
We welcome contributions to Kùzu website. If you are interested in contributing to Kùzu website, please read our [Contributing Guide](CONTRIBUTING.md).
