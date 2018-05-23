import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { ImageComponent } from './components/image/image.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageService } from './services/image.service';
import { ComparatorService } from './services/comparator.service';
import { FaceService } from './services/face.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ImageService, FaceService, ComparatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }