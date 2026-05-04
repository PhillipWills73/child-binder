import { ArrowLeft, FileText, Heart, GraduationCap, Users, Calendar, Phone, MapPin, AlertCircle, Upload, Download, Plus, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { BirthParentSection } from './BirthParentSection';
import { LegalSection } from './LegalSection';

interface ChildProfileProps {
  onBack: () => void;
}

export function ChildProfile({ onBack }: ChildProfileProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'birth-parents' | 'legal'>('overview');

  const child = {
    name: 'Sarah Martinez',
    dateOfBirth: '2018-03-15',
    age: 8,
    caseNumber: 'FC-2024-0158',
    photo: 'SM',
    entryDate: '2024-01-10',
    currentPlacement: {
      type: 'Foster Home',
      family: 'Johnson Family',
      address: '456 Oak Street, Portland, OR 97214',
      startDate: '2024-01-15',
      phone: '(503) 555-0123'
    },
    caseWorker: {
      name: 'Maria Garcia',
      phone: '(503) 555-0198',
      email: 'maria.garcia@agency.gov'
    },
    bio: 'Sarah is a bright and energetic 8-year-old who loves drawing and animals. She has made significant progress in her new placement and is adjusting well to her new school.',
  };

  const documents = [
    { name: 'Medical Records', date: '2026-04-28', type: 'Medical', urgent: false },
    { name: 'School Enrollment Form', date: '2026-04-20', type: 'Education', urgent: false },
    { name: 'Placement Agreement', date: '2024-01-15', type: 'Legal', urgent: false },
    { name: 'Immunization Records', date: '2026-03-10', type: 'Medical', urgent: true },
  ];

  const timeline = [
    { date: '2026-05-02', event: 'Therapy session completed', type: 'medical', user: 'Dr. Anderson' },
    { date: '2026-04-28', event: 'Medical checkup - all vitals normal', type: 'medical', user: 'Dr. Smith' },
    { date: '2026-04-25', event: 'Case review meeting scheduled', type: 'case', user: 'Maria Garcia' },
    { date: '2026-04-20', event: 'School report card received - Honor roll', type: 'education', user: 'Teacher Johnson' },
    { date: '2026-04-15', event: 'Home visit conducted', type: 'visit', user: 'Maria Garcia' },
  ];

  const medicalInfo = [
    { label: 'Allergies', value: 'Peanuts, Penicillin', alert: true },
    { label: 'Medications', value: 'None currently' },
    { label: 'Last Checkup', value: 'April 28, 2026' },
    { label: 'Next Appointment', value: 'July 15, 2026' },
  ];

  const educationInfo = [
    { label: 'School', value: 'Lincoln Elementary School' },
    { label: 'Grade', value: '3rd Grade' },
    { label: 'Teacher', value: 'Ms. Johnson' },
    { label: 'Performance', value: 'Above Average' },
  ];

  return (
    <div className="size-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-gray-900">Child Profile</h1>
              <p className="text-sm text-gray-500">Case #{child.caseNumber}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Add Note
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('birth-parents')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'birth-parents'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Birth Parents
          </button>
          <button
            onClick={() => setActiveTab('legal')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === 'legal'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Legal
          </button>
        </div>

        {activeTab === 'birth-parents' && <BirthParentSection />}
        {activeTab === 'legal' && <LegalSection />}

        {activeTab === 'overview' && (
          <>
        {/* Profile Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold flex-shrink-0">
              {child.photo}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{child.name}</h2>
                  <p className="text-gray-600">Age {child.age} • DOB: {new Date(child.dateOfBirth).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Active
                </div>
              </div>
              <p className="text-gray-700 mb-4">{child.bio}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Entry Date</p>
                  <p className="text-gray-900 font-medium">{new Date(child.entryDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-gray-500">Days in Care</p>
                  <p className="text-gray-900 font-medium">{Math.floor((new Date().getTime() - new Date(child.entryDate).getTime()) / (1000 * 60 * 60 * 24))} days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Placement & Case Worker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Current Placement</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="text-gray-900 font-medium">{child.currentPlacement.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Caregiver</p>
                <p className="text-gray-900 font-medium">{child.currentPlacement.family}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-900 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {child.currentPlacement.address}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="text-gray-900 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {child.currentPlacement.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Placement Start Date</p>
                <p className="text-gray-900 font-medium">{new Date(child.currentPlacement.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Case Worker</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  MG
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{child.caseWorker.name}</p>
                  <p className="text-sm text-gray-500">Primary Case Worker</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-900 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {child.caseWorker.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">{child.caseWorker.email}</p>
              </div>
              <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <MessageSquare className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Medical & Education Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>
            </div>
            <div className="space-y-3">
              {medicalInfo.map((info, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className={`font-medium flex items-center gap-2 ${info.alert ? 'text-red-600' : 'text-gray-900'}`}>
                    {info.alert && <AlertCircle className="w-4 h-4" />}
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Plus className="w-4 h-4" />
              Update Medical Info
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            </div>
            <div className="space-y-3">
              {educationInfo.map((info, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-gray-900 font-medium">{info.value}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Plus className="w-4 h-4" />
              Update Education Info
            </button>
          </div>
        </div>

        {/* Documents & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Upload className="w-4 h-4" />
                Upload
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {documents.map((doc, index) => (
                <div key={index} className="px-6 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          {doc.name}
                          {doc.urgent && (
                            <span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-full">
                              Urgent
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500">{doc.type} • {new Date(doc.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Timeline</h3>
              </div>
            </div>
            <div className="px-6 py-4 space-y-4 max-h-96 overflow-y-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="relative">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      item.type === 'medical' ? 'bg-red-500' :
                      item.type === 'education' ? 'bg-purple-500' :
                      item.type === 'visit' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}></div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-1 top-4 w-px h-full bg-gray-200"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm text-gray-900">{item.event}</p>
                    <p className="text-xs text-gray-500 mt-1">{new Date(item.date).toLocaleDateString()} • {item.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </>
        )}
      </main>
    </div>
  );
}