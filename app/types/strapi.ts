export type StrapiResponse<ApiData = unknown> = {
	data?: Array<ApiData>;
	error: unknown;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
};

type Data<T> = {
	data?: T;
};

type ContentType<Attributes> = {
	id: number;
	attributes: Attributes;
};

type Screenshot =  {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: null | string;
	width: number;
	height: number;
	size: number;
	url: string;
};

export type Tip = ContentType<{
	Name: string;
	Description: string;
	Slug: string;
	createdAt: Date;
	updatedAt: Date;
	Author: Data<ContentType<{
		firstname: string;
		lastname: string;
		username: null | string;
		preferedLanguage: null | string;
		createdAt: Date;
		updatedAt: Date;
	}>>;
	Screenshots: null | Data<Array<ContentType<{
		name: string;
		alternativeText: string;
		caption: string;
		width: number;
		height: number;
		formats: {
			thumbnail: Screenshot;
			large: Screenshot;
			medium: Screenshot;
			small: Screenshot;
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: null | string;
		provider: string;
		provider_metadata: unknown;
		createdAt: Date;
		updatedAt: Date;
	}>>>;
}>;
