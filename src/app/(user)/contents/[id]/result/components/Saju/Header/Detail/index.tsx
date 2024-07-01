import { SajuT } from '@module/types/content/result';
import LayerPopup from '@module/components/Common/Popup/Layer';
import {
  getCheongan,
  getCheonganColor,
  getJiji,
  getJijiColor,
} from '@/app/(user)/utils/saju';
import {
  SajuSectionLayout,
  DaeunSection,
  MessageBox,
  GridHeaderBgBox,
  GridBox,
  GridBgItem,
} from '@/app/(user)/contents/[id]/result/components/Saju/Header/User/styled';
import SajuSection from '@/app/(user)/contents/[id]/result/components/Saju/Header/Detail/SajuSection';

interface Props {
  saju: SajuT;
  name: string;
  handleClose: () => void;
}

function SajuDetail({ saju, name, handleClose }: Props) {
  const title = `${name}님의 사주 분석`;
  return (
    <LayerPopup title={title} handleClose={handleClose}>
      <SajuSectionLayout>
        <SajuSection saju={saju} />
      </SajuSectionLayout>

      <MessageBox>
        <strong>사주팔자란?</strong>
        사주팔자는 사주의 간지(干支)가 되는 여덟 글자를 말하며, 이를 통해 인생의
        전반적인 길흉화복을 점치게 됩니다. 위의 표에 있는 8자의 한자를
        사주팔자라고 하며, 고객님의 사주 속에 숨겨진 인생 암호를 쉽게 풀이할 수
        있도록 만세력을 기반으로 결과값을 뽑아낸 것입니다.
      </MessageBox>

      <DaeunSection>
        <MessageBox className="daeun-title">
          <div>{saju.daeun.name}</div>
        </MessageBox>

        <SajuSectionLayout>
          <GridHeaderBgBox count={4}>
            {/* <div>대운</div> */}
            {saju.daeun.age.slice(0, 4).map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </GridHeaderBgBox>

          <GridBox count={4}>
            {/*
          <GridItem>
            <span>천간</span>
            <span>(오행)</span>
          </GridItem>
          */}
            {saju.daeun.gan.slice(0, 4).map((item, i) => {
              const { ohaeng, ...color } = getCheonganColor(item);
              return (
                <GridBgItem $color={color} key={i}>
                  <span>{getCheongan(item)}</span>
                  <span>{ohaeng}</span>
                </GridBgItem>
              );
            })}
          </GridBox>

          <GridBox count={4}>
            {/*
          <GridItem>
            <span>지지</span>
            <span>(오행)</span>
          </GridItem>
          */}
            {saju.daeun.ji.slice(0, 4).map((item, i) => {
              const { ohaeng, ...color } = getJijiColor(item);
              return (
                <GridBgItem $color={color} key={i}>
                  <span>{getJiji(item)}</span>
                  <span>{ohaeng}</span>
                </GridBgItem>
              );
            })}
          </GridBox>

          <GridHeaderBgBox
            count={4}
            style={{
              marginTop: '12px',
            }}
          >
            {/* <div>대운</div> */}
            {saju.daeun.age.slice(4, 8).map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </GridHeaderBgBox>

          <GridBox count={4}>
            {/*
          <GridItem>
            <span>천간</span>
            <span>(오행)</span>
          </GridItem>
          */}
            {saju.daeun.gan.slice(4, 8).map((item, i) => {
              const { ohaeng, ...color } = getCheonganColor(item);
              return (
                <GridBgItem $color={color} key={i}>
                  <span>{getCheongan(item)}</span>
                  <span>{ohaeng}</span>
                </GridBgItem>
              );
            })}
          </GridBox>

          <GridBox count={4}>
            {/*
          <GridItem>
            <span>지지</span>
            <span>(오행)</span>
          </GridItem>
          */}
            {saju.daeun.ji.slice(4, 8).map((item, i) => {
              const { ohaeng, ...color } = getJijiColor(item);
              return (
                <GridBgItem $color={color} key={i}>
                  <span>{getJiji(item)}</span>
                  <span>{ohaeng}</span>
                </GridBgItem>
              );
            })}
          </GridBox>
        </SajuSectionLayout>

        <MessageBox>
          <strong>대운이란?</strong>
          인생을 살다보면 운세의 기운이 바뀌는 시기가 올 때가 있습니다. 흔히
          터닝포인트라고 하기도 하며 인생에서 장기간 큰 영향을 미치는 운으로
          10년을 주기로 변화합니다.
          <br />
          <br />
          위의 표는 고객님 사주명식을 분석하여 대운의 흐름을 파악한 것으로
          숫자는 그 해의 나이이며, 한자는 10년마다 바뀌는 대운의 간지를
          의미합니다.
        </MessageBox>
      </DaeunSection>
    </LayerPopup>
  );
}

export default SajuDetail;
