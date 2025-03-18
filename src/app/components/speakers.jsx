import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">


                <div>
                    <PersonAvatar
                        name="Marco Dorigo"
                        image="/marco_dorigo.jpg"
                        affiliation="Université Libre de Bruxelles"
                        link="https://iridia.ulb.ac.be/~mdorigo/HomePageDorigo/index.php"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Guido de Croon"
                        image="/guido_de_croon.jpg"
                        affiliation="Delft University of Technology"
                        link="https://www.tudelft.nl/en/staff/g.c.h.e.decroon/"
                    />
                </div> 

                <div>
                    <PersonAvatar
                        name="Wenlong Zhang"
                        image="/wenlong_zhang.jpg"
                        affiliation="Arizona State University"
                        link="https://search.asu.edu/profile/2727367"
                    />
                </div>
                
                <div>
                    <PersonAvatar
                        name="Konstantin Yakovlev"
                        image="/konstantin_yakovlev.jpg"
                        affiliation="FRC CSC RAS, AIRI, MIPT, HSE"
                        link="http://kyakovlev.me/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Guillaume Adrien Sartoretti"
                        image="/guillaume_sartoretti.jpg"
                        affiliation="National University of Singapore"
                        link="https://www.marmotlab.org/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Di Guo"
                        image="/di_guo.jpg"
                        affiliation="Beijing University of Posts and Telecommunications"
                        link="#"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Boyu Zhou"
                        image="/boyu_zhou.jpg"
                        affiliation="Southern University of Science and Technology"
                        link="https://sysu-star.com/people"
                    />
                </div>


            </div>
            <p className="text-pretty mt-6">
                <span className="font-bold">Note: </span>We are currently extending invitations to other eminent research scholars, so please stay tuned for updates.
            </p>
        </div>
    );
};

export default Speakers;