import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { format, addWeeks, subWeeks } from "date-fns";
import { fr } from "date-fns/locale";

const days = [
  "Toute la semaine",
  "Samedi",
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
];

const events = [
    {
        id: 1,
        title: "Transjurassienne",
        dateRange: "du ? au ?",
        days: "Mardi—Vendredi",
        date: "? – ?, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        url: "/eventsPage",
        image:
            "/images/Transjurassienne/Transjurassienne.jpg",
    },
    {
        id: 2,
        title: "See you starting from July 4th!",
        dateRange: "du 22 au 4",
        days: "Mardi—Vendredi",
        date: "avril – juillet, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        image:
            "/images/ims.jpeg",
    },
    {
        id: 3,
        title: "See you starting from July 4th!",
        dateRange: "du 22 au 4",
        days: "Mardi—Vendredi",
        date: "avril – juillet, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        image:
            "/images/ims.jpeg",
    },
    {
        id: 4,
        title: "See you starting from July 4th!",
        dateRange: "du 22 au 4",
        days: "Mardi—Vendredi",
        date: "avril – juillet, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        image:
            "/images/ims.jpeg",
    },
    {
        id: 5,
        title: "See you starting from July 4th!",
        dateRange: "du 22 au 4",
        days: "Mardi—Vendredi",
        date: "avril – juillet, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        image:
            "/images/ims.jpeg",
    },
    {
        id: 6,
        title: "See you starting from July 4th!",
        dateRange: "du 22 au 4",
        days: "Mardi—Vendredi",
        date: "avril – juillet, 2025",
        location: "Chaux-Neuve",
        time: "à 00:00",
        image:
            "/images/ims.jpeg",
    },

];

export default function WeeklyCalendar() {
    const [selectedDay, setSelectedDay] = useState("Mercredi");
    const [weekOffset, setWeekOffset] = useState(0);
  
    const today = new Date();
    const startOfWeek = addWeeks(today, weekOffset);
    const endOfWeek = addWeeks(today, weekOffset + 1);
  
    const formattedStart = format(startOfWeek, "dd MMMM", { locale: fr });
    const formattedEnd = format(endOfWeek, "dd MMMM", { locale: fr });
  
    // Function to check if it's the last item in the row
    const getBorderClass = (index) => {
      const columnsPerRow = 4; // Adjust this according to the number of columns in your grid
      const isLastInRow = (index + 1) % columnsPerRow === 0;
      return isLastInRow ? '' : 'lg:border-r';
    };
  
    return (
      <div className="container mx-auto lg:px-[104px]  py-[128px] lg:py-[128px]">
        {/* Navigation supérieure */}
        <div className="text-center mb-4 block lg:hidden">
          <p className="text-sm font-medium">
            Semaine du {formattedStart} au {formattedEnd}
          </p>
        </div>
  
        <div className="flex justify-between items-center pb-6">
          <button
            onClick={() => setWeekOffset(weekOffset - 1)}
            className="flex items-center gap-2 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              Du {format(subWeeks(startOfWeek, 1), "dd MMMM", { locale: fr })} au {formattedStart}
            </span>
          </button>
  
          <p className="hidden lg:block text-sm font-medium">
            Semaine du {formattedStart} au {formattedEnd}
          </p>
  
          <button
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="flex items-center gap-2 text-sm"
          >
            <span>
              Du {formattedEnd} au {format(addWeeks(endOfWeek, 1), "dd MMMM", { locale: fr })}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
  
        {/* Navigation jours */}
        <div className="hidden lg:flex flex-wrap gap-4 border-b border-gray-200 pb-4 mb-6">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`pb-2 border-b-2 transition-colors duration-200 ${
                selectedDay === day
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
  
        {/* Menu déroulant mobile */}
        <div className="lg:hidden mb-6 relative">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
  
        {/* Grille d'événements */}
        <div className="flex flex-col lg:grid grid-cols-12 pb-16 gap-6 divide-y divide-gray-200 lg:divide-y-0">
          {events.map((event, index) => {
            return (
              <a
                key={event.id}
                href={event.url}
                className={`group  md:col-span-6 lg:col-span-4`}
              >
                <div className=" lg:border-b lg:border-r border-gray-400 pb-4 h-full lg:pt-0  lg:px-3 cursor-pointer flex flex-col text-black lg:text-black lg:group-hover:text-white lg:hover:bg-black">
                  <div className="flex flex-row mb-12 lg:flex-col-reverse gap-3 lg:gap-4 px-4 pt-4 lg:px-0 lg:pt-0">
                    <p className="text-xl font-semibold leading-none group-hover:text-white">
                      {event.dateRange}
                    </p>
                    <p className="text-sm leading-none group-hover:text-white">
                      {event.days}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400 capitalize group-hover:text-gray-400">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-end px-4 pb-4 lg:px-0 lg:pb-0">
                    <p className="text-2xl font-semibold mb-4 group-hover:text-white">
                      {event.title}
                    </p>
                    <div className="flex flex-row items-center gap-2 mb-6 text-sm">
                      <MapPin className="w-4 h-4 group-hover:text-white text-black" />
                      <p className="text-blue-500 group-hover:text-white">
                        {event.location}
                      </p>
                      <p className="text-gray-500 group-hover:text-white">
                        {event.time}
                      </p>
                    </div>
                    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden h-96">
                      <img
                        alt="Visuel de l'événement"
                        loading="lazy"
                        src={event.image}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }