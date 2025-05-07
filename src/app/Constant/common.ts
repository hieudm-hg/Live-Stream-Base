import { NzTableFilterFn, NzTableFilterList } from "ng-zorro-antd/table";

export interface ColumnItem {
    key: string;
    name: string;
    hidden: boolean;
    sortFn?: any;
    col?: number;
    width?: number;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<any> | null;
    isShow?: boolean;
    align?: "center" | "left" | "right";
    mediaType?: TypeMedia;
    isRequired?: boolean;
    compare?: any,
    priority?: boolean
}

export enum TypeMedia{
	Image = 0,
	Audio = 1,
    Video = 2
}