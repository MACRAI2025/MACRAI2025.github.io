import React from 'react';

const CallForPapers = () => {

    const submitUrl ="https://openreview.net/group?id=IEEE.org/IROS/2025/Workshop/MACRAI&referrer=%5BHomepage%5D(%2F)#tab-your-consoles";
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(submitUrl)}`;
    
    // 1. 数据结构重构：将简单的字符串数组改为对象数组
    // 这样每篇论文都可以包含标题、作者和PDF链接
    // 我已经为你把作者信息和标题一一对应好了
    // 你只需要在 pdfLink 的 '#' 中填入正确的PDF文件路径或URL
    const acceptedPapersData = [
        {
            title: "BiAssemble: Learning Collaborative Affordance for Bimanual Geometric Assembly.",
            authors: "Yan Shen, Ruihai Wu, Yubin Ke, Xinyuan Song, Zeyi Li, Xiaoqi Li, Hongwei Fan, Haoran Lu, Hao Dong",
            pdfLink: "/papers/2_BiAssemble_Learning_Collabor (1).pdf" 
        },
        {
            title: "Decentralized Aerial Manipulation of a Cable-Suspended Load Using Multi-Agent Reinforcement Learning.",
            authors: "Jack Zeng, Andreu Matoses Gimenez, Eugene Vinitsky, Javier Alonso-Mora, Sihao Sun",
            pdfLink: "/papers/3_Decentralized_Aerial_Manipul (1).pdf" 
        },
        {
            title: "Distributed Multi-Robot Ergodic Coverage Control for Estimating Time-Varying Spatial Processes.",
            authors: "Mattia Mantovani, Mattia Catellani and Lorenzo Sabattini",
            pdfLink: "/papers/4_Distributed_Multi_Robot_Ergo (1).pdf" 
        },
        {
            title: "HMA-SAR: Multi-Agent Search and Rescue for Unknown Located Dynamic Targets in Completely Unknown Environments.",
            authors: "Xiao Cao",
            pdfLink: "/papers/5_HMA_SAR_Multi_Agent_Search_a (1).pdf" 
        },
        {
            title: "RVC-NMPC: Mutual Collision Avoidance for Agile UAV Flight via Nonlinear Model Predictive Control with Reciprocal Velocity Constraints.",
            authors: "Vít Krátký, Robert Pěnička, Parakh Manoj Gupta, and Martin Saska",
            pdfLink: "/papers/6_RVC_NMPC_Mutual_Collision_Av.pdf" 
        },
        {
            title: "CAT-ORA: Collision-Aware Time-Optimal Formation Reshaping for Efficient Robot Coordination in 3D Environments.",
            authors: "Vit Kratky, Robert Penicka , Jiri Horyna , Petr Stibinger , Tomas Baca , Matej Petrlik ,Petr Stepan , Martin Saska",
            pdfLink: "/papers/7_CAT_ORA_Collision_Aware_Time.pdf" 
        },
        {
            title: "Subsystem Safety Filtering: A Unified Framework for Safe Shared Control in Coupled Robotic Systems.",
            authors: "Federico Pizarro Bejarano, Lukas Brunke, and Angela P. Schoellig",
            pdfLink: "/papers/8_Subsystem_Safety_Filtering_A.pdf" 
        },
        {
            title: "LLM-Enhanced Constraint Programming for Task Planning in Heterogeneous Multi-Agent Systems.",
            authors: "Jozsef Palmieri, Martina Lippi, Alessandro Marino",
            pdfLink: "/papers/9_LLM_Enhanced_Constraint_Prog.pdf" 
        },
        {
            title: "Cooperative Multi-Finger Manipulation of Force-Sensitive Objects via Graph Rigidity.",
            authors: "Xinan Rong, Changhuang Wan, Aochen He, Xiaolong Li and Gangshan Jing",
            pdfLink: "/papers/10_Cooperative_Multi_Finger_Ma (2).pdf" 
        },
        {
            title: "Swarming tight interactions for achieving resistibility of large robotic systems in real-world conditions.",
            authors: "Jiri Horyna, Martin Saska",
            pdfLink: "/papers/11_Swarming_tight_interactions (3).pdf" 
        },
        {
            title: "Incorporating Indirect Reciprocity into Reinforcement Learning for Multi-Robot Collaboration in Mixed-Motive Stochastic Games.",
            authors: "Yuxin Geng, Xingru Chen",
            pdfLink: "/papers/12_Incorporating_Indirect_Reci (2).pdf" 
        },
        {
            title: "Accelerating Multi-Agent Reinforcement Learning with LLM-Generated Reward Patches.",
            authors: "Bowen Lv",
            pdfLink: "/papers/13_Accelerating_Multi_Agent_Re (3).pdf" 
        },
        {
            title: "SyncMap: Predictive State Bridging for Consistent BEV Sharing in Multi-Vehicle V2X Collaboration.",
            authors: "Wei Duan, Xiao Wu, Yibo Wang, Minghao Yu, Kai Liu, and Jian Zhou",
            pdfLink: "/papers/14_SyncMap_Predictive_State_Br (3).pdf" 
        },
        {
            title: "Online automatic code generation for robot swarms: LLMs and self-organizing hierarchy.",
            authors: "Weixu Zhu, Marco Dorigo, Mary Katherine Heinrich",
            pdfLink: "/papers/15_Online_automatic_code_gener.pdf" 
        },
        {
            title: "Voronoi-Based Multi-Robot Autonomous Exploration in Unknown Environments via Randomized SOM-Based Q-Learning.",
            authors: "Gordei Verbii",
            pdfLink: "/papers/17_Voronoi_Based_Multi_Robot_A.pdf" 
        },
        {
            title: "MorphoNavi: Aerial-Ground Robot Navigation with Object Oriented Mapping in Digital Twin.",
            authors: "Sausar Karaf, Mikhail Martynov, Oleg Sautenkov, Zhanibek Darush, Dzmitry Tsetserukou",
            pdfLink: "/papers/18_MorphoNavi_Aerial_Ground_Ro.pdf" 
        },
        {
            title: "Multi-Agent Pose Uncertainty: A Differentiable Rendering Cramér-Rao Bound.",
            authors: "Arun Muthukkumar",
            pdfLink: "/papers/19_Multi_Agent_Pose_Uncertaint.pdf" 
        },
        {
            title: "Swarm Control via ODE-Driven Optimal Transport-Based Renormalization Group Flow.",
            authors: "Gordei Verbii",
            pdfLink: "/papers/20_Swarm_Control_via_ODE_Drive (3).pdf" 
        },
    ];

    return (
        <div className="text-justify">
            
            <p className="text-pretty mt-2 mb-2">
            <span className="font-bold">We invite submissions including but not limited to the following topics:</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Multi-Agent\Swarm Robotic Systems</li>
                <li>Cooperative Autonomous Driving</li>
                <li>Generative AI in Cooperative Systems</li>
                <li>Large-Scale Multi-Robot Systems and Swarms</li>
                <li>Cooperative Motion Prediction and Decision-Making</li>
                <li>Data and Security in Cooperative Systems</li>
                <li>Large Language Model-assisted Cooperative Systems</li>
                <li>Communication-Efficient Cooperative Perception</li>
                <li>Swarm of Drones and Aerial Robots</li>
            </ul>
            <p className="text-pretty mb-2">
                <span className="font-bold">Important Dates</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Call for Papers/Demos: May. 10th</li>
                <li>Submission Open: May. 15th</li>
                <li>Submission Deadline: <del>Sept. 28th</del> Oct. 7th</li>
                <li>Notifications of Acceptance: Oct. 14th</li>
                <li>Camera-ready Deadline: Oct. 17th</li>
            </ul>
            <p className="text-pretty mb-2">
              <span className="font-bold">Submission Guidelines</span>
            </p>
            <p className="mt-2 mb-4 text-pretty text-left">
                We solicit extended abstracts up to 3 pages (excluding references and supplementary material).  
                All accepted contributions will be presented during the interactive poster sessions.
            </p>
            <p className="mt-2 mb-8 font-bold text-pretty text-left">
                  Click here to submit your paper:&nbsp;
                  <a
                    href="https://openreview.net/group?id=IEEE.org/IROS/2025/Workshop/MACRAI&referrer=%5BHomepage%5D(%2F)#tab-your-consoles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Submit your paper
                  </a>
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <span className="font-bold text-pretty">Scan to Submit:</span>
              <img
                src={qrUrl}
                alt="QR code to submit"
                className="w-24 h-24 border"
              />
            </div>

            <p className="text-pretty mb-2">
                <span className="font-bold">Submission Template & Link</span>
            </p>
            <p className="mt-2 mb-8 text-pretty text-left">
                All submissions must follow the official IEEE conference format. 
                <a
                    href="https://www.ieee.org/conferences/publishing/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1 font-bold"
                >
                    Click here to view the submission templates.
                </a>
                &nbsp;
            </p>
            <p className="text-pretty mb-2">
                    <span className="font-bold">Poster</span>
            </p>
            
            {/* 2. 修改渲染逻辑 */}
            {/* 使用新的 acceptedPapersData 数组进行map遍历 */}
            {/* 每个 li 元素现在包含标题、作者和PDF链接，并添加了相应的样式 */}
            <ul className="list-none space-y-6 mt-2 mb-8"> {/* 使用 space-y-6 增加条目间距 */}
                {acceptedPapersData.map((paper, index) => (
                    <li key={index}>
                        {/* 论文标题 */}
                        <p className="text-lg">{paper.title}</p>
                        {/* 作者，使用 text-gray-600 设置颜色，类似图1 */}
                        <p className="text-gray-600 mt-1">{paper.authors}</p>
                        {/* PDF链接，使用 Tailwind CSS 添加类似按钮的样式 */}
                        <div className="mt-2">
                            <a 
                                href={paper.pdfLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block border border-gray-400 rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                PDF
                            </a>
                            {/* 如果未来有视频链接，可以仿照这个样式添加 */}
                            {/* <a href="#" className="ml-2 inline-block border border-gray-400 rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">video</a> */}
                        </div>
                    </li>
                ))}
            </ul>
            {/* <p className="text-pretty mb-2">
                <span className="font-bold">Workshop Objectives</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                With the rapid advancements in multi-agent systems, challenges such as efficient V2X communication, cooperative policy learning, real-time data sharing, and scalable decision-making remain open. Additionally, the integration of multi-robot semantic perception and large language models (LLMs) presents new opportunities for improved scene understanding and adaptive cooperation in dynamic environments. The objective of this workshop is to explore the intersection of multi-agent cooperative systems, swarm robotics, and generative AI, fostering discussions on how foundation models, generative models, and cooperative intelligence can enhance perception, planning, decision-making, and communication in multi-robot and autonomous systems.
                This workshop will bring together researchers, practitioners, and industry experts to discuss:
                <li>How generative AI can improve multi-agent learning, coordination, and real-world deployment.</li>
                <li>The role of cooperative AI in multi-agent motion prediction, end-to-end policy learning, and communication-efficient cooperation.</li>
                <li>The potential of large-scale datasets and benchmarks for advancing multi-agent cooperative learning.</li>
                <li>The security, privacy, and scalability challenges in data-driven cooperative robotics.</li> 
            </ul>

            <p className="text-pretty mb-2">
                <span className="font-bold">Ensuring High-Quality Content</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                We will invite leading researchers from academia and industry to present their latest findings, with a strong emphasis on real-world applications in swarm robotics, drone fleets, human-robot teams, and other AI-assisted cooperative systems. This ensures that attendees will engage with state-of-the-art methodologies and emerging paradigms in the field.
                To foster interaction and idea exchange, this workshop will include:
                <li>Keynote Talks – Talks by top experts in multi-agent robotics, generative AI, and cooperative autonomy to highlight breakthrough research and open challenges.</li>
                <li>Interactive Poster & Lightning Talks – Early-career researchers and PhD students will present emerging work, encouraging discussion and networking opportunities.</li>
                <li>Panel discussion – Open-ended discussion on the future of cooperative robotics in the era of generative AI.</li>
                These elements ensure that participants are actively involved, gaining both theoretical knowledge and practical insights. We believe this workshop will expand IROS 2025's scope, attracting researchers from robotics, AI, and distributed systems, and fostering cross-disciplinary collaborations between academia and industry.
            </ul>

            <p className="text-pretty mb-2">
                <span className="font-bold">Intended audience and expected attendance</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                This workshop is designed for a broad interdisciplinary audience spanning robotics, artificial intelligence, multi-agent systems, and generative AI. It targets researchers, practitioners, and industry professionals working on multi-agent cooperative systems, swarm robotics, autonomous driving, and AI-driven decision-making. Given the rapid advancements in foundation models, large-scale multi-agent learning, and cooperative AI, this workshop will appeal to both roboticists developing real-world autonomous systems and AI researchers exploring generative models for perception, planning, and policy learning.
                The expected background of attendees includes expertise in:
                <li>Multi-agent systems and swarm robotics – Researchers and engineers working on multi-agent cooperation, swarm intelligence, and distributed robotic systems.</li>
                <li>Generative AI and foundation models – AI practitioners exploring LLMs, generative models for simulation, and data-driven decision-making in robotics.</li>
                <li>Autonomous driving and V2X communication – Experts in intelligent transportation, cooperative autonomy, and vehicle-robot interaction.</li>
                <li>Cooperative SLAM and robotic perception – Researchers in multi-robot SLAM, semantic mapping, and uncertainty-aware localization.</li>
                <li>Human-Robot Interaction and Explainable AI – Scientists working on human-in-the-loop systems, cooperative motion prediction, and AI-augmented teamwork.</li>
                This broad audience will include academics from universities, research labs, and industrial R&D teams from autonomous vehicle companies, drone manufacturers, and AI-driven robotics startups.
            </ul> */}


            {/* <p className="text-pretty mb-2">
                <span className="font-bold">Submission Guidance</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>Submission Portal: <a href="https://openreview.net/group?id=thecvf.com/CVPR/2025/Workshop/MEIS" className="text-blue-500">Openreview</a> </li>
                <li>Submission format: Submissions must follow the CVPR 2025 template (<a href="https://cvpr.thecvf.com/Conferences/2025/AuthorGuidelines" className="text-blue-500">here</a>) and will be peer-reviewed in a double-blind manner. 
                    Submission must be no more than 8 pages (excluding references). 
                    By default, accepted papers will be included in the CVPR workshop proceedings. 
                    Accepted papers will be presented in the form of posters, with several papers being selected for spotlight sessions. </li>
            </ul> */}
            {/* <p className="text-pretty mb-2">
                <span className="font-bold">Awards</span>
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 mb-8 ml-4">
                <li>🏆Best Paper Award ($500)</li>
                <li>🏆Best Paper Runner-up Award ($500)</li>
            </ul> */}
        </div>
    )
}
export default CallForPapers;

