import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [

    trigger('aniPop', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('normal2', style({
        transform: 'scale(1)'
      })),
    transition('normal <=> *', [
      animate(200, style({
        transform: 'scale(1.10)'
      })),
      animate(200)
    ])
  ]
    ),

    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red', // or you can have 'background-color'
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
      transition('normal <=> highlighted', animate(300))
    ]),

    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red', // or you can have 'background-color'
        transform: 'translateX(0) scale(1)',
        borderRadius: '0'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)',
        borderRadius: '0'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)',
        borderRadius: '0'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),

    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)'
        })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),

    trigger('list2', [

      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)'
        })),

      transition('void => *', [
        animate(1000, keyframes([

          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0 //Offset customizes how long this portion of the transition takes.
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })

        ]))
      ]),

      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ])

    ])
  ]
})

export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  aniPopState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  makeLarger(){
    this.aniPopState == 'normal' ? this.aniPopState = 'larger' : this.aniPopState = 'normal';
  }

  animationStarted(event) {
    console.log(event);
  }
  animationEnded(event) {
    console.log(event);
  }
}
