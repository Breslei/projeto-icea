<template>
  <HeaderComponent />
    <div class="login">
        <form class="formLogin">
            <div class="headerLogin">
                <div>
                    <img class="imgLogo" src="../assets/images/logo_icea_novo.png" alt="Logo ICEA">
                </div>
                <h4 class="textHeaderLogin">S.I.M.P.L.E.S</h4>
            </div>
            <hr>
            <div class="form-group">
                <label for="exampleInputEmail1" class="textLabel">Email </label>
                <input type="email" class="form-control inputFormLogin" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira seu email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="textLabel">Senha</label>
                <input type="password" class="form-control inputFormLogin" id="exampleInputPassword1" placeholder="Senha">
            </div>
          <!--   <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button type="submit" class="btn btn-primary btnLogin"><span>Entrar</span></button>
        </form>

    </div>
</template>

<script>
import HeaderComponent from "@/components/template/HeaderComponent.vue";

export default{
    components:{
    HeaderComponent,
    }
}
</script>


<style>

.login{
    display: flex;
    align-items: center;
    justify-content: center;
}

.formLogin{
    width: 30%;
    max-width: 50%;
}


.imgLogo{
    width: 150px;
    height: 180px;
}

.textHeaderLogin{
    font-weight: 600;
    margin-top: 5%;
    margin-bottom: 5%;
}

.form-group > .textLabel{
    display: flex;
    justify-content: left;
    align-items: start;
}

.inputFormLogin{
    margin-top: 1%;
    margin-bottom: 5%;
}

.btnLogin{
    width: 100%;
}

.btnLogin > span{
    font-size: 1.3rem;
    font-weight: 500;
}
</style>