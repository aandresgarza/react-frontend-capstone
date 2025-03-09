import restauranfood from "../assets/img/restauranfood.jpg";
import delivery from "../assets/img/moto.svg";
import greek_salad from "../assets/img/greek_salad.jpg";
import bruschetta from "../assets/img/bruchetta.svg";
import lemon_dessert from "../assets/img/lemon_dessert.jpg";
import ours1 from "../assets/img/ours-1.jpg";
import ours2 from "../assets/img/ours-2.jpg";
import three from "../assets/img/three.webp";
import five from "../assets/img/five.webp";

function Home() {
  return (
    <div className="wrap">
      <section className="full-green" id="home">
        <div className="container flex">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a class="btn-primary" href="/reservations">
              Reserve a table
            </a>
          </article>
          <article>
            <img src={restauranfood} alt="Restaurant food" />
          </article>
        </div>
      </section>
      <section className="container flex" id="menu">
        <h2>This week specials!</h2>
        <a class="btn-primary" href="/reservations">
          Online Menu
        </a>
      </section>
      <section className="container flex recipes">
        <article className="flex-column">
          <img src={greek_salad} alt="Restaurant food" />
          <div>
            <div className="flex">
              <h4>Greek salad</h4>
              <span>$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a className="link" href="#">
              Order delivery <img src={delivery}></img>
            </a>
          </div>
        </article>
        <article className="flex-column">
          <img src={bruschetta} alt="Restaurant food" />
          <div>
            <div className="flex">
              <h4>Bruschetta</h4>
              <span>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.<br/><br/>
            </p>
            <a className="link" href="">
              Order delivery <img src={delivery}></img>
            </a>
          </div>
        </article>
        <article className="flex-column">
          <img src={lemon_dessert} alt="Restaurant food" />
          <div>
            <div className="flex">
              <h4>Lemon Dessert</h4>
              <span>$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.<br/><br/>
            </p>
            <a className="link" href="">
              Order delivery <img src={delivery}></img>
            </a>
          </div>
        </article>
      </section>
      <section className="full-green testimonials">
        <div className="container flex">
          <h2>Testimonials</h2>
        </div>
        <div className="container flex">
          <article className="flex-column">
            <img src="https://th.bing.com/th/id/OIP.GRcSO_TzU8lzoyaeKJUiPwHaHl?rs=1&pid=ImgDetMain" className="face" alt="Restaurant food" />
            <h4>Testimonial 1</h4>
            <img src={five} alt="five"/>
            <p>
              "This place is a hidden gem! The food is incredibly fresh, and you
              can really taste the quality in every bite. "
            </p>
          </article>
          <article className="flex-column">
            <img src="https://th.bing.com/th/id/OIP.r3X2hhGxdRaQjwuihyzFMAHaHa?rs=1&pid=ImgDetMain" className="face" alt="Restaurant food" />
            <h4>Testimonial 2</h4>
            <img src={five} alt="five"/>
            <p>
              "I was so impressed with the flavors and freshness of the food
              here! Everything tasted like it was made from scratch with
              high-quality ingredients."
            </p>
          </article>
          <article className="flex-column">
            <img src="https://opem.b-cdn.net/wp-content/uploads/2022/10/como-elegir-foto-para-curriculum-768x644.png" className="face" alt="Restaurant food" />
            <h4>Testimonial 3</h4>
            <img src={three} alt="three"/>
            <p>
              "Delicious food, fresh ingredients, and unbeatable prices! I’ll be
              telling all my friends about this place!"
            </p>
          </article>
          <article className="flex-column">
            <img src="https://www.raisa.de/assets/images/7/Stella%20Rathjens_Homepage-dd1c97dc.png" className="face" alt="Restaurant food" />
            <h4>Testimonial 4</h4>
            <img src={five} alt="five" width="50"/>
            <p>
              "Amazing food at an even better price! Every dish tasted fresh and
              full of flavor. You can tell they use high-quality ingredients,
              and the portions are generous. "
            </p>
          </article>
        </div>
      </section>
      <section class="description" id="about">
        <div className="container flex">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a cozy neighborhood eatery that offers fresh,
              flavorful dishes and signature cocktails in a warm yet relaxed
              setting. The restaurant prides itself on a locally sourced menu
              with rotating daily specials, ensuring a delightful dining
              experience every time. With a focus on high-quality ingredients
              and simple yet delicious recipes, Little Lemon creates meals that
              feel both comforting and refined. Whether you're stopping by for a
              quick bite or a leisurely dinner with friends, you'll always find
              great food, friendly service, and a welcoming atmosphere.
            </p>
          </article>
          <article>
            <img src={ours1} alt="Restaurant food" />
            <img src={ours2} alt="Restaurant food" />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
