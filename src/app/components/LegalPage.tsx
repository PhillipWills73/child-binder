import { Search, Plus, Filter, Scale, Calendar, FileText, AlertCircle } from 'lucide-react';

export function LegalPage() {
  const legalCases = [
    {
      id: 1,
      child: 'Sarah M.',
      caseNumber: 'JV-2024-0158',
      caseType: 'Dependency',
      judge: 'Hon. Patricia Williams',
      nextHearing: '2026-05-15',
      hearingType: 'Review Hearing',
      status: 'Active',
      goal: 'Reunification',
      attorney: 'John Martinez, Esq.',
      daysInCare: 480,
      urgency: 'medium'
    },
    {
      id: 2,
      child: 'James T.',
      caseNumber: 'JV-2023-0842',
      caseType: 'Dependency',
      judge: 'Hon. Michael Chen',
      nextHearing: '2026-05-08',
      hearingType: 'Permanency Hearing',
      status: 'Active',
      goal: 'Adoption',
      attorney: 'Sarah Johnson, Esq.',
      daysInCare: 627,
      urgency: 'high'
    },
    {
      id: 3,
      child: 'Emma K.',
      caseNumber: 'JV-2024-0321',
      caseType: 'Dependency',
      judge: 'Hon. Patricia Williams',
      nextHearing: '2026-05-22',
      hearingType: 'Review Hearing',
      status: 'Active',
      goal: 'Reunification',
      attorney: 'Robert Lee, Esq.',
      daysInCare: 105,
      urgency: 'low'
    },
    {
      id: 4,
      child: 'Michael R.',
      caseNumber: 'JV-2023-1156',
      caseType: 'Dependency',
      judge: 'Hon. Michael Chen',
      nextHearing: '2026-05-12',
      hearingType: 'Compliance Review',
      status: 'Active',
      goal: 'Guardianship',
      attorney: 'John Martinez, Esq.',
      daysInCare: 545,
      urgency: 'high'
    },
  ];

  const upcomingHearings = [
    { date: '2026-05-08', child: 'James T.', type: 'Permanency Hearing', judge: 'Hon. Michael Chen', time: '10:00 AM' },
    { date: '2026-05-12', child: 'Michael R.', type: 'Compliance Review', judge: 'Hon. Michael Chen', time: '2:00 PM' },
    { date: '2026-05-15', child: 'Sarah M.', type: 'Review Hearing', judge: 'Hon. Patricia Williams', time: '9:30 AM' },
    { date: '2026-05-22', child: 'Emma K.', type: 'Review Hearing', judge: 'Hon. Patricia Williams', time: '11:00 AM' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Legal</h1>
              <p className="text-sm text-gray-500">Court proceedings and legal documentation</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-5 h-5" />
              Add Legal Document
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by child name, case number, or judge..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Active Legal Cases</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {legalCases.map((legalCase) => (
                  <div key={legalCase.id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-gray-900">{legalCase.child}</h3>
                          <span className="text-sm text-gray-500">Case #{legalCase.caseNumber}</span>
                          {legalCase.urgency === 'high' && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{legalCase.caseType} • {legalCase.judge}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        legalCase.goal === 'Reunification' ? 'bg-blue-100 text-blue-700' :
                        legalCase.goal === 'Adoption' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {legalCase.goal}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Next Hearing</p>
                        <p className="text-gray-900 font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(legalCase.nextHearing).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{legalCase.hearingType}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Attorney</p>
                        <p className="text-gray-900 font-medium">{legalCase.attorney}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        {legalCase.daysInCare} days in care • Status: <span className="text-green-600 font-medium">{legalCase.status}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Hearings</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingHearings.map((hearing, index) => (
                  <div key={index} className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <p className="text-xs text-blue-600 font-medium">{new Date(hearing.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</p>
                        <p className="text-lg font-semibold text-blue-600">{new Date(hearing.date).getDate()}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{hearing.child}</p>
                        <p className="text-xs text-gray-600 mt-1">{hearing.type}</p>
                        <p className="text-xs text-gray-500 mt-1">{hearing.time} • {hearing.judge}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Deadlines</h3>
                  <p className="text-xs text-gray-500">Action items due soon</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                  <div>
                    <p className="text-sm text-gray-900">Submit permanency plan - James T.</p>
                    <p className="text-xs text-gray-500">Due: May 6, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
                  <div>
                    <p className="text-sm text-gray-900">File progress report - Sarah M.</p>
                    <p className="text-xs text-gray-500">Due: May 13, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}