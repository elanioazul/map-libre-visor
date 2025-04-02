import { IReadCapa } from "./capa.dto";

type displayWhere = 'Geocatalog' | 'BaseLayerswitcher';

export interface IReadService {
  id: number;
  name: string;
  alias: string;
  description: string;
  displayAt: displayWhere;
  opacity: number;
  hasChindren: boolean;//no tiene ? entonces es nodo con capas : es nodo vacio y habrá que leer siguiente 
  layers: IReadCapa[] | null;
}
