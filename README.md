# Koala Show & Tell Code

## Overview

Congratulations on making it to the final stage of the Koala recruitment process! Thank you again for your continued interest in joining the Koala engineering team.

We've created an exercise that's a good example of the technologies and capabilities you'll be working with at Koala.


## Task

This task involves you explaining and demonstrating how code works. It’s important that you communicate clearly and effectively, demonstrating your ability to think critically and simplify concepts to the sum of their parts.

The aim is for you to show off your comprehension skills by analyzing the code, coming to an understanding of what it does and how it works, then explaining it back to us.

- Things to consider (but not limited to) when talking about the provided code:
- What is it trying to solve or do?
- How would you improve it?
- What are the limitations?
- Is there anything that it does well? What are they?
- How do the components and functions work together?


## Getting Started and Submitting

To get started:
1. Download the zip file from the Google Drive folder that was shared with you
2. Unzip the project folder onto your local environment
3. Make your changes
4. Once complete, zip the folder back up and upload it to the Google Drive folder with a different name (like koala-code-review-test-FINISHED.zip, whatever you like)


## Koala's Tech Stack

At Koala we use the latest web technologies including:

- NextJS
- TypeScript
- React & Functional Components
- GraphQL
- TailwindCSS
- Cypress

It would be great to see what you can do utilising similar tech in your exercise.


## Expectations

Here's what we'd like to see implemented in your solution:

- Mobile first design
- Mobile and desktop responsive
- Type safety
- Component driven development
- Test driven design
- Accessibility


## Questions

Reach out to Koala if you have further questions.


### Included Packages

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
cd koala-code-review-test
npm install
```

Then, you can run locally in development mode with hot reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```
