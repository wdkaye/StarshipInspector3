import { Component, OnInit } from '@angular/core';
import { Starship } from './starship';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-starships',
  imports: [],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {

  // This exposes Starships to the HTML doc
  public starships!: Starship[];

  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get<Starship[]>(environment.baseUrl + 'api/Starships')
    .subscribe({
      next: (result) => {
        this.starships = result;
      },
      error: (error) => console.error(error)
    });
  }
}
