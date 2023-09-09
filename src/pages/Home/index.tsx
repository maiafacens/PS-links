import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Timeline } from '../../components/Timeline';
import { CATEGORIES } from '../../data/CategoriesData';
import { LINKS } from '../../data/LinksData';
import './styles.css';

export function Home() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <section id='hero' className="hero">
          <div className="cta">
            <h1>
              THE FUTURE IS WAITING FOR YOU!
            </h1>
            <h2>
              Selective Process - 2° semester 2023
            </h2>
            <Button text='SHOW MORE' href='#selective-process' _blank={false} />
          </div>
          <img src="/brain.png" />
        </section>
        <section id='about-us' className="about-us">
          <img src="/maia-team.png"  alt='MAIA Team' />

          <div className="maia-team">
            <h1>
              MAIA TEAM
            </h1>
            <p>
              The MAIA team, which stands for Mobility Applied in Artificial Intelligence, has as its primary mission to provide a valuable opportunity for students who want to improve their skills and knowledge in artificial intelligence and apply them to practical projects.
            </p>
            <br />

            <p>
              Our team is dedicated to creating a learning and collaborative environment where students interested in robotics and AI can not only expand their theoretical knowledge, but also put it into practice by carrying out concrete projects. We believe that practical application plays a key role in developing solid AI and engineering skills.
            </p>
            <br />

            <p>
              We offer challenges where participants can get involved in projects that address real-world challenges, allowing them to apply AI algorithms, data analysis and machine learning techniques to everyday situations. This not only enriches the learning experience, but also prepares our members to face the challenges of industry and AI research with confidence.
            </p>
          </div>
        </section>
        <section className="categories">
          <h1>
            AVAILABLE CATEGORIES
          </h1>

          <div className="card-container">
            {
              CATEGORIES.map((category) => {
                return (
                  <Card data={category} />
                )
              })
            }
          </div>

        </section>
        <section id='selective-process' className="selective-process">
          <h1>
            SELECTIVE PROCESS
          </h1>
          <p>
            The team is looking for people who are willing to learn, committed to the team and the projects, and who are enthusiastic about developing skills in different types of technologies and engineering areas.
          </p>
          <br />
          <p>
            If you have any doubts or questions about the selective process or something related, you can send any of the admins a text!
          </p>
          <p>
            Or you can send a e-mail to us: {' '}
            <a href="mailto:maia@facens.br" target='_blank'>maia@facens.br</a>
          </p>
          <Timeline />
        </section>
        <section id='ai-links' className="ai-links" >
          <h1>
            ABOUT ARTIFICIAL INTELLIGENCE
          </h1>
          <p>
            Down here we have some links with concepts and examples about artificial intelligence
          </p>
          <div className="card-container">
            {
              LINKS.map((linkData) => {
                return (
                  <Card data={linkData} />
                )
              })
            }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}