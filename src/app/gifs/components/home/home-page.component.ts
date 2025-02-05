import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
    
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsServcie: GifsService){}

  get gifs(): Gif[]{
    return this.gifsServcie.gifsList;
  }
}
