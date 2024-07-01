import React from 'react';
import { ParentT } from '@module/types/content/fortune';
import FortuneParent from '@/app/(user)/contents/[id]/result/components/Fortune/Parent';

interface Props {
  parents: ParentT[];
  isName?: boolean;
  selectedTabIndex?: number;
}

function Fortune({ parents, isName, selectedTabIndex }: Props) {
  if (selectedTabIndex !== undefined) {
    const currentData = parents[selectedTabIndex];

    return (
      <FortuneParent key={currentData.id} data={currentData} isName={isName} />
    );
  }

  return (
    <>
      {parents.map((parent: any) => (
        <FortuneParent key={parent.id} data={parent} isName={isName} />
      ))}
    </>
  );
}

export default Fortune;
