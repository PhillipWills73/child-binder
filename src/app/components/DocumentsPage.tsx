import { Search, Upload, Download, FileText, Filter, Plus } from 'lucide-react';

export function DocumentsPage() {
  const documents = [
    { id: 1, name: 'Medical Records - Sarah M.', child: 'Sarah M.', type: 'Medical', date: '2026-04-28', size: '2.4 MB', urgent: false },
    { id: 2, name: 'School Enrollment - James T.', child: 'James T.', type: 'Education', date: '2026-04-25', size: '1.1 MB', urgent: false },
    { id: 3, name: 'Immunization Records - Emma K.', child: 'Emma K.', type: 'Medical', date: '2026-04-20', size: '850 KB', urgent: true },
    { id: 4, name: 'Placement Agreement - Michael R.', child: 'Michael R.', type: 'Legal', date: '2026-04-18', size: '3.2 MB', urgent: false },
    { id: 5, name: 'Court Report - Sarah M.', child: 'Sarah M.', type: 'Legal', date: '2026-04-15', size: '1.8 MB', urgent: true },
    { id: 6, name: 'Therapy Notes - James T.', child: 'James T.', type: 'Medical', date: '2026-04-12', size: '650 KB', urgent: false },
    { id: 7, name: 'Home Study Report - Emma K.', child: 'Emma K.', type: 'Legal', date: '2026-04-10', size: '4.1 MB', urgent: false },
    { id: 8, name: 'Progress Report - Michael R.', child: 'Michael R.', type: 'Education', date: '2026-04-08', size: '920 KB', urgent: false },
  ];

  const categories = [
    { name: 'All Documents', count: documents.length },
    { name: 'Medical', count: 3 },
    { name: 'Education', count: 2 },
    { name: 'Legal', count: 3 },
    { name: 'Urgent', count: 2 },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
              <p className="text-sm text-gray-500">Manage all case documents</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Upload className="w-5 h-5" />
              Upload Document
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
              placeholder="Search documents by name, child, or type..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg border transition-colors ${
                index === 0
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <p className="text-2xl font-semibold">{category.count}</p>
              <p className="text-sm mt-1">{category.name}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Child</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                          {doc.urgent && (
                            <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{doc.child}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        doc.type === 'Medical' ? 'bg-red-100 text-red-700' :
                        doc.type === 'Education' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {doc.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{new Date(doc.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{doc.size}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}