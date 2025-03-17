import PersonAvatar from "./person-avatar";

const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Chang Liu" image="/chang_liu.jpg" affiliation={"Assistant Professor, Peking University, China"} link={"https://www.coe.pku.edu.cn/teaching/all_time/10394.html"}/>
            <PersonAvatar name="Dzmitry Tsetserukou" image="/dzmitry_tsetserukou.jpg" affiliation={"Associate Professor, Skolkovo Institute of Science and Technology, Russia"} link={"https://new.skoltech.ru/en/persons/tsetserukou-dzmitry"} />
            <PersonAvatar name="Changliu Liu" image="/changliu_liu.jpg" affiliation={"Assistant Professor, CMU"} link={"https://www.ri.cmu.edu/ri-faculty/changliu-liu/"}/>
            <PersonAvatar name="Yao Mu" image="/yao_mu.jpg" affiliation={"Assistant Professor, Shanghai Jiao Tong University, China"} link={"https://yaomarkmu.github.io/"}/>
            <PersonAvatar name="Yuchen Liu" image="/yuchen_liu.jpg" affiliation={"Postdoc, Peking University, China"} link={""}/>
            <PersonAvatar name="Haibao Yu" image="/haibao_yu.jpg" affiliation={"Ph.D. Student, The University of Hong Kong, China"} link={"https://www.linkedin.com/in/haibao-yu-152221118"}/>
            <PersonAvatar name="Oleg Sautenkov" image="/oleg_sautenkov.jpg" affiliation={"Ph.D. Student, Skolkovo Institute of Science and Technology, Russia"} link={"https://sautenich.github.io/"}/> 
        </div>

        <br/>
        <p>
            <span className="font-bold">Contact: </span>If you have any questions, please contact us at: <span className="text-blue-500"> changliucoe@pku.edu.cn</span> or <span className="text-blue-500"> liuyc@pku.edu.cn</span>.
        </p>
       
    </div>
}
export default Organizers;
