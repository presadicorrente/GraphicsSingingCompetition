import { ChangeDetectorRef, Component } from '@angular/core';
import { SingerService } from '../singer-service';
import { CommonModule } from '@angular/common';

interface Singer {
  numero: string;
  cantante: string;
  canzone: string;
  artista_originale: string;
}

@Component({
  selector: 'app-singer-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singer-dashboard.html',
  styleUrl: './singer-dashboard.css',
})
export class SingerDashboard {
  selectedSinger: Singer | null = null;

  listOfSingers: Singer[] = [];

  constructor(private singerService: SingerService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.singerService.getSingers().subscribe((data) => {
      this.listOfSingers = data;
      console.log('Received singers:', this.listOfSingers);
      this.cdr.detectChanges();
    });
  }


  showSinger(_t3: Singer) {
    console.log('Sending singer:', _t3);
    this.selectedSinger = _t3;
    this.singerService.sendSinger(_t3)
    this.cdr.detectChanges();
  }


}