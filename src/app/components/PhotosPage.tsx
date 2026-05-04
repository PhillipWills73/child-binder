import { Search, Upload, Download, Image as ImageIcon, Grid3x3, List } from 'lucide-react';

export function PhotosPage() {
  const photos = [
    { id: 1, child: 'Sarah M.', title: 'Birthday Party 2026', date: '2026-04-20', count: 12 },
    { id: 2, child: 'James T.', title: 'School Field Trip', date: '2026-04-15', count: 8 },
    { id: 3, child: 'Emma K.', title: 'First Day of School', date: '2026-04-10', count: 5 },
    { id: 4, child: 'Michael R.', title: 'Family Visit', date: '2026-04-05', count: 15 },
    { id: 5, child: 'Sarah M.', title: 'Art Class Project', date: '2026-03-28', count: 6 },
    { id: 6, child: 'James T.', title: 'Sports Day', date: '2026-03-22', count: 20 },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Photos</h1>
              <p className="text-sm text-gray-500">Memories and milestones</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Upload className="w-5 h-5" />
              Upload Photos
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
              placeholder="Search photos by child, event, or date..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
            <button className="p-2 bg-blue-50 text-blue-600 rounded">
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((album) => (
            <div key={album.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{album.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{album.child}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">{new Date(album.date).toLocaleDateString()}</span>
                  <span className="text-xs text-gray-500">{album.count} photos</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}