# Flooris Coding Challenge Vue

This is the Flooris coding challenge for Vue. The project has been set up with vite and
uses [Vue 3](https://vuejs.org/guide/introduction.html), [TailwindCSS](https://tailwindcss.com/) and
has [Heroicons](https://heroicons.com/) installed, so you have easy access to a whole array of icons. Other than that
there's an [ESLint](https://eslint.org/) config file that uses the same rules that we generally use ourselves.

## First setup

### Run the following commands in the project directory

Install yarn

```bash
npm install --global yarn
```

Install the project dependencies

```bash
yarn
```

## Serving the application locally

### Run the following command in the project directory

To serve the application locally run

```bash 
yarn dev
```

Any changes to the project will automatically reload the page.

## Additional information

If you're using [VS Code](https://code.visualstudio.com/) make sure to
install [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), this will enable Language features for
Vue. Also make sure to install
the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
and [Tailwind CSS plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). The last one
will enable intellisense for TailwindCSS.

If you're using an IntelliJ based editor like [PHPStorm](https://www.jetbrains.com/phpstorm/)
or [IntelliJ](https://www.jetbrains.com/idea/) install
the [Vue plugin](https://plugins.jetbrains.com/plugin/9442-vue-js) to enable language features for Vue. Also make sure
to install the [Prettier plugin](https://plugins.jetbrains.com/plugin/10456-prettier) and
the [TailwindCSS plugin](https://plugins.jetbrains.com/plugin/15321-tailwind-css). The last one will enable intellisense
for TailwindCSS.

## The coding challenge

The idea of this challenge is to get insight in where your frontend programming skills are at. Don't worry if you don't
get everything working as described in the exercises below. We're also looking at how quick you are to learn new things,
which is what's most important to us if you're doing this coding challenge.

The design file for this coding challenge can be found [here](https://www.figma.com/file/kurKXeNhlDQgkTXYm5iaul/Frontend-coding-challenge?type=design&node-id=0%3A1&mode=design&t=UzkGPsDZXKz008E7-1).

### Requirements

__Negative words__
- Static array of negative words (or get values from an internet JSON file).
- Should affect styling of detected words on user input

__Text input__
- User can input a maximum of 50 words
  
__Header__
- Display inputted text styled as per design
- Should only be updated if play button on the right of the input is pressed
- Should only be shown if visible
- Show negative words with different style

__Words separated as tags__
- Display inputted text styled as per design
- Show negative words with a different style
- Update when text is inserted
- Space does not show as a tag

__Play button__
- Pressing play button should update header
- Should be disabled when no input is given

__Progress bar__
- Fill progress bar depending on number of characters used
- Bar color depends on how much of the bar is filled
- Green if less than 50%
- Yellow if less than 80%
- Otherwise, red
- If input includes any negative words then progress bar color should always be red
- Should be animated

__Header toggle button__
- Toggle visibility of the header text
- Styled as per design

__Reset button__
- Reset all variables and the input to default
- Styled as per design
