import { Button, Picker, View } from '@tarojs/components';
import { Observer } from 'mobx-react';
import { localUser } from '@/store/user';
import { getCaptcha } from '@/pages/Login/service';
import Taro, { FC, useRouter } from '@tarojs/taro';
import { useState } from 'react';
import Form, { Field, useForm } from 'rc-field-form';
import { AtButton, AtInput, AtListItem } from 'taro-ui';
import { useCountDown, useSetState } from 'ahooks';
import { uploadUser } from '@/pages/global/service';
import RegionPicker, { TRegionObj } from '@/components/regionPicker';

import styles from './index.module.less';

const UpdateUserInfo: FC = () => {
  const [form] = useForm();
  const router = useRouter();

  const [weappRegion, setWeappRegion] = useState();

  const [isCaptchaBtnDisabled, setIsCaptchaBtnDisabled] = useState<boolean>(
    !localUser?.userInfo?.mobile,
  );
  const [regionObj, setRegionObj] = useSetState({
    code: '',
    index: '',
    region: '',
  });

  const [targetDate, setTargetDate] = useState<number>();

  const [countdown] = useCountDown({
    targetDate,
  });

  const onChangeRegion = (e) => {
    console.log(e);
    setWeappRegion(e?.detail?.value?.join?.(' '));
  };

  const onReigonChange = (e, obj: TRegionObj) => {
    console.log(e, obj);
    setRegionObj({
      code: obj?.regionValObjArr?.map((item) => item?.adcode)?.join(',') || '',
      index: obj?.regionValObjArr?.map((item) => item?.index)?.join(',') || '',
      region: obj?.regionValObjArr?.map((item) => item?.name)?.join(',') || '',
    });
  };

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <Form
            form={form}
            onFinish={async (values) => {
              if (router?.params?.formItem === 'local') {
                values = { ...values, ...regionObj };
              }
              const upUserRes = await uploadUser({
                id: localUser.userInfo.id,
                ...values,
              });
              if (upUserRes) {
                localUser.setUserInfo({ ...values });
                Taro.showToast({
                  title: '更新成功',
                  icon: 'success',
                  duration: 2000,
                });
                Taro.navigateBack();
              }
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
              {router?.params?.formItem === 'nickName' && (
                <Field
                  name="nickName"
                  rules={[{ required: true, message: '请输入昵称' }]}
                  initialValue={localUser?.userInfo?.nickName}
                >
                  {(prop) => (
                    <View className={styles.inputItem}>
                      <AtInput
                        name="nickName"
                        title="昵称"
                        type="text"
                        placeholder="请输入昵称"
                        value={prop.value}
                        onChange={prop.onChange}
                        required
                      />
                    </View>
                  )}
                </Field>
              )}
              {router?.params?.formItem === 'mobile' && (
                <>
                  <Field
                    name="mobile"
                    rules={[{ required: true, message: '请输入手机号' }]}
                    initialValue={localUser?.userInfo?.mobile}
                  >
                    {(prop) => (
                      <View className={styles.inputItem}>
                        <AtInput
                          clear
                          title="手机号"
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
                                  title: '获取成功',
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
                        <AtInput
                          name="captcha"
                          title="验证码"
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
                </>
              )}
              {router?.params?.formItem === 'local' && (
                <RegionPicker
                  onReigonChange={onReigonChange}
                  initialValues={localUser?.userInfo?.index
                    ?.split(',')
                    ?.map((item) => +item)}
                />
              )}
            </View>

            <Button onClick={() => form?.submit()} className={styles.sumbitBtn}>
              提交
            </Button>
          </Form>
        </View>
      )}
    </Observer>
  );
};

export default UpdateUserInfo;
