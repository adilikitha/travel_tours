import "./App.css";
import Layout from './components/Layout/Layout'

function App() {
   axios.post("travel-tours-api.vercel.app")

   return <Layout />;
}

export default App;
