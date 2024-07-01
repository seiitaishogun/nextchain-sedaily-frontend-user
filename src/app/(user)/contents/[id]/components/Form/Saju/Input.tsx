import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import {
  CALENDAR_OPTION,
  GENDER_OPTION,
  MARITAL_OPTION,
} from '@module/constants/user';
import useFormTrigger from '@module/hooks/form/useFormTrigger';
import useFormDate from '@module/hooks/content/form/useFormDate';
import { getName } from '@module/utils/content/form';
import { UnknownButton } from '@/app/(user)/contents/[id]/components/Form/Saju/styled';

import LabelGroup from '@/app/(user)/components/Form/LabelGroup';
import TextField from '@/app/(user)/components/Form/TextField';
import MultiRadio from '@/app/(user)/components/Form/Radio';
import Select from '@/app/(user)/components/Form/Select';

interface Props {
  isUser: boolean;
}

const Layout = styled.fieldset`
  select {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const FlexDirectionRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

function SajuInput({ isUser }: Props) {
  const { control, setValue, trigger } = useFormContext();
  const { handleTrigger } = useFormTrigger({ trigger });
  const { years, months, days, hours, minutes, is_birthed_time } = useFormDate({
    isUser,
  });

  const handleIsBirthedTime = () => {
    setValue(
      getName({
        property: 'hour',
        isUser,
      }),
      ''
    );
    setValue(
      getName({
        property: 'minute',
        isUser,
      }),
      ''
    );
    setValue(
      getName({
        property: 'is_birthed_time',
        isUser,
      }),
      !is_birthed_time
    );
    handleTrigger();
  };

  return (
    <Layout>
      <LabelGroup id="name" labelText="이름">
        <TextField
          control={control}
          name={getName({
            property: 'name',
            isUser,
          })}
          placeholder="이름을 입력해주세요"
        />
      </LabelGroup>

      <LabelGroup id="gender" labelText="성별">
        <MultiRadio
          control={control}
          name={getName({
            property: 'gender',
            isUser,
          })}
          radios={GENDER_OPTION}
        />
      </LabelGroup>

      <LabelGroup id="marital" labelText="결혼 여부">
        <Select
          control={control}
          name={getName({
            property: 'marital',
            isUser,
          })}
          options={MARITAL_OPTION}
          isDefault
          defaultConfig={{
            text: '선택',
            value: '',
          }}
          style={{
            width: '100%',
          }}
        />
      </LabelGroup>

      <LabelGroup id="birthed_date" labelText="생년월일">
        <FlexDirectionRow>
          <Select
            control={control}
            name={getName({
              property: 'year',
              isUser,
            })}
            options={years}
            isDefault
            defaultConfig={{
              text: '년도',
              value: '',
            }}
            style={{
              width: '100%',
            }}
          />

          <FlexSpaceBetween>
            <Select
              control={control}
              name={getName({
                property: 'month',
                isUser,
              })}
              options={months}
              isDefault
              defaultConfig={{
                text: '월',
                value: '',
              }}
              style={{
                width: 'calc(33% - 10px)',
              }}
            />
            <Select
              control={control}
              name={getName({
                property: 'day',
                isUser,
              })}
              options={days}
              isDefault
              defaultConfig={{
                text: '일',
                value: '',
              }}
              style={{
                width: 'calc(33% - 10px)',
              }}
            />
            <Select
              control={control}
              name={getName({
                property: 'calendar',
                isUser,
              })}
              options={CALENDAR_OPTION}
              isDefault
              defaultConfig={{
                text: '선택',
                value: '',
              }}
              style={{
                width: 'calc(33% - 10px)',
              }}
            />
          </FlexSpaceBetween>
        </FlexDirectionRow>
      </LabelGroup>

      <LabelGroup id="birthed_time" labelText="태어난 시간">
        <FlexSpaceBetween>
          <Select
            control={control}
            name={getName({
              property: 'hour',
              isUser,
            })}
            options={hours}
            isDefault
            disabled={!is_birthed_time}
            defaultConfig={{
              text: '시',
              value: '',
            }}
            style={{
              width: 'calc(33% - 10px)',
            }}
          />

          <Select
            control={control}
            name={getName({
              property: 'minute',
              isUser,
            })}
            options={minutes}
            isDefault
            disabled={!is_birthed_time}
            defaultConfig={{
              text: '분',
              value: '',
            }}
            style={{
              width: 'calc(33% - 10px)',
            }}
          />

          <UnknownButton
            type="button"
            $isBirthedTime={is_birthed_time}
            onClick={() => {
              handleIsBirthedTime();
            }}
          >
            <i />
            모름
          </UnknownButton>
        </FlexSpaceBetween>
      </LabelGroup>
    </Layout>
  );
}

export default SajuInput;
