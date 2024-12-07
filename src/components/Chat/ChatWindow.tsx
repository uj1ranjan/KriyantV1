import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addMessage, setLoading } from '../../store/slices/chatSlice';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow: React.FC = () => {
  const dispatch = useDispatch();
  const { messages, isLoading } = useSelector((state: RootState) => state.chat);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    dispatch(
      addMessage({
        id: Date.now().toString(),
        content,
        sender: 'user',
        timestamp: new Date().toISOString(),
      })
    );

    // Simulate bot response
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(
        addMessage({
          id: (Date.now() + 1).toString(),
          content: 'This is a simulated response from the chatbot.',
          sender: 'bot',
          timestamp: new Date().toISOString(),
        })
      );
      dispatch(setLoading(false));
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
