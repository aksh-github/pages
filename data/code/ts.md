## Typescript

- MS developed a laguage to overcome shortcomings of Javascript.
- Typescript is a super set of JavaScript.
- The biggest advantage of typescript is static typing.
- When we introduce static typing, we get a lot of features like most of the bugs we can find at compile time rather than crashing the application at run time, from editors like cold completion, refractoring etc.

**Drawbacks**

- when you use Typescript, there is a compilation step. In larger projects it can take a bit to generate the final code. The reason is most runtime systems browsers etc don't understand typescript.

### Setting up typescript

typescript is a node package. you can install it globally by running following command.

```
npm i -g typescript
```

you can verify it my running following command

```
tsc -v
```

Now you can start using typescript for your project.

1. Start with empty dir.
2. Do npm init, git init etc usual commands as requied.
3. Create index.ts file with some simple code.

```js
console.log("hello world");

```
4. You can try to compile this file with tsc by using following command.
```
tsc index.ts
```

5. If compilation is successful, it will generate corresponding js output file (index.js).
6. You can run that file as
```
node index.js
```

Next we will setup the project for Typescript properly. In project dir, rum command

```
tsc --init
```

It will generate config file tsconfig.json

It is big file with multiple settings.

Some of the important we need to be aware of:

**Language and Environ.**
- target: Specifies the JS output level its going to generate.


**Modules**

- module: 
- rootDir: Represent the dir for our source files. Typically set it to ./src


**Emit**

- outDir: Represent the dir for placing the compiled code. Typically set it to ./dist or ./build etc.

- removeComments: Enable this to remove comments from compiled code.

- noEmmitOnError: Enable this to prevent tsc from generating the build when our code has errors.


**Type Checking**

- strict: Set it to true. Very important.
- noImplicitReturns: Set it to true. Important for function return values.

### Datatypes / Features

Along with JS types, TS supports following additional.

- any - Avoid this as much as possible, else we lose benefits of TS.
- unknown - Its better than any
- never
- enum
- tuple

**tuple**
Its fixed length array which is used to store related values (key, value) etc.

e.g.
let user = [1, 'Dev']


**enum**
- Used to represent list of related consts.
- It can hold values of any type.

e.g.

```js
const enum Sizes {
	Small,
	Medium,
	Large
}
```
- const is not required but it generates more optimized code.
- By default 1st will have value of 0, next one will have 1 and so on.

- If you want to start with specific value, you can do
Small=50

- If you want non sequencial values

```js
const enum Sizes {
	Small=50,
	Medium=100,
	Large=120
}
```
