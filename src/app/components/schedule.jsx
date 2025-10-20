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
          {/* <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">14:00–14:10</td>
            <td className="px-4 py-2">Introduction and Opening Remarks</td>
            <td className="px-4 py-2">—</td>
          </tr> */}

          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">13:00–13:25</td>
            <td className="px-4 py-2">Invited talk (Guido de Croon)</td>
            <td className="px-4 py-2">Swarms of tiny drones: from simulation to reality</td>
          </tr>

          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">13:25–13:50</td>
            <td className="px-4 py-2">Invited talk (Javier Alonso-Mora)</td>
            <td className="px-4 py-2">Learning-Driven Approaches to Motion Planning, Multi-Robot Task Allocation, and Collaborative Aerial Manipulation</td>
          </tr>

          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">13:50–14:05</td>
            <td className="px-4 py-2">Invited talk (Di Guo)</td>
            <td className="px-4 py-2">LLM-powered Multi-agent System and Proactive Collaboration</td>
          </tr>

          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">14:05–14:30</td>
            <td className="px-4 py-2">Invited talk (Konstantin Yakovlev)</td>
            <td className="px-4 py-2">
              Multi-agent Path Finding: Heuristic Search Meets Machine Learning
            </td>
          </tr>

          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">14:30–14:55</td>
            <td className="px-4 py-2">Invited talk (Boyu Zhou)</td>
            <td className="px-4 py-2">
              Active Perception with Autonomous Aerial Robots
            </td>
          </tr>

          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">14:55–15:25</td>
            <td className="px-4 py-2">Poster session</td>
            <td className="px-4 py-2">Coffee Break & Poster session</td>
          </tr>

          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">15:25–15:50</td>
            <td className="px-4 py-2">Invited talk (Siqi Zhou)</td>
            <td className="px-4 py-2">Aerial Swarm: From Methods to Tools Enabling Safe Coordination and Language-Based Interaction</td>
          </tr>


          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">15:50–16:15</td>
            <td className="px-4 py-2">Invited talk (Volker Strobel)</td>
            <td className="px-4 py-2">How foundation models will revolutionize robot swarms</td>
          </tr>

          <tr className="border-t bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap">16:15–16:40</td>
            <td className="px-4 py-2">Invited talk (Cao Yuhong)</td>
            <td className="px-4 py-2">High-Dimensional Multi-Agent Robot Learning</td>
          </tr>

          <tr className="border-t">
            <td className="px-4 py-2 whitespace-nowrap">16:40–17:00</td>
            <td className="px-4 py-2">Awards Session</td>
            <td className="px-4 py-2">—</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
