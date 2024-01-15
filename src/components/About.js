import React from 'react'
import IMG from '../images/Reviews.png'

function About() {
  return (
    <>
      <a name="about"></a><div className="Main-About">
        <div className="Inner-About">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt consequatur autem odit officia molestias perferendis! Quae quo delectus, consequatur deserunt porro ipsa dignissimos eligendi reiciendis atque, officia provident natus assumenda at earum itaque commodi quod doloribus sequi quisquam impedit autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolorum iste numquam esse, nostrum consectetur eum necessitatibus non labore nulla!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis modi nemo accusantium, at temporibus voluptate ratione impedit commodi iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat dolor quidem quibusdam amet totam, harum enim pariatur, corrupti molestias suscipit vitae a? Velit quasi libero, nulla qui officia ex, beatae autem illo suscipit quos perspiciatis culpa ut atque animi sit repudiandae facilis tempora aut debitis fuga natus ipsam in dignissimos. Impedit obcaecati mollitia non saepe quas ratione quam amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non distinctio quaerat. Deserunt minima in explicabo veniam totam exercitationem hic facilis? Dolor magni sapiente accusantium iste laudantium nemo dignissimos consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam totam facilis facere. Facere expedita nobis similique aliquid architecto nemo fugiat, recusandae harum mollitia aut ad nostrum. Modi laudantium quo et!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ratione.</p>
        </div>
      </div>

      {/* Reviews */}
      <a href="Blog"></a>
      <div className="Reviews-Container">
        <h1>Coustomer Reviews</h1>
        <div className="Inner-ReviewsContainer">
            <div className="Reviews-img">
            <img src={IMG} alt="" />
            </div>
            <div className="Reviews-Person">
                <h2>John Peter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, doloribus! Necessitatibus fugit asperiores vitae est officia voluptatibus repellendus officiis, illum eius, libero accusantium vero ex.</p>
                <h2>Ella Thomson</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ex aut maiores placeat dolor commodi tempora error repellat eum. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
      </div>

      {/* Open */}

      <div className="OpenDays">
        <h1>We are Open</h1>
        <div className="Box1">
            <h1>Monday - Friday <br /> 8:00am - 11:30pm</h1>
        </div>
        <div className="Box2">
            <h1>Saturday & Sunday <br /> 9:00am - 10:30pm</h1>
        </div>
      </div>
    </>
  )
}

export default About
