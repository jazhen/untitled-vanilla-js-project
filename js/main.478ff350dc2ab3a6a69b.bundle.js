(self.webpackChunksnack_pack=self.webpackChunksnack_pack||[]).push([[179],{926:t=>{function n(t,n,i,e,a,s,o){try{var r=t[s](o),c=r.value}catch(t){return void i(t)}r.done?n(c):Promise.resolve(c).then(e,a)}t.exports=function(t){return function(){var i=this,e=arguments;return new Promise((function(a,s){var o=t.apply(i,e);function r(t){n(o,a,s,r,c,"next",t)}function c(t){n(o,a,s,r,c,"throw",t)}r(void 0)}))}}},575:t=>{t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},913:t=>{function n(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}},757:(t,n,i)=>{t.exports=i(666)},266:(t,n,i)=>{"use strict";var e=i(379),a=i.n(e),s=i(922);a()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var o=i(575),r=i.n(o),c=i(913),h=i.n(c),d=i(757),w=i.n(d),u=i(926),l=i.n(u);const f=function(){function t(n){r()(this,t),this.animate=this.animate.bind(this),this.filenames=["mainMenuBackground","door","doorBackground","fighterSelf","fighterOpponent","fighterBackground","locate","locateBackground","wanted","lose","avoidSelf","avoidEnemy","avoidBackground","controlsSpace","controlsWASD","controlsMouse","github","linkedin","angelist","speaker","mute"],this.mainMenu=n,this.numAssets=this.filenames.length,this.numAssetsLoaded=0,this.error=!1}return h()(t,[{key:"draw",value:function(){window.canvas.clear(),window.canvas.drawBackground("#dddddd"),this.error?(window.canvas.drawText("error loading assets.",window.canvas.width/2,window.canvas.height/2-1.5*window.canvas.baseFontSize,.75*window.canvas.baseFontSize,"black","black"),window.canvas.drawText("please try refreshing your browser.",window.canvas.width/2,window.canvas.height/2+1.5*window.canvas.baseFontSize,.75*window.canvas.baseFontSize,"black","black")):window.canvas.drawText("assets loading: ".concat(this.numAssetsLoaded/this.numAssets*100,"%"),window.canvas.width/2,window.canvas.height/2,window.canvas.baseFontSize,"black","black")}},{key:"update",value:function(){var t=this;this.numAssetsLoaded===this.numAssets&&(cancelAnimationFrame(window.requestAnimationFrameId),setTimeout((function(){return t.mainMenu()}),1e3))}},{key:"animate",value:function(){window.requestAnimationFrameId=requestAnimationFrame(this.animate),this.draw(),this.update()}},{key:"load",value:function(){var t=this;this.animate();var n=function(t){return new Promise((function(n,i){window.assets[t]=new Image,window.assets[t].src="./assets/".concat(t,".png"),window.assets[t].addEventListener("load",n,!1),window.assets[t].addEventListener("error",i,!1)}))};this.filenames.forEach(function(){var i=l()(w().mark((function i(e){return w().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,n(e);case 3:t.numAssetsLoaded+=1,i.next=9;break;case 6:i.prev=6,i.t0=i.catch(0),t.error=!0;case 9:case"end":return i.stop()}}),i,null,[[0,6]])})));return function(t){return i.apply(this,arguments)}}())}}]),t}(),m=function(){function t(n,i,e,a,s,o){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"transparent";r()(this,t),this.text=n,this.pos={x:i,y:e},this.size={width:a,height:s},this.fn=o,this.fillColor=c}return h()(t,[{key:"draw",value:function(){window.canvas.drawRect(this.pos.x,this.pos.y,this.size.width,this.size.height,this.fillColor),window.canvas.drawButtonText(this.text,this.pos.x,this.pos.y,this.size.width,this.size.height)}},{key:"clicked",value:function(t){var n=this.pos.x*window.canvas.scaleFactor,i=this.pos.x*window.canvas.scaleFactor+this.size.width*window.canvas.scaleFactor,e=this.pos.y*window.canvas.scaleFactor,a=this.pos.y*window.canvas.scaleFactor+this.size.height*window.canvas.scaleFactor;return t.x>=n&&t.x<=i&&t.y>=e&&t.y<=a}},{key:"mouseDown",value:function(t){this.clicked(t)&&this.fn()}}]),t}(),v=function(){function t(n,i,e,a,s,o){r()(this,t),this.image=n,this.pos={x:i,y:e},this.size={width:a,height:s},this.fn=o}return h()(t,[{key:"draw",value:function(){window.canvas.drawImage(this.image,this.pos.x,this.pos.y,this.size.width*window.canvas.scaleFactor,this.size.height*window.canvas.scaleFactor)}},{key:"clicked",value:function(t){var n=this.pos.x*window.canvas.scaleFactor,i=this.pos.x*window.canvas.scaleFactor+this.size.width*window.canvas.scaleFactor,e=this.pos.y*window.canvas.scaleFactor,a=this.pos.y*window.canvas.scaleFactor+this.size.height*window.canvas.scaleFactor;return t.x>=n&&t.x<=i&&t.y>=e&&t.y<=a}},{key:"mouseDown",value:function(t){this.clicked(t)&&this.fn()}}]),t}(),p=function(){function t(){r()(this,t),this.mainMenu=this.mainMenu.bind(this),this.handleClick=this.handleClick.bind(this),this.assets=new f(this.mainMenu),this.buttons={},this.showInstructions=!1}return h()(t,[{key:"handleClick",value:function(t){var n=this,i=window.canvas.canvas.getBoundingClientRect(),e={x:t.clientX-i.left,y:t.clientY-i.top};Object.keys(this.buttons).forEach((function(t){var i=n.buttons[t];(i instanceof m||i instanceof v)&&i.mouseDown(e)}))}},{key:"addButton",value:function(t,n,i,e){this.buttons["".concat(t,"Button")]=new m(t,n[0],n[1],i[0],i[1],e)}},{key:"setUpElements",value:function(){var t=this;this.addButton("play",[110,105],[180,30],(function(){cancelAnimationFrame(window.requestAnimationFrameId),window.ROUND_NUM=0,window.gameTransition.animate(),window.canvas.canvas.removeEventListener("click",t.handleClick,!1)})),this.addButton("instructions",[110,135],[180,30],(function(){t.showInstructions=!0})),this.addButton("back",[(window.canvas.width-80)/2,225],[80,30],(function(){t.showInstructions=!1})),this.buttons.speaker=new v(window.assets.speaker,370,5,1.5*window.canvas.baseFontSize,1.5*window.canvas.baseFontSize,(function(){window.audio.paused?window.audio.play():(window.audio.pause(),window.audio.currentTime=0)})),this.buttons.github=new v(window.assets.github,window.BASE_WIDTH/2-45,270,1.5*window.canvas.baseFontSize,1.5*window.canvas.baseFontSize,(function(){window.open("https://github.com/jazhen","_blank")})),this.buttons.linkedin=new v(window.assets.linkedin,window.BASE_WIDTH/2-10,270,1.5*window.canvas.baseFontSize,1.5*window.canvas.baseFontSize,(function(){window.open("https://www.linkedin.com/in/jazhen/","_blank")})),this.buttons.angelist=new v(window.assets.angelist,window.BASE_WIDTH/2+23,270,1.5*window.canvas.baseFontSize,1.5*window.canvas.baseFontSize,(function(){window.open("https://angel.co/u/jazhen","_blank")}))}},{key:"instructions",value:function(){window.canvas.drawText("play through a rotating, random",window.canvas.width/2,90*window.canvas.scaleFactor,.75*window.canvas.baseFontSize,"white","black",window.canvas.width),window.canvas.drawText("assortment of microgames.",window.canvas.width/2,110*window.canvas.scaleFactor,.75*window.canvas.baseFontSize,"white","black",window.canvas.width),window.canvas.drawText("wasd to move.",window.canvas.width/2,150*window.canvas.scaleFactor,.75*window.canvas.baseFontSize,"white","black",window.canvas.width),window.canvas.drawText("spacebar as the action button.",window.canvas.width/2,170*window.canvas.scaleFactor,.75*window.canvas.baseFontSize,"white","black",window.canvas.width),window.canvas.drawText("mouse to select.",window.canvas.width/2,190*window.canvas.scaleFactor,.75*window.canvas.baseFontSize,"white","black",window.canvas.width),this.buttons.backButton.draw()}},{key:"mainMenu",value:function(){var t=this,n={size:{width:511,height:384},pos:{x:0,y:0},frame:{x:0,y:0,min:0,max:23}},i=function(){window.canvas.drawAnimation(window.assets.mainMenuBackground,n.size.width*n.frame.x,n.size.height*n.frame.y,n.size.width,n.size.height,n.pos.x,n.pos.y,window.BASE_WIDTH,window.BASE_HEIGHT);var i=window.canvas.ctx.createLinearGradient(0,20,0,60);i.addColorStop("0","black"),i.addColorStop("0.05","red"),i.addColorStop("1.00","gold"),window.canvas.drawText("SNACK PACK",window.canvas.width/2,40*window.canvas.scaleFactor,2*window.canvas.baseFontSize,i,"black",window.canvas.width),t.showInstructions?t.instructions():(t.buttons.playButton.draw(),t.buttons.instructionsButton.draw(),t.buttons.github.draw(),t.buttons.linkedin.draw(),t.buttons.angelist.draw()),window.audio.paused?t.buttons.speaker.image=window.assets.mute:t.buttons.speaker.image=window.assets.speaker,t.buttons.speaker.draw()},e=1e3/24,a=performance.now();!function s(){window.requestAnimationFrameId=requestAnimationFrame(s);var o=performance.now(),r=o-a;r>e&&(a=o-r%e,window.canvas.clear(),i.call(t),n.frame.x<n.frame.max?n.frame.x+=1:n.frame.x=n.frame.min)}(),window.canvas.canvas.addEventListener("click",this.handleClick,!1)}}]),t}(),y=function(){function t(){r()(this,t),this.canvas=document.querySelector("#canvas"),this.ctx=this.canvas.getContext("2d"),this.width=400,this.height=300,this.scaleFactor=1,this.baseFontSize=16}return h()(t,[{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawBackground",value:function(t){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawText",value:function(t,n,i){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.baseFontSize,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"white",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"black";this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=a,this.ctx.font="".concat(e,"px DogicaPixelBold"),this.ctx.fillText(t,n/this.scaleFactor,i/this.scaleFactor),this.ctx.strokeStyle=s,this.ctx.strokeText(t,n/this.scaleFactor,i/this.scaleFactor),this.ctx.stroke()}},{key:"drawButtonText",value:function(t,n,i,e,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"white",r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"black",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:this.baseFontSize;this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillStyle=o,this.ctx.font="".concat(c,"px DogicaPixelBold"),this.ctx.fillText(t,n+e/2,i+a/2,s),this.ctx.strokeStyle=r,this.ctx.strokeText(t,n+e/2,i+a/2),this.ctx.stroke()}},{key:"drawRect",value:function(t,n,i,e,a){this.ctx.fillStyle=a,this.ctx.fillRect(t,n,i,e)}},{key:"drawImage",value:function(t,n,i,e,a){this.ctx.drawImage(t,n,i,e/this.scaleFactor,a/this.scaleFactor)}},{key:"drawAnimation",value:function(t,n,i,e,a,s,o,r,c){this.ctx.imageSmoothingEnabled=!1,this.ctx.mozImageSmoothingEnabled=!1,this.ctx.drawImage(t,n,i,e,a,s,o,r,c)}},{key:"scale",value:function(){this.ctx.scale(this.scaleFactor,this.scaleFactor)}}]),t}(),x=function(){function t(){r()(this,t),this.width=1600/6,this.height=400,this.frame={x:0,y:0,min:0,max:5},this.pos={x:0,y:0},this.games=[],this.nextGame=null,this.setInvervalId=null}return h()(t,[{key:"randomGame",value:function(){return this.games[Math.floor(Math.random()*this.games.length)]}},{key:"draw",value:function(t){switch(window.canvas.drawImage(window.assets.doorBackground,this.pos.x,this.pos.y,window.BASE_WIDTH*window.canvas.scaleFactor,window.BASE_HEIGHT*window.canvas.scaleFactor),window.canvas.drawAnimation(window.assets.door,this.width*this.frame.x,this.height*this.frame.y,this.width,this.height,this.pos.x,this.pos.y,window.BASE_WIDTH,window.BASE_HEIGHT),window.canvas.drawText(t,window.canvas.width/2,150*window.canvas.scaleFactor,32,"white","black",window.canvas.width),t){case"win":window.canvas.drawImage(window.assets.controlsSpace,130,180,212/1.5*window.canvas.scaleFactor,52/1.5*window.canvas.scaleFactor);break;case"find":window.canvas.drawImage(window.assets.controlsMouse,180,180,50.5*window.canvas.scaleFactor,66*window.canvas.scaleFactor);break;case"avoid":window.canvas.drawImage(window.assets.controlsWASD,160,180,131/1.5*window.canvas.scaleFactor,95/1.5*window.canvas.scaleFactor)}}},{key:"update",value:function(){this.frame.x<this.frame.max?this.frame.x+=1:(cancelAnimationFrame(window.requestAnimationFrameId),this.frame.x=this.frame.min,this.nextGame.play())}},{key:"animate",value:function(){var t=this;window.ROUND_NUM<this.games.length?this.nextGame=this.games[window.ROUND_NUM]:this.nextGame=this.randomGame();var n=performance.now();!function i(){window.requestAnimationFrameId=requestAnimationFrame(i);var e=performance.now(),a=e-n;a>500&&(n=e-a%500,window.canvas.clear(),t.update(),t.draw(t.nextGame.transitionText))}()}}]),t}(),g=function(){function t(n){r()(this,t),this.mainMenu=n,this.fps=24,this.framesCounter=0,this.width=359,this.height=270,this.frame={x:0,y:0,min:0,max:34},this.pos={x:0,y:0}}return h()(t,[{key:"draw",value:function(){window.canvas.drawAnimation(window.assets.lose,this.width*this.frame.x,this.height*this.frame.y,this.width,this.height,this.pos.x,this.pos.y,window.BASE_WIDTH,window.BASE_HEIGHT),window.canvas.drawText("game over",window.canvas.width/2,200,32,"white","black",window.canvas.width),1===window.ROUND_NUM?window.canvas.drawText("you survived ".concat(window.ROUND_NUM," round"),window.canvas.width/2,300,16,"white","black",window.canvas.width):window.canvas.drawText("you survived ".concat(window.ROUND_NUM," rounds"),window.canvas.width/2,300,16,"white","black",window.canvas.width)}},{key:"update",value:function(){this.frame.x<this.frame.max?this.frame.x+=1:this.frame.x=this.frame.min,this.framesCounter+=1,this.framesCounter>5*this.fps&&(cancelAnimationFrame(window.requestAnimationFrameId),this.mainMenu())}},{key:"animate",value:function(){var t=this,n=1e3/this.fps,i=performance.now();this.framesCounter=0;!function e(){window.requestAnimationFrameId=requestAnimationFrame(e);var a=performance.now(),s=a-i;s>n&&(i=a-s%n,window.canvas.clear(),t.update(),t.draw())}()}}]),t}(),k=function(){function t(){var n=this;r()(this,t),this.transitionText="win",this.handleKeyDown=this.handleKeyDown.bind(this),this.background={size:{width:359,height:270},pos:{x:0,y:0},frame:{x:0,y:0,min:0,max:5}},this.self={size:{width:167.4,height:160},pos:{x:55,y:60},frame:{x:0,y:0,min:0,max:0},actions:{idle:function(){n.self.frame.y=0,n.self.frame.min=0,n.self.frame.max=9},jab:function(){n.self.frame.y=1,n.self.frame.min=0,n.self.frame.max=7},uppercut:function(){n.self.frame.y=2,n.self.frame.min=0,n.self.frame.max=7}},action:"idle",attacks:["jab","uppercut"]},this.opponent={size:{width:2857/14,height:200},pos:{x:175,y:33},frame:{x:0,y:0,min:0,max:0},actions:{dizzy:function(){n.opponent.frame.y=0,n.opponent.frame.min=0,n.opponent.frame.max=7},hurt:function(){n.opponent.frame.y=1,n.opponent.frame.min=0,n.opponent.frame.max=7},ko:function(){n.opponent.frame.y=2,n.opponent.frame.min=0,n.opponent.frame.max=13}},action:"dizzy"},this.self.actions.idle(),this.opponent.actions.dizzy(),this.fps=24,this.punchCounter=0,this.punchTarget=10,this.timeLeft=10,this.countDownCounter=0,this.stopTimer=!1}return h()(t,[{key:"randomAttack",value:function(){return this.self.attacks[Math.floor(Math.random()*this.self.attacks.length)]}},{key:"lose",value:function(){this.stopTimer=!0,document.removeEventListener("keydown",this.handleKeyDown,!1),setTimeout((function(){cancelAnimationFrame(window.requestAnimationFrameId),window.loseTransition.animate()}),3e3)}},{key:"countDown",value:function(){this.countDownCounter+=1,this.countDownCounter>this.fps&&!this.stopTimer&&(this.timeLeft-=1,this.countDownCounter=0),window.canvas.drawText("".concat(this.timeLeft),370*window.canvas.scaleFactor,30*window.canvas.scaleFactor,24),this.timeLeft||this.lose()}},{key:"draw",value:function(){window.canvas.drawAnimation(window.assets.fighterBackground,this.background.size.width*this.background.frame.x,this.background.size.height*this.background.frame.y,this.background.size.width,this.background.size.height,this.background.pos.x,this.background.pos.y,window.BASE_WIDTH,window.BASE_HEIGHT),window.canvas.drawAnimation(window.assets.fighterSelf,this.self.size.width*this.self.frame.x,this.self.size.height*this.self.frame.y,this.self.size.width,this.self.size.height,this.self.pos.x,this.self.pos.y,this.self.size.width,this.self.size.height),window.canvas.drawAnimation(window.assets.fighterOpponent,this.opponent.size.width*this.opponent.frame.x,this.opponent.size.height*this.opponent.frame.y,this.opponent.size.width,this.opponent.size.height,this.opponent.pos.x,this.opponent.pos.y,this.opponent.size.width,this.opponent.size.height),this.background.frame.x<this.background.frame.max?this.background.frame.x+=1:this.background.frame.x=this.background.frame.min,this.self.frame.x<this.self.frame.max?this.self.frame.x+=1:this.self.frame.x=this.self.frame.min,this.opponent.frame.x<this.opponent.frame.max?this.opponent.frame.x+=1:"ko"!==this.opponent.action&&(this.opponent.frame.x=this.opponent.frame.min)}},{key:"win",value:function(){var t=this;this.stopTimer=!0,this.opponent.action="ko",this.opponent.actions.ko(),this.self.action="idle",this.self.actions.idle(),setTimeout((function(){cancelAnimationFrame(window.requestAnimationFrameId),document.removeEventListener("keydown",t.handleKeyDown,!1),window.ROUND_NUM+=1,window.gameTransition.animate()}),3e3)}},{key:"update",value:function(){this.punchCounter<this.punchTarget?"idle"!==this.self.action&&this.self.frame.x>=this.self.frame.max&&(this.self.action="idle",this.self.actions.idle(),this.opponent.action="dizzy",this.opponent.actions.dizzy()):this.win()}},{key:"handleKeyDown",value:function(t){if(t.preventDefault(),!t.repeat&&" "===t.key&&(this.punchCounter+=1,"idle"===this.self.action&&"ko"!==this.opponent.action))switch(this.self.action=this.randomAttack(),this.self.action){case"jab":this.self.actions.jab(),this.opponent.actions.hurt();break;case"uppercut":this.self.actions.uppercut(),this.opponent.actions.hurt()}}},{key:"reset",value:function(){this.opponent.action="dizzy",this.opponent.actions.dizzy(),this.punchCounter=0,this.punchTarget=10+5*Math.floor(window.ROUND_NUM/3),this.stopTimer=!1,this.timeLeft=10,this.countDownCounter=0,document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"play",value:function(){var t=this,n=performance.now(),i=1e3/this.fps;this.reset(),function e(){window.requestAnimationFrameId=requestAnimationFrame(e);var a=performance.now(),s=a-n;s>i&&(n=a-s%i,window.canvas.clear(),"ko"!==t.opponent.action&&t.update(),t.draw(),window.ROUND_NUM>=window.gameTransition.games.length&&t.countDown())}()}}]),t}(),b=function(){function t(n,i,e){r()(this,t),this.size=n,this.pos=i,this.frame={x:Math.floor(9*Math.random()),y:e,min:0,max:11},this.type=e}return h()(t,[{key:"draw",value:function(){window.canvas.drawAnimation(window.assets.locate,this.size.width*this.frame.x,this.size.height*this.frame.y,this.size.width,this.size.height,this.pos.x,this.pos.y,50,50)}},{key:"update",value:function(){this.frame.x<this.frame.max?this.frame.x+=1:this.frame.x=this.frame.min}},{key:"animate",value:function(){this.draw(),this.update()}},{key:"clicked",value:function(t){var n=this.pos.x*window.canvas.scaleFactor,i=this.pos.x*window.canvas.scaleFactor+50*window.canvas.scaleFactor,e=this.pos.y*window.canvas.scaleFactor,a=this.pos.y*window.canvas.scaleFactor+50*window.canvas.scaleFactor;return t.x>=n&&t.x<=i&&t.y>=e&&t.y<=a}},{key:"mouseDown",value:function(t,n,i){this.clicked(t)&&this.type===n&&i()}}]),t}(),A=function(){function t(){r()(this,t),this.animals={},this.matchAnimal=null,this.requiredNumAnimals=5,this.currentNumAnimals=0,this.numAnimalTypes=9,this.maxRequiredAnimals=36,this.maxGridSpots=40,this.handleClick=this.handleClick.bind(this),this.win=this.win.bind(this),this.transitionText="find",this.fps=1,this.timeLeft=5,this.countDownCounter=0,this.stopTimer=!1}return h()(t,[{key:"draw",value:function(){window.canvas.drawImage(window.assets.locateBackground,0,0,window.canvas.width,window.canvas.height),window.canvas.drawImage(window.assets.wanted,(window.BASE_WIDTH-90)/2,(window.BASE_HEIGHT-108)/2,90*window.canvas.scaleFactor,108*window.canvas.scaleFactor),window.canvas.ctx.drawImage(window.assets.locate,0,137*this.matchAnimal,137,137,(window.BASE_WIDTH-50)/2,(window.BASE_HEIGHT-50)/2+5,50,50),Object.values(this.animals).forEach((function(t){t.draw()}))}},{key:"lose",value:function(){this.stopTimer=!0,window.canvas.canvas.removeEventListener("click",this.handleClick,!1),setTimeout((function(){cancelAnimationFrame(window.requestAnimationFrameId),window.loseTransition.animate()}),3e3)}},{key:"countDown",value:function(){this.countDownCounter+=1,this.countDownCounter>this.fps&&!this.stopTimer&&(this.timeLeft-=1,this.countDownCounter=0),window.canvas.drawText("".concat(this.timeLeft),370*window.canvas.scaleFactor,30*window.canvas.scaleFactor,24),this.timeLeft||this.lose()}},{key:"win",value:function(){this.stopTimer=!0,window.canvas.canvas.removeEventListener("click",this.handleClick,!1),setTimeout((function(){cancelAnimationFrame(window.requestAnimationFrameId),window.ROUND_NUM+=1,window.gameTransition.animate()}),3e3)}},{key:"handleClick",value:function(t){var n=this,i=window.canvas.canvas.getBoundingClientRect(),e={x:t.clientX-i.left,y:t.clientY-i.top};Object.keys(this.animals).forEach((function(t){n.animals[t].mouseDown(e,n.matchAnimal,n.win)}))}},{key:"addAnimal",value:function(t,n){var i={x:t%8*50,y:50*(Math.floor(t/8)+1)};return new b({width:137,height:137},i,n)}},{key:"setMatchAnimal",value:function(){for(var t;!t||[11,12,19,20].includes(t);)t=Math.floor(Math.random()*this.maxGridSpots);this.matchAnimal=Math.floor(Math.random()*this.numAnimalTypes),this.animals[t]=this.addAnimal(t,this.matchAnimal),this.currentNumAnimals+=1}},{key:"setNonMatchAnimal",value:function(){for(;this.currentNumAnimals<this.requiredNumAnimals;){var t=Math.floor(Math.random()*this.maxGridSpots),n=Math.floor(Math.random()*this.numAnimalTypes);this.animals[t]||n===this.matchAnimal||[11,12,19,20].includes(t)||(this.animals[t]=this.addAnimal(t,n),this.currentNumAnimals+=1)}}},{key:"reset",value:function(){this.stopTimer=!1,this.timeLeft=5,this.countDownCounter=0,this.animals={},this.requiredNumAnimals=3+2*Math.floor(window.ROUND_NUM/3),this.requiredNumAnimals>this.maxRequiredAnimals&&(this.requiredNumAnimals=this.maxRequiredAnimals),this.currentNumAnimals=0,this.setMatchAnimal(),this.setNonMatchAnimal()}},{key:"play",value:function(){var t=this,n=performance.now(),i=1e3/this.fps;this.reset(),this.reset(),function e(){window.requestAnimationFrameId=requestAnimationFrame(e);var a=performance.now(),s=a-n;s>i&&(n=a-s%i,window.canvas.clear(),t.draw(),window.ROUND_NUM>=window.gameTransition.games.length&&t.countDown())}(),window.canvas.canvas.addEventListener("click",this.handleClick,!1)}}]),t}(),F=function(){function t(){r()(this,t),this.setPosition(),this.setVelocity(),this.radius=13,this.size={width:38,height:37},this.frame={x:0,y:0,min:0,max:6}}return h()(t,[{key:"setPosition",value:function(){for(this.x=Math.floor(Math.random()*window.BASE_WIDTH),this.y=Math.floor(Math.random()*window.BASE_HEIGHT);this.x>150&&this.x<250||this.x<20||this.x>380;)this.x=Math.floor(Math.random()*window.BASE_WIDTH);for(;this.y>100&&this.y<200||this.y<20||this.y>280;)this.y=Math.floor(Math.random()*window.BASE_HEIGHT)}},{key:"setVelocity",value:function(){var t=1+Math.floor(window.ROUND_NUM/6);this.dx=Math.floor(Math.random()*t)+1,this.dy=Math.floor(Math.random()*t)+1;var n=Math.floor(1*Math.random()),i=Math.floor(1*Math.random());n&&(this.dx=-this.dx),i&&(this.dy=-this.dy)}},{key:"draw",value:function(){window.canvas.drawAnimation(window.assets.avoidEnemy,this.size.width*this.frame.x,this.size.height*this.frame.y,this.size.width,this.size.height,this.x-18*1.2,this.y-30,1.2*this.size.width,1.2*this.size.height)}},{key:"update",value:function(){this.x+this.dx>window.BASE_WIDTH-this.radius&&(this.dx=-this.dx,this.frame.y=0),(this.x+this.dx>window.BASE_WIDTH-this.radius||this.x+this.dx<this.radius)&&(this.dx=-this.dx),this.y+this.dy>window.BASE_HEIGHT-this.radius&&(this.dy=-this.dy,this.frame.y=1),(this.y+this.dy>window.BASE_HEIGHT-this.radius||this.y+this.dy<this.radius)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy}}]),t}(),T=function(){function t(){r()(this,t),this.radius=10,this.dx=5,this.dy=-5,this.pos={x:window.BASE_WIDTH/2,y:window.BASE_HEIGHT/2},this.size={width:61.4,height:89},this.frame={x:0,y:0,min:0,max:4},this.up=!1,this.down=!1,this.left=!1,this.right=!1}return h()(t,[{key:"draw",value:function(){window.canvas.drawAnimation(window.assets.avoidSelf,this.size.width*this.frame.x,this.size.height*this.frame.y,this.size.width,this.size.height,this.pos.x-12,this.pos.y-12,24,24)}},{key:"update",value:function(){this.up?(this.pos.y+=this.dy,this.pos.y-this.radius<0&&(this.pos.y=this.radius)):this.down?(this.pos.y-=this.dy,this.pos.y+this.radius>window.BASE_HEIGHT&&(this.pos.y=window.BASE_HEIGHT-this.radius)):this.left?(this.frame.y=1,this.pos.x-=this.dx,this.pos.x-this.radius<0&&(this.pos.x=this.radius)):this.right&&(this.frame.y=0,this.pos.x+=this.dx,this.pos.x+this.radius>window.BASE_WIDTH&&(this.pos.x=window.BASE_WIDTH-this.radius)),(this.left||this.right)&&(this.frame.x<this.frame.max?this.frame.x+=1:this.frame.x=this.frame.min)}}]),t}(),E=function(){function t(){r()(this,t),this.transitionText="avoid",this.fps=60,this.timeLeft=5,this.stopTimer=!1,this.self=null,this.enemies=[],this.numEnemies=5,this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this)}return h()(t,[{key:"countDown",value:function(){this.countDownCounter+=1,this.countDownCounter>this.fps&&!this.stopTimer&&(this.timeLeft-=1,this.countDownCounter=0),window.canvas.drawText("".concat(this.timeLeft),370*window.canvas.scaleFactor,30*window.canvas.scaleFactor,24),this.timeLeft||this.win()}},{key:"keyDownHandler",value:function(t){"w"===t.key?this.self.up=!0:"a"===t.key?this.self.left=!0:"s"===t.key?this.self.down=!0:"d"===t.key&&(this.self.right=!0)}},{key:"keyUpHandler",value:function(t){"w"===t.key?this.self.up=!1:"a"===t.key?this.self.left=!1:"s"===t.key?this.self.down=!1:"d"===t.key&&(this.self.right=!1)}},{key:"removeEventHandlers",value:function(){document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("keyup",this.keyUpHandler,!1)}},{key:"lose",value:function(){cancelAnimationFrame(window.requestAnimationFrameId),this.removeEventHandlers(),this.stopTimer=!0,setTimeout((function(){window.loseTransition.animate()}),3e3)}},{key:"win",value:function(){cancelAnimationFrame(window.requestAnimationFrameId),this.removeEventHandlers(),this.stopTimer=!0,setTimeout((function(){window.ROUND_NUM+=1,window.gameTransition.animate()}),3e3)}},{key:"checkCollisions",value:function(){var t=this;this.enemies.forEach((function(n){var i,e;i=t.self,e=n,Math.sqrt(Math.pow(i.pos.x-e.x,2)+Math.pow(i.pos.y-e.y,2))<i.radius+e.radius&&t.lose()}))}},{key:"reset",value:function(){this.stopTimer=!1,this.timeLeft=5,this.countDownCounter=0,this.enemies=[],this.numEnemies=1+Math.floor(window.ROUND_NUM/6),this.self=new T;for(var t=0;t<this.numEnemies;t++)this.enemies.push(new F);document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("keyup",this.keyUpHandler,!1)}},{key:"play",value:function(){var t=this,n=performance.now(),i=1e3/this.fps;this.reset(),function e(){window.requestAnimationFrameId=requestAnimationFrame(e);var a=performance.now(),s=a-n;s>i&&(n=a-s%i,window.canvas.clear(),window.canvas.drawImage(window.assets.avoidBackground,0,0,window.canvas.width,window.canvas.height),t.self.draw(),t.self.update(),t.enemies.forEach((function(t){t.draw(),t.update()})),t.checkCollisions(),t.countDown())}()}}]),t}();var S=new p;window.requestAnimationFrameId=null,window.audio=document.querySelector("#audio"),window.BASE_WIDTH=400,window.BASE_HEIGHT=300,window.ROUND_NUM=0,window.assets={},window.canvas=new y,window.gameTransition=new x,window.gameTransition.games.push(new k,new A,new E),window.loseTransition=new g(S.mainMenu);var z=function(){var t=document.querySelector("#main"),n=window.innerWidth,i=window.innerHeight,e=4/3;n/i>e?(n=i*e,t.style.height="".concat(i,"px"),t.style.width="".concat(n,"px")):(i=n/e,t.style.width="".concat(n,"px"),t.style.height="".concat(i,"px")),t.style.marginTop="".concat(-i/2,"px"),t.style.marginLeft="".concat(-n/2,"px"),window.canvas.width=n,window.canvas.height=i,window.canvas.canvas.width=n,window.canvas.canvas.height=i,window.canvas.scaleFactor=n/window.BASE_WIDTH,window.canvas.scale()};window.addEventListener("load",(function(){S.assets.load(),S.setUpElements(),z()}),!1),window.addEventListener("resize",z,!1),window.addEventListener("orientationchange",z,!1)},922:(t,n,i)=>{"use strict";i.d(n,{Z:()=>r});var e=i(15),a=i.n(e),s=i(645),o=i.n(s)()(a());o.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const r=o},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var i=t(n);return n[2]?"@media ".concat(n[2]," {").concat(i,"}"):i})).join("")},n.i=function(t,i,e){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(e)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(a[o]=!0)}for(var r=0;r<t.length;r++){var c=[].concat(t[r]);e&&a[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),n.push(c))}},n}},15:t=>{"use strict";function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}t.exports=function(t){var i,e,a=(e=4,function(t){if(Array.isArray(t))return t}(i=t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],e=!0,a=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(e=(o=r.next()).done)&&(i.push(o.value),!n||i.length!==n);e=!0);}catch(t){a=!0,s=t}finally{try{e||null==r.return||r.return()}finally{if(a)throw s}}return i}}(i,e)||function(t,i){if(t){if("string"==typeof t)return n(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,i):void 0}}(i,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=a[1],o=a[3];if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),h="/*# ".concat(c," */"),d=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[s].concat(d).concat([h]).join("\n")}return[s].join("\n")}},666:t=>{var n=function(t){"use strict";var n,i=Object.prototype,e=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",r=a.toStringTag||"@@toStringTag";function c(t,n,i){return Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,i){return t[n]=i}}function h(t,n,i,e){var a=n&&n.prototype instanceof v?n:v,s=Object.create(a.prototype),o=new z(e||[]);return s._invoke=function(t,n,i){var e=w;return function(a,s){if(e===l)throw new Error("Generator is already running");if(e===f){if("throw"===a)throw s;return M()}for(i.method=a,i.arg=s;;){var o=i.delegate;if(o){var r=T(o,i);if(r){if(r===m)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(e===w)throw e=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);e=l;var c=d(t,n,i);if("normal"===c.type){if(e=i.done?f:u,c.arg===m)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(e=f,i.method="throw",i.arg=c.arg)}}}(t,i,o),s}function d(t,n,i){try{return{type:"normal",arg:t.call(n,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var w="suspendedStart",u="suspendedYield",l="executing",f="completed",m={};function v(){}function p(){}function y(){}var x={};x[s]=function(){return this};var g=Object.getPrototypeOf,k=g&&g(g(I([])));k&&k!==i&&e.call(k,s)&&(x=k);var b=y.prototype=v.prototype=Object.create(x);function A(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function F(t,n){function i(a,s,o,r){var c=d(t[a],t,s);if("throw"!==c.type){var h=c.arg,w=h.value;return w&&"object"==typeof w&&e.call(w,"__await")?n.resolve(w.__await).then((function(t){i("next",t,o,r)}),(function(t){i("throw",t,o,r)})):n.resolve(w).then((function(t){h.value=t,o(h)}),(function(t){return i("throw",t,o,r)}))}r(c.arg)}var a;this._invoke=function(t,e){function s(){return new n((function(n,a){i(t,e,n,a)}))}return a=a?a.then(s,s):s()}}function T(t,i){var e=t.iterator[i.method];if(e===n){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=n,T(t,i),"throw"===i.method))return m;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=d(e,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,m;var s=a.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=n),i.delegate=null,m):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function i(){for(;++a<t.length;)if(e.call(t,a))return i.value=t[a],i.done=!1,i;return i.value=n,i.done=!0,i};return o.next=o}}return{next:M}}function M(){return{value:n,done:!0}}return p.prototype=b.constructor=y,y.constructor=p,p.displayName=c(y,r,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,r,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},A(F.prototype),F.prototype[o]=function(){return this},t.AsyncIterator=F,t.async=function(n,i,e,a,s){void 0===s&&(s=Promise);var o=new F(h(n,i,e,a),s);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},A(b),c(b,r,"Generator"),b[s]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var i in t)n.push(i);return n.reverse(),function i(){for(;n.length;){var e=n.pop();if(e in t)return i.value=e,i.done=!1,i}return i.done=!0,i}},t.values=I,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var i in this)"t"===i.charAt(0)&&e.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function a(e,a){return r.type="throw",r.arg=t,i.next=e,a&&(i.method="next",i.arg=n),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],r=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),h=e.call(o,"finallyLoc");if(c&&h){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=n&&n<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=n,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),S(i),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===t){var e=i.completion;if("throw"===e.type){var a=e.arg;S(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,e){return this.delegate={iterator:I(t),resultName:i,nextLoc:e},"next"===this.method&&(this.arg=n),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},379:(t,n,i)=>{"use strict";var e,a=function(){var t={};return function(n){if(void 0===t[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[n]=i}return t[n]}}(),s=[];function o(t){for(var n=-1,i=0;i<s.length;i++)if(s[i].identifier===t){n=i;break}return n}function r(t,n){for(var i={},e=[],a=0;a<t.length;a++){var r=t[a],c=n.base?r[0]+n.base:r[0],h=i[c]||0,d="".concat(c," ").concat(h);i[c]=h+1;var w=o(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==w?(s[w].references++,s[w].updater(u)):s.push({identifier:d,updater:m(u,n),references:1}),e.push(d)}return e}function c(t){var n=document.createElement("style"),e=t.attributes||{};if(void 0===e.nonce){var s=i.nc;s&&(e.nonce=s)}if(Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var h,d=(h=[],function(t,n){return h[t]=n,h.filter(Boolean).join("\n")});function w(t,n,i,e){var a=i?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(t.styleSheet)t.styleSheet.cssText=d(n,a);else{var s=document.createTextNode(a),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(s,o[n]):t.appendChild(s)}}function u(t,n,i){var e=i.css,a=i.media,s=i.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var l=null,f=0;function m(t,n){var i,e,a;if(n.singleton){var s=f++;i=l||(l=c(n)),e=w.bind(null,i,s,!1),a=w.bind(null,i,s,!0)}else i=c(n),e=u.bind(null,i,n),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var i=r(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<i.length;e++){var a=o(i[e]);s[a].references--}for(var c=r(t,n),h=0;h<i.length;h++){var d=o(i[h]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=c}}}}},0,[[266,666]]]);
