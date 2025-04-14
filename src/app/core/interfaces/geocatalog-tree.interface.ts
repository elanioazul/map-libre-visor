import { TreeNode } from 'primeng/api';

export interface GeocatalogTreeData {
  id?: number;//de la capa
  name?: string;//de la capa
  alias?: string;//del servicio
  description?: string;//del servicio
  identificator?: string;//de la capa
  minZoom?: number;//de la capa
  maxZoom?: number;//de la capa
  visible?: boolean;//de la capa
  opacity?: number;//de la capa
}


export type GeocatalogTreeNode = TreeNode<GeocatalogTreeData>;
