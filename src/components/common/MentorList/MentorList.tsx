import React, { HTMLAttributes } from 'react';

import MentorMediaObject from '../MentorMediaObject/MentorMediaObject';

import type { Mentor } from '@/features/mentor/types';

type MentorListProps = {
  mentors: Mentor[];
} & HTMLAttributes<HTMLUListElement>;

const MentorList = ({ mentors, className }: MentorListProps) => {
  return (
    <ul className={className}>
      {mentors.map((mentor) => (
        <li key={mentor.id}>
          <MentorMediaObject mentor={mentor} />
        </li>
      ))}
    </ul>
  );
};

export default MentorList;
