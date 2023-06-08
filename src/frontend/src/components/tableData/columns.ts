import type {ColumnsType} from 'antd/es/table';
import {statusesType} from "../../types/appTypes";

export interface TableDataType {
    name: string;
    reference: string;
    price: number;
    status: {
        id: string,
        name:string
    };
    location: {
        label: string,
        value: string
    };
    theme: {
        label: string,
        value: string
    };
}

const generateColumns = (statuses:statusesType):ColumnsType<TableDataType> => {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
            render: (reference) => reference?.text
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: price => price?.text
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: statuses,
            render: status => status?.name,
            onFilter: (value: string | number | boolean, record): boolean => {
                if (typeof value === 'string')
                    return record.status.id.indexOf(value) === 0
                else return false;

            },
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (location) => location?.name
        },
        {
            title: 'Theme',
            dataIndex: 'theme',
            key: 'theme',
            render: (theme) => theme?.name
        },
    ];
}



export default generateColumns;