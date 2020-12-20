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

      /* quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"*/
      this.eliminatedTask.push(this.taskGiornaliere[index]);
      this.taskGiornaliere.splice(index, 1);
    },

    /* rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino" */
    deleteAllTasks () {
      this.eliminatedTask.splice(0, this.eliminatedTask.length);
    }

  }

})