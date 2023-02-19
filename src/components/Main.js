import SpecialMenuItem from "./SpecialMenuItem";
import Testimonial from "./Testimonial";

function Main(props) {
  return (
    <main>
      <section id="introSec">
        <article id="introCon">
          <div>
            <h1 className="titleText">Little Lemon</h1>
            <h3 className="subheadingText">Jamaica</h3>
            <p className="descText">
              Welcome to Little Lemon, your go-to destination for delicious food
              and unbeatable prices in Jamaica! We're thrilled to showcase our
              mouthwatering menu, carefully crafted by our talented chefs who
              use only the freshest ingredients to create dishes that will
              tantalize your taste buds. <br />
              <br />
              Whether you're in the mood for our famous jerk chicken, succulent
              seafood dishes, or our delicious vegetarian options, we've got you
              covered. Our menu is designed to cater to all taste buds, and
              we're confident you'll find something you love.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div></div>
        </article>
      </section>

      <section id="specialsSec">
        <article>
          <div id="specialsTitleCont">
            <h1 className="sectionTitle">Specials</h1>
            <button className="normalButton">Online Menu</button>
          </div>

          <div id="menuItemsCont">
            <SpecialMenuItem
              itemInfo={{
                name: "Jerk Chicken",
                imgSrc:
                  "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: 12.99,
                desc: "One of the most famous Jamaican dishes, Jerk Chicken is made by marinating chicken in a mixture of spices and seasonings like allspice, thyme, and scotch bonnet pepper, and then grilling it to juicy and flavorful perfection.",
                linkToOrder: "#greek",
              }}
            />

            <SpecialMenuItem
              itemInfo={{
                name: "Fried Plantains",
                imgSrc:
                  "https://images.pexels.com/photos/6210449/pexels-photo-6210449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: 5.99,
                desc: "A popular side dish in Jamaica, Fried Plantains are slices of ripe plantain that are fried until they are crispy and caramelized on the outside, but soft and sweet on the inside. They make a perfect side dish or a snack.",
                linkToOrder: "#Bruchetta",
              }}
            />
            <SpecialMenuItem
              itemInfo={{
                name: "Ackee and Saltfish",
                imgSrc:
                  "https://thatgirlcookshealthy.com/wp-content/uploads/2019/02/jamaican-ackee-and-saltfish-image.jpg",
                price: 5,
                desc: "Jamaica's national dish, Ackee and Saltfish is a savory breakfast dish made with salted codfish, boiled and sautéed with onions, tomatoes, and a local fruit called ackee, which has a buttery and slightly sweet flavor.",
                linkToOrder: "#lemon",
              }}
            />

            <SpecialMenuItem
              itemInfo={{
                name: "Curry Goat",
                imgSrc:
                  "https://i0.wp.com/chinese-jamaicangirl.com/wp-content/uploads/2020/06/8C075902-51CB-4A2A-8D68-0FFB20F84B7C.jpeg?fit=640%2C480&ssl=1",
                price: 5,
                desc: "A beloved dish in Jamaica, Curry Goat is a hearty and flavorful dish made with tender pieces of goat meat that are slowly simmered in a rich and aromatic curry sauce made with spices like turmeric, cumin, and coriander.",
                linkToOrder: "#lemon",
              }}
            />

            <SpecialMenuItem
              itemInfo={{
                name: "Brown Stew Chicken",
                imgSrc:
                  "https://www.aspicyperspective.com/wp-content/uploads/2021/01/Jamaican-Brown-Stew-Chicken-14.jpg",
                price: 5,
                desc: "Brown Stew Chicken is a popular dish in Jamaica made with chicken that is marinated in a rich, brown sauce made with herbs, spices, and a blend of Caribbean seasonings. The chicken is then browned and simmered until it's tender and juicy.",
                linkToOrder: "#lemon",
              }}
            />

            <SpecialMenuItem
              itemInfo={{
                name: "Escovitch Fish",
                imgSrc:
                  "https://images.pexels.com/photos/10050659/pexels-photo-10050659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                price: 5,
                desc: "Escovitch Fish is a Jamaican seafood dish made by frying fish, then topping it with a tangy sauce made with onions, peppers, vinegar, and spices. The sauce is poured over the fish, allowing it to soak up the flavors and giving it a delicious, zesty taste.",
                linkToOrder: "#lemon",
              }}
            />

            <SpecialMenuItem
              itemInfo={{
                name: "Vegetarian Roti",
                imgSrc:
                  "https://annetravelfoodie.com/wp-content/uploads/2020/05/vegetarian-roti-recipe-1024x1024.jpg",
                price: 5,
                desc: "A popular vegetarian option, Roti is a soft and flaky bread that is filled with curried vegetables like chickpeas, potatoes, and carrots. It's a hearty and flavorful meal that is perfect for vegetarians or those looking for a lighter option.",
                linkToOrder: "#lemon",
              }}
            />
          </div>
        </article>
      </section>

      <section id="testimonialsSec">
        <h1 className="sectionTitle testimonialTitle">Testimonials</h1>

        <div id="testimonialsCont">
          <Testimonial
            reviewInfo={{
              name: "Greek Salad",
              imgSrc:
                "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

              starRating: 5,
              opinion: "good stuff",
            }}
          />

          <Testimonial
            reviewInfo={{
              name: "Bruchetta",
              imgSrc:
                "https://images.pexels.com/photos/3535373/pexels-photo-3535373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

              starRating: 5,
              opinion: "good stuff",
            }}
          />

          <Testimonial
            reviewInfo={{
              name: "Lemon Dessert",
              imgSrc:
                "https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

              starRating: 4.5,
              opinion: "good stuff",
            }}
          />

          <Testimonial
            reviewInfo={{
              name: "Signature Strawberries Item",
              imgSrc:
                "https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              starRating: 5,
              opinion: "good milk",
            }}
          />
        </div>
      </section>

      <section id="aboutSec">
        <article>
          <h1 className="titleText aboutTitleText">Little Lemon</h1>
          <h3 className="subheadingText aboutSubtitleText">Jamaica</h3>
          <p className="descText aboutDescText">
            Little Lemon has come a long way since our humble beginnings, and
            we're proud to have built a loyal customer base through the years.{" "}
            <br />
            <br />
            Our journey began with a small food stand in a local market, where
            we quickly gained a reputation for our delicious dishes and
            affordable prices. As word spread about our amazing food, we
            expanded to a full-fledged restaurant in the heart of Jamaica.
            <br />
            <br />
            Today, we continue to grow and innovate, while staying true to our
            roots. We believe that great food shouldn't have to break the bank,
            and we work hard to keep our prices affordable without compromising
            on quality.
            <br />
            <br />
            We're grateful to our loyal customers who have supported us on this
            journey, and we strive to make every dining experience at Little
            Lemon a memorable one. So whether you're a regular or a first-time
            visitor, we look forward to welcoming you with open arms and serving
            you a meal that will leave you smiling.
            <br />
            <br />
          </p>
        </article>
        <div id="aboutImgCont">
          <img
            id="aboutImg1"
            className="aboutimgs"
            src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            id="aboutImg2"
            className="aboutimgs"
            src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
