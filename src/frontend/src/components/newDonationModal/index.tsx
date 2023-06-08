import React, {FC} from "react";
import {Form, Input, Select, Modal, InputNumber, message } from 'antd';
import {PoundOutlined} from '@ant-design/icons';
import {CreateDonationPayloadType, donationModalType} from '../../types/appTypes';
import {createNewDonationService} from "../../services";
import {addNewDonationInTable} from "../../actions";
const DonationModal:FC<donationModalType> = ({
    isModalOpen,
    setIsModalOpen,
    locations,
    themes,
     donationItems,
     dispatch}) => {

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const handleOk = () => {
        form
            .validateFields()
            .then(async(values) => {
                const {name, location, theme, price} = values;

                // validate the name is unique
                const isUniqueName = donationItems.find((item:any) => item.name === name);
                if(!isUniqueName){
                    const data:CreateDonationPayloadType = {
                        name,
                        location,
                        theme,
                        price: {
                            currencyCode: "GBP",
                            amount:price
                        }
                    }
                    const response:any = await createNewDonationService(data);
                    if(response.result.status === 200){
                        dispatch(addNewDonationInTable(response.result.data));
                        messageApi.open({
                            type: 'success',
                            content: 'Donation item added successfully!',
                            duration: 2
                        });
                        form.resetFields();
                        setIsModalOpen(false);
                    } else {
                        messageApi.open({
                            type: 'error',
                            duration:2,
                            content: 'An error encountered while saving donation item!',
                        });
                    }
                } else {
                    messageApi.open({
                        type: 'error',
                        duration:2,
                        content: 'Donation item name must be unique!',
                    });
                }




            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
        {contextHolder}
        <Modal title="Add New Donation Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Add'}>

            <Form
                form={form}
                name="basic"
                labelAlign={'left'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                >
                    <Input  placeholder="Donation Item Name" maxLength={200} />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please input location!' }]}
                >
                    <Select placeholder="Select Location" style={{ width: '100%' }} options={locations} />
                </Form.Item>

                <Form.Item
                    label="Theme"
                    name="theme"
                    rules={[{ required: true, message: 'Please input theme!' }]}
                >
                    <Select placeholder="Select Theme" style={{ width: '100%' }} options={themes} />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                >
                    <InputNumber placeholder="Price" addonBefore={<PoundOutlined />} min={1} style={{ width: '100%' }} />
                </Form.Item>

            </Form>
        </Modal>
        </>
    )
}

export default DonationModal;