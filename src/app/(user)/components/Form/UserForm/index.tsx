'use client';

import { Control } from 'react-hook-form';
import LabelGroup from '@/app/(user)/components/Form/LabelGroup';
import TextField from '@/app/(user)/components/Form/TextField';

interface Props {
  control: Control<any>;
}

function UserForm({ control }: Props) {
  return (
    <>
      <LabelGroup className="label-group" labelText="이 름" id="name">
        <TextField
          name="name"
          control={control}
          placeholder="이름을 입력해주세요"
        />
      </LabelGroup>
      <LabelGroup className="label-group" labelText="연 락 처" id="phone">
        <TextField
          type="number"
          name="phone"
          control={control}
          placeholder="연락처를 입력해주세요 (숫자만 입력)"
          inputMode="numeric"
        />
      </LabelGroup>
      <LabelGroup className="label-group" labelText="비밀번호" id="pin">
        <TextField
          name="pin"
          type="password"
          control={control}
          placeholder="비밀번호를 입력해주세요 (숫자 4자리)"
          aria-autocomplete="none"
          autoComplete="off"
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </LabelGroup>
    </>
  );
}

export default UserForm;
