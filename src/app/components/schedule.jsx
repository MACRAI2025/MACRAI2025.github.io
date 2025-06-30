const Schedule = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Activity</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">14:00-14:10</td>
            <td className="px-4 py-2">Introduction and Opening Remarks</td>
            <td className="px-4 py-2">—</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2">14:10-14:35</td>
            <td className="px-4 py-2">Invited talk (Javier Alonso-Mora)</td>
            <td className="px-4 py-2">TBD</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">14:35-15:00</td>
            <td className="px-4 py-2">Invited talk (Guido de Croon)</td>
            <td className="px-4 py-2">The talk is focused on deep learning-based planning and control for aerial robots</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2">15:00-15:25</td>
            <td className="px-4 py-2">Poster session</td>
            <td className="px-4 py-2">Coffee Break & Poster session</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">16:05-16:30</td>
            <td className="px-4 py-2">Invited talk (Di Guo)</td>
            <td className="px-4 py-2">The talk is focused on the embodied AI for human-robot interaction</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2">16:30-16:55</td>
            <td className="px-4 py-2">Invited talk (Konstantin Yakovlev)</td>
            <td className="px-4 py-2">The talk is focused on decentralized lifelong multi-agent pathfinding via learning</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">16:55-17:20</td>
            <td className="px-4 py-2">Invited talk (Boyu Zhou)</td>
            <td className="px-4 py-2">The talk is focused on the active perception of robot swarms</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2">17:20-17:35</td>
            <td className="px-4 py-2">Challenge Awards</td>
            <td className="px-4 py-2">—</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">17:35-18:00</td>
            <td className="px-4 py-2">Invited talk (Volker Strobel)</td>
            <td className="px-4 py-2">The talk is focused on the self-organizing systems for robot swarms</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
