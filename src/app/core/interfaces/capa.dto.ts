export interface IReadCapa {
  id: number;
  name: string;
  identificator: string;
  minZoom: number;
  maxZoom: number;
  visible: boolean; // Will map to checked in TreeNode
  opacity: number;
}
