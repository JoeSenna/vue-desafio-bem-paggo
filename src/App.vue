<template>
<div class="div-main">
    <div class="flex-container">
        <header class="header">
            <h3 class="hh3">Formulário<br>
            para compra de<br>
            Pacotes de adesivos</h3>
        </header>
        <div class="adesivos">
            <h4 class="hh4">Quais Adesivos:</h4>
            <p>
                <input type="checkbox" id="checkbox" v-model="reactCheck">
                <label for="checked">{{checked}}React</label>
            </p>
            <div v-if="reactCheck == true">
                <p>Quantos?</p>
                <Button @click="diminuiReact">-</Button> <span class="num">{{react}}</span> <Button @click="aumentaReact">+</Button>
            </div>

            <p>
                <input type="checkbox" id="checkbox" v-model="vueCheck">
                <label for="checked">{{checked}}Vue</label>
            </p>
            <div v-if="vueCheck == true">
                <p>Quantos?</p>
                <Button @click="diminuiVue">-</Button> <span class="num">{{vue}}</span> <Button @click="aumentaVue">+</Button>
            </div>

            <p>
                <input type="checkbox" id="checkbox" v-model="angularCheck">
                <label for="checked">{{checked}} Angular</label>
            </p>
            <div v-if="angularCheck == true">
                <p>Quantos?</p>
                <Button @click="diminuiAngular">-</Button> <span class="num">{{angular}}</span> <Button @click="aumentaAngular">+</Button>
            </div>
            <h4 class="hh4">Observações:</h4>
            <TextArea v-model="value" :autoResize="true" rows="5" cols="45" placeholder="Alguma dúvida? Recado?"/><br>
        </div>
    
        
        <Button label="Enviar" />
    </div>
</div>

</template>

<script>

export default {
    data(){
        return{
            react:0,
            vue:0,
            angular:0,
            reactCheck:false,
            vueCheck:false,
            angularCheck:false,

        }
    },
    methods:{
        aumentaReact(){
            this.react++;
        },
        diminuiReact(){
            this.react--;
        },
        aumentaVue(){
            this.vue++;
        },
        diminuiVue(){
            this.vue--;
        },
        aumentaAngular(){
            this.angular++;
        },
        diminuiAngular(){
            this.angular--;
        },
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 10px;
}

body{
    background-color: #892BE1;
}

.div-main{
    display: flex;
    margin: auto;
    align-items: center;
}

.num{
    font-size: 23px;
}

.flex-container {
    display: flex;
    align-items: flex-end;
    flex-flow: column;
    height: auto;
    background-color: #F2F2F2;
    border-radius: 10px;
}

.adesivos{
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    margin: 0;
    padding: auto;
    width: 100%;
}

.header{
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    background-color: #2e3575;
}

.hh3{
    color: white;
    margin: 0px;
}

.hh4{
    display: flex;
    flex-flow: column;
    align-content: flex-start;
    margin: 0;
}

#app {
    display: flex;
    flex-flow: column;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 20px;
}

</style>
