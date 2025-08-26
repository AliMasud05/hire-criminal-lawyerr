// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { format, parseISO } from "date-fns";

// interface Holiday {
//   id: string;
//   date: string;
//   description?: string;
//   createdAt: string;
// }

// interface TimeSlot {
//   id: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   isBooked: boolean;
// }

// const AdminDashboard = () => {
//   const [holidays, setHolidays] = useState<Holiday[]>([]);
//   const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
//   const [holidayDate, setHolidayDate] = useState("");
//   const [holidayDescription, setHolidayDescription] = useState("");
//   const [timeSlotDate, setTimeSlotDate] = useState("");
//   const [updateTimeSlotId, setUpdateTimeSlotId] = useState("");
//   const [updateStartTime, setUpdateStartTime] = useState("");
//   const [updateEndTime, setUpdateEndTime] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const apiBaseUrl = "http://localhost:5000";
//   const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

//   const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   };

//   // Fetch holidays
//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get(`${apiBaseUrl}/holidays`, { headers });
//       setHolidays(response.data.data);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to fetch holidays");
//     }
//   };

//   // Fetch time slots for a date
//   const fetchTimeSlots = async (date: string) => {
//     try {
//       const response = await axios.get(`${apiBaseUrl}/available-time-slots/${date}`, { headers });
//       setTimeSlots(response.data.data);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to fetch time slots");
//     }
//   };

//   // Create holiday
//   const handleCreateHoliday = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post(
//         `${apiBaseUrl}/holiday`,
//         { date: holidayDate, description: holidayDescription },
//         { headers }
//       );
//       setSuccess("Holiday created successfully");
//       setHolidayDate("");
//       setHolidayDescription("");
//       fetchHolidays();
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to create holiday");
//     }
//   };

//   // Delete holiday
//   const handleDeleteHoliday = async (id: string) => {
//     setError("");
//     setSuccess("");
//     try {
//       await axios.delete(`${apiBaseUrl}/holiday/${id}`, { headers });
//       setSuccess("Holiday deleted successfully");
//       fetchHolidays();
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to delete holiday");
//     }
//   };

//   // Create time slots
//   const handleCreateTimeSlots = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post(
//         `${apiBaseUrl}/time-slots`,
//         { date: timeSlotDate },
//         { headers }
//       );
//       setSuccess("Time slots created successfully");
//       setTimeSlotDate("");
//       fetchTimeSlots(timeSlotDate);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to create time slots");
//     }
//   };

//   // Update time slot
//   const handleUpdateTimeSlot = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.patch(
//         `${apiBaseUrl}/time-slot/${updateTimeSlotId}`,
//         { startTime: updateStartTime, endTime: updateEndTime },
//         { headers }
//       );
//       setSuccess("Time slot updated successfully");
//       setUpdateTimeSlotId("");
//       setUpdateStartTime("");
//       setUpdateEndTime("");
//       fetchTimeSlots(timeSlotDate);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to update time slot");
//     }
//   };

//   // Delete time slot
//   const handleDeleteTimeSlot = async (id: string) => {
//     setError("");
//     setSuccess("");
//     try {
//       await axios.delete(`${apiBaseUrl}/time-slot/${id}`, { headers });
//       setSuccess("Time slot deleted successfully");
//       fetchTimeSlots(timeSlotDate);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to delete time slot");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchHolidays();
//     } else {
//       setError("Please log in as admin");
//     }
//   }, [fetchHolidays, token]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

//         {error && <div className="bg-red-500 text-white p-4 mb-4 rounded">{error}</div>}
//         {success && <div className="bg-green-500 text-white p-4 mb-4 rounded">{success}</div>}

//         {/* Create Holiday */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Create Holiday</h2>
//           <form onSubmit={handleCreateHoliday} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Date</label>
//               <input
//                 type="date"
//                 value={holidayDate}
//                 onChange={(e) => setHolidayDate(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Description (Optional)</label>
//               <input
//                 type="text"
//                 value={holidayDescription}
//                 onChange={(e) => setHolidayDescription(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Create Holiday
//             </button>
//           </form>
//         </div>

//         {/* Holiday List */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Holidays</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b">Date</th>
//                   <th className="py-2 px-4 border-b">Description</th>
//                   <th className="py-2 px-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {holidays.map((holiday) => (
//                   <tr key={holiday.id}>
//                     <td className="py-2 px-4 border-b">{format(parseISO(holiday.date), "yyyy-MM-dd")}</td>
//                     <td className="py-2 px-4 border-b">{holiday.description || "N/A"}</td>
//                     <td className="py-2 px-4 border-b">
//                       <button
//                         onClick={() => handleDeleteHoliday(holiday.id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Create Time Slots */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Create Time Slots</h2>
//           <form onSubmit={handleCreateTimeSlots} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Date</label>
//               <input
//                 type="date"
//                 value={timeSlotDate}
//                 onChange={(e) => setTimeSlotDate(e.target.value)}
//                 className="mt-1 block w-full p-2 border rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Create Time Slots
//             </button>
//           </form>
//         </div>

//         {/* Time Slot List and Update */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Time Slots</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Select Date to View Time Slots</label>
//             <input
//               type="date"
//               value={timeSlotDate}
//               onChange={(e) => {
//                 setTimeSlotDate(e.target.value);
//                 fetchTimeSlots(e.target.value);
//               }}
//               className="mt-1 block w-full p-2 border rounded-md"
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b">Date</th>
//                   <th className="py-2 px-4 border-b">Start Time</th>
//                   <th className="py-2 px-4 border-b">End Time</th>
//                   <th className="py-2 px-4 border-b">Booked</th>
//                   <th className="py-2 px-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {timeSlots.map((slot) => (
//                   <tr key={slot.id}>
//                     <td className="py-2 px-4 border-b">{format(parseISO(slot.date), "yyyy-MM-dd")}</td>
//                     <td className="py-2 px-4 border-b">{slot.startTime}</td>
//                     <td className="py-2 px-4 border-b">{slot.endTime}</td>
//                     <td className="py-2 px-4 border-b">{slot.isBooked ? "Yes" : "No"}</td>
//                     <td className="py-2 px-4 border-b">
//                       <button
//                         onClick={() => {
//                           setUpdateTimeSlotId(slot.id);
//                           setUpdateStartTime(slot.startTime);
//                           setUpdateEndTime(slot.endTime);
//                         }}
//                         className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2"
//                         disabled={slot.isBooked}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDeleteTimeSlot(slot.id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                         disabled={slot.isBooked}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {updateTimeSlotId && (
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold mb-4">Update Time Slot</h3>
//               <form onSubmit={handleUpdateTimeSlot} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Start Time</label>
//                   <input
//                     type="text"
//                     value={updateStartTime}
//                     onChange={(e) => setUpdateStartTime(e.target.value)}
//                     className="mt-1 block w-full p-2 border rounded-md"
//                     placeholder="e.g., 10:00"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">End Time</label>
//                   <input
//                     type="text"
//                     value={updateEndTime}
//                     onChange={(e) => setUpdateEndTime(e.target.value)}
//                     className="mt-1 block w-full p-2 border rounded-md"
//                     placeholder="e.g., 11:00"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Update Time Slot
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;