
import '../../index.css'
import headerImage from '../../assets/images/slider-img.png'

export default function Slider() {
  return (
    <div>
        

    <section className="slider_section">
      <div className="slider_container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Welcome To Our <br/>
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Welcome To Our <br/>
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src={headerImage} alt="image not found" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Welcome To Our <br/>
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* carousel */}
        </div>
      </div>
    </section>

    
    </div>
  )
}
