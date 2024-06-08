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