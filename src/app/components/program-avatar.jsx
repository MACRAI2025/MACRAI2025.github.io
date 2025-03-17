const CommitteeAvatar = ({ name, affiliation, link }) => {
    return (
        <div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center">
                {/* 如果有 link，则渲染为链接；否则直接显示人名 */}
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                        <p className="font-semibold hover:text-blue-600 transition-colors">{name}</p>
                    </a>
                ) : (
                    <p className="font-semibold">{name}</p>
                )}
                <p className="text-xs text-gray-600">{affiliation}</p>
            </div>
        </div>
    );
};
export default CommitteeAvatar;