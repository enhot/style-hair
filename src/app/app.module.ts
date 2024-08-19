import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { UnderHeroComponent } from './components/under-hero/under-hero.component';
import { WeLoveComponent } from './components/we-love/we-love.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { WeWorkComponent } from './components/we-work/we-work.component';
import { LetMakeComponent } from './components/let-make/let-make.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalMenuComponent,
    HeroComponent,
    UnderHeroComponent,
    WeLoveComponent,
    OurServiceComponent,
    WeWorkComponent,
    LetMakeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
