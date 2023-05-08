import React from 'react'

function Movies() {
  return (
    <div>
        <div className="movie">
            <div className="allMovies">
                    <div className="div1">
                        <div className="imgOne">
                            <div className="center">
                                <img src={"./IMAGES/Netflix002.jpg"} alt="" className="Images"/>
                            </div>
                            <h1 className="h2">Enjoy on your TV</h1>
                            <p className="p3">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="imgTwo">
                            <div className="center">
                                <img src={"./IMAGES/Netflix001.jpg"} alt="" className="Images"/>
                            </div>
                            <h1 className="h2">Watch everywhere</h1>
                            <p className="p3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                        <div className="imgThree">
                            <div className="center">
                                <img src={"./IMAGES/Netflix004.jpg"} alt="" className="Images"/>
                            </div>
                            <h1 className="h2">Create profiles for kids</h1>
                            <p className="p3">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                        <div className="imgFour">
                            <div className="center">
                                <img src={"./IMAGES/Netflix003.jpg"} alt="" className="Images"/>
                            </div>
                            <h1 className="h2">Download your shows to watch offline</h1>
                            <p className="p3">Save your favorites easily and always have something to watch.</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
  )
}

export default Movies
