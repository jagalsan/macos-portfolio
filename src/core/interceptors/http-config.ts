import { ContentType } from '@/data/enums/content-types.enum';
import { HttpMethod } from '@/data/enums/method.enum';

interface ApiCallOptions {
    body?: any | null;
    contentType?: ContentType;
    queryParams?: Record<string, string | number>;
}

export const fetchApi = async <T>(
    api: string,
    method: HttpMethod,
    options: ApiCallOptions = {}
): Promise<T> => {
    try {
        const backHost = process.env.BACK_HOST;
        const { queryParams, contentType, body } = options;

        if (queryParams) {
            const queryString = new URLSearchParams(
                queryParams as any
            ).toString();
            api += `?${queryString}`;
        }

        let url = `${backHost}${api}`;

        const headers: HeadersInit = {
            ...(contentType !== ContentType.MULTIPART && {
                'Content-Type': contentType || ContentType.JSON,
            }),
        };

        console.log(url);


        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });


        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorBody}`);
        }

        const data = await response.json();
        return data as T;
      } catch (error) {
        console.error(error);

        throw error;
      }
};
