<template>
    <div>
      <b-table class="container"  :items="items" :fields="fields" striped responsive="xl">
        <template #cell(show_details)="row">
          <b-button size="md" @click="row.toggleDetails" class="m-2 p-2" variant="success">
            Editar
          </b-button>
          
          <b-button size="md" @click="row.toggleDetails" class="m-2 p-2" variant="danger">
            Excluir
          </b-button>
          
          <b-button size="md" @click="row.toggleDetails" class="m-2 p-2" variant="primary">
            Arquivar
          </b-button>
          
          <b-button size="md" @click="row.toggleDetails" class="m-2 p-2" variant="warning">
            A decidir
          </b-button>
          
          <!-- <b-button size="md" @click="row.toggleDetails" class="m-2 p-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
          </b-button> -->
  
        </template>
  
       
      </b-table>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          fields: ['Nº', 'Prioridade', 'Missão', 'show_details'],
          items: [
            { isActive: false, id: 40, Prioridade: 'Dickerson', Missão: 'Macdonald' },
            { isActive: false, id: 21, Prioridade: 'Larsen', Missão: 'Shaw' },
            {
              isActive: false,
              id: 89,
              Prioridade: 'Geneva',
              Missão: 'Wilson',
              _showDetails: false
            },
            { isActive: true, age: 38, Prioridade: 'Jami', Missão: 'Carney' }
          ]
        }
      }
    }
  </script>

<style>

</style>