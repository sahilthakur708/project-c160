AFRAME.registerComponent('tour',{
    schema:{
        state:{default:'View', type:'string'},
    },
    init: function() {
        this.placesContainer = this.el;
      },
      tick: function() {
        const { state } = this.el.getAttribute("tour");
    
        if (state === "View") {
          this.showView();
        }
      },
     
      showView: function() {
       
        const skyEl = document.querySelector("#Main-Container");
        skyEl.setAttribute("material", {
          src: `./assets/360_images/taj-mahal/place-0.jpg`,
          color: "#fff"
        });
      },
})