import React, { HTMLAttributes } from 'react';

import MentorMediaObject from '../MentorMediaObject/MentorMediaObject';

import type { Mentor } from '@/features/mentors/types';

type MentorListProps = {
  mentors: Mentor[];
  position: 'champion' | 'mentor';
} & HTMLAttributes<HTMLUListElement>;

const MentorList = ({ mentors, position, className }: MentorListProps) => {
  const filteredMentors = mentors.filter((mentor) =>
    mentor.position.includes(position),
  );

  return (
    <ul className={className}>
      {filteredMentors.map((mentor) => (
        <li key={mentor.id}>
          <MentorMediaObject mentor={mentor} />
        </li>
      ))}
    </ul>
  );
};

export default MentorList;
