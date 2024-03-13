import React from 'react'
import IMG from '../images/Card1.png'
import IMG2 from '../images/Card2.png'
import IMG3 from '../images/Card3.png'

function Cards() {
    return (
        <>
            <a name="Shop"></a><div className="Cards-Conatiner">
                <h1>Our Branches</h1>
                <div className="row flex align-items-center">
                    <div className="col">
                        <div className="card">
                            <img src={IMG} className="card-img-top" alt="..." />
                                <span className="badge">New York</span>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi reiciendis tempora necessitatibus, qui sed quas laboriosam est id neque, nisi deleniti nemo, nostrum unde quibusdam omnis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={IMG2} className="card-img-top" alt="..." />
                                <span className="badge">Texas</span>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi reiciendis tempora necessitatibus, qui sed quas laboriosam est id neque, nisi deleniti nemo, nostrum unde quibusdam omnis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={IMG3} className="card-img-top" alt="..." />
                                <span className="badge">New Jersy</span>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi reiciendis tempora necessitatibus, qui sed quas laboriosam est id neque, nisi deleniti nemo, nostrum unde quibusdam omnis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
