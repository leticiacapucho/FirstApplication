import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the Provider1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Provider1Provider Provider');
  }

  //função buscar dados
  obterDados(){
    return this.http.get('http://jsonplaceholder.typicode.com/users');
    // Explicação, linha acima: devolver uma conexão. Para isso foi criado um método de retorno dos dados da página web em home.ts
  }

}
