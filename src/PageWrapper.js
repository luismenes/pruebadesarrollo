
export default function PageWrapper(props) {

    return (
        <div>
            <div id="preloader">
                <img className="logo" src="images/React.png" alt="" width="119" height="58" />
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="hero common-hero">

                <div className="col-md-12">
                    <div className="hero-ct">
                        <h1> Prueba Desarrollo</h1>
                    </div>

                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">


                            {props.children}


                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="searh-form">
                                    <h4 className="sb-title">Busquedas Recientes</h4>
                                    
                                    

                                </div>
                                <div className="ads">
                                    <img src="images/uploads/ads1.png" alt="" />
                                </div>

                                <div className="sb-twitter sb-it">
                                    <h4 className="sb-title">Luis Mendoza</h4>
                                    <div className="slick-tw">
                                        <div className="tweet item" id="">
                                        </div>
                                        <div className="tweet item" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}