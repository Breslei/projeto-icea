<template>
 <HeaderComponent />
  <div class="cadastrarMissao">
   <span class="title">Cadastrar Usuário</span>
    <div class="container">
      <form class="formMission" @submit.prevent="submit">

        <label class="textLabel">Data:</label><br>
        <b-form-input class="inputForm" v-model="mission.valueDataStart" type="date"></b-form-input>

      
        
        <label class="textLabel">SARAM:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o SARAM"></b-form-input>
        
        <label class="textLabel">POSTO/GRAD/NOME:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o POSTO/GRAD/Nome"></b-form-input>
       

        <label class="textLabel">CPF:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número do CPF"></b-form-input>
        
        <label class="textLabel">BANCO:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número do Banco"></b-form-input>
        
        <label class="textLabel">AGÊNCIA:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número da Agência"></b-form-input>
        
        <label class="textLabel">CONTA:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o Email"></b-form-input>
       
        <label class="textLabel">Data:</label><br>
        <b-form-input class="inputForm" v-model="mission.valueDataStart" type="date"></b-form-input>

        <label class="textLabel">EMAIL:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número da CONTA"></b-form-input>
       
        <label class="textLabel">Data de Nasciento:</label><br>
        <b-form-input class="inputForm" v-model="mission.valueDataEnd" type="date"></b-form-input>
        
        <p><strong>ENQUADRAMENTO LEGAL:</strong></p>
        <p>Portaria n° 1347/GC4, de 03/09/2015 e Portaria nº 672/GC4, de 29/12/2023</p>
   
        
        <label class="textLabel">IDENTIDADE:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número de identidade"></b-form-input>
        
        <label class="textLabel">UNIDADE:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir a unidade"></b-form-input>

        <label class="textLabel">TELEFONE:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número de telefone"></b-form-input>

        <label class="textLabel">DOCUMENTOS QUE ORIGINARAM A MISSÃO:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número de DOCUMENTOS QUE ORIGINARAM A MISSÃO:"></b-form-input>



        <label class="textLabel">TIPO DE MISSÃO:</label><br>
        <b-form-select class="inputForm" v-model="mission.federalStateSelected" :options="mission.federalStateOptions"></b-form-select><br>
       

        <label class="textLabel">EM PROVEITO:</label><br>
        <b-form-input class="inputForm" v-model="mission.missionName" placeholder="Inserir o número de em proveito"></b-form-input>


        <div class="anexA">
          <h1><strong>ANEXO A</strong></h1>
          <h4><strong>INSTRUÇÕES PARA O PREENCHIMENTO DE ORDEM DE SERVIÇO</strong></h4>
          <br>

         <p class="textItemAnexA"> 1 - SARAM do proposto; </p>
         <p class="textItemAnexA"> 2 - Posto ou Graduação do proposto; </p>
         <p class="textItemAnexA"> 3 - CPF do proposto; </p>
         <p class="textItemAnexA"> 4 - Banco; </p>
         <p class="textItemAnexA"> 5 - Agência; </p>
         <p class="textItemAnexA"> 6 - Conta Corrente; </p>
         <p class="textItemAnexA"> 7 - E-mail (utilizar e-mail de internet); </p>
         <p class="textItemAnexA"> 8 - Data de nascimento do proposto; </p>
         <p class="textItemAnexA"> 9 - Serviço a realizar; </p>
         <p class="textItemAnexA"> 10 - Não deve ser alterado o enquadramento legal;</p>
         <p class="textItemAnexA"> 11 - Identidade do proposto; </p>
         <p class="textItemAnexA"> 12 - Unidade do proposto; </p>
         <p class="textItemAnexA"> 13 - Telefone; </p>
         <p class="textItemAnexA"> 14 - Documentos que originaram a missão (deverão ser entregues impressos juntamente com a Ficha de Solicitação); </p>
         <p class="textItemAnexA"> 15 - Tipo de Missão (administrativa ou operacional); </p>
         <p class="textItemAnexA"> 16 - Preencher com a Unidade a ser beneficiada com a missão (Ex: ICEA, CIAAR, EEAR); </p>
         <p class="textItemAnexA"> 17 - Local de realização do serviço (se for mais de um local discriminar); </p>
         <p class="textItemAnexA"> 18 - Preencher com a data e hora do início previsto para o deslocamento do militar para o local da missão; </p>
         <p class="textItemAnexA"> 19 - Preencher com a data e hora da chegada prevista ao local de origem, por término de missão; </p>
         <p class="textItemAnexA"> 20 - Adicional de deslocamento - colocar sim ou não (não fará jus ao adicional quando o deslocamento for realizado em veículo particular ou com apoio de viatura oficial em toda a missão); </p>
         <p class="textItemAnexA"> 21 - A ser preenchido pela Seção Administrativa; </p>
         <p class="textItemAnexA"> 22 - Auxílio Transporte (colocar sim ou não); </p>
         <p class="textItemAnexA"> 23 - Auxílio Alimentação (colocar sim ou não); </p>
         <p class="textItemAnexA"> 24 - Não deve ser alterado; </p>
         <p class="textItemAnexA"> 25 - Preencher com a localidade de partida/localidade de destino (em caso de necessidade de passagem aérea, a mesma deverá ser solicitada através da FISPA de Passagem); </p>
         <p class="textItemAnexA"> 26 - Datas para compra das passagens; </p>
         <p class="textItemAnexA"> 27 - Preencher com o horário específico do voo a qual deseja viajar (somente em missões que envolvam o acompanhamento de Oficiais Generais), justificando a autoridade a ser acompanhada no item nº 29; </p>
         <p class="textItemAnexA"> 28 - Preencher com horário a ser utilizado como base do lastro de seis horas para compra de passagem, definido pelo DECEA, a fim de atender o princípio da economicidade; </p>
         <p class="textItemAnexA"> 29 - Justificar a escolha do voo definido; </p>
         <p class="textItemAnexA"> 30 - Justificar caso a missão envolva final de semana ou feriado, preenchimento obrigatório; </p>
         <p class="textItemAnexA"> 31 - Justificar caso a solicitação seja com prazo inferior a vinte dias do início da viagem (caso a missão envolva aquisição de passagem aérea, o prazo para solicitação será de no mínimo 25 dias de antecedência); </p>
         <p class="textItemAnexA"> 32 - Indicar em qual caixa deverá ser contabilizado os custos de diárias (a ser preenchido pelo CHEFE DE DIVISÃO que aprovar a missão). </p>
         <p class="textItemAnexA"> 33 - Somente preencher se o crédito for proveniente de outra Unidade. </p>

         <p class="textItemAnexA">*PROPOSTO: militar ou civil que realizará a missão.</p>

        </div>








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
.anexA{
  width: 90%;
  margin: 5%;
  /* display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  text-align: left; */
}
.textItemAnexA{
  font-size: 1rem;
  font-family: 'lato', sans-serif;
  font-weight: 400;
  word-break: normal;
  line-height: 1.25rem;
}

</style>












