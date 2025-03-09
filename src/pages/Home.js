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
            <a className="btn-primary" href="/reservations" aria-label="Reserve a table at Little Lemon restaurant">
              Reserve a table
            </a>
          </article>
          <article>
            <img
              src={restauranfood}
              alt="A delicious plate of Mediterranean food served at Little Lemon restaurant"
              role="img"
            />
          </article>
        </div>
      </section>
      <section className="container flex" id="menu">
        <h2>This week specials!</h2>
        <a className="btn-primary" href="/reservations" aria-label="View the online menu">
          Online Menu
        </a>
      </section>
      <section className="container flex recipes">
        <article className="flex-column">
          <img
            src={greek_salad}
            alt="Greek salad with crispy lettuce, peppers, olives, and feta cheese"
            role="img"
          />
          <div>
            <div className="flex">
              <h4>Greek salad</h4>
              <span>$12.99</span>
            </div>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a className="link" href="#" aria-label="Order delivery for Greek Salad">
              Order delivery <img src={delivery} alt="Delivery motorcycle icon" />
            </a>
          </div>
        </article>
        <article className="flex-column">
          <img
            src={bruschetta}
            alt="Delicious bruschetta with grilled bread, garlic, salt, and olive oil"
            role="img"
          />
          <div>
            <div className="flex">
              <h4>Bruschetta</h4>
              <span>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a className="link" href="" aria-label="Order delivery for Bruschetta">
              Order delivery <img src={delivery} alt="Delivery motorcycle icon" />
            </a>
          </div>
        </article>
        <article className="flex-column">
          <img
            src={lemon_dessert}
            alt="Lemon dessert with fresh ingredients"
            role="img"
          />
          <div>
            <div className="flex">
              <h4>Lemon Dessert</h4>
              <span>$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a className="link" href="" aria-label="Order delivery for Lemon Dessert">
              Order delivery <img src={delivery} alt="Delivery motorcycle icon" />
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
            <img
              src="https://th.bing.com/th/id/OIP.GRcSO_TzU8lzoyaeKJUiPwHaHl?rs=1&pid=ImgDetMain" 
              className="face"
              alt="Customer testimonial photo"
            />
            <h4>Testimonial 1</h4>
            <img src={five} alt="Five-star rating icon" />
            <p>
              "This place is a hidden gem! The food is incredibly fresh, and you
              can really taste the quality in every bite."
            </p>
          </article>
          <article className="flex-column">
            <img
              src="https://th.bing.com/th/id/OIP.r3X2hhGxdRaQjwuihyzFMAHaHa?rs=1&pid=ImgDetMain" 
              className="face"
              alt="Customer testimonial photo"
            />
            <h4>Testimonial 2</h4>
            <img src={five} alt="Five-star rating icon" />
            <p>
              "I was so impressed with the flavors and freshness of the food
              here! Everything tasted like it was made from scratch with
              high-quality ingredients."
            </p>
          </article>
          <article className="flex-column">
            <img
              src="https://opem.b-cdn.net/wp-content/uploads/2022/10/como-elegir-foto-para-curriculum-768x644.png" 
              className="face"
              alt="Customer testimonial photo"
            />
            <h4>Testimonial 3</h4>
            <img src={three} alt="Three-star rating icon" />
            <p>
              "Delicious food, fresh ingredients, and unbeatable prices! I’ll be
              telling all my friends about this place!"
            </p>
          </article>
          <article className="flex-column">
            <img
              src="https://www.raisa.de/assets/images/7/Stella%20Rathjens_Homepage-dd1c97dc.png" 
              className="face"
              alt="Customer testimonial photo" // Red: alt text improved
            />
            <h4>Testimonial 4</h4>
            <img src={five} alt="Five-star rating icon" width="50" />
            <p>
              "Amazing food at an even better price! Every dish tasted fresh and
              full of flavor. You can tell they use high-quality ingredients,
              and the portions are generous."
            </p>
          </article>
        </div>
      </section>
      <section className="description" id="about">
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
            <img
              src={ours1}
              alt="Cozy and warm restaurant interior with a relaxed setting"
            />
            <img
              src={ours2}
              alt="Interior dining area of Little Lemon restaurant with friendly service"
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
