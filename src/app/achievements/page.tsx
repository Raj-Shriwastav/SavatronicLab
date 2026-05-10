import { Trophy, Calendar } from "lucide-react";

export default function AchievementsNews() {
  const events = [
    { title: "<Fill_data: Event/Award 1>", date: "<Fill_data: Date 1>", description: "<Fill_data: Short description>", type: "Award" },
    { title: "<Fill_data: Event/Award 2>", date: "<Fill_data: Date 2>", description: "<Fill_data: Short description>", type: "Exhibition" },
    { title: "<Fill_data: Event/Award 3>", date: "<Fill_data: Date 3>", description: "<Fill_data: Short description>", type: "Publication" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Achievements & News</h1>
        <p className="text-lg text-gray-600">
          Stay up to date with our latest milestones, awards, IEEE events, and research showcases.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {events.map((event, i) => (
          <div key={i} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="shrink-0 w-16 h-16 rounded-full bg-brand-sky/20 flex items-center justify-center text-brand-deep">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-brand-soft uppercase tracking-wider">{event.type}</span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" /> {event.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
