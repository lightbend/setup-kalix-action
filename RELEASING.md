* Create a [new release](https://github.com/lightbend/setup-kalix-action/releases/new) with a new tag and the title equal to the tag
*   Choose the version judiciously, as making the version a minor number bump will allow existing users to be upgraded seamlessly. A major number bump will force them to update their action. Follow this [instruction](https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions)
* Update [README.md](README.md) to show the new tag
* Update [Kalix Docs](https://github.com/lightbend/kalix-docs/blob/main/docs/modules/operations/pages/integrate-cicd-github-actions.adoc) to
  the major version
* Update [kalix-cicd-github-actions/README.md](https://github.com/lightbend/kalix-cicd-github-actions) to show the new tag