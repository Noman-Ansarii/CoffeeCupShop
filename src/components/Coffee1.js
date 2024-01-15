import React from 'react'
import IMG from '../images/Coffee.png';
import IMG2 from '../images/Coffee2.png';
import IMG3 from '../images/Coffee3.png';
import LOGO from '../images/OfferLogo.png';
// 

function Coffee1() {
    return (
        <>
            <a name="Menu"></a><div className="Coffee-Container">
                <div className="Coffee-Paragraph">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptates voluptatem odit magnam libero. Earum dicta repellat amet pariatur autem cum, eum praesentium eveniet alias accusantium optio animi quod. Eveniet, maxime! Omnis odio soluta incidunt officiis blanditiis! Vel iure earum aperiam, eum odit atque, nobis laborum aliquid distinctio voluptas exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis sunt eos nam odit impedit tempore architecto quo, fugiat consectetur?</p>
                </div>
                <div className="Coffee-Details">
                    <img src={IMG} alt="" />
                    <h1>Dark Coffees</h1>
                    <a href="/">Order Now</a>
                </div>
            </div>
            <div className="Coffee-Container2">
                <div className="Coffee-Details2">
                    <img src={IMG2} alt="" />
                    <h1>Cold Coffees</h1>
                    <a href="/">Order Now</a>
                </div>
                <div className="Coffee-Paragraph2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptates voluptatem odit magnam libero. Earum dicta repellat amet pariatur autem cum, eum praesentium eveniet alias accusantium optio animi quod. Eveniet, maxime! Omnis odio soluta incidunt officiis blanditiis! Vel iure earum aperiam, eum odit atque, nobis laborum aliquid distinctio voluptas exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis sunt eos nam odit impedit tempore architecto quo, fugiat consectetur?</p>
                </div>
            </div>
            <div className="Coffee-Container3">
                <div className="Coffee-Paragraph3">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptates voluptatem odit magnam libero. Earum dicta repellat amet pariatur autem cum, eum praesentium eveniet alias accusantium optio animi quod. Eveniet, maxime! Omnis odio soluta incidunt officiis blanditiis! Vel iure earum aperiam, eum odit atque, nobis laborum aliquid distinctio voluptas exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis sunt eos nam odit impedit tempore architecto quo, fugiat consectetur?</p>
                </div>
                <div className="Coffee-Details3">
                    <img src={IMG3} alt="" />
                    <h1>Hot Coffees</h1>
                    <a href="/">Order Now</a>
                </div>
            </div>

            <div className="OfferConatiner">
                <div className="OfferBorderConatiner">
                    <div className="Offer-Cricle">
                        <img src={LOGO} alt="" />
                        <h1>FREE</h1>
                    </div>
                    <div className="Reactangle-Conatiner">
                        <h1>Gift Voucher</h1>
                        <div className="Offer">
                            <h1>1 Cup of Coffee</h1>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ipsa dolorum necessitatibus consectetur officia veritatis commodi quos asperiores. Recusandae quaerat ex autem explicabo quae quas, quibusdam omnis error iusto blanditiis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coffee1
