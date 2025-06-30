const Workshop = () => {
    return (
        <div className="text-justify">
           <p>
           The field of multi-agent cooperative systems and swarm robotics has advanced rapidly, particularly in autonomous driving, where large-scale datasets and algorithm breakthroughs have improved vehicle coordination. Multi-agent coordination in robotics has also seen progress in applications like search-and-rescue and industrial automation, enhancing adaptability in dynamic environments.
           However, challenges remain in real-time perception, communication efficiency, and cooperative decision-making. Existing frameworks often rely on predefined models and handcrafted policies, which struggle to generalize to diverse, unstructured scenarios. Recent advances in generative AI and large language models (LLMs) offer promising solutions, enabling adaptive policy learning and bridging the gap between simulation and reality. These developments also enhance human-robot interaction and coordination.
           While recent workshops have focused on LLMs and generative AI in single-agent tasks, this workshop introduces a new perspective by integrating generative AI with multi-agent systems. Through talks, posters, and panels, we aim to foster discussions on data-efficient learning, communication-aware cooperation, and scalable deployment, bridging research with real-world multi-agent applications.
            </p>
            <div className="my-4">
                <img src="/banner.jpg" alt="Cooperative Intelligence in Multi-Agent Systems" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            {/* <p className="text-pretty mt-2 mb-2">
            <span className="font-bold">Links to Past Workshops:</span> <a href="https://coop-intelligence.github.io/eccv2024/" className="text-blue-500">1st MAAS Workshop @ECCV2024</a>
            </p> */}
        </div>
    )
}
export default Workshop;
