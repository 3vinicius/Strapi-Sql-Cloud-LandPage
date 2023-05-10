
## configuration prettier and eslint
``npm init @eslint/config``
Create ".prettierrc"
next add config
````
{
	"printWidth": 120,
	"singleQuote": true,
	"tabWidth": 2,
	"useTabs": false,
	"trailingComma": "none",
	"arrowParens": "avoid"
}
````
Save configuration add how ``npm install --save-dev eslint-config-prettier``

***

## configuration jest + react Testing Libary from vite

install jest ``npm install jest -D --force``

install test library, use ``--force`` be necessary ``npm install @testing-library/jest-dom --force @testing-library/react --force @testing-library/user-event --force -D``

create ``.jest.config.js`` add:
```
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
```
create setup test in ``/src/setupTests.js`` add import jest-dom ``import '@testing-library/jest-dom'``

modify ``package.json`` from ``"type": "commonjs"`` and
````
"script:{
    "test": "jest src",
    "test:watch": "npm run test -- --watch"
}
````

should install babel modules ``npm install babel/core --force @babel/preset-env --force @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
``

create ``.babelrc.json `` add:

```
  {
  "presets": [
  ["@babel/preset-env",{  "targets": { "esmodules" :true } }],
  ["@babel/preset-react", {"runtime": "automatic"}]
]
}
```

## StoryBook

instal ``npx sb init``

 add in folder storybook ``main.js``
```
stories: [
    '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'
  ],
```
