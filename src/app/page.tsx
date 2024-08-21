import styles from "./css/page.module.scss";
import CardComponent from "./components/card";
import { cards } from "./lib/cards";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";

const Home: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            image={card.image}
            imageAlt={card.imageAlt}
            backgroundColor={card.backgroundColor}
            color={card.color}
            testimonial={card.testimonial}
            backgroundStatement={card.backgroundStatement}
          />
        ))}
      </div>

      <div role="contentinfo" className={styles.attributionWrapper}>
        <div className={styles.attribution}>
          Challenge by{" "}
          <Link
            className="text-blue"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link className="text-blue" href="https://github.com/chelsea-here">
            Chelsea Anne Livingston Cruz
          </Link>
          .
        </div>
      </div>
    </main>
  </>
);

export default Home;
