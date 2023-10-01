export const react = [
  {
    question: "What is React?",
    answer: `React is a front-end JavaScript library.It follows the component based approach which helps in building reusable UI components..It is used for developing complex and interactive web and mobile UIs.`,
  },
  {
    question: "List some of the major advantages of React",
    answer: `It increases the applications performance
    It can be conveniently used on the client as well as server side
    Because of JSX, codes readability increases
    Using React, writing UI test cases become extremely easy
    `,
  },
  {
    question: "What are the limitations of React?",
    answer: `React is just a library, not a full  framework

    React is not just rapidly growing it is also rapidly changing which forces its developers to update the way they write code.

    Flexibility and Lack of Conventions
    
    Coding gets complex as it uses inline templating and JSX

    SEO Handling
    `,
  },
  {
    question: "What is JSX?",
    answer: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax.`,
  },
  {
    question: "What do you understand by Virtual DOM? Explain its works.",
    answer: `A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
    `,
  },
  {
    question: "What is Props?",
    answer: `Props is the shorthand for Properties in React. They are read-only components which must be kept immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.`,
  },
  {
    question: "What is a state in React and how is it used?",
    answer: `States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components.`,
  },
  {
    question: "What are the different phases of React component’s lifecycle?",
    answer: `Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
    
    Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
    
    Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.
    `,
  },
  {
    question: "What do you know about controlled and uncontrolled components?Controlled Components",
    answer: ` Controlled Components
    They do not maintain their own state

   Data is controlled by the parent component

   They take in the current values through props and then notify the changes via callbacks

   Uncontrolled Components
They maintain their own state

 Data is controlled by the DOM

Refs are used to get their current values
    `,
  },
  {
    question: "What is the significance of keys in React?",
    answer: `Keys are used for identifying unique Virtual DOM Elements. They help React to optimize the rendering.React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.
    `,
  },
  {
    question: "Differentiate between Real DOM and Virtual DOM",
    answer: `
    <table>
  <thead>
    <tr>
      <th>Real DOM</th>
      <th>Virtual DOM</th>
    </tr>
   </thead>
   <tbody>
   <tr>
   <td>it updates slow</td>
   <td>it updates faster</td>
   </tr>
   <tr>
   <td>can directly update html</td>
   <td>cant directly update html</td>
   </tr>
   <tr>
   <td>creates a new dom if element updates</td>
   <td>updates the jsx if element updates</td>
   </tr>
   <tr>
   <td>DOM manipulation is very expensive</td>
   <td>DOM manipulation is very easy</td>
   </tr>
   <tr>
   <td>Too much of memory wastage</td>
   <td>No memory wastage</td>
   </tr>
  </tbody>
</table>
     
    `,
  },

  {
    question: "What are Higher Order Components?",
    answer: `Higher Order Component is a way of reusing the component logic.HOC are custom components which wrap another component within it. They can accept any child component but they won’t modify or copy any behavior.The benefits are:Code reuse, logic and bootstrap abstraction`,
  },
  {
    question: "What is React Router?",
    answer: `React Router is a routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page.
    `,
  },
  {
    question:
      "Explain the difference between server-side rendering and client-side rendering in React.",
    answer: `<b>Server-side rendering (SSR)</b> is when the initial render of a React application is done on the server. The server generates the HTML for the initial state of the application and sends it to the browser. When the JavaScript bundle loads, React takes over and the application continues to function as a SPA on the client side.
    This approach has a few benefits such as:

    Improved performance for search engines and users on slow connections

    Better accessibility for users who have JavaScript disabled<br/><br/>    
    <b>Client-side rendering (CSR)</b> is when the React application is rendered entirely in the browser, using JavaScript. The browser requests the JavaScript bundle from the server and then renders the components on the client side. This approach has the benefit of faster load times for users on fast connections and a more responsive user interface.
    In general, CSR is the simpler option to implement and more popular, but SSR is a good choice for certain use cases, such as when SEO is a primary concern.
    `,
  },
  {
    question: "How do you handle optimization in a large React application?",
    answer: `Use the React Developer Tools to identify and fix performance bottlenecks. The React Developer Tools allow you to track the performance of individual components and identify which components are causing the most re-renders.
    Use the useMemo hook to memoize expensive calculations. This hook allows you to cache the results of expensive calculations and only recalculate them when the inputs have changed.
    Lazy loading: Lazy loading is a technique where you only load the components that are needed for the current view.
    Code splitting: Code splitting is a technique where you split your application into smaller chunks of code that are loaded on demand.
    Optimize the loading time of your application by using techniques like code minification, compression, and caching.
    Minimizing the number of DOM updates by using the key prop when rendering a list of items
    It’s also important to keep in mind that performance optimization is an ongoing process and you should regularly check and optimize your application as it grows.
    `,
  },
  {
    question: "How do you handle error handling in a React application?",
    answer: `A React application can handle errors in a few different ways. To handle problems that happen during rendering, one typical solution is a try-catch block.Or you can use the Error Boundaries feature to design a component that detects errors that happen inside its child components as an alternative strategy.
    `,
  },
  {
    question: "Explain the concept of a Hook in React.",
    answer: `Hooks is a feature in React that allows us to add state and other React features to functional components.Hooks are named functions that start with the word use and allow us to reuse stateful logic across components.. Hooks make our code more reusable, easier to understand, and easier to test.The are used for data fetching,managing state updates,Handling form submissions,Implementing animations and transitions.
    `,
  },
  {
    question: "How do you handle localization in a React application?",
    answer: `Localization in a React application involves creating translated versions of text content and displaying the appropriate version based on the user’s preferred language. To handle localization, I would use a library such as react-i18next. With this library, you define a json with translation keys and their corresponding translations and provide a way to switch between languages at runtime.
    `,
  },
  {
    question: "How do you handle accessibility in a React application?",
    answer: `Handling accessibility in a React application involves making sure that your application can be used by as many people as possible, including those with disabilities. This can be achieved through various techniques, including:
    
    Semantic HTML: Use semantic HTML elements, such as button, nav, and header, to clearly define the structure and purpose of your content.
    
    Accessible Props: Use accessible props, such as aria-label, role, and tabIndex, to provide additional information to assistive technologies, such as screen readers.
    
    Keyboard Navigation: Ensure that all functionality can be accessed using a keyboard, and that keyboard focus is managed correctly.
    
    Color Contrast: Make sure that the contrast between the text and the background is high enough to be readable by people with color blindness or low vision.
    
    Alternative Text: Provide alternative text for images, videos, and other non-text elements to ensure that information is accessible to screen reader users.
    `,
  },
  {
    question: "How do you handle browser compatibility in a React application?",
    answer: `Polyfills: To support older browsers, you can use polyfills, which are JavaScript libraries that emulate missing features in older browsers.
    
    Browser detection: You can use libraries like browser-detect to detect the user’s browser and its version, and adjust your code accordingly.
    
    Feature detection: Instead of relying on browser detection, you can use feature detection to check if a specific feature is supported by the user’s browser before using it.
    
    CSS Reset: You can use CSS resets like normalize.css to make sure that all browsers display the styles in a consistent way.
    
    Testing: Regular testing in different browsers and devices is essential to catch any compatibility issues early in the development process.
    `,
  },
  {
    question: "How do you handle security in a React application?",
    answer: `Input validation: Validate all user inputs on the client and server side to prevent any malicious data from being processed.
    
    Authenticating and authorizing users: Use a secure authentication mechanism such as JSON Web Tokens to ensure that only authorized users can access sensitive data.
    
    Storing sensitive data securely: Do not store sensitive information such as passwords and credit card numbers in local storage, use encrypted storage instead.
    
    Implementing HTTPS: Use HTTPS to ensure secure communication between the client and server and protect against network attacks such as man-in-the-middle attacks.
    
    Keeping dependencies up-to-date: Regularly update React and its dependencies to patch any known security vulnerabilities.
    Regular security audits: Conduct regular security audits to identify and address potential security issues.
    `,
  },
];
