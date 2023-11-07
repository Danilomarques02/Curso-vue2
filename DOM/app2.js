new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
    exibirAlerta(){
        alert('Estou te alertando')
       },
      alterValor(event){
        this.valor = event.target.value
      }

    }

})