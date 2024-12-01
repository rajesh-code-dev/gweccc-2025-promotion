const EventSchedule = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 text-center" id="schedule">
      <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
      <ul className="space-y-4 [&>li]:text-gray-300">
        <li>
          <strong>March 15:</strong> Keynote Speeches by Industry Leaders
        </li>
        <li>
          <strong>March 16:</strong> Workshops on AI and Blockchain
        </li>
        <li>
          <strong>March 17:</strong> Panel Discussions & Closing Ceremony
        </li>
      </ul>
    </section>
  );
};

export default EventSchedule;
