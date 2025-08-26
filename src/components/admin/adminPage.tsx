/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  useCreateHolidayMutation,
  useCreateTimeSlotsMutation,
  useDeleteHolidayMutation,
  useDeleteTimeSlotMutation,
  useGetAvailableTimeSlotsQuery,
  useGetHolidaysQuery,
  useUpdateTimeSlotMutation,
} from "@/redux/api/AppointmentApi";

export default function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [holidayDescription, setHolidayDescription] = useState("");
  const [editTimeSlot, setEditTimeSlot] = useState<{
    id: string;
    startTime: string;
    endTime: string;
  } | null>(null);

  // RTK Query hooks
  const { data: holidaysResponse, isLoading: holidaysLoading } = useGetHolidaysQuery();
  const holidays = holidaysResponse?.data || []; // Access the 'data' field from the response
  const { data: timeSlotsResponse, isLoading: timeSlotsLoading } =
    useGetAvailableTimeSlotsQuery(
      selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      { skip: !selectedDate }
    );
  const timeSlots = timeSlotsResponse?.data || []; // Access the 'data' field from the response
  const [createHoliday] = useCreateHolidayMutation();
  const [deleteHoliday] = useDeleteHolidayMutation();
  const [createTimeSlots] = useCreateTimeSlotsMutation();
  const [updateTimeSlot] = useUpdateTimeSlotMutation();
  const [deleteTimeSlot] = useDeleteTimeSlotMutation();

  // Handle holiday creation
  const handleCreateHoliday = async () => {
    if (!selectedDate) return;
    try {
      await createHoliday({
        date: format(selectedDate, "yyyy-MM-dd"),
        description: holidayDescription || undefined,
      }).unwrap();
      toast.success("Holiday created successfully");
      setHolidayDescription("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create holiday");
    }
  };

  // Handle holiday deletion
  const handleDeleteHoliday = async (id: string) => {
    try {
      await deleteHoliday(id).unwrap();
      toast.success("Holiday deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete holiday");
    }
  };

  // Handle time slots creation
  const handleCreateTimeSlots = async () => {
    if (!selectedDate) return;
    try {
      await createTimeSlots({
        date: format(selectedDate, "yyyy-MM-dd"),
      }).unwrap();
      toast.success("Time slots created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create time slots");
    }
  };

  // Handle time slot update
  const handleUpdateTimeSlot = async () => {
    if (!editTimeSlot) return;
    try {
      await updateTimeSlot({
        id: editTimeSlot.id,
        startTime: editTimeSlot.startTime,
        endTime: editTimeSlot.endTime,
      }).unwrap();
      toast.success("Time slot updated successfully");
      setEditTimeSlot(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update time slot");
    }
  };

  // Handle time slot deletion
  const handleDeleteTimeSlot = async (id: string) => {
    try {
      await deleteTimeSlot(id).unwrap();
      toast.success("Time slot deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete time slot");
    }
  };

  // Tile content for calendar to mark holidays
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;
    const dateString = format(date, "yyyy-MM-dd");
    const holiday = holidays.find((h) => h.date === dateString);
    return holiday ? <p className="text-red-500 text-xs">Holiday</p> : null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Select Date</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={tileContent}
            className="border-none"
          />
        </div>
        {/* Holiday Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manage Holidays</h2>
          <div className="mb-4">
            <input
              type="text"
              value={holidayDescription}
              onChange={(e) => setHolidayDescription(e.target.value)}
              placeholder="Holiday description (optional)"
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={handleCreateHoliday}
              disabled={!selectedDate}
              className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              Create Holiday
            </button>
          </div>
          <h3 className="text-lg font-medium mb-2">Existing Holidays</h3>
          {holidaysLoading ? (
            <p>Loading holidays...</p>
          ) : holidays.length === 0 ? (
            <p>No holidays found.</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {holidays.map((holiday:any) => (
                <li
                  key={holiday.id}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
                >
                  <span>
                    {holiday.date} {holiday.description && `- ${holiday.description}`}
                  </span>
                  <button
                    onClick={() => handleDeleteHoliday(holiday.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Time Slot Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            Manage Time Slots {selectedDate && `for ${format(selectedDate, "PPP")}`}
          </h2>
          <button
            onClick={handleCreateTimeSlots}
            disabled={!selectedDate}
            className="mb-4 w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            Create Time Slots
          </button>
          {timeSlotsLoading ? (
            <p>Loading time slots...</p>
          ) : timeSlots.length === 0 ? (
            <p>No time slots found for this date.</p>
          ) : (
            <ul className="space-y-2">
              {timeSlots.map((slot) => (
                <li
                  key={slot.id}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
                >
                  {editTimeSlot?.id === slot.id ? (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={editTimeSlot.startTime}
                        onChange={(e) =>
                          setEditTimeSlot({
                            ...editTimeSlot,
                            startTime: e.target.value,
                          })
                        }
                        className="p-1 border rounded-md"
                        placeholder="Start Time (e.g., 9:00)"
                      />
                      <input
                        type="text"
                        value={editTimeSlot.endTime}
                        onChange={(e) =>
                          setEditTimeSlot({
                            ...editTimeSlot,
                            endTime: e.target.value,
                          })
                        }
                        className="p-1 border rounded-md"
                        placeholder="End Time (e.g., 10:00)"
                      />
                      <button
                        onClick={handleUpdateTimeSlot}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditTimeSlot(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <span>
                        {slot.startTime} - {slot.endTime}
                      </span>
                      <div>
                        <button
                          onClick={() =>
                            setEditTimeSlot({
                              id: slot.id,
                              startTime: slot.startTime,
                              endTime: slot.endTime,
                            })
                          }
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTimeSlot(slot.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
