
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()


export class  AuthService {

    user:{

        token:"",
        user:{}
    };

    apiUrl = 'http://192.168.1.119:3000';


    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');

    }


    Signup(data) {
        console.log(data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/users/register',data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });


    }


    Signin(data) {
        console.log(data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/users/authenticate',data)
                .subscribe(res => {
                    var obj=JSON.stringify(res);
                    resolve(obj);
                }, (err) => {
                    reject(err);
                });
        });



    }


    setUser(objeto) {
        this.user = objeto;
    }


    getUser() {
        return this.user;
    }



    pruebaToken() {
        console.log(this.user);


        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl+'/users/profile', {
                headers: new HttpHeaders().set('Authorization',this.user.token)
            })
                .subscribe(res => {
                    resolve(res);

                }, (err) => {
                    reject(err);
                });
        });







    }











}