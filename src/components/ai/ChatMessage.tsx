import { Button } from '@/components/ui/Button';

interface ChatMessageProps {
  message: {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    attachments?: File[];
  };
  onDownloadPDF: () => void;
}

export function ChatMessage({ message, onDownloadPDF }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-visa-600 text-white'
            : 'bg-white text-gray-900 border border-gray-200'
        }`}
      >
        {/* Message Content */}
        <div className="mb-2">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>

        {/* Attachments */}
        {message.attachments && message.attachments.length > 0 && (
          <div className="mb-3 p-2 bg-white bg-opacity-20 rounded border border-white border-opacity-30">
            <p className="text-xs mb-2 opacity-90">Attachments:</p>
            <div className="space-y-1">
              {message.attachments.map((file, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span className="truncate max-w-[200px]">{file.name}</span>
                  <span className="text-xs opacity-75">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message Footer */}
        <div className={`flex items-center justify-between text-xs ${
          isUser ? 'text-visa-100' : 'text-gray-500'
        }`}>
          <span>
            {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          
          {isAssistant && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onDownloadPDF}
              className={`text-xs p-1 h-auto ${
                isUser ? 'text-visa-100 hover:text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
