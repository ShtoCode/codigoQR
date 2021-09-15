import { Component, OnInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';
@Component({
  selector: 'app-annimations',
  templateUrl: './annimations.page.html',
  styleUrls: ['./annimations.page.scss'],
})
export class AnnimationsPage implements OnInit {
  animacion : Animation;
  constructor(private animationsCtr : AnimationController) { }

  ngOnInit() {
    this.animacion= this.animationsCtr.create()
    .addElement(document.querySelector('.square'))
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
  }
  play(){
    this.animacion.play()
  }

  pause(){
    this.animacion.pause()
  }

  stop(){
    this.animacion.stop()
  }
}
