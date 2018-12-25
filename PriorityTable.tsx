import * as React from 'react';

import { Column, Record } from './Types';

interface PropsType {
    cols: Column[];
    records: Record[];
}

interface StateType {
    hiddenCols: Set<Column>;
}

export class PriorityTable extends React.Component<PropsType, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            hiddenCols: new Set()
        }
    }

    shouldRenderCol(colName: string) {
        return !(colName in this.state.hiddenCols);
    }

    render = (): JSX.Element => (
        <div className="priority-table">
            {this.renderHeaders()}
            {this.renderRecords()}
        </div>
    );

    renderHeaders = (): JSX.Element => (
        <div className="priority-table__headers">
            {this.props.cols.map(this.renderHeader)}
        </div>
    );

    renderHeader = (col: Column): JSX.Element => (
        this.shouldRenderCol(col.name) && (
            <div className={`priority-table__header ${col.className}`}>
                    
            </div>
        )
    );

    renderRecords = (): JSX.Element => (
        <div className="priority-table__records">
            {this.props.records.map(this.renderRecord)}
        </div>
    );

    renderRecord = (record: Record): JSX.Element => (
        this.shouldRenderCol(record.colName) && (
            <div className={`priority-table__record ${record.className}`}>
                {record.data}
            </div>
        )
    );
}