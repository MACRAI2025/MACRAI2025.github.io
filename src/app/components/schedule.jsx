import React from "react";

const Schedule = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-2 whitespace-nowrap">Time</th>
            <th className="px-4 py-2">Activity</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">14:00–14:10</td>
            <td className="px-4 py-2">Introduction and Opening Remarks</td>
            <td className="px-4 py-2">—</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">14:10–14:35</td>
            <td className="px-4 py-2">Invited talk (Javier Alonso-Mora)</td>
            <td className="px-4 py-2">Learning-Driven Approaches to Motion Planning, Multi-Robot Task Allocation, and Collaborative Aerial Manipulation</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">14:35–15:00</td>
            <td className="px-4 py-2">Invited talk (Guido de Croon)</td>
            <td className="px-4 py-2"> TBD</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">15:00–15:25</td>
            <td className="px-4 py-2">Invited talk (Cao Yuhong)</td>
            <td className="px-4 py-2">High-Dimensional Multi-Agent Robot Learning</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">15:25–16:05</td>
            <td className="px-4 py-2">Poster session</td>
            <td className="px-4 py-2">Coffee Break & Poster session</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">16:05–16:30</td>
            <td className="px-4 py-2">Invited talk (Di Guo)</td>
            <td className="px-4 py-2"> TBD</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">16:30–16:55</td>
            <td className="px-4 py-2">Invited talk (Konstantin Yakovlev)</td>
            <td className="px-4 py-2">
              Multi-agent Path Finding: Heuristic Search Meets Machine Learning
            </td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">16:55–17:20</td>
            <td className="px-4 py-2">Invited talk (Boyu Zhou)</td>
            <td className="px-4 py-2">
              Active Perception with Autonomous Aerial Robots
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">17:20–17:35</td>
            <td className="px-4 py-2">Challenge Awards</td>
            <td className="px-4 py-2">—</td>
          </tr>
          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">17:35–18:00</td>
            <td className="px-4 py-2">Invited talk (Volker Strobel)</td>
            <td className="px-4 py-2">How foundation models will revolutionize robot swarms</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
