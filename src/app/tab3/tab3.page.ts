import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService } from '../services/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonImg, IonCol, IonRow, IonGrid, IonIcon, IonFabButton, IonFab, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {

  photoService = inject(PhotoService)

  addPhotoToGallery() {
    this.photoService.addNewToGallery()
  }

  constructor() {}
}
