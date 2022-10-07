import React from "react";
import styles from "../styles/Home.module.css";
import aboutcss from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <main className={aboutcss.main}>
        <h1 className={styles.title}>
          About <a href="https://nextjs.org">D</a>eblogger
        </h1>
        <div className={aboutcss.content}>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            adipisci eligendi iste provident dolores necessitatibus mollitia
            voluptates odio. Sit rerum laboriosam quasi quo at enim in error
            blanditiis. Fugiat odit debitis distinctio molestias, ipsam ipsum
            dolor placeat nemo cum corporis, a in. Itaque architecto excepturi
            praesentium maiores non amet ab aliquid. Praesentium dolorum ea
            reiciendis cupiditate, ratione quas quae asperiores quos? Nostrum
            laudantium eum nihil, porro quam reprehenderit eveniet autem suscipit
            placeat sint iusto labore maiores sapiente fuga in animi cupiditate
            fugit modi sed architecto excepturi, explicabo laborum? Nisi maiores
            mollitia at dolore molestiae tempora ducimus dicta assumenda vero
            similique quod non numquam, ut doloribus ex fugit labore perferendis.
            Natus ullam ab voluptate, ut dolore nobis autem sed! Aperiam saepe
            voluptate sint provident eos nesciunt id atque sequi exercitationem,
            fuga dolorum corrupti illo perferendis dolore facere magni earum.
            Earum fuga deleniti neque ipsam exercitationem, dolores vel sequi,
            impedit illum sit ipsum eius eum hic ipsa, laudantium asperiores
            praesentium cumque aspernatur? Iusto, aspernatur maxime, doloribus
            dolorum cumque minus ducimus culpa perferendis laudantium aliquid
            tenetur totam quae eveniet quia voluptas, deleniti eius mollitia atque
            magni? Delectus vero pariatur veritatis totam inventore amet,
            reiciendis similique facere sed corrupti vitae illum quia, a ratione.
          </p>
          <h2>services offerd</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo itaque, fugit maiores aliquid possimus libero temporibus. Omnis, nemo voluptas repellendus repudiandae placeat laboriosam dolor sunt nobis quam! Ducimus eveniet sequi fuga a autem animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex corporis ducimus quibusdam unde! Repudiandae atque minus ipsum libero explicabo nesciunt quasi facilis illum vel quod voluptate, qui obcaecati provident labore distinctio dicta aliquid facere? Minima reiciendis nobis magni eaque.
          </p>
          <p>We offer following services</p>
          <ul>
            <li>Service 1</li>
            <li>service 2</li>
            <li>service 3</li>
            <li>service 4</li>
            <li>service 5</li>
            <li>service 6</li>
          </ul>
          <h2>Contact us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, illo. Quo eaque voluptas fugiat consequuntur adipisci error tempora quaerat! Cumque, modi alias? Nostrum beatae accusantium modi dolore aliquid omnis quod ea, laboriosam rerum molestiae porro perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam magnam officiis obcaecati amet facilis voluptate, dolorem voluptatem, voluptatum exercitationem totam, ratione omnis assumenda accusantium pariatur enim! Optio quaerat a unde harum architecto numquam accusantium. </p>
        </div>
      </main>
    </div>
  );
};

export default about;
