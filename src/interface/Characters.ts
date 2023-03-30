
   
   export interface Characters {
    comics:      Comics;
    description: string;
    events:      Comics;
    id:          number;
    modified:    string;
    name:        string;
    resourceURI: string;
    series:      Comics;
    stories:     Stories;
    thumbnail:   Thumbnail;
    urls:        URL[];
   }
   
   export interface Comics {
    available:     number;
    collectionURI: string;
    items:         ComicsItem[];
    returned:      number;
   }
   
   export interface ComicsItem {
    name:        string;
    resourceURI: string;
   }
   
   export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
   }
   
   export interface StoriesItem {
    name:        string;
    resourceURI: string;
    type:        ItemType;
   }
   
   export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
   }
   
   export interface Thumbnail {
    extension: Extension;
    path:      string;
   }
   
   export enum Extension {
    GIF = "gif",
    Jpg = "jpg",
   }
   
   export interface URL {
    type: URLType;
    url:  string;
   }
   
   export enum URLType {
    Comiclink = "comiclink",
    Detail = "detail",
    Wiki = "wiki",
   }

   export interface CharacterCard extends Characters {
    flipped: boolean;
   }
   