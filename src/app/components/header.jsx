
const Header = ()=>{
    const highlight = "underline font-bold text-[#03717D]"
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#03717D]  font-medium ">
                {/* <div className="text-white text-center text-[1.7em]">
                     <span className="text-white tracking-[0.35em] font-semibold">MEIS</span>
                </div> */}
                <div className="text-[1.5em] text-center mt-2">
                    MACRAI Workshop @IROS2025
                </div>
                <div className="text-[0.8em] text-center ">
                    {/* <span className={highlight}>La</span>rge <span className={highlight}>V</span>ision – Language Model Learning and <span className={highlight}>A</span>pplications  */}
                    {/* <span className={highlight}>M</span>ulti-Agent <span className={highlight}>E</span>mbodied <span className={highlight}>I</span>ntelligent <span className={highlight}>S</span>ystems Meet Generative-AI Era: <br />
                    Opportunities, Challenges and Futures */}
                    <span className={highlight}>M</span>ulti-<span className={highlight}>A</span>gent <span className={highlight}>C</span>ooperative Systems and Swarm <span className={highlight}>R</span>obotics in the Era of Generative <span className={highlight}>AI</span>
                </div>
                <div className="text-[0.55em]  text-[#03717D] text-center mt-5">
                    Sun 19th - Sat 25th October, 2025
                </div>
                <div className="text-[0.55em]  text-[#03717D] text-center ">
                    Hangzhou International Expo Center, Hangzhou, CHINA
                </div>
            </div>
           
           
        </div>
    );
}
export default Header;