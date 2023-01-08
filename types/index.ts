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
    id: number;
    attributes: IArticleAttribute;
}

export interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string;
                };
            };
        };
    };
}

export interface IAuthor {
    data: {
        attributes: {
            first_name: string;
            last_name: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
}


export interface IArticleAttribute {
    title: string;
    slug: string;
    body: string;
    image: IImageData,
    createdAt: string;
    author: IAuthor;
    shortDescription: string;
}


export type ICategoryAttribute = {
    title: string;
    slug: string;
}