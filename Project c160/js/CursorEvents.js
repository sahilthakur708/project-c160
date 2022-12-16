AFRAME.registerComponent('cursor-listner',{
    schema: {
        selectedItemId: { default: "", type: "string" }
      },
    init:function(){
      
        this.handleClickEvents();
    },
    handleClickEvents: function () {
      //  Click Events
      this.el.addEventListener("click", evt => {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("tour");
  
       
        
        if (state === "View" || state === "change-view") {
          this.cursorListner()
        }
  
      });
  
    },
    cursorListner:function(){
       
      const el = this.el
      const id = el.getAttribute("id")
  
      const placesContainer = document.querySelector('#places-container')
      const selectedItemId=placesContainer.getAttribute('cursor-listener')
      console.log(selectedItemId)
      const list = ["place-1", "place-2", "place-3", "place-4"]
      if (list.includes(id)) {
        placesContainer.setAttribute('tour', {
          state: 'change-view'
        })
        const skyEl = document.querySelector('#Main-Container')
        skyEl.setAttribute("material", {
          src: `./assets/360_images/taj-mahal/${id}.jpg`
        })
      }
        }
    
})