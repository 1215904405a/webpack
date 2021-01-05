import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
// import { fromJS } from 'immutable';

class TableList extends Component {
    public static propTypes: {
        columns: PropTypes.Requireable<any[]>;
        data: PropTypes.Requireable<any[]>;
        loading: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    public render() {
        // const { columns, data, pagination = false, loading = false, onChange = () => {}, rowSelection, ...other } = this.props;
        // let pgn = false;
        // if (pagination) {
        //   const pag = fromJS(pagination);
        //   let pag2;
        //   if (pagination.pageNum) {
        //     pag2 = pag.set('current', pagination.pageNum);
        //   } else if (pagination.pageNo) {
        //     pag2 = pag.set('current', pagination.pageNo);
        //   }
        //   if (pag2) { pgn = pag2.toJS(); }
        // }
        return (
            <Table
            // columns={columns}
            // dataSource={data}
            // pagination={pgn}
            // loading={loading}
            // onChange={onChange}
            // rowSelection={rowSelection}
            // {...other}
            />
        );
    }
}

export default TableList;
