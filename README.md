# Kalix CLI for GitHub Actions

This [Java Script action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) installs and configures [Kalix CLI](https://docs.kalix.io/kalix/index.html) tool. After this action is run, you can use the `kalix` command in your workflow. 

## Usage

The action takes two required variables to authenticate and set the project you want to work on:

* `token`: The Kalix authentication token
* `project-id`: The Kalix project ID you're using

## Example Workflow

The below flow shows how to use this action to list all services in your project

```yaml
name: kalix

on: 
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Install Kalix CLI
        uses: lightbend/setup-kalix-action@v1
        with:
          token: ${{ secrets.KALIX_TOKEN }}
          project-id: ${{ vars.KALIX_PROJECT }}
```

## Building

Follow the [instructions](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github) to build and push the action.

* run `npm i --target_arch=x64 --target_platform=linux`
* update index.js file with your changes
* run `ncc build index.js`
* commit sources and `dist` folder

## Contributing

We welcome all contributions! [Pull requests](https://github.com/lightbend/setup-kalix-action/pulls) are the preferred way to share your contributions. For major changes, please open [an issue](https://github.com/lightbend/setup-kalix-action/issues) first to discuss what you would like to change.

## Support

This project is an [incubator](https://developer.lightbend.com/docs/introduction/getting-help/support-terminology.html)

## License

See the [LICENSE](./LICENSE)