import { Calendar, Filter, Search } from 'lucide-react';

export function TimelinePage() {
  const events = [
    { id: 1, date: '2026-05-02', child: 'Sarah M.', event: 'Therapy session completed', type: 'medical', user: 'Dr. Anderson' },
    { id: 2, date: '2026-05-01', child: 'James T.', event: 'New placement arranged at Riverside Group Home', type: 'placement', user: 'David Chen' },
    { id: 3, date: '2026-04-28', child: 'Sarah M.', event: 'Medical checkup - all vitals normal', type: 'medical', user: 'Dr. Smith' },
    { id: 4, date: '2026-04-28', child: 'Emma K.', event: 'Case review meeting completed', type: 'case', user: 'Lisa Thompson' },
    { id: 5, date: '2026-04-25', child: 'Michael R.', event: 'School attendance concern reported', type: 'alert', user: 'Principal Williams' },
    { id: 6, date: '2026-04-20', child: 'James T.', event: 'School report card received - Honor roll', type: 'education', user: 'Teacher Johnson' },
    { id: 7, date: '2026-04-18', child: 'Emma K.', event: 'Dental appointment completed', type: 'medical', user: 'Dr. Lee' },
    { id: 8, date: '2026-04-15', child: 'Michael R.', event: 'Home visit conducted - positive report', type: 'visit', user: 'Maria Garcia' },
    { id: 9, date: '2026-04-12', child: 'Sarah M.', event: 'Parent visitation supervised', type: 'visit', user: 'Maria Garcia' },
    { id: 10, date: '2026-04-10', child: 'James T.', event: 'IEP meeting scheduled for next month', type: 'education', user: 'School Counselor' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Timeline</h1>
              <p className="text-sm text-gray-500">Chronological history of all events</p>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search timeline events..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={event.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'medical' ? 'bg-red-500' :
                    event.type === 'education' ? 'bg-purple-500' :
                    event.type === 'placement' ? 'bg-green-500' :
                    event.type === 'visit' ? 'bg-blue-500' :
                    event.type === 'alert' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`}></div>
                  {index < events.length - 1 && (
                    <div className="w-px h-full bg-gray-200 mt-2"></div>
                  )}
                </div>

                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.event}</p>
                      <p className="text-sm text-gray-600 mt-1">{event.child}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                        event.type === 'medical' ? 'bg-red-100 text-red-700' :
                        event.type === 'education' ? 'bg-purple-100 text-purple-700' :
                        event.type === 'placement' ? 'bg-green-100 text-green-700' :
                        event.type === 'visit' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'alert' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Added by {event.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}