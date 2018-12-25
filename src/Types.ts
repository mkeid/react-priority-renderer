export interface Column {
    name: string;
    data: any;
    priority: number;
    className?: string;
}

export interface Record {
    colName: string;
    className?: string;
    data?: any;
}