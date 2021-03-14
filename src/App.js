import { ChatEngine } from 'react-chat-engine'
import ChatFeed from "./components/ChatFeed"
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="c32567b4-a17c-4a24-bd16-03ca12eec4cf"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // userName="tuongvy"
      // userSecret="123456"
      renderChatFeed={
        (chatAppProps) => <ChatFeed {...chatAppProps} />
      }
    />
  );
}

export default App;
