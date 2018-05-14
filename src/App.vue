<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          h1 {{ msg }}

          p Encargado de la tarea: {{ name }}
          p.totalHrs.text-left
              small Tiempo Total: {{ totalTime }}
          
          h3 Agregar tareas
          .row
            .col-md-6
              label Nombre de la Tarea
              input.input.form-control(
              type="text", 
              placeholder="Agregar Tarea"
              v-model="newTask.title"
              )
            .col-md-2
              label Cantidad de horas
              input.input.form-control(
              type="text", 
              placeholder="Horas"
              v-model="newTask.time"
              )
            .col-md-1.mt-4
              a.btn.btn-success.form-control.mt-1(@click="addTask") +
            .col-md-1.mt-4
              a.btn.btn-danger.form-control.mt-1(@click="cancel") &times;

      .container
        .row
          .col-md-6.results 
            h4.subtitle.text-left Listado de Tareas

            p.text-left.alert.alert-danger(v-show="!this.tasks.length") No hay tareas que listar.
            
            p.text-left.alert.alert-success(v-for="(t,i) in tasks") Tarea: {{ t.title }} Tiempo de ejecución: {{ t.time }} 
              a(class="badge badge-danger" @click="removeTask(i)") &times;
          
          .col-md-6.results
            h4.totalHrs.text-left Tiempo requerido
            p.mt-4 {{ totalTime }}
            
           

</template>

<script>

// const tasks = [
//   {title: 'Crear una propiedad Name, y Task', time: '2'}
// ]
export default {
  name: 'app',

  data () {
    return {
      msg: 'Tarea 1: Manipulación del DOM',
      name: 'Nidia',
      tasks: [],

      newTask: {
        title: '',
        time: 0
      }
    }
  },
  methods: {
    addTask () {
      if (!this.newTask.title || !this.newTask.time) { return }
      this.tasks.push({
        title: this.newTask.title,
        time: this.newTask.time
      })
      // localStorage.setItem('tasks', JSON.stringify(this.tasks))
      this.newTask.title = ''
      this.newTask.time = 0
    },
    cancel () {
      this.newTask.title = ''
      this.newTask.time = 0
    },
    removeTask (i) {
      console.log(i)
      this.tasks.splice(i, 1)
    }
  },

  computed: {
    totalTime () {
      if (!this.tasks.length) { return 0 }
      
      let total = 0     
      this.tasks.forEach(task => {
        total += parseInt(task.time)
      })
      return total
    }
  }

}
</script>

<style lang="scss">
@import './scss/main.scss'</style>