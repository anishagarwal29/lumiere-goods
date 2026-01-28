import React, { useState, useEffect, useRef } from 'react';
import { Product, ChatMessage } from '../types';
import { Send, Bot, X, Sparkles, User } from 'lucide-react';
import { createProductChatSession, sendMessageToAI } from '../services/gemini';
import { ChatSession } from "@google/genai";

interface AIChatProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ product, isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<ChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSession) {
      // Initialize chat session when opened for the first time
      setChatSession(createProductChatSession(product));
      setMessages([
        { role: 'model', text: `Hi there! 👋 I'm your AI assistant for the ${product.name}. Ask me anything about features, specs, or shipping!` }
      ]);
    }
  }, [isOpen, product, chatSession]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToAI(chatSession, userMsg);

    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform animate-slide-in border-l border-gray-100">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-slate-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Nova AI Assistant</h3>
            <p className="text-xs text-slate-500">Ask about {product.name}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
          <X className="w-5 h-5 text-slate-500" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-br-none' 
                  : 'bg-slate-100 text-slate-800 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-3 flex space-x-1 items-center">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question..."
            className="flex-1 bg-slate-100 border-none rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;