import React, {FC, useCallback, useEffect, useRef} from 'react';
import {Button, Col, Layout, message, Row, Space, Typography } from 'antd';
import TableData from "./../tableData";
import {
    getAllDonationItemsService,
    getAllLocationsService,
    getAllStatusesService,
    getAllThemesService,
    resetDonationService
} from "../../services";
import {getAllDonationItems, getAllLocations, getAllStatuses, getAllThemes, resetDonationItems} from '../../actions';
import {contentStyle, headerStyle} from "./styles";
import {statusesType} from "../../types/appTypes";

const { Header, Content } = Layout;
const { Title } = Typography;

export type HomeType = {
    donationItems:any,
    statuses:statusesType,
    showModal: () => void,
    dispatch:React.Dispatch<React.SetStateAction<any>>
}
const Home:FC<HomeType> = ({
     donationItems,
     statuses,
     showModal,
    dispatch
 }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const effectRan = useRef(false);

    const callDonationItemsService = useCallback(async() => {
        try{
            const response = await getAllDonationItemsService();
            if(response.result.status === 200){
                // @ts-ignore
                dispatch(getAllDonationItems(response.result.data));
            } else {
                messageApi.open({
                    type: 'error',
                    duration:2,
                    content: 'An error encountered while fetching all donation items!',
                });
            }
        } catch(err:any){
            messageApi.open({
                type: 'error',
                duration:2,
                content: 'An error encountered while fetching all donation items!',
            });
        }
    },[messageApi, dispatch]);

    const callLocationsService = useCallback(async() => {
        try{
            const response = await getAllLocationsService();
            if(response.result.status === 200){
                // @ts-ignore
                dispatch(getAllLocations(response.result.data));
            } else {
                messageApi.open({
                    type: 'error',
                    duration:2,
                    content: 'An error encountered while fetching locations!',
                });
            }
        } catch(err:any){
            messageApi.open({
                type: 'error',
                duration:2,
                content: 'An error encountered while fetching locations!',
            });
        }
    },[messageApi, dispatch]);

    const callStatusesService = useCallback(async() => {
        try{
            const response = await getAllStatusesService();
            if(response.result.status === 200){
                // @ts-ignore
                dispatch(getAllStatuses(response.result.data));
            } else {
                messageApi.open({
                    type: 'error',
                    duration:2,
                    content: 'An error encountered while fetching statuses!',
                });
            }
        } catch(err:any){
            messageApi.open({
                type: 'error',
                duration:2,
                content: 'An error encountered while fetching statuses!',
            });
        }
    },[messageApi, dispatch]);

    const callThemesService = useCallback(async() => {
        try{
            const response = await getAllThemesService();
            if(response.result.status === 200){
                // @ts-ignore
                dispatch(getAllThemes(response.result.data));
            } else {
                messageApi.open({
                    type: 'error',
                    duration:2,
                    content: 'An error encountered while fetching themes!',
                });
            }
        } catch(err:any){
            messageApi.open({
                type: 'error',
                duration:2,
                content: 'An error encountered while fetching themes!',
            });
        }
    },[messageApi, dispatch]);


    const initialApiCallOnLoad = useCallback(() => {
        callDonationItemsService();
        callLocationsService();
        callStatusesService();
        callThemesService();
    },[callDonationItemsService, callLocationsService, callStatusesService, callThemesService]);


    useEffect(()=>{
        if (!effectRan.current) {
            initialApiCallOnLoad();
        }

        return ()=> {
            effectRan.current = true;
        }

    },[initialApiCallOnLoad]);


    const resetDonations = async() => {
        try{
            const response = await resetDonationService();
            if(response.result.status === 200){
                // @ts-ignore
                dispatch(resetDonationItems());
                messageApi.open({
                    type: 'success',
                    content: 'Donation items reset successfully!',
                    duration: 2
                });
            } else {
                messageApi.open({
                    type: 'error',
                    duration:2,
                    content: 'An error encountered while fetching all donation items!',
                });
            }
        } catch(err:any){
            messageApi.open({
                type: 'error',
                duration:2,
                content: 'An error encountered while fetching all donation items!',
            });
        }
    }


    return (
    <>
        {contextHolder}
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>
                    <Row gutter={16}>
                        <Col span={19} style={{textAlign:'left'}}>
                            <Title level={4} style={{margin:'15px 0 0 0'}} >Donation Items</Title>
                        </Col>
                        <Col span={5}>
                            <Space>
                                <Button type="primary"
                                onClick={showModal}>New Donation</Button>
                                <Button
                                onClick={resetDonations}>Reset</Button>
                            </Space>
                        </Col>
                    </Row>
                </Header>
                <Content style={contentStyle}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <TableData
                                donationItems={donationItems}
                                statuses={statuses}
                            />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Space>
    </>
  );
}

export default Home;
