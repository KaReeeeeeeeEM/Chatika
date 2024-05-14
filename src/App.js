import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
//import 'dotenv' from './dotenv';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
        height="100vh"
        projectID="79a677c8-6a21-4c43-a9bc-2f2aadf2ce02"
        userName= { localStorage.getItem('username') }
        userSecret= { localStorage.getItem('password') }
     />
  )
}

export default App