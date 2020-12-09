import React from "react"
import Layout from "../../layout"
import SEO from "../../components/seo"
import styles from "./index.module.styl"
import GitHubIcon from "../../assets/icons/github"
import TwitterIcon from "../../assets/icons/twitter"
import LinkedInIcon from "../../assets/icons/linkedin"
import BookIcon from "../../assets/icons/book"
import BriefcaseIcon from "../../assets/icons/briefcase"


const CVPage = () => {
  return (
    <Layout className={styles.cvPage}>
      <SEO title="CV" />

      <div className={`container ${styles.cv}`}>
        <header className={styles.header}>
          <section className={styles.info}>
            <div className={styles.name}>
              <span className={styles.firstname}>Hossein</span>
              <span className={styles.lastname}>Maktoobian</span>
            </div>
            <div className={styles.jobTitle}>Full Stack Web Developer</div>
          </section>

          <section className={styles.contacts}>
            <ul className={styles.links}>
              <li className={styles.link} >
                <a data-label='P' href="tel:+989134625632">+98 913-462-5632</a>
              </li>
              <li className={styles.link} >
                <a data-label='E' href="mailto:8bitsight@gmail.com">8bitsight@gmail.com</a>
              </li>
              <li className={styles.link} >
                <a data-label='W' href="https://hmak.me">hmak.me</a>
              </li>
            </ul>
          </section>
        </header>


        <aside>
          <section className={styles.profile}>
            <header>
              <h3>Profile</h3>
            </header>

            <p>Self taught programmer who is eager to learn more and more everyday. I got engaged with computers when I was 5, that was the
            beginning of the love story. Started my web development career in high school (2013) and kept it up until this moment. I've coded
            in various programming languages but recently chose JS as my speaking language.</p>
          </section>

          <section className={styles.awards}>
            <header>
              <h3>Awards</h3>
            </header>

            <div>
              <span className={styles.date}>Jul 28, 2018</span>
              <span className={styles.info}>18th Iran National Skills</span>
              <span className={styles.award}>Gold Medal</span>
            </div>

            <div>
              <span className={styles.date}>Aug 27, 2019</span>
              <span className={styles.info}>45th WorldSkills Competition</span>
              <span className={styles.award}>Medallion Of Excellence</span>
            </div>
          </section>

          <section className={styles.socials}>
            <header>
              <h3>Socials</h3>
            </header>

            <ul className={styles.links}>
              <li className={styles.link}>
                <a href='https://gihub.com/hmak-me'>
                  <GitHubIcon />
                  <span>@hmak-me</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href='https://linkedin.com/in/hmak-me'>
                  <LinkedInIcon />
                  <span>@hmak-me</span>
                </a>
              </li>
              <li className={styles.link}>
                <a href='https://twitter.com/hmakme'>
                  <TwitterIcon />
                  <span>@hmakme</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>

        <main>
          <section className={styles.education}>
            <header>
              <BookIcon />
              <h3>Education</h3>
            </header>

            <div>
              <span className={styles.date}>Sep 23, 2015 - Jan 20, 2018</span>
              <span className={styles.info}>Somewhere | Something</span>
            </div>

            <div>
              <span className={styles.date}>Sep 23, 2019 - Now</span>
              <span className={styles.info}>Somewhere | Something</span>
            </div>
          </section>

          <section className={styles.work}>
            <header>
              <BriefcaseIcon />
              <h3>Experience</h3>
            </header>

            <div>
              <span className={styles.date}>Sep 3, 2020 - Aug 15, 2022</span>
              <span className={styles.info}>Somewhere | Something</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam at aut cumque cupiditate doloremque earum eum, exercitationem expedita facilis fuga, hic in ipsa iste laborum maxime mollitia natus nostrum nulla officiis pariatur placeat provident quaerat quo rerum soluta vero vitae. Ad architecto blanditiis cum deleniti eaque, excepturi illum inventore ipsam itaque, magnam maxime perferendis perspiciatis, quas quasi quis vitae?</p>
            </div>

            <div>
              <span className={styles.date}>Sep 3, 2020 - Aug 15, 2022</span>
              <span className={styles.info}>Somewhere | Something</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur delectus dicta distinctio esse harum ipsum itaque, iure modi nesciunt nostrum officia praesentium quasi qui quibusdam quis quo ratione recusandae rem reprehenderit rerum saepe sed sint tempore unde velit veniam vero! Consequatur cum, deleniti facilis fuga hic molestiae mollitia necessitatibus nemo pariatur soluta. Eveniet, natus, sapiente. Adipisci assumenda autem cumque et iusto odio quia recusandae voluptas voluptatibus? Laborum, optio, vel.</p>
            </div>

            <div>
              <span className={styles.date}>Sep 3, 2020 - Aug 15, 2022</span>
              <span className={styles.info}>Somewhere | Something</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem delectus inventore laborum nisi quae quod recusandae reiciendis totam vitae. Autem cupiditate explicabo fuga iste mollitia optio quidem sit tenetur totam vel. Accusamus ad animi, assumenda autem debitis delectus et explicabo ipsum labore quia quod reiciendis rerum similique temporibus ullam.</p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default CVPage
