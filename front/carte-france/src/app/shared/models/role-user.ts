export class RoleUser {
  id_role_utilisateur?: number;
  nomRole?: string;

  constructor(id_role_utilisateur: number, nomRole: string) {
      this.id_role_utilisateur = id_role_utilisateur;
      this.nomRole = nomRole;
  }

}
