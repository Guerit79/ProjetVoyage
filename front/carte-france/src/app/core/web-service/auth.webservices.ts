import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthWebService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs';
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();
  public userId: number | null = null;
/*
  private userIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  public userId$: Observable<number | null> = this.userIdSubject.asObservable();

  userId: number | null;
*/

  constructor(private http: HttpClient) {
    this.userId = null;
  }

  ngOnInit() {

  }

  login(pseudo: any, mdp: any): Observable<User | null> {
    const url = `${this.apiUrl}/login`;
    const credentials = { pseudo, mdp };

    return this.http.post<User | null>(url, credentials).pipe(
      tap(user => {
        this.userSubject.next(user);
        this.userId = user?.id_utilisateur ?? null;
        console.log(this.userId);
      })
    );


  }

  logout(): void {
    this.userSubject.next(null);
    this.userId = null;
  }

  isAdmin(): boolean {
    const user = this.userSubject.value;
    console.log(this.userSubject.value);
    console.log("admin");

    return user?.id_role_utilisateur?.nomRole === 'admin';
  }

  isUser(): boolean {
    const user = this.userSubject.value;
    console.log(this.userSubject.value);
    console.log("user");

    return user?.id_role_utilisateur?.nomRole === 'user';
  }

  getFavoris(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${userId}/voyages-favoris`;


    console.log("getFavoris => ", userId);
    console.log("getFavoris 2222 => ", url );


    return this.http.get<any[]>(url);
  }


}
