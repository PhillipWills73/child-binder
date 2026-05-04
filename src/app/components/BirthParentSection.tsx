import { Phone, Mail, MapPin, Calendar, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export function BirthParentSection() {
  const birthParents = [
    {
      name: 'Jennifer Martinez',
      relationship: 'Mother',
      phone: '(503) 555-0234',
      email: 'j.martinez@email.com',
      address: '123 Main St, Portland, OR 97201',
      status: 'Active Case Plan',
      rights: 'Full',
      lastContact: '2026-04-28',
    },
    {
      name: 'Robert Martinez',
      relationship: 'Father',
      phone: '(503) 555-0256',
      email: 'r.martinez@email.com',
      address: '456 Elm St, Portland, OR 97202',
      status: 'Active Case Plan',
      rights: 'Full',
      lastContact: '2026-04-15',
    },
  ];

  const visitationSchedule = [
    { date: '2026-05-05', time: '2:00 PM - 4:00 PM', location: 'Family Visitation Center', supervisor: 'Amanda Foster', status: 'Scheduled' },
    { date: '2026-05-12', time: '2:00 PM - 4:00 PM', location: 'Family Visitation Center', supervisor: 'Amanda Foster', status: 'Scheduled' },
    { date: '2026-04-28', time: '2:00 PM - 4:00 PM', location: 'Family Visitation Center', supervisor: 'Amanda Foster', status: 'Completed' },
    { date: '2026-04-21', time: '2:00 PM - 4:00 PM', location: 'Family Visitation Center', supervisor: 'Amanda Foster', status: 'Completed' },
  ];

  const casePlanGoals = [
    { goal: 'Complete parenting classes', status: 'In Progress', progress: 75, dueDate: '2026-06-15' },
    { goal: 'Maintain stable housing', status: 'Completed', progress: 100, dueDate: '2026-03-01' },
    { goal: 'Complete substance abuse treatment', status: 'In Progress', progress: 60, dueDate: '2026-07-30' },
    { goal: 'Attend weekly therapy sessions', status: 'In Progress', progress: 90, dueDate: 'Ongoing' },
    { goal: 'Secure stable employment', status: 'Completed', progress: 100, dueDate: '2026-02-15' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {birthParents.map((parent, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{parent.name}</h3>
                <p className="text-sm text-gray-500">{parent.relationship}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {parent.rights}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{parent.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{parent.email}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{parent.address}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Case Plan Status</span>
                <span className="font-medium text-gray-900">{parent.status}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">Last Contact</span>
                <span className="text-gray-900">{new Date(parent.lastContact).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Case Plan Goals</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {casePlanGoals.map((goal, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{goal.goal}</p>
                  <p className="text-sm text-gray-500 mt-1">Due: {goal.dueDate}</p>
                </div>
                <div className="flex items-center gap-2">
                  {goal.status === 'Completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-600" />
                  )}
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    goal.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {goal.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${goal.progress === 100 ? 'bg-green-600' : 'bg-blue-600'}`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Visitation Schedule</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {visitationSchedule.map((visit, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {new Date(visit.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                      <p className="text-sm text-gray-600">{visit.time}</p>
                    </div>
                  </div>
                  <div className="ml-8 text-sm text-gray-600">
                    <p>{visit.location}</p>
                    <p className="text-gray-500">Supervisor: {visit.supervisor}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  visit.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  visit.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {visit.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}