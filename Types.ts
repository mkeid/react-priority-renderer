export interface Column {
    name: string;
    priority: number;
    className?: string;
}

export interface Record {
    colName: string;
    className?: string;
    data?: any;
}