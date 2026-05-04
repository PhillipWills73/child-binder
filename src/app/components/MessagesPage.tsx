import { Search, Send, Paperclip } from 'lucide-react';
import { useState } from 'react';

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);

  const conversations = [
    { id: 1, name: 'Johnson Family (Foster)', child: 'Sarah M.', lastMessage: 'Sarah did great at school today!', time: '10 min ago', unread: 2 },
    { id: 2, name: 'Dr. Anderson', child: 'Sarah M.', lastMessage: 'Therapy session notes attached', time: '2 hours ago', unread: 0 },
    { id: 3, name: 'David Chen (Case Worker)', child: 'James T.', lastMessage: 'Placement documents ready for review', time: '5 hours ago', unread: 1 },
    { id: 4, name: 'Lincoln Elementary', child: 'Sarah M.', lastMessage: 'Parent-teacher conference scheduled', time: '1 day ago', unread: 0 },
    { id: 5, name: 'Martinez Family (Foster)', child: 'Emma K.', lastMessage: 'Thanks for the update!', time: '2 days ago', unread: 0 },
  ];

  const messages = [
    { id: 1, sender: 'Johnson Family', message: 'Good morning! Just wanted to update you on Sarah.', time: '9:00 AM', isMe: false },
    { id: 2, sender: 'Me', message: 'Good morning! I would love to hear how things are going.', time: '9:05 AM', isMe: true },
    { id: 3, sender: 'Johnson Family', message: 'She had a wonderful week at school. Her teacher says she is really excelling in reading.', time: '9:10 AM', isMe: false },
    { id: 4, sender: 'Johnson Family', message: 'Sarah did great at school today! She got a gold star in math.', time: '3:45 PM', isMe: false },
    { id: 5, sender: 'Me', message: 'That is wonderful news! Thank you for keeping me updated.', time: '3:50 PM', isMe: true },
  ];

  return (
    <div className="flex-1 overflow-hidden bg-gray-50 flex">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`w-full p-4 border-b border-gray-200 text-left hover:bg-gray-50 transition-colors ${
                selectedConversation === conv.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <p className="font-medium text-gray-900">{conv.name}</p>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-1">{conv.child}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate flex-1">{conv.lastMessage}</p>
                <span className="text-xs text-gray-400 ml-2">{conv.time}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Johnson Family (Foster)</h2>
          <p className="text-sm text-gray-500">Foster parents for Sarah M.</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md ${msg.isMe ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-lg px-4 py-3`}>
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isMe ? 'text-blue-100' : 'text-gray-500'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Paperclip className="w-5 h-5 text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}