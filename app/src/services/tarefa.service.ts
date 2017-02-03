import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RESTClient, BaseUrl, DefaultHeaders, GET, POST, PUT, DELETE, Body, Produces, Path } from 'ng2-http';
import { Observable } from 'rxjs/Observable';

@Injectable()
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
})
@BaseUrl('http://192.168.1.11:3000/tarefas')
export class TarefaService extends RESTClient {

    constructor(protected http: Http) { super(http); }

    @DELETE('/{id}')
    remove( @Path('id') id: number): Observable<any> { return null; }

    @POST('/')
    @Produces<Tarefa>()
    add( @Body tarefa: Tarefa): Observable<Tarefa> { return null; }

    @PUT('/{id}')
    @Produces<Tarefa>()
    update( @Path('id') id: number, @Body tarefa: Tarefa): Observable<Tarefa> { return null; }

    @GET('/')
    @Produces<Tarefa[]>()
    get(): Observable<Tarefa[]> { return null; }

}

export interface Tarefa {
    id?: number
    foto?: string
    title: string
    checked: boolean
}