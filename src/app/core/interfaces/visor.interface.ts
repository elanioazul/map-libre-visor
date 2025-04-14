import { IReadService } from "./service.interface";

export interface IReadVisor {
  name: string;
  servicesBase?: IReadService[];
  servicesGeocatalog?: IReadService[];
}
