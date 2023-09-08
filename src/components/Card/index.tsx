import { useState } from 'react';
import './styles.css'

export interface CardProps {
  title: string;
  bannerUrl: string;
  author?: string;
  description?: string;
  href?: string;
}


export function Card(card: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (!card.href) return

    window.open(card.href, '_blank')
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, ${isHovered ? '0.9' : '0.8'}), rgba(0, 0, 0, 1)), 
        url(${card.bannerUrl})
        `,
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <h2>{card.title}</h2>
      <label>
        {card.author ? `by ${card.author}` : 'hover for more infos'}
      </label>
      <p>{card.description || ''}</p>
    </div>
  )
}