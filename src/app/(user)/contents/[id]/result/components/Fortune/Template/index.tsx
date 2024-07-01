import { ChildrenDataT, ChildrenT } from '@module/types/content/fortune';
import Summary from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Summary';
import Description from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Description';
import ScoreSummary from '@/app/(user)/contents/[id]/result/components/Fortune/Template/ScoreSummary';
import ScoreItems from '@/app/(user)/contents/[id]/result/components/Fortune/Template/ScoreItems';
import Items from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Items';
import Graph from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Graph';
import FortuneDescription from '@/app/(user)/contents/[id]/result/components/Fortune/Template/FortuneDescription';
import Calendar from '@/app/(user)/contents/[id]/result/components/Fortune/Template/Calendar';

interface Props {
  data: ChildrenT | ChildrenDataT | any; // TODO: 추후 타입 개선
  subName?: string;
  isChildren?: boolean;
  sign?: string | null;
}

function ContentTemplate({ data, subName, isChildren, sign }: Props) {
  const { children_data, template } = data;

  /**
   * children 이면서 자식 template 이 같은 경우
   * 아이템, 그래프 같은 특정 템플릿일때 조건
   */
  if (isChildren) {
    switch (template?.id) {
      case 4:
      case 12:
        return <ScoreItems items={children_data} />;
      case 7:
      case 15:
        return <Items items={children_data} />;
      case 8:
      case 16:
        return <Graph items={children_data} />;
      case 9:
      case 17:
        return <Calendar items={children_data} />;
      default:
        return (
          <>
            {children_data.map((f: ChildrenDataT) => (
              <ContentTemplate
                key={f.id}
                sign={data.sign}
                data={f}
                subName={data.name !== 'null' ? data.name : ''}
                isChildren={false}
              />
            ))}
          </>
        );
    }
  }

  const { name, summary, contents } = data;

  /**
   * children 이 아닌 경우
   * 기본 출력
   */
  switch (template.id) {
    case 1:
    case 9:
      return <Summary name={name} summary={summary} />;
    case 2:
    case 10:
      return (
        <Description
          subName={subName || ''}
          sign={sign}
          name={name}
          summary={summary}
          contents={contents}
        />
      );
    case 3:
    case 11:
      return <FortuneDescription contents={contents} />;
    case 5:
    case 13:
      return <ScoreSummary summary={summary} contents={contents} />;
    case 6:
    case 14:
      return null;
    default:
      return null;
  }
}

export default ContentTemplate;
