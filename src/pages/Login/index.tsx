import { localUser } from '@/store/user';
import { Button, Input, View, Text } from '@tarojs/components';
import Taro, { FC } from '@tarojs/taro';
import { useSetState } from 'ahooks';
import { Observer } from 'mobx-react';
import Form, { Field, useForm, FormProvider } from 'rc-field-form';
import { AtAvatar, AtButton, AtForm, AtIcon, AtInput } from 'taro-ui';

import styles from './index.module.less';

const Login: FC = () => {
  const [form] = useForm();
  const [formValues, setFormValues] = useSetState<Record<string, any>>({
    username: '',
    password: '',
  });

  const handleChange = (value, valueName: string) => {
    setFormValues({
      [valueName]: value,
    });
  };

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View className={styles.avatar}>
            <AtAvatar
              image="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/logo.png"
              circle
            />
          </View>

          <Form
            form={form}
            onFinish={(values) => {
              localUser.signin(values);
            }}
            onFinishFailed={({ values, errorFields, outOfDate }) => {
              console.log(values, errorFields, outOfDate);
              Taro.showToast({
                title: errorFields?.[0]?.errors?.[0],
                icon: 'none',
                duration: 2000,
              });
            }}
          >
            <View className={styles.formContainer}>
              <Field
                name="username"
                initialValue="test"
                rules={[{ required: true, message: '请输入登录账号' }]}
              >
                {(prop) => (
                  <View className={styles.inputItem}>
                    <AtIcon value="user" size="30" color="#bfbfbf" />
                    <AtInput
                      name="username"
                      border={false}
                      type="text"
                      placeholder="请输入登录账号"
                      value={prop.value}
                      onChange={prop.onChange}
                      required
                    />
                  </View>
                )}
              </Field>
              <Field
                name="password"
                initialValue="test"
                rules={[{ required: true, message: '请输入登录密码' }]}
              >
                {(prop) => (
                  <View className={styles.inputItem}>
                    <AtIcon value="lock" size="30" color="#bfbfbf" />
                    <AtInput
                      name="password"
                      type="text"
                      placeholder="请输入登录密码"
                      value={prop.value}
                      onChange={prop.onChange}
                      required
                      border={false}
                    />
                  </View>
                )}
              </Field>
            </View>

            <Button onClick={() => form?.submit()} className={styles.loginBtn}>
              登录
            </Button>
          </Form>
          <View className={`at-row at-row__justify--center ${styles.toolbar}`}>
            <Text>自助注册</Text>
            <Text className={styles.divider}>|</Text>
            <Text>忘记密码</Text>
            <Text className={styles.divider}>|</Text>
            <Text>遇到问题</Text>
          </View>

          <View className={`at-row at-row__justify--center ${styles.wxLogin}`}>
            <View>
              <AtAvatar
                size="small"
                className={styles.wxIcon}
                image="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E5%BE%AE%E4%BF%A1.svg"
                circle
              />
              微信登录
            </View>
          </View>
        </View>
      )}
    </Observer>
  );
};

export default Login;
