<template>
 <HeaderComponent />
  <div class="cadastrarMissao">
   <span class="title">Cadastrar Missão</span>
    <div class="container">
      <form class="formMission" @submit.prevent="submit">
        <label class="textLabel">Quantidade de Servidor Envolvido:</label><br>
        <b-form-input class="inputForm" min="0" v-model="mission.employeeNumber" type="number" placeholder="Inserir quantidade de Servidor Envolvido"></b-form-input>

        <label class="textLabel">Selecionar Servidores:</label>
        <b-form-select class="inputForm" v-model="mission.employeeSelected" :options="mission.federalEmployeeOptions"></b-form-select>  
        
        <label class="textLabel">Missão:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o nome da missão"></b-form-input>
        
        <label class="textLabel">Prioridade:</label>
        <b-form-select class="inputForm" v-model="mission.priorityLevelSelected" :options="mission.priorityOptions"></b-form-select>  

        <label class="textLabel">Data de Início:</label><br>
        <b-form-input class="inputForm" v-model="mission.valueDataStart" type="date"></b-form-input>
        
        <label class="textLabel">Data de Término:</label><br>
        <b-form-input class="inputForm" v-model="mission.valueDataEnd" type="date"></b-form-input>

        <label class="textLabel">Quantidade de Diárias:</label><br>
        <p>Calculando...</p><br>
        
        <label class="textLabel">Selecionar Estado (UF):</label><br>
        <b-form-select class="inputForm" v-model="mission.federalStateSelected" :options="mission.federalStateOptions"></b-form-select><br>
        
        <label class="textLabel">Selecionar Apoio:</label><br>
        <b-form-checkbox-group
        v-model="mission.supportSelected"
        :options="mission.supportOptions"
        class="mb-3 inputForm"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
        ></b-form-checkbox-group>

        <label class="textLabel">Status da Missão:</label><br>
        <b-form-select class="inputForm" v-model="mission.statusSelect" :options="mission.statusOptions"></b-form-select><br>

        <label class="textLabel">Valor Total da Missão:</label><br>
        <p>Calculando...</p><br>


        <b-button class="btnSubmit" type="submit" @click="submit" variant="primary">Cadastrar</b-button>
      </form>
     </div>


     <div class="respostas">
       <p>Quantidade de Servidor Envolvido:</p>
       <p>{{ mission.employeeNumber }}</p>

       <p>Selecionar Servidores:</p>
       <p>{{ mission.employeeSelected }}</p>
        
       <p>Missão:</p>
       <p>{{ mission.missionName }}</p>
       
       <p>Prioridade:</p>
       <p>{{ mission.priorityLevelSelected }}</p>
       
       <p>Data de Início:</p>
       <p>{{ mission.valueDataStart }}</p>
       
       <p>Data de Término:</p>
       <p>{{ mission.valueDataEnd }}</p>
       
       <p>Selecionar Estado (UF):</p>
       <p>{{ mission.federalStateSelected }}</p>

       <p>Selecionar Apoio</p>
       <p>{{ mission.supportSelected }}</p>
       
       <p>Status da Missão:</p>
       <p>{{ mission.statusSelect }}</p>

    </div>

  </div>
</template>

<!-- 
  
  https://bootstrap-vue.org/docs/components/form
  https://bootstrap-vue.org/docs/components/form-datepicker#variants
  https://bootstrap-vue.org/docs/components/form-checkbox
  https://bootstrap-vue.org/docs/components/form-select
  https://bootstrap-vue.org/docs/components/form-input
  
-->

<script>
import HeaderComponent from "@/components/template/HeaderComponent.vue";

