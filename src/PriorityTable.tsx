import * as React from 'react';
import { Column, Record } from './Types';
import { throttle } from './FuncTools';

interface PropsType {
    cols: Column[];
    records: Record[];
}

interface StateType {
    hiddenCols: Set<string>;
}

export class PriorityTable extends React.Component<PropsType, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            hiddenCols: new Set()
        }
    }

    componentDidMount = (): void => {
        const handleDimensionChange = throttle(this.handleDimensionChange, 300);
        window.addEventListener('resize', handleDimensionChange as any);
    }

    handleDimensionChange = (): void => {

    }

    shouldRenderCol = (colName: string): boolean => 
        !(colName in this.state.hiddenCols);

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
                {col.data}
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