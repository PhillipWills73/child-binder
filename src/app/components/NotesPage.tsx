import { Plus, Calendar as CalendarIcon, CheckSquare, Square, Trash2, Clock } from 'lucide-react';
import { useState } from 'react';

export function NotesPage() {
  const [selectedTab, setSelectedTab] = useState<'notes' | 'tasks' | 'calendar'>('notes');

  const notes = [
    { id: 1, child: 'Sarah M.', title: 'Follow up on therapy progress', content: 'Dr. Anderson mentioned Sarah is making excellent progress. Schedule next review in 2 weeks.', date: '2026-05-02', time: '10:30 AM' },
    { id: 2, child: 'James T.', title: 'School transition meeting', content: 'Met with new school counselor. James will need additional support for math.', date: '2026-05-01', time: '2:15 PM' },
    { id: 3, child: 'Michael R.', title: 'Attendance concern', content: 'School reported 3 absences this week. Need to discuss with grandmother.', date: '2026-04-28', time: '9:00 AM' },
  ];

  const tasks = [
    { id: 1, title: 'Submit monthly case reports', child: 'All Cases', completed: false, dueDate: '2026-05-10', priority: 'high' },
    { id: 2, title: 'Schedule home visit for Sarah M.', child: 'Sarah M.', completed: false, dueDate: '2026-05-08', priority: 'high' },
    { id: 3, title: 'Review medical records for Emma K.', child: 'Emma K.', completed: true, dueDate: '2026-05-05', priority: 'medium' },
    { id: 4, title: 'Update placement documentation', child: 'James T.', completed: false, dueDate: '2026-05-12', priority: 'medium' },
    { id: 5, title: 'Coordinate parent visitation', child: 'Sarah M.', completed: true, dueDate: '2026-05-03', priority: 'low' },
  ];

  const calendarEvents = [
    { id: 1, title: 'Case Review - Sarah M.', date: '2026-05-15', time: '10:00 AM', type: 'review' },
    { id: 2, title: 'Court Hearing - James T.', date: '2026-05-08', time: '2:00 PM', type: 'court' },
    { id: 3, title: 'Home Visit - Michael R.', date: '2026-05-12', time: '3:00 PM', type: 'visit' },
    { id: 4, title: 'Medical Appointment - Emma K.', date: '2026-05-18', time: '11:30 AM', type: 'medical' },
    { id: 5, title: 'Team Meeting', date: '2026-05-20', time: '9:00 AM', type: 'meeting' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Notes & Tasks</h1>
              <p className="text-sm text-gray-500">Manage your notes, tasks, and calendar</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-5 h-5" />
              Add New
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setSelectedTab('notes')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              selectedTab === 'notes'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setSelectedTab('tasks')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              selectedTab === 'tasks'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Tasks
          </button>
          <button
            onClick={() => setSelectedTab('calendar')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              selectedTab === 'calendar'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Calendar
          </button>
        </div>

        {selectedTab === 'notes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{note.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{note.child}</p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Trash2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-3">{note.content}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    {new Date(note.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {note.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'tasks' && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <button className="mt-0.5">
                      {task.completed ? (
                        <CheckSquare className="w-5 h-5 text-green-600" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-gray-500">{task.child}</span>
                        <span className="text-xs text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          task.priority === 'high' ? 'bg-red-100 text-red-700' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'calendar' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Calendar view coming soon</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {calendarEvents.map((event) => (
                  <div key={event.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.type === 'court' ? 'bg-red-100 text-red-700' :
                        event.type === 'review' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'medical' ? 'bg-purple-100 text-purple-700' :
                        event.type === 'visit' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}