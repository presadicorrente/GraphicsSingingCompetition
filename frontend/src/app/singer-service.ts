import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingerService {
  private socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:8080');
  }

  getSingers() {
    return this.http.get<Singer[]>('http://localhost:8080/');
  }

  sendSinger(singer: Singer): void {
    console.log('Sending singer to server:', singer);
    this.socket.emit('newSinger', singer);
  }

  onNewSinger(): Observable<Singer> {
    return new Observable((observer) => {
      this.socket.on('newSinger', (singer) => {
        observer.next(singer);
      });
    });
  }
}
