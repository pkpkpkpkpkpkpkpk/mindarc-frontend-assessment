# Preview instructions
- Run 'yarn', then 'yarn start'.
- Please note, I've attempted to match the designs exactly in every way, however the only differences are due to the unknown specific font used in the design files, since I've used the standard sans-serif font.


# Code review documentation
- The task has been completed using simply Typescript and SCSS, with a Webpack bundler.
- SCSS code is located in src/styles. The main project files to look at are contained within the components folder. The objects folder contains the reusable button styles. The elements folder contains the HTML body element styles, which is where project-wide fonts and colours are initially set up. The tools folder contains a useful mixin, and the settings folder is where reusable variables are stored.
- HTML code is written purely in Typescript, and can be located in src/scripts/elements. The main file to look at is MainElement.ts.
- The Typescript logic for the accordions and tabs are located in src/scripts/components. (If you'd like to see how these scripts are loaded in succession, you can look at the commented src/scripts/Main.ts file).


# Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana
- The + symbol can concatenate strings, e.g. 'b' + 'a' results in 'ba'.
- However, the + symbol can also convert a string into a number, if the symbol is not preceded by a string like in the first example, e.g. + '7' results in 7.
- If the + symbol is used with the latter approach, but the string doesn't contain a number, then the result will be NaN (not a number).
- If two + symbols are used together, in between two strings, then the strings will be concatenated after the second string is converted into a number, e.g. 'b' + + 'a' results in 'bNaN'.
- Therefore, 'b' + 'a' + + 'a' + 'a' will result in 'baNaNa', and if converted to lower case, the result is 'banana'.
