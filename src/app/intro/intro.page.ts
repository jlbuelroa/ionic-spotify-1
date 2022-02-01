import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "Bienvenidos",
      subtitle: "The Music JBR",
      description: "Prepara tus oidos, para escuchar lo mejor de lo mejor",
      icon: "musical-notes-outline",
      image: "assets/images/spotify.gif",
      alt: "imagen de spotify.gif"
    },
    {
      id: 1,
      title: "Music",
      subtitle: "Que Tipo de Genero?",
      description: "Música, clásica, Jazz, Soul, Blues",
      icon: "play-outline",
      image: "assets/images/genmusica.jpg",
      alt: "imagen de Genero de musica"
    },
    {
      id: 2,
      title: "Musica Recomendada",
      subtitle: "Lo que Buscas estas Aqui",
      description: "Solo Sigueme",
      icon: "pause-outline",
      image: "assets/images/recomendada.jpg",
      alt: "imagen de musica recomendada"
    },
    {
      id: 3,
      title: "El poder de la Musica",
      subtitle: "Lo que te Inspira",
      description: "No le pongas pausa a tu vida, dejala seguir con el Ritmo de la musica",
      icon: "pause-outline",
      image: "assets/images/logo 2.gif",
      alt: "imagen de logo 2"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
