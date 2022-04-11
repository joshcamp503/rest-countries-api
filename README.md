# Where in the World?

An online collection of geographic information about 250 countries worldwide. 

## About

Where in the World? curates information from the REST Countries API, and uses it to create profiles for every couuntry on Earth. Learn about each country's population, currency, top level domain, border countries, etc with this useful resource.  

This project was built with React.js. This was my first React project of this level of complexity and it provided some unique challenges.  Since the data from the API was relatively small, I wanted to limit the number of HTTP requests the app made to the API to provide the user with a fast, seamless experience.  To accomplish this, I set the data from the API as global state using useReducer and a custom Context provider. I used a custom hook based off of useEffect to fetch the data and dispatch it into global state.  

This project is my solution to a challenge from frontendmentor.io, an online collection of coding challenges for developers to test and hone their skills with HTML, CSS, Javascript, and any framework(s) they choose to work with. Scroll down to see the README from frontendmentor.io to learn more about what the goals and expectations were for this challenge.

## Project Screen Shot(s)

[](src/assets/where-in-the-world-preview.png)
<img src="src/assets/where-in-the-world-preview.png" alt="homepage preview" height="325" width="500">

[](src/assets/where-in-the-world-dark-mode.png)
<img src="src/assets/where-in-the-world-dark-mode.png" alt="dark mode preview" height="325" width="500">

[](src/assets/where-in-the-world-search-preview.png)
<img src="src/assets/where-in-the-world-search-preview.png" alt="country search preview" height="325" width="500">

[](src/assets/where-in-the-world-details-preview.png)
<img src="src/assets/where-in-the-world-details-preview.png" alt="country details preview" height="325" width="500">

## Live Demo

https://joshcamp.dev/where-in-the-world


## Dependencies



*Node.js

*React.js

## Authors

Josh Campanella  
[Portfolio](https://joshcamp.dev)

## Version History

* 0.1
    * Initial Release

## Acknowledgments

Inspiration, code snippets, etc.

* [REST Countries API](https://restcountries.com/)
* [React.js](https://leafletjs.com/)
* [frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)


# README for this project directly from Frontend Mentor

# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. 

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) and you can use an icon font library for the icons.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
