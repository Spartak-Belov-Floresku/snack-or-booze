### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - to navigat among views of various components in a React Application.

- What is a single page application?
  - an app that doesn't need to reload the page during its use and works within a browser.

- What are some differences between client side and server side routing?
  - routing on the client side involves the UI, routing on the server side usually involves the resources that drive the UI, or that are driven by the UI.

- What are two ways of handling redirects with React Router? When would you use each?
  - using `history.push`  is keeping track of session history for React Router.
  - `<Redirect />`  whenever to redirect to another path, change the state to re-render the component.
  - `<Redirect>` When I need override the current location in the history stack to the new location, `history.push` when I need to pushe a new entry onto the history stack.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - navigate users to the not fond component or to the home component.

- How do you grab URL parameters from within a component using React Router?
  - using `useParams()` function

- What is context in React? When would you use it?
  - context is the way to share data which can be considered "global" for React components tree and use that data where needed.
  - when some data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function components in React.
  - a functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. 
  - a class component requires to extend from React lifecycle methods (for example, componentDidMount) that cannot be used in functional components.

- What are some of the problems that hooks were designed to solve?
  - hooks let to use state and other React features  by doing a single function call, without writing a class.