import './App.css'
import { Admin, Resource, ListGuesser} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from "./users";

function App() {

  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={ListGuesser} />
      </Admin>
    </>
  )
}

export default App
