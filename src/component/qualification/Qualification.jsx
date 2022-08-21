import "./Qualification.scss";

const Qualification = () =>{
    return(
        <section id="qualification">
             <h5>Get To Know About</h5>
            <h2>Qualification</h2>
            <div className="container qualification__container">
                <article className="qualification__article">
                    <div className="qualification__title">10<sup>th</sup></div>
                    <div className="qualification__marks">Percentage:&nbsp;&nbsp;&nbsp;87.66%</div>
                    <div className="qualification__school">Saraswati vidhyamandir, Ahmedabad</div>
                </article>
                <article className="qualification__article">
                    <div className="qualification__title">12<sup>th</sup></div>
                    <div className="qualification__marks">Percentage:&nbsp;&nbsp;&nbsp;75.33%,&nbsp;&nbsp;83%(PCM)</div>
                    <div className="qualification__school">Saraswati vidhyamandir, Ahmedabad</div>
                </article>
                <article className="qualification__article">
                    <div className="qualification__title">IC Engineering</div>
                    <div className="qualification__marks">CGPA:&nbsp;&nbsp;&nbsp;8.56</div>
                    <div className="qualification__school">Nirma University, Ahmedabad</div>
                </article>

            </div>
        </section>
    )
};

export default Qualification;