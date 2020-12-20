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
      } else {
        alert = "Inserisci una task più lunga di 4 caratteri"
      }
    },

    cancelTask: function(index) {
      console.log(this.taskGiornaliere[index]);
      this.eliminatedTask.push(this.taskGiornaliere[index]);
      this.taskGiornaliere.splice(index, 1);
    }

  }

})