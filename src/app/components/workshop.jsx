const Workshop = () => {
    return (
        <div className="text-justify">
           <p>
           The landscapes of multi-agent cooperative systems and swarm robotics has witnessed rapid advancements, enabling agents to collaboratively address complex real-world challenges. Notably, in autonomous driving, large-scale datasets and breakthroughs in algorithms have driven significant progress in vehicle coordination. In robotics, multi-agent coordination has been explored in applications such as search-and-rescue, industrial automation, and shared autonomy, demonstrating improved adaptability and robustness in dynamic environments.
            Despite these advancements, fundamental challenges remain in real-time perception, communication efficiency, and cooperative decision-making for multi-agent systems. A key limitation of existing frameworks is their reliance on pre-defined models and handcrafted policies, which struggle to generalize across diverse and unstructured scenarios. Recent breakthroughs in generative AI, foundational models, and large language models (LLMs) provide a promising avenue for overcoming these limitations. Generative models can synthesize diverse training data, bridge the gap between simulation and reality, and facilitate adaptive policy learning for multi-agent systems. These advancements also hold potential for improving human-robot interaction in multi-agent settings, enabling more natural communication and adaptive coordination.
            While recent workshops at top conferences have explored LLMs, generative AI, and multi-agent learning, they predominantly focus on single-agent intelligence or isolated perception tasks. This workshop introduces a fresh perspective by unifying generative AI and cooperative multi-agent systems, fostering interdisciplinary discussions on data-efficient learning, communication-aware cooperation, and scalable deployment strategies. Through invited talks, interactive poster session, and panel discussions, we aim to bridge the gap between generative AI research and real-world multi-agent robotic applications, paving the way for next-generation collaborative intelligence.
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
