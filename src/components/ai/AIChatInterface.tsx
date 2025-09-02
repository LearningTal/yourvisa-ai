'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { ChatMessage } from './ChatMessage';
import { FileUploadButton } from './FileUploadButton';
import { ChatInput } from './ChatInput';

interface ChatMessageType {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: File[];
}

export function AIChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI visa assistant. I can help you with visa applications, requirements, and answer any questions you have. Feel free to ask me anything or upload documents for analysis.',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
      attachments: uploadedFiles.length > 0 ? [...uploadedFiles] : undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setUploadedFiles([]);
    setIsLoading(true);

    // Simulate AI response with streaming effect
    setTimeout(() => {
      const aiResponse: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I understand you're asking about: "${content}". Let me provide you with comprehensive information about visa requirements and processing. Based on your query, here are the key points you should consider...`,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleDownloadPDF = async (messageId: string) => {
    // TODO: Implement PDF generation and download
    console.log('Downloading PDF for message:', messageId);
    alert('PDF download feature coming soon!');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-visa-50 to-visa-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-visa-500 to-visa-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">AI Visa Assistant</h3>
            <p className="text-sm text-gray-600">Powered by advanced AI</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleDownloadPDF('current')}
          className="text-visa-600 hover:text-visa-700"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </Button>
      </div>

      {/* Messages Container */}
      <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onDownloadPDF={() => handleDownloadPDF(message.id)}
          />
        ))}
        
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-visa-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-visa-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-visa-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="text-sm">AI is thinking...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        {/* File Upload Area */}
        {uploadedFiles.length > 0 && (
          <div className="mb-3 p-3 bg-visa-50 rounded-lg border border-visa-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-visa-700">
                {uploadedFiles.length} file(s) attached
              </span>
              <button
                onClick={() => setUploadedFiles([])}
                className="text-visa-600 hover:text-visa-700 text-sm"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-2 py-1 rounded text-xs text-visa-700">
                  <span>{file.name}</span>
                  <button
                    onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                    className="text-visa-500 hover:text-visa-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-end space-x-2">
          <FileUploadButton onUpload={handleFileUpload} />
          <ChatInput onSend={handleSendMessage} disabled={isLoading} />
          <Button
            variant="primary"
            size="md"
            onClick={() => handleSendMessage('')}
            disabled={isLoading}
            className="px-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
