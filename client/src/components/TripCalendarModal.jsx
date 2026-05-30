import { useState } from "react";
import "./TripCalendarModal.css";
import { useNavigate } from "react-router-dom";

export function TripCalendarModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("");
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (selectedTrip) {
      setIsOpen(false);
      navigate("/contact"); // Send them to contact or booking page
    } else {
      alert("Please select a trip first.");
    }
  };

  // Calendar dates for June 2026
  // June 1 is a Monday
  const daysInMonth = 30;
  const blanks = []; // Starts on Mon, so no blanks needed if Sun is end, but typically calendars are Mon-Sun or Sun-Sat
  // Based on the screenshot: Mon starts with 1
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    let className = "cal-cell";
    if (i >= 12 && i <= 17) className += " kedarnath";
    else if (i >= 19 && i <= 21) className += " barot";
    else if (i >= 26 && i <= 28) className += " jibhi";
    days.push({ day: i, className });
  }

  // Fill remainder of 5 weeks (35 cells)
  const totalCells = 35;
  const paddingCells = totalCells - days.length;
  const paddedDays = [...days];
  for (let i = 0; i < paddingCells; i++) {
    paddedDays.push({ day: "", className: "cal-cell empty" });
  }

  return (
    <>
      <button className="calendar-floating-btn" onClick={() => setIsOpen(true)}>
        📅
      </button>

      {isOpen && (
        <div className="calendar-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
            <button className="calendar-modal-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            <div className="calendar-header">
              <h2>Trip Calendar</h2>
              <p>June 2026 — Turning Miles Into Memories</p>
            </div>
            
            <div className="calendar-body">
              <div className="calendar-trips">
                <div className="trip-item kedarnath">
                  <div className="trip-item-num">01</div>
                  <div className="trip-item-info">
                    <h4>Kedarnath Batch</h4>
                    <p>12th June – 17th June (5D/4N)</p>
                  </div>
                </div>
                <div className="trip-item barot">
                  <div className="trip-item-num">02</div>
                  <div className="trip-item-info">
                    <h4>Barot Valley Batch</h4>
                    <p>19th June – 21st June (2D/1N)</p>
                  </div>
                </div>
                <div className="trip-item jibhi">
                  <div className="trip-item-num">03</div>
                  <div className="trip-item-info">
                    <h4>Jibhi & Tirthan Valley</h4>
                    <p>26th June – 28th June (2D/1N)</p>
                  </div>
                </div>
              </div>

              <div className="calendar-grid-wrap">
                <div className="cal-days">
                  <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
                </div>
                <div className="cal-grid">
                  {paddedDays.map((d, i) => (
                    <div key={i} className={d.className}>{d.day}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="calendar-footer">
              <select value={selectedTrip} onChange={(e) => setSelectedTrip(e.target.value)}>
                <option value="">Select a trip...</option>
                <option value="kedarnath">01 Kedarnath Batch (June 12 - 17)</option>
                <option value="barot">02 Barot Valley Batch (June 19 - 21)</option>
                <option value="jibhi">03 Jibhi & Tirthan Valley (June 26 - 28)</option>
              </select>
              <button onClick={handleBookNow}>Book Selected Trip</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
