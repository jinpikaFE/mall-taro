import { Button, Form, Input, View } from '@tarojs/components';
import { FC } from '@tarojs/taro';
import { useSetState } from 'ahooks';
import { AtAvatar, AtButton, AtForm, AtInput } from 'taro-ui';

import styles from './index.module.less';

const Login: FC = () => {
  const [formValues, setFormValues] = useSetState<Record<string, any>>({
    value: '',
  });

  const handleChange = (value, valueName: string) => {
    setFormValues({
      [valueName]: value,
    });
  };

  const onSubmit = () => {
    console.log(formValues);
  };

  return (
    <View className={styles.container}>
      <View className={styles.avatar}>
        <AtAvatar
          image="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/logo.png"
          circle
        />
      </View>

      <AtForm>
        <AtInput
          name="value"
          title="账号"
          type="text"
          placeholder="单行文本"
          value={formValues.value}
          onChange={(value) => handleChange(value, 'value')}
        //   error={()=>{retrun true}}
          onErrorClick={() => {
            console.log('error');
          }}
          required
        />
      </AtForm>
      <AtButton type="primary" onClick={onSubmit}>
        提交
      </AtButton>
      <AtButton type="primary" size="small">
        微信登录
      </AtButton>
    </View>
  );
};

export default Login;
