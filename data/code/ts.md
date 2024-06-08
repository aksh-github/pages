## Typescript

- MS developed a laguage to overcome shortcomings of Javascript.
- Typescript is a super set of JavaScript.
- The biggest advantage of typescript is static typing.
- When we introduce static typing, we get a lot of features like most of the bugs we can find at compile time rather than crashing the application at run time, from editors like cold completion, refractoring etc.

**Drawbacks**

- when you use Typescript, there is a compilation step. In larger projects it can take a bit to generate the final code. The reason is most runtime systems browsers etc don't understand typescript.

**Setting up typescript**

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

Next we will setup the project for Typescript properly.

