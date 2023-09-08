import { Cpu, User, Article, Globe } from '@phosphor-icons/react';
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  text: (string | ReactNode)[];
  color: 'primary' | 'secondary';
  icon: ReactNode;
}

export const TimelineItems: TimelineItemProps[] = [
  {
    title: "PERSONAL INTERVIEW",
    date: "05/09 - 13/09",
    text: [
      "Interview with members of the MAIA team, carried out to understand the candidate's profile",
    ],
    color: 'primary',
    icon: <User weight='fill' />,
  },
  {
    title: "ARTICLE - OPTIONAL",
    date: "10/09",
    text: [
      "Write an article about artificial intelligence, and send it to the email: ",
      <a href="mailto:maia@facens.br" target='_blank'>maia@facens.br</a>,
      <br />,
      "These ",
      <a href="#links" target='_blank'>links</a>,
      " may be useful for the writing process.",

    ],
    icon: <Article weight='fill' />,
    color: 'secondary',
  },
  {
    title: "WEB SITE - OPTIONAL",
    date: "10/09",
    text: [
      "Show off your programming skills by contributing to ",
      <a href="https://maiafacens.github.io/PS-links/" target='_blank'>our website</a>,
      <br />,
      "Feel free to make any necessary changes and then submit a pull request to us on the ",
      <a href="https://github.com/maiafacens/PS-links" target='_blank'>GitHub repository</a>,
    ],
    icon: <Globe />,
    color: 'secondary',
  },
  {
    title: "TECHNICAL TEST",
    date: "18/09 - 22/09",
    text: [
      "A test to understand the candidate's level of Technical knowledge.",
    ],
    icon: <Cpu weight='fill'/>,
    color: 'primary',
  },
]