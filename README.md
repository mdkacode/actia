# An Apollo Server & Client in a Next.js in a yarn Workspace deployed with Now 2.0

This example combines:

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Apollo Codegen](https://github.com/apollographql/apollo-tooling)
- [Next.js](https://github.com/zeit/next.js/)
- [Now 2.0](https://github.com/zeit/now-cli)
- [Typescript](https://github.com/Microsoft/TypeScript) 
- [Ant Desgin](https://ant.design)

to build a Monorepo FullStack GraphQL App which can be deployed by a single command `now`.

## Naming convention
> Folder Name should Start from **Capital Letter**
> File Name should be in **Camel Casing**

* Use `camelCase` for variable and function names

> Reason: Conventional JavaScript

**Bad**
```ts
var FooVar;
function BarFunc() { }
```
**Good**
```ts
var fooVar;
function barFunc() { }
```
*Class*
* Use `PascalCase` for class names.

> Reason: This is actually fairly conventional in standard JavaScript.

**Bad**
```ts
class foo { }
```
**Good**
```ts
class Foo { }
```
* Use `camelCase` of class members and methods

> Reason: Naturally follows from variable and function naming convention.

**Bad**
```ts
class Foo {
    Bar: number;
    Baz() { }
}
```





## Backend Structure 
```sh
api.axios.ts ==> Only for calling the api
```
```sh
graphql.query.ts ==> Only for writing graphql Query 
```
```sh
graphql.resolver.ts ==> Add reslover here
```


## Direct descendants

Yet absent

---

## Install

```sh
yarn
```

## Running dev-mode

```sh
cd api && yarn dev
```

```sh
cd www && yarn dev
```

## Generate Types

With api running

```sh
cd www && yarn gen
```

## Deploy

```sh
now
```