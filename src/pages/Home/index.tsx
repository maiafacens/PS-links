import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Timeline } from '../../components/Timeline';
import './styles.css';

export function Home() {
  return (
    <div className="container">
      <Header />
      <div className="content">
      <section className="hero">
        <div className="cta">
          <h1>
            THE FUTURE IS WAITING FOR YOU!
          </h1>
          <h2>
            Selective Process - 2° semester 2023
          </h2>
          <Button text='SHOW MORE' href='#selective-process' _blank={false}/>
        </div>
        <img src="/brain.png" />
      </section>
      <section id='about-us' className="about-us">
        <h1>
          MAIA TEAM
        </h1>

      </section>
      <section className="categories">
        <h1>
          AVAILABLE CATEGORIES
        </h1>

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
      </section>
    </div>
    </div>
  )
}