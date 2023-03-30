export interface IResponse<T> {
    attributionHTML: string;
    attributionText: string;
    code:            number;
    copyright:       string;
    data:            Data<T>;
    etag:            string;
    status:          string;
   }
   
export interface Data<T> {
    count:   number;
    limit:   number;
    offset:  number;
    results: T[];
    total:   number;
}