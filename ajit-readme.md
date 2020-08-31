The project is configured as yarn-workspaces so that multiple installation of node_modules can be avoided and a single node_module be installed in root folder.

```sh
#Root folder
yarn install


parcel ./packages/p01-hello-world/index.html
parcel ./packages/p02-jsx/index.html
```