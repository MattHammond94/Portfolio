import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

/* Pages */
import Home from '../src/Pages/Home';
import Projects from '../src/Pages/Projects';
import NotFound from '../src/Pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />

      <Route path="projects" element={<Projects />} />

      <Route path="*" element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
