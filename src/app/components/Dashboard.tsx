import { Bell, FileText, Users, Calendar, AlertCircle, Plus, Search } from 'lucide-react';

interface DashboardProps {
  onViewChild: () => void;
  onNewCase: (formId: string) => void;
}

export function Dashboard({ onViewChild, onNewCase }: DashboardProps) {
  const stats = [
    { label: 'Active Cases', value: '24', icon: Users, change: '+2 this week' },
    { label: 'Pending Documents', value: '12', icon: FileText, change: '3 urgent' },
    { label: 'Upcoming Reviews', value: '8', icon: Calendar, change: 'Next 7 days' },
    { label: 'Alerts', value: '5', icon: AlertCircle, change: '2 high priority' },
  ];

  const children = [
    {
      id: 1,
      name: 'Sarah M.',
      age: 8,
      placement: 'Foster Home - Johnson Family',
      caseWorker: 'Maria Garcia',
      nextReview: '2026-05-15',
      alerts: 2,
      status: 'stable'
    },
    {
      id: 2,
      name: 'James T.',
      age: 14,
      placement: 'Group Home - Riverside',
      caseWorker: 'David Chen',
      nextReview: '2026-05-08',
      alerts: 1,
      status: 'attention'
    },
    {
      id: 3,
      name: 'Emma K.',
      age: 5,
      placement: 'Foster Home - Martinez Family',
      caseWorker: 'Lisa Thompson',
      nextReview: '2026-05-22',
      alerts: 0,
      status: 'stable'
    },
    {
      id: 4,
      name: 'Michael R.',
      age: 11,
      placement: 'Kinship Care - Grandmother',
      caseWorker: 'Maria Garcia',
      nextReview: '2026-05-12',
      alerts: 3,
      status: 'urgent'
    },
  ];

  const recentActivity = [
    { type: 'document', message: 'Medical records updated for Sarah M.', time: '2 hours ago' },
    { type: 'placement', message: 'New placement arranged for James T.', time: '5 hours ago' },
    { type: 'review', message: 'Case review completed for Emma K.', time: '1 day ago' },
    { type: 'alert', message: 'School attendance concern for Michael R.', time: '1 day ago' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">Overview of your caseload</p>
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-600 mt-2">{stat.change}</p>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by child name, case number, or caregiver..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => onNewCase('kansas/PPS-1001')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" />
            New Case
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Active Cases</h2>
              <p className="text-sm text-gray-500">Children currently in your caseload</p>
            </div>
            <div className="divide-y divide-gray-200">
              {children.map((child) => (
                <div key={child.id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900">{child.name}</h3>
                        <span className="text-sm text-gray-500">Age {child.age}</span>
                        {child.alerts > 0 && (
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            child.status === 'urgent'
                              ? 'bg-red-100 text-red-700'
                              : child.status === 'attention'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {child.alerts} {child.alerts === 1 ? 'Alert' : 'Alerts'}
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {child.placement}
                        </p>
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Next Review: {new Date(child.nextReview).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={onViewChild}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All Cases →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'alert'
                        ? 'bg-red-500'
                        : activity.type === 'document'
                        ? 'bg-blue-500'
                        : activity.type === 'placement'
                        ? 'bg-green-500'
                        : 'bg-purple-500'
                    }`}></div>
                    <div>
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All Activity →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}