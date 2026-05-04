import { Search, Plus, Filter, Users } from 'lucide-react';

interface ChildrenPageProps {
  onViewChild: () => void;
}

export function ChildrenPage({ onViewChild }: ChildrenPageProps) {
  const children = [
    {
      id: 1,
      name: 'Sarah Martinez',
      age: 8,
      placement: 'Foster Home - Johnson Family',
      caseWorker: 'Maria Garcia',
      entryDate: '2024-01-10',
      status: 'stable',
      alerts: 0
    },
    {
      id: 2,
      name: 'James Thompson',
      age: 14,
      placement: 'Group Home - Riverside',
      caseWorker: 'David Chen',
      entryDate: '2023-08-15',
      status: 'attention',
      alerts: 1
    },
    {
      id: 3,
      name: 'Emma Kim',
      age: 5,
      placement: 'Foster Home - Martinez Family',
      caseWorker: 'Lisa Thompson',
      entryDate: '2024-03-22',
      status: 'stable',
      alerts: 0
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      age: 11,
      placement: 'Kinship Care - Grandmother',
      caseWorker: 'Maria Garcia',
      entryDate: '2023-11-05',
      status: 'urgent',
      alerts: 3
    },
    {
      id: 5,
      name: 'Olivia Chen',
      age: 7,
      placement: 'Foster Home - Williams Family',
      caseWorker: 'David Chen',
      entryDate: '2024-02-14',
      status: 'stable',
      alerts: 0
    },
    {
      id: 6,
      name: 'Noah Brown',
      age: 16,
      placement: 'Independent Living Program',
      caseWorker: 'Lisa Thompson',
      entryDate: '2022-05-20',
      status: 'stable',
      alerts: 0
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Children</h1>
              <p className="text-sm text-gray-500">Manage all children in care</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-5 h-5" />
              Add Child
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
              placeholder="Search by name, case number, or placement..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow cursor-pointer" onClick={onViewChild}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                {child.alerts > 0 && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
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

              <h3 className="font-semibold text-gray-900 mb-1">{child.name}</h3>
              <p className="text-sm text-gray-500 mb-3">Age {child.age}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{child.placement}</span>
                </div>
                <div className="text-gray-500">
                  <span className="font-medium">Case Worker:</span> {child.caseWorker}
                </div>
                <div className="text-gray-500">
                  <span className="font-medium">In Care:</span> {Math.floor((new Date().getTime() - new Date(child.entryDate).getTime()) / (1000 * 60 * 60 * 24))} days
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}