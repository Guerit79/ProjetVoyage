import { RoleUser } from "./role-user";

export class User {
  id_utilisateur?: number;
  pseudo?: string;
  mail?: string;
  mdp?: string;
  id_role_utilisateur?: RoleUser;

  constructor(id_utilisateur: number, pseudo: string, mail: string, mdp: string, id_role_utilisateur: RoleUser) {
      this.id_utilisateur = id_utilisateur;
      this.pseudo = pseudo;
      this.mail = mail;
      this.mdp = mdp;
      this.id_role_utilisateur = id_role_utilisateur;
  }

}
