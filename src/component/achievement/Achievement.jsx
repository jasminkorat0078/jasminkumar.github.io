import "./Achivement.scss";

const Achievement = () =>{

    return(
        <section>
            <h5>Get To Know About</h5>
            <h2>Achievement</h2>
            <div className="container achievement__container">
                <article className="achievement__article">
                    <div className="achievement__title">Mistshubhi cup</div>
                    <div className="achievement__description">
                        <div className="achievement__level">Level: National</div>
                        <div className="achievement__prize">Project: Tablet inspection machine</div>
                        
                        <div className="achievement__prize">Rank: 1<sup>st</sup></div>
                        <div className="achievement__prize">Price: Gold cup</div>
                        <div className="achievement__prize__link">
                        <a className="achievement__prize" href="https://drive.google.com/file/d/1XUt7DSfsBQCoepXk_JowSw7Z6dO_eyYc/view?usp=drivesdk" target="_blank">Click here to view project</a>
                        </div>
                        
                    </div>

                </article>

            </div>
        </section>

    );
}

export default Achievement;