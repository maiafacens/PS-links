import 'react-vertical-timeline-component/style.min.css';
import './styles.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Flag } from '@phosphor-icons/react';

import { TimelineItems } from '../../data/TimelineItensData';


export function Timeline() {
  return (
    <VerticalTimeline className='timeline'>
      {
        TimelineItems.map((item, i) => {
          return (
            <VerticalTimelineElement
              key={i + item.title}
              icon={item.icon}
              contentStyle={{
                background: '#151515'
              }}
              contentArrowStyle={{ display: 'none' }}
              iconStyle={{
                background: `var(--${item.color}-color)`,
              }}
            >
              <h3>{item.title}</h3>
              <h4>{item.date}</h4>
              <p>
                {item.text}
              </p>
            </VerticalTimelineElement>
          )
        })
      }

      <VerticalTimelineElement
        iconStyle={{ background: '#10CC52', color: '#fff' }}
        icon={<Flag weight="fill" />}
      />
    </VerticalTimeline>
  )
}