import { baseApi } from "./baseApi";

const AppointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Public Endpoints
    getAvailableDates: builder.query<string[], void>({
      query: () => ({
        url: "/appointments/available-dates",
        method: "GET",
      }),
      providesTags: ["Holidays"],
    }),
    getAvailableTimeSlots: builder.query<
      { id: string; startTime: string; endTime: string }[],
      string
    >({
      query: (date) => ({
        url: `/appointments/available-time-slots/${date}`,
        method: "GET",
      }),
      providesTags: ["TimeSlots"],
    }),
    createBooking: builder.mutation<
      {
        id: string;
        date: string;
        timeSlotId: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        typeOfCase: string;
        caseDescription: string;
        paymentStatus: string;
        createdAt: string;
        updatedAt: string;
      },
      {
        date: string;
        timeSlotId: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        typeOfCase: string;
        caseDescription: string;
      }
    >({
      query: (bookingData) => ({
        url: "/appointments/book",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["TimeSlots"],
    }),

    // Admin Endpoints
    createHoliday: builder.mutation<
      {
        id: string;
        date: string;
        description?: string;
        createdAt: string;
        updatedAt: string;
      },
      { date: string; description?: string }
    >({
      query: (holidayData) => ({
        url: "/appointments/holiday",
        method: "POST",
        body: holidayData,
      }),
      invalidatesTags: ["Holidays"],
    }),
    deleteHoliday: builder.mutation<void, string>({
      query: (id) => ({
        url: `/appointments/holiday/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Holidays"],
    }),
    getHolidays: builder.query<
      { id: string; date: string; description?: string; createdAt: string }[],
      void
    >({
      query: () => ({
        url: "/appointments/holidays",
        method: "GET",
      }),
      providesTags: ["Holidays"],
    }),
    createTimeSlots: builder.mutation<
      {
        id: string;
        date: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
        createdAt: string;
        updatedAt: string;
      }[],
      { date: string }
    >({
      query: (data) => ({
        url: "/appointments/time-slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TimeSlots"],
    }),
    updateTimeSlot: builder.mutation<
      {
        id: string;
        date: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
        createdAt: string;
        updatedAt: string;
      },
      { id: string; startTime?: string; endTime?: string }
    >({
      query: ({ id, ...data }) => ({
        url: `/appointments/time-slot/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["TimeSlots"],
    }),
    deleteTimeSlot: builder.mutation<void, string>({
      query: (id) => ({
        url: `/appointments/time-slot/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TimeSlots"],
    }),
  }),
});

export const {
  useGetAvailableDatesQuery,
  useGetAvailableTimeSlotsQuery,
  useCreateBookingMutation,
  useCreateHolidayMutation,
  useDeleteHolidayMutation,
  useGetHolidaysQuery,
  useCreateTimeSlotsMutation,
  useUpdateTimeSlotMutation,
  useDeleteTimeSlotMutation,
} = AppointmentApi;
