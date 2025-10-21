'use client';
import React from 'react';

const tasks = [
  { subject: 'Register for upcoming CRM Webinars', dueDate: '12/05/2025', status: 'Not Started', priority: 'Low', relatedTo: 'K' },
  { subject: 'Refer CRM Videos', dueDate: '14/05/2025', status: 'In Progress', priority: 'Normal', relatedTo: 'M' },
  { subject: 'Competitor Comparison Document', dueDate: '10/05/2025', status: 'Not Started', priority: 'Highest', relatedTo: 'F' },
  { subject: 'Get Approval from Manager', dueDate: '11/05/2025', status: 'Not Started', priority: 'Low', relatedTo: 'C' },
  { subject: 'Update Marketing Plan', dueDate: '16/05/2025', status: 'In Progress', priority: 'Normal', relatedTo: 'J' },
  { subject: 'Prepare Quarterly Report', dueDate: '18/05/2025', status: 'Not Started', priority: 'High', relatedTo: 'L' },
  { subject: 'Team Meeting Preparation', dueDate: '15/05/2025', status: 'In Progress', priority: 'Normal', relatedTo: 'D' },
  { subject: 'Client Follow-up Call', dueDate: '17/05/2025', status: 'Not Started', priority: 'Low', relatedTo: 'P' },
  { subject: 'Product Demo Setup', dueDate: '19/05/2025', status: 'Not Started', priority: 'Highest', relatedTo: 'Q' },
  { subject: 'Training Session', dueDate: '20/05/2025', status: 'In Progress', priority: 'Normal', relatedTo: 'R' },
];

const meetings = [
  { title: 'Demo', from: '13/05/2025 04:39 AM', to: '13/05/2025 05:39 AM', relatedTo: 'Printing Dimensions', contact: 'F' },
  { title: 'Webinar', from: '13/05/2025 06:39 AM', to: '13/05/2025 07:39 AM', relatedTo: 'Commercial Press (Sample)', contact: '👤' },
  { title: 'TradeShow', from: '13/05/2025', to: '13/05/2025', relatedTo: 'Chemel', contact: '👤' },
  { title: 'Webinar', from: '13/05/2025 07:39 AM', to: '13/05/2025 08:39 AM', relatedTo: 'Chanay (Sample)', contact: '👤' },
  { title: 'Seminar', from: '13/05/2025 04:39 AM', to: '13/05/2025 06:39 AM', relatedTo: 'Carissa Kidman (Sample)', contact: '👤' },
  { title: 'Strategy Meeting', from: '14/05/2025 09:00 AM', to: '14/05/2025 10:00 AM', relatedTo: 'Marketing Dept', contact: 'A' },
  { title: 'Budget Review', from: '15/05/2025 11:00 AM', to: '15/05/2025 12:00 PM', relatedTo: 'Finance Team', contact: 'B' },
  { title: 'Product Launch', from: '16/05/2025 02:00 PM', to: '16/05/2025 03:30 PM', relatedTo: 'Sales & Marketing', contact: 'C' },
  { title: 'Customer Feedback', from: '17/05/2025 04:00 PM', to: '17/05/2025 05:00 PM', relatedTo: 'Support Team', contact: 'D' },
  { title: 'Project Kickoff', from: '18/05/2025 08:00 AM', to: '18/05/2025 09:30 AM', relatedTo: 'Development Team', contact: 'E' },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Highest': return 'bg-red-100 text-red-800';
    case 'High': return 'bg-orange-100 text-orange-800';
    case 'Normal': return 'bg-blue-100 text-blue-800';
    case 'Low': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress': return 'bg-blue-100 text-blue-800';
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'Not Started': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const formatDateTime = (dateTimeString: string) => {
  if (!dateTimeString.includes(':')) return formatDate(dateTimeString);
  
  const date = new Date(dateTimeString);
  return isNaN(date.getTime()) ? dateTimeString : date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const TaskCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Tasks Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">My Open Tasks</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-auto max-h-96">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left">Subject</th>
                <th className="px-6 py-3 text-left">Due Date</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Priority</th>
                <th className="px-6 py-3 text-center">Related To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tasks.map((task, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                      {task.subject}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(task.dueDate)}
                      {new Date(task.dueDate) < new Date() && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800">
                          Overdue
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 font-medium text-xs">
                      {task.relatedTo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Meetings Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">My Meetings</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-auto max-h-96">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">From</th>
                <th className="px-6 py-3 text-left">To</th>
                <th className="px-6 py-3 text-left">Related To</th>
                <th className="px-6 py-3 text-center">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {meetings.map((meeting, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                      {meeting.title}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDateTime(meeting.from)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDateTime(meeting.to)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {meeting.relatedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {meeting.contact === '👤' ? (
                      <span className="text-xl">{meeting.contact}</span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-700 font-medium text-xs">
                        {meeting.contact}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;