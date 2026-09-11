import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SingerService } from '../singer-service';

interface Singer {
  numero: string;
  cantante: string;
  canzone: string;
  artista_originale: string;
}

@Component({
  selector: 'app-singer-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singer-graph.html',
  styleUrl: './singer-graph.css',
})
export class SingerGraph implements OnInit, OnDestroy {
  currentSinger: Singer | null = null;
  visible = false;

  private sub!: Subscription;
  private hideTimeout?: ReturnType<typeof setTimeout>;
  private readonly DISPLAY_DURATION = 6000; // ms in cui resta visibile prima del fade out

  constructor(
    private singerService: SingerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sub = this.singerService.onNewSinger().subscribe((singer: Singer) => {
      this.showSinger(singer);
    });
  }

  private showSinger(singer: Singer): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    // se c'è già un cantante a schermo, lo facciamo sparire prima di mostrare il nuovo
    this.visible = false;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.currentSinger = singer;
      this.visible = true;
      this.cdr.detectChanges();

      this.hideTimeout = setTimeout(() => {
        this.visible = false;
        this.cdr.detectChanges();
      }, this.DISPLAY_DURATION);
    }, 400); // aspetta che il fade out precedente finisca
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }
}