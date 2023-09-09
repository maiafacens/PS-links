import { useState } from 'react';
import './styles.css'

export interface CardProps {
  title: string;
  bannerUrl: string;
  author?: string;
  description?: string;
  href?: string;
}

export interface ICard {
  data: CardProps;
}

export function Card({data}: ICard) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (!data.href) return

    window.open(data.href, '_blank')
  }

  return (
    <div
      className={`card ${data.author && 'link'}`}
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, ${isHovered ? '0.9' : '0.8'}), rgba(0, 0, 0, 1)), 
        url(${data.bannerUrl})
        `,
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <h2>{data.title}</h2>
      <label>
        {data.author ? `by ${data.author}` : 'hover for more infos'}
      </label>
      {data.description && <p>{data.description}</p>}
    </div>
  )
}