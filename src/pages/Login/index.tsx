import { localUser } from '@/store/user';
import { AppTypeEnum } from '@/typing/constants';
import { Button, View } from '@tarojs/components';
import Taro, { FC } from '@tarojs/taro';
import { useCountDown } from 'ahooks';
import { Observer } from 'mobx-react';
import Form, { Field, useForm } from 'rc-field-form';
import { useState } from 'react';
import { AtAvatar, AtButton, AtIcon, AtInput } from 'taro-ui';

import styles from './index.module.less';
import { getCaptcha } from './service';

const Login: FC = () => {
  const [form] = useForm();
  const [isCaptchaBtnDisabled, setIsCaptchaBtnDisabled] =
    useState<boolean>(true);

  const [targetDate, setTargetDate] = useState<number>();

  const [countdown] = useCountDown({
    targetDate,
  });

  const onWxClick = () => {
    localUser.signin({ type: AppTypeEnum.WEAPP });
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
                name="mobile"
                rules={[{ required: true, message: '请输入手机号' }]}
              >
                {(prop) => (
                  <View className={styles.inputItem}>
                    <AtIcon value="iphone" size="30" color="#bfbfbf" />
                    <AtInput
                      clear
                      name="mobile"
                      border={false}
                      type="phone"
                      maxlength={11}
                      placeholder="请输入手机号"
                      value={prop.value}
                      onChange={(value) => {
                        if (/^1[3456789]\d{9}$/.test(value.toString())) {
                          setIsCaptchaBtnDisabled(false);
                        } else {
                          setIsCaptchaBtnDisabled(true);
                        }
                        prop.onChange(value);
                      }}
                      required
                    >
                      <AtButton
                        size="small"
                        type="secondary"
                        onClick={async () => {
                          setTargetDate(Date.now() + 60000);
                          const res = await getCaptcha({
                            mobile: form.getFieldValue('mobile'),
                          });
                          if (res) {
                            Taro.showToast({
                              title: "获取成功",
                              icon: 'success',
                              duration: 2000,
                            });
                          }
                        }}
                        disabled={isCaptchaBtnDisabled || countdown !== 0}
                      >
                        {countdown === 0
                          ? '获取验证码'
                          : `${Math.round(countdown / 1000)}后重新获取`}
                      </AtButton>
                    </AtInput>
                  </View>
                )}
              </Field>
              <Field
                name="captcha"
                rules={[{ required: true, message: '请输入验证码' }]}
              >
                {(prop) => (
                  <View className={styles.inputItem}>
                    <AtIcon value="lock" size="30" color="#bfbfbf" />
                    <AtInput
                      name="captcha"
                      type="number"
                      placeholder="请输入验证码"
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
          {/* <View className={`at-row at-row__justify--center ${styles.toolbar}`}>
            <Text>自助注册</Text>
            <Text className={styles.divider}>|</Text>
            <Text>忘记密码</Text>
            <Text className={styles.divider}>|</Text>
            <Text>遇到问题</Text>
          </View> */}

          {process.env.TARO_ENV === 'weapp' && (
            <View
              className={`at-row at-row__justify--center ${styles.wxLogin}`}
              onClick={onWxClick}
            >
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
          )}
        </View>
      )}
    </Observer>
  );
};

export default Login;
