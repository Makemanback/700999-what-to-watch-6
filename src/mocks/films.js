import {nanoid} from "nanoid";

const time = 1000000;
const getRandomDate = () => new Date(Date.now() - Math.round(Math.random() * time));

export default [
  {
    id: 0,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Knocking on heavens door`,
    genre: `Road movie`,
    released: 1997,
    rating: {
      score: 7.6,
      level: `Good`,
      count: 200
    },
    runTime: `1h 22m`,
    director: `Sam John`,
    starring: [`Nike Lewis, `, `David Lee, `, `Steve Nope`],
    description: `Frankly, I think the drama around ES6 classes is overblown. But I do agree that plain functions are generally preferable, and eliminating the class related cruft like extends and the constructor in the example above are a nice win.`,
    reviews: [
      {
        description: `The React context API is one of the major forces behind the most useful packages in the React ecosystem. It’s used everywhere from theming, to navigation, to graphql tooling. And being as important as it is, you may have heard that the context API recently received a major update.`,
        author: `Kate Moss`,
        rating: `2,3`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Starting with React 16.3, the context API involves the use of two special components: <Provider> and <Consumer>. And if one of these names sounds familiar, it’s because Redux also supplies a <Provider> component. In fact, the Redux and React providers both do roughly the same thing. So in a way, context can replace Redux`,
        author: `Sam Samson`,
        rating: `7,3`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `But wait a moment. Redux’s <Provider> component has actually made use of context since 2015, when Redux was first released. And this raises the question: if Redux has been using context all along, how can context replace Redux? The rumors of Redux’s demise have been greatly exaggerated`,
        author: `Steve Watt`,
        rating: `6,2`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 1,
    image: `img/bohemian-rhapsody.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Forrest Gump`,
    genre: `Drama`,
    released: 1994,
    rating: {
      score: 4.6,
      level: `Normal`,
      count: 2030
    },
    runTime: `2h 12m`,
    director: `Bruce Lawson`,
    starring: [`Tim Cook, `, `Ashley Andrews, `, `Bill Bo`],
    description: `As you can see above, the stateless component is just a function. Thus, all the annoying and confusing quirks with Javascript’s this keyword are avoided. The entire component becomes easier to understand without the this keyword. Just compare the click handler in each approach`,
    reviews: [
      {
        description: `Of all of Redux’s features, its connect() function is arguably the most frequently used. Along with the <Provider> component, connect() lets you pass global state to any component in your application, without manually passing that data via props`,
        author: `John Jonov`,
        rating: `9,9`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Of course, Redux isn’t the only way to provide data to your components. React’s context API does basically the same thing; it lets you pass global state down the component tree without passing it through props at every level. But that’s all it does.
        In contrast, Redux provides a whole toolkit for managing state:`,
        author: `Kyle Kylovich`,
        rating: `8,8`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `As you can see, context is not a replacement for Redux. Context won’t give you time traveling debugging, configurable middleware, or anything more than a way to get data from one place to another. If you want a tool to help you manage your state, then Redux is a great choice.`,
        author: `Sweet Girl`,
        rating: `4,1`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 2,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Titanic`,
    genre: `Romantic`,
    released: 1992,
    rating: {
      score: 9.6,
      level: `Very Good`,
      count: 100
    },
    runTime: `1h 12m`,
    director: `Sponge Bob`,
    starring: [`Patric Patrikovich, `, `Squirrel Belka, `, `Mr Crabs`],
    description: `Note that the bind keyword isn’t necessary for the stateless component. Dumping classes eliminates the need for calling bind to pass the this context around. Given how confusing JavaScript’s this keyword is to many developers, avoiding it is a nice win.

    Oh, as a side note, there are five different ways to handle binding in React. Here’s a short post on the merits of each approach.`,
    reviews: [
      {
        description: `But what if don’t want middleware support or time traveling debugging? Should you still use Redux just to take advantage of its ability to prevent unnecessary renders?

        Up until React’s new context API was released, it wouldn’t have been all that controversial to say “just use Redux.” But a small change to how context works has reignited the debate.`,
        author: `Cocaine Lsd`,
        rating: `6,0`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Changes this big are guaranteed to cause some excitement. But while they certainly made a splash, they didn’t fundamentally change what context does. The new API, like the old API, just gives you a way to provide data to a component’s descendants. However, amongst the API differences, there was a smaller, less obvious change: the new context API always propagates updates, even past shouldComponentUpdate() or PureComponent.`,
        author: `Joe Cowboy`,
        rating: `7,2`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 3,
    image: `img/bohemian-rhapsody.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Green mile`,
    genre: `Drama`,
    released: 1995,
    rating: {
      score: 10,
      level: `Awesome`,
      count: 1900
    },
    runTime: `1h 45m`,
    director: `Sam Hook`,
    starring: [`Tim New, `, `Lee Samson, `, `Bruce Weeling, `, `Jane Austine`],
    description: `Stateless functional components are useful for dumb/presentational components. Presentational components focus on the UI rather than behavior, so it’s important to avoid using state in presentational components. Instead, state should be managed by higher-level “container” components, or via Flux/Redux/etc. Stateless functional components don’t support state or lifecycle methods. This is a good thing. Why? Because it protects from laziness.`,
    reviews: [
      {
        description: `To see this in action, let’s take a look at a demo of a simple context-based router. As you click the links in the below example, the context updates, and the page re-renders. Try clicking the links for yourself, just to make sure that it all works. And then let’s do an experiment.

        What happens if you change the AppLayout component to extend React.PureComponent instead of React.Component? Go ahead and try changing it. Once you’ve made the change, click a few links and see what happens.`,
        author: `Barak Obama`,
        rating: `10`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Whenever you click a <Link> component in the above example, the navigate() method of the app’s <NavigationProvider> component will be called. This causes the <NavigationProvider> component’s state to update, which in turn causes it to re-render.`,
        author: `Donald Trump`,
        rating: `1,9`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `By default, re-rendering a React component will cause its children to re-render, which will cause the children of those children to re-render, and so on. This means that clicking a link will re-render the entire app, with the <Link> and <Route> components picking up the new context in the process.`,
        author: `George Washington`,
        rating: `8,2`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 4,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Scent of woman`,
    genre: `Romantic`,
    released: 1988,
    rating: {
      score: 2.2,
      level: `Bad`,
      count: 1002
    },
    runTime: `55m`,
    director: `Thomas Jeff`,
    starring: [`Sam Jackson, `, `Brad Pitt`],
    description: `See, it’s always tempting to add state to a presentational component when you’re in a hurry. It’s a quick way to hack in a feature. Since stateless functional components don’t support local state, you can’t easily hack in some state in a moment of laziness. Thus, stateless functional components programatically enforce keeping the component pure. You’re forced to put state management where it belongs: in higher level container components.`,
    reviews: [
      {
        description: `However, components that extends PureComponent are special; they only re-render if their state or props have changed from the previous render. The AppLayout component in the above example has neither props nor state, so switching it to PureComponent means that it will never rerendereven if the context changes!`,
        author: `Vlad Putin`,
        rating: `2,8`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Before React introduced its new context API, you had to make a choice: do you want to be able to tune your app’s performance with PureComponent and shouldComponentUpdate(), or do you want the convenience of being able to provide global state via context? You couldn’t have both. And given the constraints, the choice was clear: performance won hands down.`,
        author: `Dmitry Medvedev`,
        rating: `5,5`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `The thing is, most real world apps do actually need a little performance tuning. But the old context API not only made it impossible to reliably use PureComponent and shouldComponentUpdate(), it also exacerbated the problem by requiring that the entire app be re-rendered each time that any global state changed!`,
        author: `Tim Cook`,
        rating: `6,2`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 5,
    image: `img/bohemian-rhapsody.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Trip to America`,
    genre: `Comedy`,
    released: 1985,
    rating: {
      score: 6.6,
      level: `Good`,
      count: 1480
    },
    runTime: `3h 29m`,
    director: `Steve O`,
    starring: [`Mike Rourke, `, `Mike Tyson, `, `Tommy Lee Johnes, `, `Sam Taylor`],
    description: `As you can see in the image above, stateless functional components require less typing. This translates less noise. As I discuss in “Writing Code for Humans”, great code maximizes the signal-to-noise ratio. The 27 line component became 21 lines, a ~20% reduction. You can go a step further on simple components. With a single line return statement, you can omit the return and curly braces. If you do this and also use ES6 destructuring on props, the result is nearly all signal`,
    reviews: [
      {
        description: `While Redux is famous for its middleware and time traveling debugging, it feels to me that Redux’s real killer feature was its simple API for reliably and performantly observing state in a global store.
        But the new context API provides an even simpler alternative.
        #The new context API
        In contrast with React’s old context API, the new API just works. The new <Context.Consumer> component will always re-render after its corresponding <Context.Provider> element’s value prop has been updateeven if there is a PureComponent or shouldComponentUpdate() in the way.`,
        author: `Sam Jones`,
        rating: `8,8`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `The above example contains the least moving part of all three of my router implementationsand it’s all thanks to the new context API.
        If your main reason for using Redux is to performantly get data from A to B, then the new context API lets you build apps without Redux.
        Of course, context doesn’t give you any conventions for structuring your state and actions. It doesn’t give you Redux’s wonderful dev tools. And while it does make performance optimization possible, it certainly doesn’t do any of that optimization for you.`,
        author: `Emmanuel Kign`,
        rating: `2,9`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `In fact, if you’re using context, you’ll want to keep an eye on performancewithout being careful, you can easily re-render the entire app on each update. To learn more, read my guide to context and performance.
        By the way, if you haven’t already, you can keep up to date with other new Frontend Armory content by getting a free membershipit will also give you access to all of our printable cheatsheets! And as always, if you have any questions, comments or feedback, let me know by tweeting at @james_k_nelson, or emailing me at james@frontarm.com. I can’t wait to hear from you, and thanks so much for reading!`,
        author: `Queen Eng`,
        rating: `8,2`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 6,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Saw`,
    genre: `Horror`,
    released: 2001,
    rating: {
      score: 7.2,
      level: `Good`,
      count: 9801
    },
    runTime: `1h 52m`,
    director: `Steven Spielberg`,
    starring: [`Johhny Depp, `, `Leo Di Caprio, `, `Tom Cruise`],
    description: `If you destructure your props in ES6 as I did in the example above, then all the data you use is now specified as a simple function argument. This means you also get improved code completion/intellisense support compared to class-based components.`,
    reviews: [
      {
        description: `Flux is a new kind of architecture that Facebook uses when it works with React. React - a popular front-end technology like AngularJS - is a Javascript framework, but it only works with the View layer, which means you have only the V in the MVC - Model-View-Controller - architecture. React gives you the template language and a few function hooks to render HTML. Since it is component based, you can compose an application with React, and just specify how you want your component to look. React will keep it updated; even the underlying data changes. The core principles of React are (1) Flexibility, (2) Efficiency and (3) Declarative code. As React is flexible, you can use it in several projects, create new apps, and even use it within the existing code base, without doing a rewrite.`,
        author: `Pavel Durov`,
        rating: `2,9`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `What Is Flux?
        We learned that React takes care of the V, or View, part of the MVC. Now, what about the M, or the Model, part? Flux, a programming pattern, takes care of that. It is the architecture responsible for creating data layers in JavaScript applications and building client-side web applications. Flux complements React’s Composable view components through its unidirectional data flow. You can also say that Flux is more of a pattern than a framework and it has four main components (we will go in depth later)`,
        author: `Mark Markov`,
        rating: `8,9`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `This is not like the general MVC that you see in other frameworks. But yes, there are Controllers, but they are mostly Controller views. Views are at the top of the hierarchy and they retire the data and functionality and pass them down to their children.
        Flux follows the concept of unidirectional data flow making it much easier to zero in on where the error lies. The data goes through a strict pipeline through your application. React and Flux are actually two of the most popular frameworks that follow the concept of unidirectional data flow.`,
        author: `Stephen King`,
        rating: `10`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },

  {
    id: 7,
    image: `img/bohemian-rhapsody.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Avatar`,
    genre: `Fantastic`,
    released: 2008,
    rating: {
      score: 10,
      level: `Awesome`,
      count: 2
    },
    runTime: `3h 51m`,
    director: `James Cameron`,
    starring: [`Billie Eilish, `, `Uma Turman, `, `Susane Sarandon`],
    description: `Bloated Components and Poor Data Structures Are Easily Spotted
    We all know a function that takes a lot of parameters is a code smell. When you use ES6 destructuring with your stateless components, the argument list clearly conveys your component’s dependencies. Thus, it’s easy to spot components that need attention. In this case, you can either break up the component or rethink the data structures you’re passing around. Sometimes a long list of props can be easily resolved by passing an object instead. But if the props aren’t logically related enough to justify a single object, then it’s likely time to refactor the component into multiple separate components.`,
    reviews: [
      {
        description: `While React makes uses of a virtual DOM object to render changes, Flux does it differently. In Flux, the interactions with the user interface will trigger a series of actions that would alter the application data. The View will get alerts on the changes.
        Main Features of Flux
        Flux is open source and more of a design pattern than a formal framework and you can use it immediately. What keeps it apart from other frameworks is that it is different from the MVC Design pattern.`,
        author: `Keanu Reeves`,
        rating: `9,2`,
        date: getRandomDate(),
        id: nanoid()
      },
      {
        description: `Flux keeps code predictable when compared to other MVC frameworks. Developers can build applications without being bothered about complicated interactions between data resources.
        Flux boasts of a better-structured data flow – unidirectional. Being unidirectional is the central feature of Flux. The actions are propagated to the new system with regard to user interactions. You can start using Flux without using a whole lot of new code, apart from React.
        Flux vs. MVC`,
        author: `Brad Beed`,
        rating: `6,0`,
        date: getRandomDate(),
        id: nanoid()
      },
    ]
  },
];
