export interface ICollectionResponse<T> {
    data: T[];
    meta: IResourceMeta
}


export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IArticle {
}


export type ICategoryAttribute = {
    title: string;
    slug: string;
}