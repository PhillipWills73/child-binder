import { Search, Plus, Filter, Home, Phone, MapPin, Users, Star, CheckCircle, AlertCircle } from 'lucide-react';

export function FosterHomesPage() {
  const fosterHomes = [
    {
      id: 1,
      name: 'Johnson Family',
      address: '456 Oak Street, Portland, OR 97214',
      phone: '(503) 555-0123',
      email: 'johnson.family@email.com',
      capacity: 3,
      currentPlacements: 1,
      licenseStatus: 'Active',
      licenseExpiry: '2027-03-15',
      type: 'Traditional Foster Home',
      specializations: ['Ages 5-12', 'Sibling Groups'],
      rating: 4.8,
      yearsActive: 5,
      children: ['Sarah M.']
    },
    {
      id: 2,
      name: 'Martinez Family',
      address: '789 Pine Ave, Portland, OR 97215',
      phone: '(503) 555-0145',
      email: 'martinez.foster@email.com',
      capacity: 2,
      currentPlacements: 1,
      licenseStatus: 'Active',
      licenseExpiry: '2026-11-20',
      type: 'Traditional Foster Home',
      specializations: ['Ages 0-8', 'Special Needs'],
      rating: 4.9,
      yearsActive: 3,
      children: ['Emma K.']
    },
    {
      id: 3,
      name: 'Williams Family',
      address: '321 Maple Dr, Portland, OR 97216',
      phone: '(503) 555-0167',
      email: 'williams.home@email.com',
      capacity: 4,
      currentPlacements: 1,
      licenseStatus: 'Active',
      licenseExpiry: '2027-08-10',
      type: 'Traditional Foster Home',
      specializations: ['Ages 5-15', 'Teens', 'Behavioral Support'],
      rating: 4.7,
      yearsActive: 7,
      children: ['Olivia C.']
    },
    {
      id: 4,
      name: 'Riverside Group Home',
      address: '555 River Road, Portland, OR 97220',
      phone: '(503) 555-0190',
      email: 'intake@riverside-group.org',
      capacity: 12,
      currentPlacements: 8,
      licenseStatus: 'Active',
      licenseExpiry: '2026-12-31',
      type: 'Group Home',
      specializations: ['Teens', 'Behavioral Support', 'Independent Living Prep'],
      rating: 4.5,
      yearsActive: 12,
      children: ['James T.', 'Noah B.']
    },
    {
      id: 5,
      name: 'Thompson Family',
      address: '234 Birch Lane, Portland, OR 97213',
      phone: '(503) 555-0178',
      email: 'thompson.foster@email.com',
      capacity: 2,
      currentPlacements: 0,
      licenseStatus: 'Active',
      licenseExpiry: '2027-05-15',
      type: 'Traditional Foster Home',
      specializations: ['Ages 8-16', 'LGBTQ+ Support'],
      rating: 5.0,
      yearsActive: 4,
      children: []
    },
    {
      id: 6,
      name: 'Anderson Family',
      address: '890 Cedar Court, Portland, OR 97218',
      phone: '(503) 555-0201',
      email: 'anderson.care@email.com',
      capacity: 3,
      currentPlacements: 0,
      licenseStatus: 'Renewal Pending',
      licenseExpiry: '2026-05-30',
      type: 'Traditional Foster Home',
      specializations: ['Ages 0-5', 'Infant Care'],
      rating: 4.6,
      yearsActive: 2,
      children: []
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Foster Homes</h1>
              <p className="text-sm text-gray-500">Manage licensed foster homes and placements</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-5 h-5" />
              Add Foster Home
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
              placeholder="Search by family name, address, or specialization..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-2xl font-semibold text-gray-900">{fosterHomes.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Homes</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-2xl font-semibold text-gray-900">{fosterHomes.filter(h => h.currentPlacements < h.capacity).length}</p>
            <p className="text-sm text-gray-500 mt-1">Available</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-2xl font-semibold text-gray-900">{fosterHomes.reduce((sum, h) => sum + h.currentPlacements, 0)}</p>
            <p className="text-sm text-gray-500 mt-1">Current Placements</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-2xl font-semibold text-gray-900">{fosterHomes.reduce((sum, h) => sum + h.capacity, 0)}</p>
            <p className="text-sm text-gray-500 mt-1">Total Capacity</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {fosterHomes.map((home) => (
            <div key={home.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{home.name}</h3>
                    <p className="text-sm text-gray-500">{home.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">{home.rating}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{home.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{home.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Capacity: {home.currentPlacements}/{home.capacity}</span>
                  {home.currentPlacements < home.capacity && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                      {home.capacity - home.currentPlacements} available
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {home.specializations.map((spec, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  {home.licenseStatus === 'Active' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-600" />
                  )}
                  <span className={`text-sm ${home.licenseStatus === 'Active' ? 'text-green-700' : 'text-yellow-700'}`}>
                    {home.licenseStatus}
                  </span>
                  <span className="text-xs text-gray-500">
                    until {new Date(home.licenseExpiry).toLocaleDateString()}
                  </span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View Details
                </button>
              </div>

              {home.children.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Current Placements:</p>
                  <div className="flex flex-wrap gap-2">
                    {home.children.map((child, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {child}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}