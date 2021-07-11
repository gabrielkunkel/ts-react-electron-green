import React, { useCallback } from 'react';
import logo from '../assets/logo.png';
import './App.css';
import { IMessage, MessageState } from '../models/messages';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessage, removeMessage } from '../store/actionCreators';
import { AddMessage } from './messages/AddMessage';
import { Message } from './messages/Message';

const App: React.FC = () => {
  const messages: readonly IMessage[] = useSelector(
    (state: MessageState) => state.messages,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveMessage = useCallback(
    (message: IMessage) => dispatch(addMessage(message)),
    [dispatch]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Boilerplate Messsages</h1>
        <h4>TypeScript-React-Redux-Electron</h4>
      </header>

      <AddMessage saveMessage={saveMessage} />
      {messages.map((message: IMessage) => (
        <Message
          key={message.id.toString()}
          message={message}
          removeMessage={removeMessage}
        />))}
    </div>
  );
}

export default App;
