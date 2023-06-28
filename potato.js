class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length == 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Função que executa o jogo "Hot Potato"
  function hotPotato(nomes, num) {
    // Cria uma nova fila
    let queue = new Queue();
  
    // Adiciona todos os nomes à fila
    for (let i = 0; i < nomes.length; i++) {
      queue.enqueue(nomes[i]);
    }
  
    // Enquanto houver mais de uma pessoa na fila
  while (queue.size() > 1) {
    // Passa a batata para frente 'num' vezes
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    // Remove a pessoa que estiver com a batata
    console.log(`A batata quente foi passada para ${queue.front()}`);
    queue.dequeue();
  }

  // Retorna a última pessoa na fila (vencedor)
  return queue.front();
}

// Exemplo de uso
let nomes = ["João", "Maria", "Pedro", "Lucas", "Ana"];
let winner = hotPotato(nomes, 3);
console.log(`O vencedor é: ${winner}`);
      