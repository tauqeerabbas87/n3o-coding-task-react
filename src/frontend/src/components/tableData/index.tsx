import React, {FC} from "react";
import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';
import generateColumns, {TableDataType} from "./columns";

const onChange: TableProps<TableDataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

type tableDataType ={
    donationItems:any,
    statuses:any,
}

const TableData:FC<tableDataType> = ({donationItems, statuses}) => {
    const columnsConfig = generateColumns(statuses);

    return(
        <Table
            dataSource={donationItems}
            columns={columnsConfig}
            onChange={onChange}
            rowKey={record=> record.name}
        />
    )
}

export default TableData;