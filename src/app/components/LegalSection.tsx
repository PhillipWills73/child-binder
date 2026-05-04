import { Scale, Calendar, FileText, AlertCircle, Download } from 'lucide-react';

export function LegalSection() {
  const legalInfo = {
    caseNumber: 'JV-2024-0158',
    caseType: 'Dependency',
    filingDate: '2024-01-08',
    judge: 'Hon. Patricia Williams',
    courtroom: 'Juvenile Court - Room 3A',
    permanencyGoal: 'Reunification',
    alternateGoal: 'Guardianship',
    attorney: {
      name: 'John Martinez, Esq.',
      phone: '(503) 555-0299',
      email: 'jmartinez@legalaid.org',
      firm: 'Children\'s Legal Aid'
    }
  };

  const upcomingHearings = [
    {
      date: '2026-05-15',
      time: '9:30 AM',
      type: 'Review Hearing',
      location: 'Juvenile Court - Room 3A',
      purpose: '6-month case review and permanency assessment'
    },
    {
      date: '2026-08-15',
      time: '10:00 AM',
      type: 'Permanency Hearing',
      location: 'Juvenile Court - Room 3A',
      purpose: '12-month permanency hearing'
    },
  ];

  const courtOrders = [
    {
      date: '2024-01-10',
      type: 'Removal Order',
      description: 'Order for protective custody and placement',
      status: 'Active',
      fileSize: '1.2 MB'
    },
    {
      date: '2024-01-15',
      type: 'Case Plan Order',
      description: 'Court-ordered case plan for reunification services',
      status: 'Active',
      fileSize: '850 KB'
    },
    {
      date: '2024-07-20',
      type: 'Review Order',
      description: '6-month review hearing findings and orders',
      status: 'Active',
      fileSize: '1.5 MB'
    },
    {
      date: '2025-01-15',
      type: 'Review Order',
      description: '12-month review hearing findings and orders',
      status: 'Active',
      fileSize: '1.3 MB'
    },
  ];

  const compliance = [
    { requirement: 'Parent visitation attendance', status: 'Compliant', details: '95% attendance rate' },
    { requirement: 'Service plan participation', status: 'Compliant', details: 'Attending all required services' },
    { requirement: 'Court appearance', status: 'Compliant', details: 'No missed hearings' },
    { requirement: 'Home visits', status: 'Compliant', details: 'Monthly visits completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Case Information</h3>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Case Number</p>
              <p className="font-medium text-gray-900">{legalInfo.caseNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Case Type</p>
              <p className="font-medium text-gray-900">{legalInfo.caseType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Filing Date</p>
              <p className="font-medium text-gray-900">{new Date(legalInfo.filingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Assigned Judge</p>
              <p className="font-medium text-gray-900">{legalInfo.judge}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Courtroom</p>
              <p className="font-medium text-gray-900">{legalInfo.courtroom}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Permanency Plan</h3>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Primary Goal</p>
              <p className="font-medium text-gray-900 flex items-center gap-2">
                {legalInfo.permanencyGoal}
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Primary
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Alternate Goal</p>
              <p className="font-medium text-gray-900">{legalInfo.alternateGoal}</p>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Child's Attorney</p>
              <p className="font-medium text-gray-900">{legalInfo.attorney.name}</p>
              <p className="text-sm text-gray-600">{legalInfo.attorney.firm}</p>
              <p className="text-sm text-gray-600 mt-1">{legalInfo.attorney.phone}</p>
              <p className="text-sm text-gray-600">{legalInfo.attorney.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Hearings</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {upcomingHearings.map((hearing, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                  <p className="text-xs text-blue-600 font-medium">{new Date(hearing.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</p>
                  <p className="text-lg font-semibold text-blue-600">{new Date(hearing.date).getDate()}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{hearing.type}</p>
                      <p className="text-sm text-gray-600 mt-1">{hearing.time} • {hearing.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                      Scheduled
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{hearing.purpose}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Court Orders & Documents</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {courtOrders.map((order, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{order.type}</p>
                    <p className="text-sm text-gray-600 mt-1">{order.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(order.date).toLocaleDateString()} • {order.fileSize}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Status</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {compliance.map((item, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.requirement}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}