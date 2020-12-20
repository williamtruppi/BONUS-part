let app = new Vue ({

  el: ".container",

  data: {
    taskGiornaliere: [],
    eliminatedTask: [],
  },

  methods: {

    printTaskGiornaliere () {
      const singleTask = document.getElementById("pippo").value;
      console.log(singleTask);
      if (singleTask.length > 4){
        this.taskGiornaliere.push(singleTask);
      } 
    },

    cancelTask: function(index) {
      this.taskGiornaliere.splice(index, 1);
    }

  }

})