import { Region } from "./region";

export class Travel {
  id_voyage?: number;
  titre?: string;
  description?: string;
  compteurLike?: number;
  id_region?: Region;

  constructor(id_voyage: number, titre: string, description: string, compteurLike: number, region: Region) {
      this.id_voyage = id_voyage;
      this.titre = titre;
      this.description = description;
      this.compteurLike = compteurLike;
      this.id_region = region;
  }

}
