
import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, Sparkles, BookOpen, User, HelpCircle } from 'lucide-react';
import { Project, ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';

interface ChatAssistantProps {
  currentProject: Project | null;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ currentProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentProject) {
      setMessages([
        { 
          role: 'assistant', 
          content: `Formal analysis of **${currentProject.title}** is ready. How may I assist with your technical inquiry regarding the engineering parameters?` 
        }
      ]);
      setIsOpen(true);
    } else {
        setMessages([
            {
                role: 'assistant',
                content: "I am the automated research guide. I can provide technical context on the investigative work shown in this portfolio."
            }
        ]);
    }
  }, [currentProject]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const dummyProject: Project = currentProject || {
      id: 'general',
      title: 'General Portfolio',
      category: 'Hardware',
      description: 'Candidate portfolio context',
      fullDocumentation: 'The candidate is a formal investigator in Creative Technology with 5+ years of experience in high-performance hardware systems.',
      videoUrl: '',
      thumbnail: '',
      tags: ['Engineering', 'Creative Tech'],
      techStack: ['C++', 'Python', 'Unity', 'Altium']
    };

    const response = await geminiService.chatAboutProject(dummyProject, messages, input);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'w-80 md:w-96' : 'w-12 h-12 overflow-hidden'}`}>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center shadow-xl hover:bg-stone-700 transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      ) : (
        <div className="bg-white border border-stone-200 shadow-2xl overflow-hidden flex flex-col h-[450px]">
          <div className="px-4 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3 h-3 text-stone-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Research Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-stone-200 p-1 rounded transition-colors">
              <Minimize2 className="w-3 h-3 text-stone-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] text-sm serif leading-relaxed ${
                  m.role === 'user' 
                    ? 'text-right italic text-stone-500' 
                    : 'text-stone-800'
                }`}>
                  <div className={`flex items-center gap-2 mb-1 opacity-40 text-[9px] font-bold uppercase tracking-widest ${m.role === 'user' ? 'justify-end' : ''}`}>
                    {m.role === 'assistant' ? 'System' : 'Inquiry'}
                  </div>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-[9px] text-stone-400 font-mono italic animate-pulse">Analyzing documentation...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Technical inquiry..."
                className="flex-1 bg-stone-50 border-b border-stone-200 py-2 px-3 text-xs focus:outline-none focus:border-stone-900 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-stone-900 hover:text-stone-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
