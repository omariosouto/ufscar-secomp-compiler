module.exports = {
    "code": `
    public class Teste {
        public static void main(String[] args) {
            new Teste3().teste();
            // while(true) {
                System.out.println("Hello world!!!");
            // }
        } 
    }
    
    class Teste3 {
        public void teste() {
            System.out.println("Hello world, i'm trying!");
        } 
    }`,
    "language": 'java'
}