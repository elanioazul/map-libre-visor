import { IReadCapa } from "./capa.dto";

type displayWhere = 'Geocatalog' | 'BaseLayerswitcher';

export interface IReadService {
  id: number;
  name: string;
  alias: string;
  description: string;
  layers?: IReadCapa[]; // Optional: present if this is a leaf service
  categories?: { [key: string]: IReadService }; // Optional: nested categories
}


export interface IReadGeocatalog {
  [category: string]: IReadService;
}