export default{
    components:{
    HeaderComponent,
    },

  data(){
    return{
      /* employeeSelected:null,
      federalEmployeeOptions:[
        {id:0 ,value: null, text: 'Escolher servidor'},
        {id:1 ,value:"Joao" ,text:"Joao"},
        {id:2 ,value:"Tiao" ,text:"Tiao"},
        {id:3 ,value:"Barnabé" ,text:"Barnabé"},
        {id:4 ,value:"José" ,text:"José"},
        {id:5 ,value:"Maria" ,text:"Maria"},
        {id:6 ,value:"Ana" ,text:"Ana"},
        {id:7 ,value:"Alfreda" ,text:"Alfreda"},
      ],
      
      priorityLevelSelected:null,
      priorityOptions:[
        {id: 0,value: null, text:'Escolher nível de prioridade'},
        {id: 1,value: 'baixa', text:'Baixa'},
        {id: 2,value: 'moderada', text:'Moderada'},
        {id: 3,value: 'alta', text:'Alta'},
      ],

      valueDataStart:'',
      valueDataEnd:'',

      federalStateSelected:null,
      federalStateOptions:[
        {id: 0, value: null, text:'Escolher o Estado'},
        {id: 1, value: 'AC', text:'AC'},
        {id: 2, value: 'AL', text:'AL'},
        {id: 3, value: 'AP', text:'AP'},
        {id: 4, value: 'AM', text:'AM'},
        {id: 5, value: 'BA', text:'BA'},
        {id: 6, value: 'CE', text:'CE'},
        {id: 7, value: 'DF', text:'DF'},
        {id: 8, value: 'ES', text:'ES'},
        {id: 9, value: 'GO', text:'GO'},
        {id: 10, value: 'MA', text:'MA'},
        {id: 11, value: 'MT', text:'MT'},
        {id: 12, value: 'MS', text:'MS'},
        {id: 13, value: 'MG', text:'MG'},
        {id: 14, value: 'PA', text:'PA'},
        {id: 15, value: 'PB', text:'PB'},
        {id: 16, value: 'PR', text:'PR'},
        {id: 17, value: 'PE', text:'PE'},
        {id: 18, value: 'PI', text:'PI'},
        {id: 19, value: 'RJ', text:'RJ'},
        {id: 20, value: 'RN', text:'RN'},
        {id: 21, value: 'RS', text:'RS'},
        {id: 22, value: 'RO', text:'RO'},
        {id: 23, value: 'RR', text:'RR'},
        {id: 24, value: 'SC', text:'SC'},
        {id: 25, value: 'SP', text:'SP'},
        {id: 26, value: 'SE', text:'SE'},
        {id: 27, value: 'TO', text:'TO'},
      ],

      supportSelected: [],
        supportOptions: [
          { item: 'apoioTerreste', name: 'Apoio Terrestre' },
          { item: 'apoioAereo', name: 'Apoio Aéreo' },
      ],

      statusSelect:null,
      statusOptions:[
        {id: 0, value: null, text:'Escolher status da missão'},
        {id: 1, value: 'aprovado', text:'Aprovado'},
        {id: 2, value: 'cancelado', text:'Cancelado'},
        {id: 1, value: 'aguardando', text:'Aguardando'},
        {id: 2, value: 'confeccionarFSDP', text:'Confeccionar FSDP'},
        {id: 1, value: 'finalizado', text:'Finalizado'},
      ],
 */

      missions:[],
      mission:{
        employeeNumber:0,
        missionName:'',
        employeeSelected:null,
        federalEmployeeOptions:[
          {id:0 ,value: null, text: 'Escolher servidor'},
          {id:1 ,value:"Joao" ,text:"Joao"},
          {id:2 ,value:"Tiao" ,text:"Tiao"},
          {id:3 ,value:"Barnabé" ,text:"Barnabé"},
          {id:4 ,value:"José" ,text:"José"},
          {id:5 ,value:"Maria" ,text:"Maria"},
          {id:6 ,value:"Ana" ,text:"Ana"},
          {id:7 ,value:"Alfreda" ,text:"Alfreda"},
        ],
        
        priorityLevelSelected:null,
        priorityOptions:[
          {id: 0,value: null, text:'Escolher nível de prioridade'},
          {id: 1,value: 'baixa', text:'Baixa'},
          {id: 2,value: 'moderada', text:'Moderada'},
          {id: 3,value: 'alta', text:'Alta'},
        ],

        valueDataStart:'',
        valueDataEnd:'',

        federalStateSelected:null,
        federalStateOptions:[
          {id: 0, value: null, text:'Escolher o Estado'},
          {id: 1, value: 'AC', text:'AC'},
          {id: 2, value: 'AL', text:'AL'},
          {id: 3, value: 'AP', text:'AP'},
          {id: 4, value: 'AM', text:'AM'},
          {id: 5, value: 'BA', text:'BA'},
          {id: 6, value: 'CE', text:'CE'},
          {id: 7, value: 'DF', text:'DF'},
          {id: 8, value: 'ES', text:'ES'},
          {id: 9, value: 'GO', text:'GO'},
          {id: 10, value: 'MA', text:'MA'},
          {id: 11, value: 'MT', text:'MT'},
          {id: 12, value: 'MS', text:'MS'},
          {id: 13, value: 'MG', text:'MG'},
          {id: 14, value: 'PA', text:'PA'},
          {id: 15, value: 'PB', text:'PB'},
          {id: 16, value: 'PR', text:'PR'},
          {id: 17, value: 'PE', text:'PE'},
          {id: 18, value: 'PI', text:'PI'},
          {id: 19, value: 'RJ', text:'RJ'},
          {id: 20, value: 'RN', text:'RN'},
          {id: 21, value: 'RS', text:'RS'},
          {id: 22, value: 'RO', text:'RO'},
          {id: 23, value: 'RR', text:'RR'},
          {id: 24, value: 'SC', text:'SC'},
          {id: 25, value: 'SP', text:'SP'},
          {id: 26, value: 'SE', text:'SE'},
          {id: 27, value: 'TO', text:'TO'},
        ],

        supportSelected: [],
          supportOptions: [
            { item: 'apoioTerreste', name: 'Apoio Terrestre' },
            { item: 'apoioAereo', name: 'Apoio Aéreo' },
        ],

        statusSelect:null,
        statusOptions:[
          {id: 0, value: null, text:'Escolher status da missão'},
          {id: 1, value: 'aprovado', text:'Aprovado'},
          {id: 2, value: 'cancelado', text:'Cancelado'},
          {id: 3, value: 'aguardando', text:'Aguardando'},
          {id: 4, value: 'confeccionarFSDP', text:'Confeccionar FSDP'},
          {id: 5, value: 'finalizado', text:'Finalizado'},
        ],
      },        
    }
    
  },
  methods:{  
    submit(){
      /* ALTERAR PARA O MÉTODO QUE LEVARÁ AO BANCO DE DADOS */
        this.missions.push(
          {...this.mission}
        )
   
      console.log(this.missions)
    }
  },
 
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

.title{
  font-size: 3rem;
  font-family: 'lato',sans-serif;
  font-weight: 400;
}

.container {
  display: flex;
  text-align: left;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.textLabel{
  display: inline-block;
  justify-content: left;
  align-items: start;
  font-size: 1.5rem;
  font-weight: 600;
}

.inputForm{
  margin-bottom: 1%;
}

.btnSubmit{
  display: inline;
  justify-content: center;
  align-self: center;
  width: 100%;
}


</style>












