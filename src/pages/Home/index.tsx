import { Timeline } from '../../components/Timeline';
import './styles.css';

export function Home() {
  return (
    <div className="content">
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
    </div>
  )
}