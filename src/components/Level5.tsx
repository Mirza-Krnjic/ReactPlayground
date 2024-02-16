import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import challangeSvg from '../assets/challange.svg'
import MainHeader from './MainHeader'

function Level5() {
  const navigate = useNavigate()

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>
      {/* Main Card Content */}
      <div className="card">
        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="React Router employs a declarative, component-based approach for routing, while Angular uses a configuration-based system through the RouterModule for defining routes"
        />
        <ul>
          <li>
            Angular Router is part of the Angular platform, providing deep
            integration with Angular projects, whereas React Router is a
            third-party library for React applications.
          </li>
          <li>
            Angular Router uses a configuration-based approach for routing,
            defining routes in a single location, while React Router employs a
            declarative, component-based approach, embedding routes within
            components.
          </li>
          <li>
            Angular Router supports features like lazy loading out of the box,
            which allows for splitting the application into multiple bundles
            that are loaded on demand, potentially improving initial load times.
            React Router requires additional configuration and code splitting
            techniques, such as using React.lazy and Suspense, to achieve lazy
            loading.
          </li>
          <li>
            In Angular Router, guard services (e.g., CanActivate, CanDeactivate)
            are used to control navigation based on specific conditions, such as
            user authentication. React Router uses a more manual approach, where
            you implement route protection by conditionally rendering routes or
            redirecting users within components.
          </li>
          <li>
            Angular Router has built-in support for handling query parameters
            and fragments in a more integrated manner, while with React Router,
            developers often manage query parameters and state manually or use
            additional libraries.
          </li>
          <li>
            React Router's API is designed to be more intuitive and flexible for
            React developers, focusing on the component structure of React
            applications. Angular Router is designed to work within the Angular
            ecosystem, leveraging Angular's dependency injection and module
            system.
          </li>
          <li>
            Angular's router is tightly coupled with Angular's core
            functionality and development practices, including the use of
            TypeScript, whereas React Router can be used in JavaScript or
            TypeScript projects with React but emphasizes JavaScript idioms.
          </li>
        </ul>

        <div>
          A link to the related official documentation can be found{' '}
          <a rel="stylesheet" href="https://reactrouter.com/en/main">
            here
          </a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <ExplanationCard
            explanationCardSvg={challangeSvg}
            text="Please check the MARKDOWN file in the project"
          />
        </div>
      </div>
    </>
  )
}

export default Level5
