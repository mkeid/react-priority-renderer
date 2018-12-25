import { Column } from "./Types";

export class ListNode {
    private col: Column;
    private prev: ListNode = null;
    private next: ListNode = null;

    constructor(col: Column) {
        this.col = col;
    }

    getCol(): Column {
        return this.col;
    }

    getPrev(): ListNode {
        return this.prev;
    }

    getNext(): ListNode {
        return this.next
    }
}