export interface Post {
	id: string;
	title: string;
	name: string;
    content: string;
    createdAt: string;
	imageUrl?: string;
	category: PostCategory;
	tags?: PostTag[];
	readTime: number;
	extract: string;
	keyWords: string[];
}

interface PostTag {
	id: number;
	name: string;
}

interface PostCategory {
	id: number;
	name: string;
}

