import React, { useState } from 'react';

const Horaires = ({ selectedDate, schedules }) => {
    const getSchedule = (date) => {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = weekdays[date.getDay()];
        return {
            dayName,
            schedule: schedules[dayName],
        };
    };
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - ((selectedDate.getDay() + 6) % 7));
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return date;
    });
    const weekRangeLabel = `Du ${weekDates[0].toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long',
    })} au ${weekDates[6].toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', year: 'numeric',
    })}`;
    return (
        <div className="rounded-lg shadow-lg p-6 flex-1 min-w-[300px] bg-white">
            <h3 className="text-xl font-semibold mb-2 text-basis-95">Horaire de la semaine</h3>
            <p className="text-sm mb-6 text-basis-90">{weekRangeLabel}</p>
            {weekDates.map((date) => {
            const { schedule } = getSchedule(date);
            const dayName = date.toLocaleDateString('fr-FR', { weekday: 'long' });
            return (
                <div key={dayName} className="grid grid-cols-2 gap-x-4 items-start mb-2">
                    <p className="capitalize text-basis-90 font-medium">{dayName}</p>
                    <div className="flex flex-wrap justify-end gap-x-4">
                        {schedule.map((time, i) => (
                        <p key={i} className="text-basis-90">{time}</p>
                        ))}
                    </div>
                </div>
            );
            })}
        </div>
    );
};

const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const CustomCalendarWithHoraires = ({ schedules }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const getDaysInMonthGrid = (month, year) => {
      const firstDayOfMonth = new Date(year, month, 1);
      const startDay = (firstDayOfMonth.getDay() + 6) % 7;
      const days = [];

      for (let i = 0; i < startDay; i++) {
        days.push(null);
      }

      const numDays = new Date(year, month + 1, 0).getDate();
      for (let d = 1; d <= numDays; d++) {
        days.push(new Date(year, month, d));
      }

      return days;
    };

    const calendarDays = getDaysInMonthGrid(month, year);

    const handleDateClick = (date) => {
      if (date) setSelectedDate(date);
    };

    const handlePrevWeek = () => {
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() - 7);
      setSelectedDate(newDate);
      setMonth(newDate.getMonth());
      setYear(newDate.getFullYear());
    };

    const handleNextWeek = () => {
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + 7);
      setSelectedDate(newDate);
      setMonth(newDate.getMonth());
      setYear(newDate.getFullYear());
    };

    return (
        <section className="max-w-screen-3xl mx-auto relative bg-[hsla(206,14%,97%,1)] px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
        <header className="border-b border-gray-300  mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
            <h2 className="text-3xl font-bold text-basis-95 ">Horaires</h2>
        </header>
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Calendar Panel */}
            <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
                <div className="flex justify-between items-center gap-6 px-4">
                    <div className="flex gap-4">
                        <select
                            className="rounded border bg-light p-2 pr-4 capitalize text-basis-90"
                            value={month + 1}
                            onChange={(e) => {
                                const m = parseInt(e.target.value) - 1;
                                setMonth(m);
                                setSelectedDate(new Date(year, m, 1));
                            }}
                        >
                            {months.map((m, i) => (
                                <option key={i} value={i + 1}>{m}</option>
                            ))}
                        </select>
                        <select
                            className="rounded border bg-light p-2 pr-4 text-basis-90"
                            value={year}
                            onChange={(e) => {
                                const y = parseInt(e.target.value);
                                setYear(y);
                                setSelectedDate(new Date(y, month, 1));
                            }}
                        >
                            {Array.from({ length: 10 }, (_, i) => 2025 + i).map((y) => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={handlePrevWeek} className="h-7 w-7 text-dark hover:opacity-50">
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button onClick={handleNextWeek} className="h-7 w-7 text-dark hover:opacity-50">
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
                    
                <div className="grid grid-cols-7 gap-2 text-center px-4">
                    {daysOfWeek.map((day, i) => (
                        <div key={i} className="font-medium text-basis-90">{day}</div>
                    ))}
                    {calendarDays.map((date, i) => {
                    const isSelected = date && selectedDate.toDateString() === date.toDateString();
                        return (
                            <div
                                key={i}
                                onClick={() => handleDateClick(date)}
                                className={`h-10 flex items-center justify-center cursor-pointer rounded ${
                                    isSelected ? 'bg-blue-500 text-white' : 'text-basis-90 hover:bg-gray-200'
                                }`}
                            >
                                {date ? date.getDate() : ''}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Weekly Horaires */}
            <Horaires selectedDate={selectedDate} schedules={schedules}/>
            </div>
        </section>
    );
};

export default CustomCalendarWithHoraires;

