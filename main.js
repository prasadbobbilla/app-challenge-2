  <script>
    const area = (x, y) => { return x * y }
    new Vue({
      el: '#vue-app',
      data: {
        firstNumber: 2,
        secondNumber: 2
      },
      computed: {
        result() {
          const i = parseInt(this.firstNumber)
          const j = parseInt(this.secondNumber)
          
          return 'Area is ' + area(i, j) + '.'
        }
      }
    })

  </script>
