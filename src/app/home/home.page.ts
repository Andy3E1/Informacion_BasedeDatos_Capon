import { BdService } from './../../Services/bd.service';
import { Component, IterableDiffers } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Item } from 'src/Models/item';
import { FormsModule } from '@angular/forms';
import { ToastService } from 'src/Services/toast.service';
import { LoadingService } from 'src/Services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule],
})
export class HomePage {


  private enlace:string = 'Contenidos';
  contenidos:Item[]=[];
  constructor(private bd:BdService, private toast:ToastService, private load:LoadingService) {
  
  }
  ngOnInit() {
    this.bd.get<Item>(this.enlace).subscribe(p=>{
      this.contenidos=p;
    });
  }

  }

